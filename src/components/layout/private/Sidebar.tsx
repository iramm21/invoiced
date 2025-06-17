"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { LayoutDashboard, Users, FileText, LogOut } from "lucide-react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const navItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    name: "Clients",
    href: "/dashboard/clients",
    icon: <Users className="h-5 w-5" />,
  },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: <FileText className="h-5 w-5" />,
  },
];

export default function Sidebar() {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClientComponentClient();
    await supabase.auth.signOut();
    router.push("/auth/login");
  };

  return (
    <aside className="w-64 border-r border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
      <div className="flex h-full flex-col justify-between p-4">
        <div>
          <div className="mb-6 text-xl font-bold text-gray-900 dark:text-white">
            Invoiced
          </div>
          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>

        <button
          onClick={handleLogout}
          className="mt-6 flex items-center gap-3 rounded-md px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900"
        >
          <LogOut className="h-5 w-5" />
          Logout
        </button>
      </div>
    </aside>
  );
}
