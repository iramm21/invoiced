// components/AuthGuard.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import type { Database } from "@/types/supabase"; // Optional if you're using types

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const supabase = createClientComponentClient<Database>();
      const { data } = await supabase.auth.getUser();

      if (!data?.user) {
        router.replace("/auth/login");
      } else {
        setChecking(false);
      }
    };

    checkAuth();
  }, [router]);

  if (checking) {
    return (
      <div className="py-20 text-center text-gray-500">Checking auth...</div>
    );
  }

  return <>{children}</>;
}
