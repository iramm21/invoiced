// app/(auth)/layout.tsx
import { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 dark:bg-gray-950">
      <div className="w-full max-w-md space-y-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-xl dark:border-gray-800 dark:bg-gray-900">
        <Link
          href="/"
          className="flex items-center text-sm text-blue-600 hover:underline"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to home
        </Link>

        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome to Invoiced
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Manage your invoices with ease
          </p>
        </div>

        {children}
      </div>
    </div>
  );
}
