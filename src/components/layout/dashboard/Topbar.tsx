"use client";
import { useAuth } from "@/context/AuthProvider";

export function Topbar() {
  const { user } = useAuth();

  return (
    <header className="w-full px-4 py-4 border-b border-gray-900/10 dark:border-gray-700/50 flex items-center justify-between bg-white/90 dark:bg-gray-900/90 shadow">
      <div className="font-semibold text-lg text-gray-900 dark:text-gray-100">
        Dashboard
      </div>
      {user && (
        <div className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
          {user.email}
          {/* Add avatar/user menu here */}
        </div>
      )}
    </header>
  );
}
