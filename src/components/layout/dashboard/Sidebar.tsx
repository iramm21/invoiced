"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogOut, FileText, Users, User, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthProvider";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { supabase } from "@/lib/supabase-browser";
import type { Profile } from "@/types/profile";

const navLinks = [
  { href: "/dashboard", icon: <FileText size={20} />, label: "Dashboard" },
  {
    href: "/dashboard/invoices",
    icon: <FileText size={20} />,
    label: "Invoices",
  },
  { href: "/dashboard/clients", icon: <Users size={20} />, label: "Clients" },
  { href: "/dashboard/profile", icon: <User size={20} />, label: "Profile" },
  {
    href: "/dashboard/settings",
    icon: <Settings size={20} />,
    label: "Settings",
  },
];

export function Sidebar() {
  const { user } = useAuth();
  const router = useRouter();
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    async function fetchProfile() {
      if (!user) return;
      const { data } = await supabase
        .from("profiles")
        .select("business_name,business_email,business_phone")
        .eq("user_id", user.id)
        .single();
      if (data) setProfile(data as Profile);
    }
    fetchProfile();
  }, [user]);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.replace("/auth/login");
  }

  const initials =
    (profile?.business_name
      ? profile.business_name
          .split(" ")
          .map((w) => w[0])
          .join("")
          .toUpperCase()
      : "U") || "U";

  return (
    <aside className="w-64 hidden md:flex flex-col bg-white/90 dark:bg-gray-900/90 border-r border-gray-200 dark:border-gray-800 py-8 px-6 shadow-2xl z-20">
      <div className="mb-8 flex flex-col items-center">
        <Link
          href="/dashboard"
          className="block text-2xl font-black tracking-tight text-gray-900 dark:text-gray-100 text-center mb-2"
        >
          Invoiced
        </Link>
        <div className="flex flex-col items-center gap-2 w-full">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-gray-500 flex items-center justify-center text-xl font-bold text-white">
            {initials}
          </div>
          <div className="text-sm text-gray-900 dark:text-gray-100 font-bold text-center">
            {profile?.business_name || "Business Name"}
          </div>
          <div className="text-xs text-gray-400 text-center truncate w-full">
            {profile?.business_email || user?.email || ""}
          </div>
        </div>
      </div>

      <nav className="flex flex-col gap-2 flex-1">
        {navLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={clsx(
              "flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition text-gray-700 dark:text-gray-300"
            )}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="mt-10">
        <Button
          variant="outline"
          size="sm"
          className="w-full flex gap-2"
          onClick={handleLogout}
        >
          <LogOut size={18} />
          Logout
        </Button>
      </div>
    </aside>
  );
}
