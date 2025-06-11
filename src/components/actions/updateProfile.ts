"use server";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Profile } from "@/types/profile";

export async function updateProfile(user_id: string, data: Partial<Profile>) {
  const supabase = createServerActionClient({ cookies });
  const { error } = await supabase
    .from("profiles")
    .update(data)
    .eq("user_id", user_id);
  if (error) throw new Error(error.message);
}
