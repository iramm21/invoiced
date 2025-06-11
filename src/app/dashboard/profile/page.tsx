"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useAuth } from "@/context/AuthProvider";
import { ProfileCreateForm } from "./components/ProfileCreateForm";
import { ProfileEditForm } from "./components/ProfileEditForm";
import { ProfileView } from "./components/ProfileView";
import { createProfile } from "../../../components/actions/createProfile";
import { updateProfile } from "../../../components/actions/updateProfile";
import { getProfile } from "../../../components/actions/getProfile";
import { Profile } from "@/types/profile";

export default function ProfilePage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [mode, setMode] = useState<"create" | "view" | "edit">("create");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch profile if user
  useEffect(() => {
    if (!user) return;
    (async () => {
      const p = await getProfile(user.id);
      if (p) {
        setProfile(p);
        setMode("view");
      } else {
        setMode("create");
      }
    })();
  }, [user]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="text-lg text-muted-foreground">
          Loading profile...
        </span>
      </div>
    );
  }
  if (!user) {
    router.replace("/auth");
    return null;
  }

  async function handleCreate(
    form: Omit<Profile, "id" | "user_id" | "created_at">
  ) {
    setSubmitting(true);
    setError(null);
    try {
      await createProfile(form);
      const p = await getProfile(user!.id);
      setProfile(p);
      setMode("view");
    } catch (err) {
      const errorMsg =
        err instanceof Error
          ? err.message
          : typeof err === "string"
          ? err
          : "Unknown error";
      setError(errorMsg);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleUpdate(
    form: Omit<Profile, "id" | "user_id" | "created_at">
  ) {
    setSubmitting(true);
    setError(null);
    try {
      await updateProfile(user!.id, form);
      const p = await getProfile(user!.id);
      setProfile(p);
      setMode("view");
    } catch (err) {
      const errorMsg =
        err instanceof Error
          ? err.message
          : typeof err === "string"
          ? err
          : "Unknown error";
      setError(errorMsg);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900">
      <Card className="w-full max-w-lg shadow-2xl rounded-2xl border border-gray-800 bg-white/90 dark:bg-gray-900/90">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold mb-2 tracking-tight">
            {mode === "create"
              ? "Setup your Business Profile"
              : mode === "edit"
              ? "Edit your Business Profile"
              : "Business Profile"}
          </CardTitle>
          <div className="text-muted-foreground text-sm">
            {mode === "create"
              ? "Enter your business details to continue."
              : mode === "edit"
              ? "Update your business details."
              : "Your current business details."}
          </div>
        </CardHeader>
        <CardContent>
          {mode === "create" && (
            <ProfileCreateForm
              onSubmit={handleCreate}
              submitting={submitting}
              error={error}
            />
          )}
          {mode === "view" && profile && (
            <ProfileView profile={profile} onEdit={() => setMode("edit")} />
          )}
          {mode === "edit" && profile && (
            <ProfileEditForm
              profile={profile}
              onSubmit={handleUpdate}
              submitting={submitting}
              error={error}
              onCancel={() => setMode("view")}
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
