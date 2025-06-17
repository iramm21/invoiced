import {
  Rocket,
  Clock,
  ShieldCheck,
  FileText,
  ReceiptText,
  TrendingUp,
  RefreshCcw,
  LayoutDashboard,
} from "lucide-react";

const features = [
  {
    title: "Instant Invoicing",
    description:
      "Generate and send professional invoices in seconds with smart templates and branding.",
    icon: FileText,
  },
  {
    title: "Recurring Billing",
    description:
      "Automate recurring invoices for retainers and subscriptions. Never miss a cycle.",
    icon: RefreshCcw,
  },
  {
    title: "Payment Tracking",
    description:
      "Monitor invoice status and receive real-time notifications when payments are made.",
    icon: Clock,
  },
  {
    title: "Built-in Reports",
    description:
      "Track revenue, overdue invoices, and financial trends with one-click reports.",
    icon: TrendingUp,
  },
  {
    title: "Secure Data",
    description:
      "All your data is encrypted and protected with enterprise-grade security.",
    icon: ShieldCheck,
  },
  {
    title: "Multi-Currency & Tax Support",
    description:
      "Send invoices in any currency with support for global tax rules.",
    icon: ReceiptText,
  },
  {
    title: "Dashboard Overview",
    description:
      "Get a quick snapshot of your business with an intuitive and informative dashboard.",
    icon: LayoutDashboard,
  },
  {
    title: "Faster Payments",
    description:
      "Enable online payments via Stripe or bank transfer to get paid quicker.",
    icon: Rocket,
  },
];

export default function FeaturesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      {/* Header */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
          Every Tool You Need to Get Paid — Fast.
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600 dark:text-gray-400">
          Invoiced takes care of your billing, so you can focus on growing your
          business.
        </p>
      </section>

      {/* Feature Grid */}
      <section className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400">
              <feature.icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {feature.title}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {feature.description}
            </p>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="mt-24 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Ready to simplify your invoicing?
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Start free, no credit card required. Upgrade only when you're ready.
        </p>
        <a
          href="/signup"
          className="mt-6 inline-block rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          Get Started for Free
        </a>
      </section>
    </div>
  );
}
