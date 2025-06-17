import { Lightbulb, Rocket, Shield } from "lucide-react";

const features = [
  {
    title: "Fast Performance",
    description:
      "Optimized for speed so you can get things done without waiting.",
    icon: Rocket,
  },
  {
    title: "Smart Features",
    description:
      "Designed with intelligent features that anticipate your needs.",
    icon: Lightbulb,
  },
  {
    title: "Secure by Default",
    description:
      "Built with security in mind to protect your data and privacy.",
    icon: Shield,
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
          Powerful Features, Built for You
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Every tool you need to travel smarter, work faster, and live better.
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg dark:bg-gray-900"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
