import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      {/* Page Header */}
      <section className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
          About Invoiced
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-400">
          Invoiced is on a mission to simplify invoicing for modern
          professionals. Whether you're a freelancer, small business, or growing
          team — we help you get paid faster, easier, and stress-free.
        </p>
      </section>

      {/* Our Mission */}
      <section className="mb-20">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
          Our Mission
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Our goal is to empower people with easy-to-use tools that automate
          tedious tasks. We believe getting paid should be simple, and that
          professional software shouldn’t require a manual. Invoiced combines
          smart design, rock-solid infrastructure, and customer-first thinking
          to make billing a breeze.
        </p>
      </section>

      {/* Stats Section */}
      <section className="mb-20 grid gap-8 text-center md:grid-cols-3">
        <div>
          <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
            12K+
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Users Worldwide
          </p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
            $10M+
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Invoices Processed
          </p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
            99.99%
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Uptime Guarantee
          </p>
        </div>
      </section>

      {/* How it started */}
      <section className="mb-20">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
          How It Started
        </h2>
        <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
          Invoiced began as a side project by a freelance developer who was
          tired of manually creating and chasing invoices. With a desire for
          simplicity and automation, the platform evolved — shaped by real-world
          needs and feedback from other professionals.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Today, Invoiced supports thousands of businesses across the globe —
          and we're just getting started.
        </p>
      </section>

      {/* Meet the Team (Sample) */}
      <section className="mb-20">
        <h2 className="mb-8 text-center text-2xl font-semibold text-gray-800 dark:text-white">
          Meet the Team
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              name: "Isaac Ramm",
              title: "Founder & Developer",
              img: "/isaac-ramm.jpg",
            },
            {
              name: "Jane Doe",
              title: "Head of Product",
              img: "/jane-doe.jpg",
            },
            {
              name: "Alex Kim",
              title: "Customer Success",
              img: "/alex-kim.jpg",
            },
          ].map((member) => (
            <div key={member.name} className="text-center">
              <Image
                src={member.img}
                alt={member.name}
                width={120}
                height={120}
                className="mx-auto mb-4 rounded-full object-cover"
              />
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                {member.name}
              </h4>
              <p className="text-gray-500 dark:text-gray-400">{member.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-10 text-center">
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
          Ready to simplify your billing?
        </h2>
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          Join thousands of businesses using Invoiced to save time, stay
          organized, and get paid on time.
        </p>
        <a
          href="/signup"
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
        >
          Get Started Free
        </a>
      </section>
    </div>
  );
}
