import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-white py-20 dark:bg-gray-900">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-10 px-6 md:flex-row">
        {/* Text Content */}
        <div className="max-w-xl">
          <h1 className="text-4xl leading-tight font-bold text-gray-900 md:text-5xl dark:text-white">
            Build Smarter, Travel Lighter.
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Empower your journey with modern solutions that keep things simple,
            efficient, and beautiful.
          </p>
          <div className="mt-6 flex gap-4">
            <Link
              href="/get-started"
              className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              Get Started
            </Link>
            <Link
              href="/features"
              className="rounded-xl border border-gray-300 px-6 py-3 text-gray-700 transition hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/hero.jpg" // replace with your image
            alt="Hero"
            width={600}
            height={400}
            className="h-auto w-full rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
