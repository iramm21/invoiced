// app/not-found.tsx
"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center dark:bg-gray-900">
      <h1 className="text-5xl font-bold text-gray-800 dark:text-white">404</h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-md bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
      >
        Go back home
      </Link>
    </div>
  );
}
