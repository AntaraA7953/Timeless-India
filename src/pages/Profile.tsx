import { FormEvent, useEffect, useState } from "react";
import { ArrowLeft, Save } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/lib/supabase";

type ProfileForm = {
  username: string;
  full_name: string;
  phone: string;
  bio: string;
  location: string;
  heritage_interests: string;
  avatar_url: string;
};

const emptyProfile: ProfileForm = {
  username: "",
  full_name: "",
  phone: "",
  bio: "",
  location: "",
  heritage_interests: "",
  avatar_url: "",
};

const Profile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<ProfileForm>(emptyProfile);
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const loadProfile = async () => {
      const { data: userData, error: userError } = await supabase.auth.getUser();
      if (userError || !userData.user) {
        navigate("/auth", { replace: true });
        return;
      }

      setEmail(userData.user.email ?? "");

      const { data, error: profileError } = await supabase
        .from("profiles")
        .select("username, full_name, phone, bio, location, heritage_interests, avatar_url")
        .eq("id", userData.user.id)
        .maybeSingle();

      if (profileError) {
        setError(profileError.message);
      } else if (data) {
        setProfile({ ...emptyProfile, ...data });
      }

      setIsLoading(false);
    };

    void loadProfile();
  }, [navigate]);

  const updateField = (field: keyof ProfileForm, value: string) => {
    setProfile((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setMessage("");
    setIsSaving(true);

    const { data: userData, error: userError } = await supabase.auth.getUser();
    if (userError || !userData.user) {
      setError("Your session has expired. Please sign in again.");
      setIsSaving(false);
      return;
    }

    const { error: profileError } = await supabase.from("profiles").upsert({
      id: userData.user.id,
      ...profile,
      updated_at: new Date().toISOString(),
    });

    if (profileError) {
      setError(profileError.message);
      setIsSaving(false);
      return;
    }

    const authUpdates: { email?: string; password?: string } = {};
    if (email !== (userData.user.email ?? "")) authUpdates.email = email;
    if (newPassword) authUpdates.password = newPassword;

    if (Object.keys(authUpdates).length > 0) {
      const { error: authError } = await supabase.auth.updateUser(authUpdates);
      if (authError) {
        setError(authError.message);
        setIsSaving(false);
        return;
      }
      setNewPassword("");
    }

    setMessage("Profile saved successfully.");
    setIsSaving(false);
  };

  if (isLoading) {
    return <div className="flex min-h-screen items-center justify-center">Loading profile...</div>;
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-emerald-50 px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <Button variant="ghost" onClick={() => navigate("/")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Timeless India
          </Button>
        </div>

        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle>Your profile</CardTitle>
            <p className="text-sm text-gray-600">
              Share the parts of your identity and heritage you want the community to know.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="text-sm font-medium">
                  Username
                  <input required value={profile.username} onChange={(event) => updateField("username", event.target.value)} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" />
                </label>
                <label className="text-sm font-medium">
                  Full name
                  <input value={profile.full_name} onChange={(event) => updateField("full_name", event.target.value)} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" />
                </label>
                <label className="text-sm font-medium">
                  Phone number
                  <input type="tel" value={profile.phone} onChange={(event) => updateField("phone", event.target.value)} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" />
                </label>
                <label className="text-sm font-medium">
                  Email
                  <input type="email" required value={email} onChange={(event) => setEmail(event.target.value)} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" />
                  <span className="mt-1 block text-xs font-normal text-gray-500">Supabase may ask you to confirm a changed email.</span>
                </label>
                <label className="text-sm font-medium">
                  New password
                  <input type="password" minLength={6} value={newPassword} onChange={(event) => setNewPassword(event.target.value)} placeholder="Leave blank to keep current password" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" />
                </label>
                <label className="text-sm font-medium">
                  Location
                  <input value={profile.location} onChange={(event) => updateField("location", event.target.value)} placeholder="City, state" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" />
                </label>
              </div>

              <label className="block text-sm font-medium">
                Profile image URL
                <input type="url" value={profile.avatar_url} onChange={(event) => updateField("avatar_url", event.target.value)} placeholder="https://..." className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" />
              </label>

              <label className="block text-sm font-medium">
                Heritage interests
                <input value={profile.heritage_interests} onChange={(event) => updateField("heritage_interests", event.target.value)} placeholder="Folk music, crafts, festivals" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" />
              </label>

              <label className="block text-sm font-medium">
                About you
                <textarea value={profile.bio} onChange={(event) => updateField("bio", event.target.value)} rows={5} placeholder="Tell the community about your connection to Indian culture and heritage." className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" />
              </label>

              {error && <p className="text-sm text-red-600">{error}</p>}
              {message && <p className="text-sm text-emerald-700">{message}</p>}

              <Button type="submit" disabled={isSaving}>
                <Save className="mr-2 h-4 w-4" />
                {isSaving ? "Saving..." : "Save profile"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Profile;
