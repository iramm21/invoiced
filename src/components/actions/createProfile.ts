"use server";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Profile } from "@/types/profile";

export async function createProfile(
  data: Omit<Profile, "id" | "user_id" | "created_at">
) {
  const supabase = createServerActionClient({ cookies });
  const { data: userData, error: useError } = await supabase.auth.getUser();
  const user_id = userData?.user?.id;

  if (!user_id) {
    throw new Error("Not authenticated");
  }

  console.log("Insert payload:", { ...data, user_id });

  const { data: insertData, error } = await supabase
    .from("profiles")
    .insert([{ ...data, user_id }])
    .select(); // Fetch the inserted row back

  console.log("Insert response:", insertData, error, useError);

  if (error) {
    throw new Error(error.message);
  }
  return insertData; // Return for further checks
}
