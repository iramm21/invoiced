"use client";
import Link from "next/link";

export function PublicNavbar() {
  return (
    <header className="w-full bg-white/90 dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 shadow-sm sticky top-0 z-30">
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link
          href="/"
          className="text-2xl font-black tracking-tight text-gray-900 dark:text-gray-100"
        >
          Invoiced
        </Link>
        <div className="flex gap-5 items-center">
          <Link
            href="/auth/login"
            className="text-gray-700 dark:text-gray-200 hover:underline font-medium"
          >
            Login
          </Link>
          <Link
            href="/auth/register"
            className="bg-primary text-white rounded-xl px-4 py-2 font-semibold hover:bg-primary/90 transition"
          >
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
}
