import { FormEvent, useState } from "react";
import { ArrowLeft, LogIn, UserPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/lib/supabase";

const Auth = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");
    setError("");
    setIsSubmitting(true);

    const result = isSignUp
      ? await supabase.auth.signUp({ email, password })
      : await supabase.auth.signInWithPassword({ email, password });

    setIsSubmitting(false);

    if (result.error) {
      setError(result.error.message);
      return;
    }

    if (isSignUp && !result.data.session) {
      setMessage("Account created. Check your email to confirm your account.");
      return;
    }

    navigate("/");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-emerald-50 px-4 py-12">
      <div className="mx-auto max-w-md">
        <Button variant="ghost" onClick={() => navigate("/")} className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Timeless India
        </Button>

        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle>{isSignUp ? "Join the community" : "Welcome back"}</CardTitle>
            <p className="text-sm text-gray-600">
              {isSignUp ? "Create an account to share your stories." : "Sign in to continue."}
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="block text-sm font-medium">
                Email
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
                />
              </label>
              <label className="block text-sm font-medium">
                Password
                <input
                  type="password"
                  required
                  minLength={6}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
                />
              </label>

              {error && <p className="text-sm text-red-600">{error}</p>}
              {message && <p className="text-sm text-emerald-700">{message}</p>}

              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSignUp ? <UserPlus className="h-4 w-4" /> : <LogIn className="h-4 w-4" />}
                {isSubmitting ? "Please wait..." : isSignUp ? "Sign up" : "Sign in"}
              </Button>
            </form>

            <button
              type="button"
              onClick={() => {
                setIsSignUp((current) => !current);
                setError("");
                setMessage("");
              }}
              className="mt-4 w-full text-sm text-emerald-700 hover:underline"
            >
              {isSignUp ? "Already have an account? Sign in" : "Need an account? Sign up"}
            </button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Auth;