import { FormEvent, useCallback, useEffect, useState } from "react";
import { ArrowLeft, MessageCircle, Search, Send, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/lib/supabase";

type Profile = { id: string; username: string; avatar_url: string | null };
type Post = { id: string; title: string; content: string; heritage_category: string | null; created_at: string; author_id: string; profiles: Profile | Profile[] | null };
type Community = { id: string; name: string; description: string; focus_area: string };
type Message = { id: string; community_id: string; author_id: string; parent_id: string | null; content: string; created_at: string; profiles: Profile | Profile[] | null };

const formatDate = (createdAt: string) => new Date(createdAt).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" });
const getProfile = (profile: Profile | Profile[] | null) => Array.isArray(profile) ? profile[0] ?? null : profile;

const Community = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [currentUserId, setCurrentUserId] = useState("");
  const [currentUsername, setCurrentUsername] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [communities, setCommunities] = useState<Community[]>([]);
  const [memberships, setMemberships] = useState<string[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedCommunityId, setSelectedCommunityId] = useState("");
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [profileResults, setProfileResults] = useState<Profile[]>([]);
  const [profileSearch, setProfileSearch] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [communityName, setCommunityName] = useState("");
  const [communityDescription, setCommunityDescription] = useState("");
  const [communityFocus, setCommunityFocus] = useState("");
  const [messageText, setMessageText] = useState("");
  const [replyTo, setReplyTo] = useState<Message | null>(null);
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");

  const loadCommunity = useCallback(async () => {
    const { data: userData, error: userError } = await supabase.auth.getUser();
    if (userError || !userData.user) { navigate("/auth", { replace: true }); return; }
    setCurrentUserId(userData.user.id);
    const [{ data: profileData, error: profileError }, { data: postData, error: postError }, { data: communityData, error: communityError }, { data: membershipData }] = await Promise.all([
      supabase.from("profiles").select("id, username").eq("id", userData.user.id).maybeSingle(),
      supabase.from("community_posts").select("id, author_id, title, content, heritage_category, created_at, profiles!author_id(id, username, avatar_url)").order("created_at", { ascending: false }),
      supabase.from("communities").select("id, name, description, focus_area").order("created_at", { ascending: false }),
      supabase.from("community_members").select("community_id").eq("user_id", userData.user.id),
    ]);
    if (profileError || postError || communityError) { setError(profileError?.message ?? postError?.message ?? communityError?.message ?? "Unable to load community data."); setIsLoading(false); return; }
    if (!profileData?.username?.trim()) { navigate("/profile", { replace: true }); return; }
    setCurrentUsername(profileData.username);
    setPosts((postData ?? []) as Post[]);
    setCommunities((communityData ?? []) as Community[]);
    const joinedIds = (membershipData ?? []).map((membership) => membership.community_id as string);
    setMemberships(joinedIds);
    setSelectedCommunityId((current) => current || joinedIds[0] || "");
    setIsLoading(false);
  }, [navigate]);

  useEffect(() => { void loadCommunity(); }, [loadCommunity]);

  useEffect(() => {
    if (!selectedCommunityId || !memberships.includes(selectedCommunityId)) { setMessages([]); return; }
    const loadMessages = async () => {
      const { data, error: messageError } = await supabase.from("community_messages").select("id, community_id, author_id, parent_id, content, created_at, profiles!author_id(id, username, avatar_url)").eq("community_id", selectedCommunityId).order("created_at", { ascending: true });
      if (messageError) setError(messageError.message); else setMessages((data ?? []) as Message[]);
    };
    void loadMessages();
  }, [selectedCommunityId, memberships]);

  const createPost = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); setError("");
    const { error: insertError } = await supabase.from("community_posts").insert({ author_id: currentUserId, title, content, heritage_category: category || null });
    if (insertError) { setError(insertError.message); return; }
    setTitle(""); setContent(""); setCategory(""); setNotice("Your post is live."); await loadCommunity();
  };

  const createCommunity = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); setError("");
    const { data, error: createError } = await supabase.from("communities").insert({ name: communityName, description: communityDescription, focus_area: communityFocus, created_by: currentUserId }).select("id").single();
    if (createError || !data) { setError(createError?.message ?? "Unable to create this community."); return; }
    const { error: memberError } = await supabase.from("community_members").insert({ community_id: data.id, user_id: currentUserId, role: "owner" });
    if (memberError) { setError(memberError.message); return; }
    setCommunityName(""); setCommunityDescription(""); setCommunityFocus(""); setNotice("Community created. You are now a member."); await loadCommunity(); setSelectedCommunityId(data.id);
  };

  const joinCommunity = async (communityId: string) => {
    const { error: joinError } = await supabase.from("community_members").insert({ community_id: communityId, user_id: currentUserId });
    if (joinError && joinError.code !== "23505") { setError(joinError.message); return; }
    setMemberships((current) => current.includes(communityId) ? current : [...current, communityId]); setSelectedCommunityId(communityId); setNotice(joinError?.code === "23505" ? "You are already a member of this community." : "You joined the community.");
  };

  const sendMessage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); if (!selectedCommunityId || !messageText.trim()) return;
    const { error: sendError } = await supabase.from("community_messages").insert({ community_id: selectedCommunityId, author_id: currentUserId, parent_id: replyTo?.id ?? null, content: messageText.trim() });
    if (sendError) { setError(sendError.message); return; }
    setMessageText(""); setReplyTo(null); setNotice("Message sent.");
    const { data } = await supabase.from("community_messages").select("id, community_id, author_id, parent_id, content, created_at, profiles!author_id(id, username, avatar_url)").eq("community_id", selectedCommunityId).order("created_at", { ascending: true });
    setMessages((data ?? []) as Message[]);
  };

  const searchProfiles = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); if (!profileSearch.trim()) { setProfileResults([]); return; }
    const { data, error: searchError } = await supabase.from("profiles").select("id, username, avatar_url").ilike("username", `%${profileSearch.trim()}%`).limit(8);
    if (searchError) setError(searchError.message); else setProfileResults((data ?? []) as Profile[]);
  };

  const visiblePosts = selectedProfile ? posts.filter((post) => post.author_id === selectedProfile.id) : posts;
  const selectedCommunity = communities.find((community) => community.id === selectedCommunityId);
  if (isLoading) return <div className="flex min-h-screen items-center justify-center">Checking community access...</div>;

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-emerald-50 px-4 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3"><Button variant="ghost" onClick={() => navigate("/")}><ArrowLeft className="mr-2 h-4 w-4" />Back</Button><Button variant="outline" onClick={() => navigate("/profile")}><Users className="mr-2 h-4 w-4" />My profile</Button></div>
        <div className="mb-8"><h1 className="text-4xl font-bold text-gradient">Community</h1><p className="mt-2 text-gray-600">Follow people, share heritage, and find your community.</p></div>
        {notice && <p className="mb-4 text-sm text-emerald-700">{notice}</p>}{error && <p className="mb-4 text-sm text-red-600">{error}</p>}
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_360px]">
          <section className="space-y-6">
            <Card><CardHeader><CardTitle>{selectedProfile ? `Posts by @${selectedProfile.username}` : "General feed"}</CardTitle><p className="text-sm text-gray-600">{selectedProfile ? "This profile's public posts." : "Posts from everyone in the Timeless India community."}</p></CardHeader><CardContent className="space-y-4">{selectedProfile && <Button variant="outline" size="sm" onClick={() => setSelectedProfile(null)}>Back to general feed</Button>}{visiblePosts.length === 0 && <p className="text-sm text-gray-600">No posts to show yet.</p>}{visiblePosts.map((post) => { const author = getProfile(post.profiles); return <article key={post.id} className="border-b border-gray-100 pb-4 last:border-0"><h2 className="text-xl font-semibold">{post.title}</h2><p className="mt-1 text-sm text-gray-500">@{author?.username ?? "community-member"} · {formatDate(post.created_at)}</p><p className="mt-3 whitespace-pre-wrap text-gray-700">{post.content}</p>{post.heritage_category && <span className="mt-3 inline-block rounded-full bg-orange-100 px-3 py-1 text-xs text-orange-700">{post.heritage_category}</span>}</article>; })}</CardContent></Card>
            <Card><CardHeader><CardTitle>Share with the community</CardTitle><p className="text-sm text-gray-600">Posting as @{currentUsername}</p></CardHeader><CardContent><form onSubmit={createPost} className="space-y-3"><input required value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Post title" className="w-full rounded-md border border-gray-300 px-3 py-2" /><textarea required value={content} onChange={(event) => setContent(event.target.value)} placeholder="Share a tradition, story, event, or social work update" rows={4} className="w-full rounded-md border border-gray-300 px-3 py-2" /><input value={category} onChange={(event) => setCategory(event.target.value)} placeholder="Heritage category (optional)" className="w-full rounded-md border border-gray-300 px-3 py-2" /><Button type="submit"><Send className="mr-2 h-4 w-4" />Publish post</Button></form></CardContent></Card>
          </section>
          <aside className="space-y-6">
            <Card><CardHeader><CardTitle>Find a profile</CardTitle></CardHeader><CardContent><form onSubmit={searchProfiles} className="flex gap-2"><input value={profileSearch} onChange={(event) => setProfileSearch(event.target.value)} placeholder="Search username" className="min-w-0 flex-1 rounded-md border border-gray-300 px-3 py-2" /><Button type="submit" size="icon" aria-label="Search profiles"><Search className="h-4 w-4" /></Button></form><div className="mt-3 space-y-2">{profileResults.map((profile) => <Button key={profile.id} variant="ghost" className="w-full justify-start" onClick={() => setSelectedProfile(profile)}>@{profile.username}</Button>)}</div></CardContent></Card>
            <Card><CardHeader><CardTitle>Create a community</CardTitle></CardHeader><CardContent><form onSubmit={createCommunity} className="space-y-3"><input required value={communityName} onChange={(event) => setCommunityName(event.target.value)} placeholder="Community name" className="w-full rounded-md border border-gray-300 px-3 py-2" /><input required value={communityFocus} onChange={(event) => setCommunityFocus(event.target.value)} placeholder="Focus area" className="w-full rounded-md border border-gray-300 px-3 py-2" /><textarea required value={communityDescription} onChange={(event) => setCommunityDescription(event.target.value)} placeholder="What will members do together?" rows={3} className="w-full rounded-md border border-gray-300 px-3 py-2" /><Button type="submit">Create community</Button></form></CardContent></Card>
            <Card><CardHeader><CardTitle>Communities</CardTitle></CardHeader><CardContent className="space-y-4">{communities.length === 0 && <p className="text-sm text-gray-600">No communities have been created yet.</p>}{communities.map((community) => { const isMember = memberships.includes(community.id); return <div key={community.id} className="border-b border-gray-100 pb-4 last:border-0"><button className="text-left" onClick={() => isMember && setSelectedCommunityId(community.id)}><h2 className="font-semibold">{community.name}</h2><p className="text-xs text-emerald-700">{community.focus_area}</p><p className="my-2 text-sm text-gray-600">{community.description}</p></button>{isMember ? <Button size="sm" variant={selectedCommunityId === community.id ? "default" : "outline"} onClick={() => setSelectedCommunityId(community.id)}><MessageCircle className="mr-2 h-4 w-4" />{selectedCommunityId === community.id ? "Open chat" : "View chat"}</Button> : <Button size="sm" variant="outline" onClick={() => void joinCommunity(community.id)}>Join community</Button>}</div>; })}</CardContent></Card>
            {selectedCommunity && memberships.includes(selectedCommunity.id) && <Card><CardHeader><CardTitle>{selectedCommunity.name} chat</CardTitle><p className="text-sm text-gray-600">Only members can read and send messages.</p></CardHeader><CardContent><div className="mb-4 max-h-80 space-y-3 overflow-y-auto">{messages.length === 0 && <p className="text-sm text-gray-600">Start the conversation.</p>}{messages.map((message) => { const author = getProfile(message.profiles); return <div key={message.id} className={`rounded-md p-3 ${message.parent_id ? "ml-5 border-l-2 border-emerald-200 bg-emerald-50" : "bg-gray-50"}`}><p className="text-xs text-gray-500">@{author?.username ?? "member"} · {formatDate(message.created_at)}</p><p className="mt-1 text-sm text-gray-700">{message.content}</p><button className="mt-2 text-xs font-medium text-emerald-700" onClick={() => setReplyTo(message)}>Reply</button></div>; })}</div>{replyTo && <p className="mb-2 text-xs text-gray-600">Replying to a message <button className="text-red-600" onClick={() => setReplyTo(null)}>Cancel</button></p>}<form onSubmit={sendMessage} className="flex gap-2"><input required value={messageText} onChange={(event) => setMessageText(event.target.value)} placeholder="Write a message" className="min-w-0 flex-1 rounded-md border border-gray-300 px-3 py-2" /><Button type="submit" size="icon" aria-label="Send message"><Send className="h-4 w-4" /></Button></form></CardContent></Card>}
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Community;
