import React from "react";

const testimonials = [
  {
    quote:
      "I launched a digital business in 3 days using tools from 90caliber global academy.",
    author: "Samantha D.",
  },
  {
    quote: "Finally, a marketplace that treats creators like partners.",
    author: "Arjun R.",
  },
  {
    quote: "This isn’t just a platform. It’s the future of the digital economy.",
    author: "Leo M.",
  },
];

const TestinomonialSection = () => {
  return (
    <section>
    <section className="bg-gray-50 py-20 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        💬 What People Are Saying
      </h2>

      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-lg p-6 border border-gray-100"
          >
            <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
            <p className="font-semibold text-gray-900">— {t.author}</p>
          </div>
        ))}
      </div>
    </section>
<section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Build Your Digital Future?
        </h2>
        <p className="max-w-2xl mx-auto mb-8">
          Join 90caliber Global Academy and start creating your business today.
        </p>
        <a
          href="#get-started"
          className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition"
        >
          Get Started
        </a>
      </section>

    </section>

  );
};

export default TestinomonialSection;
