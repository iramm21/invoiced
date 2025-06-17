export default function PricingSection() {
  const plans = [
    {
      name: "Basic",
      price: "$19/mo",
      description: "Ideal for personal use or small projects.",
      features: ["1 User", "5 Projects", "Basic Support"],
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$49/mo",
      description: "Perfect for teams and growing businesses.",
      features: ["Unlimited Users", "Unlimited Projects", "Priority Support"],
      highlighted: true,
    },
  ];

  return (
    <section className="bg-white py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
          Simple, Transparent Pricing
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Choose a plan that works for you and scale as you grow.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl border p-8 shadow-lg transition ${
                plan.highlighted
                  ? "border-blue-600 bg-blue-50 dark:bg-blue-900"
                  : "border-gray-300 bg-gray-50 dark:border-gray-700 dark:bg-gray-800"
              }`}
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                {plan.name}
              </h3>
              <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
                {plan.price}
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {plan.description}
              </p>

              <ul className="mt-6 space-y-2 text-gray-700 dark:text-gray-300">
                {plan.features.map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>

              <button
                className={`mt-6 w-full rounded-lg py-3 font-semibold transition ${
                  plan.highlighted
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                }`}
              >
                {plan.highlighted ? "Get Pro" : "Choose Plan"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
