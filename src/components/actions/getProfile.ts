"use server";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Profile } from "@/types/profile";

export async function getProfile(user_id: string): Promise<Profile | null> {
  const supabase = createServerActionClient({ cookies });
  const { data } = await supabase
    .from("profiles")
    .select("*")
    .eq("user_id", user_id)
    .single();
  return data || null;
}
