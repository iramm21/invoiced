export default function HomePage() {
  return (
    <section className="w-full max-w-2xl mx-auto px-6 py-16 text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-100 mb-6">
        Effortless Invoicing for Small Businesses
      </h1>
      <p className="text-xl text-gray-300 mb-10">
        Create, manage, and send invoices easily. <br /> Get paid faster. Stay
        organized. Free to start.
      </p>
      <a
        href="/auth/register"
        className="inline-block bg-primary text-white px-8 py-3 rounded-2xl font-bold text-lg hover:bg-primary/90 shadow-lg transition"
      >
        Get Started Free
      </a>
      <div className="mt-12 text-gray-400 text-sm">
        No credit card required. Cancel anytime.
      </div>
    </section>
  );
}
