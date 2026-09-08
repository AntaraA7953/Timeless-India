import { FormEvent, useEffect, useState } from "react";
import { ArrowLeft, Send, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/lib/supabase";

type Post = {
  id: string;
  title: string;
  content: string;
  heritage_category: string | null;
  created_at: string;
  profiles: { username: string; avatar_url: string | null }[] | null;
};

type Community = {
  id: string;
  name: string;
  description: string;
  focus_area: string;
};

const formatPostDate = (createdAt: string) => {
  const date = new Date(createdAt);

  return {
    date: date.toLocaleDateString(undefined, { dateStyle: "medium" }),
    time: date.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" }),
  };
};

const Community = () => {
  const navigate = useNavigate();
  const [isCheckingAccess, setIsCheckingAccess] = useState(true);
  const [currentUsername, setCurrentUsername] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [communities, setCommunities] = useState<Community[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const loadCommunity = async () => {
    const { data: userData, error: userError } = await supabase.auth.getUser();
    if (userError || !userData.user) {
      navigate("/auth", { replace: true });
      return;
    }

    const { data: profileData, error: profileError } = await supabase
      .from("profiles")
      .select("username")
      .eq("id", userData.user.id)
      .maybeSingle();

    if (profileError || !profileData?.username?.trim()) {
      navigate("/profile", { replace: true });
      return;
    }

    setCurrentUsername(profileData.username);

    const [{ data: postData, error: postError }, { data: communityData, error: communityError }] = await Promise.all([
      supabase.from("community_posts").select("id, title, content, heritage_category, created_at, profiles(username, avatar_url)").order("created_at", { ascending: false }),
      supabase.from("communities").select("id, name, description, focus_area").order("created_at", { ascending: false }),
    ]);

    if (postError || communityError) {
      setError(postError?.message ?? communityError?.message ?? "Unable to load community data.");
      return;
    }

    setPosts((postData ?? []) as Post[]);
    setCommunities((communityData ?? []) as Community[]);
    setIsCheckingAccess(false);
  };

  useEffect(() => {
    void loadCommunity();
  }, []);

  if (isCheckingAccess) {
    return <div className="flex min-h-screen items-center justify-center">Checking community access...</div>;
  }

  const createPost = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setMessage("");

    const { data: userData } = await supabase.auth.getUser();
    if (!userData.user) {
      navigate("/auth");
      return;
    }

    const { error: insertError } = await supabase.from("community_posts").insert({
      author_id: userData.user.id,
      title,
      content,
      heritage_category: category || null,
    });

    if (insertError) {
      setError(insertError.message);
      return;
    }

    setTitle("");
    setContent("");
    setCategory("");
    setMessage("Your post is live.");
    await loadCommunity();
  };

  const joinCommunity = async (communityId: string) => {
    const { data: userData } = await supabase.auth.getUser();
    if (!userData.user) {
      navigate("/auth");
      return;
    }

    const { error: joinError } = await supabase.from("community_members").insert({
      community_id: communityId,
      user_id: userData.user.id,
    });

    setMessage(joinError?.code === "23505" ? "You are already a member of this community." : joinError ? "Unable to join this community." : "You joined the community.");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-emerald-50 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <Button variant="ghost" onClick={() => navigate("/")}><ArrowLeft className="mr-2 h-4 w-4" />Back</Button>
          <Button variant="outline" onClick={() => navigate("/profile")}><Users className="mr-2 h-4 w-4" />My profile</Button>
        </div>
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <section className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gradient">Community</h1>
              <p className="mt-2 text-gray-600">Share and discover India’s living culture and heritage.</p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Share with the community</CardTitle>
                <p className="text-sm text-gray-600">Posting as @{currentUsername}</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={createPost} className="space-y-3">
                  <input required value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Post title" className="w-full rounded-md border border-gray-300 px-3 py-2" />
                  <textarea required value={content} onChange={(event) => setContent(event.target.value)} placeholder="Share a tradition, story, event, or social work update" rows={4} className="w-full rounded-md border border-gray-300 px-3 py-2" />
                  <input value={category} onChange={(event) => setCategory(event.target.value)} placeholder="Heritage category (optional)" className="w-full rounded-md border border-gray-300 px-3 py-2" />
                  <Button type="submit"><Send className="mr-2 h-4 w-4" />Publish post</Button>
                </form>
              </CardContent>
            </Card>
            {message && <p className="text-sm text-emerald-700">{message}</p>}
            {error && <p className="text-sm text-red-600">{error}</p>}
            {posts.map((post) => (
              <Card key={post.id}>
                <CardHeader>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <p className="text-sm text-gray-500">
                    Posted by <span className="font-medium text-gray-700">@{post.profiles?.[0]?.username ?? "community-member"}</span>
                    {(() => {
                      const postDate = formatPostDate(post.created_at);
                      return <> · {postDate.date} at {postDate.time}</>;
                    })()}
                  </p>
                </CardHeader>
                <CardContent><p className="whitespace-pre-wrap text-gray-700">{post.content}</p>{post.heritage_category && <span className="mt-4 inline-block rounded-full bg-orange-100 px-3 py-1 text-xs text-orange-700">{post.heritage_category}</span>}</CardContent>
              </Card>
            ))}
          </section>
          <aside>
            <Card className="sticky top-6">
              <CardHeader><CardTitle>Social work communities</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                {communities.length === 0 && <p className="text-sm text-gray-600">No communities have been created yet.</p>}
                {communities.map((community) => (
                  <div key={community.id} className="border-b border-gray-100 pb-4 last:border-0">
                    <h2 className="font-semibold">{community.name}</h2>
                    <p className="text-xs text-emerald-700">{community.focus_area}</p>
                    <p className="my-2 text-sm text-gray-600">{community.description}</p>
                    <Button size="sm" variant="outline" onClick={() => void joinCommunity(community.id)}>Join group</Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Community;
