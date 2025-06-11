"use client";

export function PublicFooter() {
  return (
    <footer className="w-full bg-white/80 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 dark:text-gray-400">
        <div>© {new Date().getFullYear()} Invoiced. All rights reserved.</div>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
