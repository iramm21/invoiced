"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Mail, Lock } from "lucide-react";
import { supabase } from "@/lib/supabase-browser";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthProvider";

export default function RegisterPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && user) {
      router.replace("/dashboard");
    }
  }, [user, loading, router]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setMessage("");
    const { error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
    });
    if (error) setMessage(error.message);
    else setMessage("Check your email for confirmation.");
    setSubmitting(false);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900">
      <Card className="w-full max-w-md shadow-2xl rounded-2xl border border-gray-800 bg-white/90 dark:bg-gray-900/90">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold mb-1 tracking-tight">
            Create Account
          </CardTitle>
          <CardDescription>
            Register to start invoicing your clients
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            className="space-y-5"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <div>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  className="pl-10"
                  placeholder="Email"
                  type="email"
                  value={form.email}
                  autoComplete="username"
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
            </div>
            <div>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  className="pl-10"
                  placeholder="Password"
                  type="password"
                  value={form.password}
                  autoComplete="new-password"
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <Button type="submit" className="w-full mt-2" disabled={submitting}>
              {submitting ? "Registering..." : "Register"}
            </Button>
            <div className="text-sm text-center mt-3 text-muted-foreground">
              Already have an account?{" "}
              <a
                href="/auth/login"
                className="text-blue-600 font-semibold hover:underline"
              >
                Login
              </a>
            </div>
            {message && (
              <div
                className={cn(
                  "text-sm text-center mt-3",
                  message.toLowerCase().includes("check your email")
                    ? "text-blue-600"
                    : "text-red-500"
                )}
              >
                {message}
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
