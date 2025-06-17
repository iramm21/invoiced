"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    // Simulate submission delay
    await new Promise((res) => setTimeout(res, 1200));

    setLoading(false);
    setSubmitted(true);

    // TODO: Replace with API call or integration
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid items-start gap-16 md:grid-cols-2">
        {/* Text content */}
        <div>
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Let’s Connect
          </h1>
          <p className="mb-6 text-lg text-gray-600 dark:text-gray-400">
            Have a question, feedback, or business inquiry? We’d love to hear
            from you. Our team typically responds within 24 hours on business
            days.
          </p>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>
              📬 Email:{" "}
              <a
                href="mailto:support@invoiced.com"
                className="text-blue-600 hover:underline"
              >
                support@invoiced.com
              </a>
            </li>
            <li>📍 Location: Sydney, Australia</li>
            <li>🕒 Hours: Mon–Fri, 9am–5pm AEST</li>
          </ul>
        </div>

        {/* Contact form */}
        <div>
          {submitted ? (
            <div className="rounded-md bg-green-100 p-6 text-center text-green-800 dark:bg-green-900 dark:text-green-200">
              ✅ Message sent! We’ll get back to you shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full rounded-md px-6 py-3 font-medium text-white transition ${
                  loading
                    ? "cursor-not-allowed bg-blue-400"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
