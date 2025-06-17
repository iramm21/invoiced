import Link from "next/link";
import { Github, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-100 py-10 dark:border-gray-700 dark:bg-gray-900">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 text-center md:grid-cols-3 md:text-left">
        {/* Logo or Brand */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            Invoiced
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Smart invoicing for modern teams.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-md mb-2 font-semibold text-gray-800 dark:text-white">
            Links
          </h3>
          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/features">Features</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social / Contact */}
        <div>
          <h3 className="text-md mb-2 font-semibold text-gray-800 dark:text-white">
            Connect
          </h3>
          <div className="flex justify-center gap-4 text-gray-600 md:justify-start dark:text-gray-400">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
            </a>
            <a href="mailto:support@invoiced.com">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500 dark:text-gray-500">
        © {new Date().getFullYear()} Invoiced. All rights reserved.
      </div>
    </footer>
  );
}
