import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import type { Database } from "@/types/supabase"; // if you're using generated types

export const getSupabaseServerClient = () => {
  return createServerComponentClient<Database>({
    cookies,
  });
};
