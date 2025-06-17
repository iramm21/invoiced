"use client";

import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import type { Database } from "@/types/supabase"; // Make sure this exists

export default function Topbar() {
  const [userName, setUserName] = useState("User");

  useEffect(() => {
    const fetchUserProfile = async () => {
      const supabase = createClientComponentClient<Database>();

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const { data: profile } = await supabase
        .from("UserProfile")
        .select("name")
        .eq("userId", user.id)
        .single();

      if (profile?.name) {
        setUserName(profile.name);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <header className="border-b border-gray-200 bg-white px-6 py-4 dark:border-gray-700 dark:bg-gray-900">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Dashboard
        </h2>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Hello, {userName}
        </div>
      </div>
    </header>
  );
}
