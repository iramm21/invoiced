"use client";

import { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    monthly: 0,
    yearly: 0,
    description: "For freelancers and hobbyists getting started.",
    bulletPoints: [
      "1 client project",
      "Unlimited invoices",
      "Standard dashboard",
      "Email support",
    ],
    cta: "Start Free",
    href: "/signup",
    highlighted: false,
  },
  {
    name: "Pro",
    monthly: 29,
    yearly: 290,
    description: "Best for small teams managing multiple clients.",
    bulletPoints: [
      "Unlimited clients",
      "Recurring billing",
      "Analytics dashboard",
      "Priority support",
    ],
    cta: "Upgrade to Pro",
    href: "/signup",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    monthly: null,
    yearly: null,
    description: "Custom invoicing infrastructure for high-volume teams.",
    bulletPoints: [
      "All Pro features",
      "Dedicated manager",
      "Custom integrations",
      "White-labeling",
    ],
    cta: "Contact Sales",
    href: "/contact",
    highlighted: false,
  },
];

const comparisonFeatures = [
  { label: "Unlimited invoices", values: [true, true, true] },
  { label: "Analytics dashboard", values: [true, true, true] },
  { label: "Email support", values: [true, true, true] },
  { label: "Unlimited clients", values: [false, true, true] },
  { label: "Recurring billing", values: [false, true, true] },
  { label: "Priority support", values: [false, true, true] },
  { label: "Dedicated manager", values: [false, false, true] },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly",
  );

  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      {/* Header */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
          Flexible Plans for Every Team
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          Choose monthly or save with annual billing — no contracts, cancel
          anytime.
        </p>

        {/* Billing Toggle */}
        <div className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gray-100 p-1 text-sm dark:bg-gray-800">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`rounded-full px-4 py-1 transition ${
              billingCycle === "monthly"
                ? "bg-blue-600 text-white"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("yearly")}
            className={`rounded-full px-4 py-1 transition ${
              billingCycle === "yearly"
                ? "bg-blue-600 text-white"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            Yearly
          </button>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="grid gap-10 md:grid-cols-3">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`relative rounded-2xl border p-8 shadow-sm transition-all hover:shadow-md ${
              plan.highlighted
                ? "border-blue-600 bg-blue-50 dark:border-blue-500 dark:bg-blue-900"
                : "border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"
            }`}
          >
            {plan.badge && (
              <span className="absolute top-4 right-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow">
                {plan.badge}
              </span>
            )}

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {plan.name}
            </h2>
            <p className="mt-1 text-4xl font-bold text-gray-900 dark:text-white">
              {plan.monthly === null
                ? "Custom"
                : `$${billingCycle === "monthly" ? plan.monthly : plan.yearly}`}
              {plan.monthly !== null && (
                <span className="text-base font-medium text-gray-500 dark:text-gray-400">
                  {billingCycle === "monthly" ? "/mo" : "/yr"}
                </span>
              )}
            </p>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {plan.description}
            </p>

            <ul className="mt-6 space-y-3 text-sm text-gray-700 dark:text-gray-300">
              {plan.bulletPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-blue-600 dark:text-blue-400" />
                  {point}
                </li>
              ))}
            </ul>

            <a
              href={plan.href}
              className={`mt-8 block w-full rounded-lg px-5 py-3 text-center font-medium transition ${
                plan.highlighted
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
              }`}
            >
              {plan.cta}
            </a>
          </motion.div>
        ))}
      </section>

      {/* Comparison Table */}
      <section className="mt-24">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white">
          Compare All Plans
        </h2>
        <div className="overflow-auto rounded-lg border border-gray-200 dark:border-gray-800">
          <table className="min-w-full table-auto text-sm">
            <thead className="bg-gray-100 text-left dark:bg-gray-800">
              <tr>
                <th className="px-6 py-4 font-medium text-gray-700 dark:text-gray-300">
                  Feature
                </th>
                {plans.map((plan) => (
                  <th
                    key={plan.name}
                    className="px-6 py-4 font-medium text-gray-700 dark:text-gray-300"
                  >
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {comparisonFeatures.map((row) => (
                <tr key={row.label}>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                    {row.label}
                  </td>
                  {row.values.map((included, idx) => (
                    <td key={idx} className="px-6 py-4 text-center">
                      {included ? (
                        <CheckCircle className="mx-auto h-4 w-4 text-blue-600 dark:text-blue-400" />
                      ) : (
                        <XCircle className="mx-auto h-4 w-4 text-gray-400 dark:text-gray-600" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mt-24 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Still unsure? Let’s talk.
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          We’ll help you find the perfect fit for your business needs.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          Contact Sales
        </a>
      </section>
    </div>
  );
}
