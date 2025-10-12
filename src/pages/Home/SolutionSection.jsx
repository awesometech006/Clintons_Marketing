import React from "react";

const oldWay = [
  { step: "Market Research", time: "2–3 weeks", desc: "Spend weeks analyzing market trends and competition" },
  { step: "Product Development", time: "3–6 months", desc: "Hire designers and developers or learn complex tools" },
  { step: "Testing & Refinement", time: "1–2 months", desc: "Multiple iterations and beta testing phases" },
  { step: "Marketing Materials", time: "2–4 weeks", desc: "Create sales pages, funnels, and promotional content" },
  { step: "Launch Preparation", time: "1–2 weeks", desc: "Set up payment systems and delivery infrastructure" },
];

const plrWay = [
  { step: "Choose Product", time: "5 mins", desc: "Browse our curated collection of proven sellers" },
  { step: "Customize", time: "15 mins", desc: "Add your branding with our simple editor" },
  { step: "Preview", time: "2 mins", desc: "Instant preview of your customized product" },
  { step: "Download", time: "1 min", desc: "Get your product with all marketing materials" },
  { step: "Start Selling", time: "2 mins", desc: "Upload and start making sales immediately" },
];

const SolutionSection = () => {
  return (
    <section className="bg-gradient-to-b from-lime-50 via-white to-white py-20 text-center relative">
      {/* Top header section */}
      <div className="inline-block px-4 py-1 mb-6 text-sm font-medium text-green-600 bg-green-50 border border-green-200 rounded-full">
        ✅ The Solution You've Been Waiting For
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Create a Digital Product <br />
        <span className="text-white bg-black px-3 py-1 rounded-md inline-block mt-2">
          Within 25 Minutes
        </span>
      </h2>

      <p className="mt-3 text-gray-600 font-medium">
        Stop struggling with endless development cycles. Get instant access to proven, ready-to-sell products.
      </p>

      {/* Comparison cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto text-left">
        {/* Old Way */}
        <div className="p-6 border border-red-200 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
          <h3 className="text-lg font-semibold text-red-600 mb-4 flex items-center">
            ❌ The Old Way
          </h3>
          <ul className="space-y-4">
            {oldWay.map((item, i) => (
              <li key={i} className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-red-500 font-bold">{i + 1}.</span>
                  <span className="font-medium text-gray-800">{item.step}</span>
                </div>
                <p className="text-gray-600 text-sm ml-5">{item.desc}</p>
                <span className="text-xs text-gray-400 ml-5 italic">{item.time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* PLR Way */}
        <div className="p-6 border border-green-200 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
          <h3 className="text-lg font-semibold text-green-600 mb-4 flex items-center">
            💡 The PLR Box Way
          </h3>
          <ul className="space-y-4">
            {plrWay.map((item, i) => (
              <li key={i} className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-green-500 font-bold">{i + 1}.</span>
                  <span className="font-medium text-gray-800">{item.step}</span>
                </div>
                <p className="text-gray-600 text-sm ml-5">{item.desc}</p>
                <span className="text-xs text-gray-400 ml-5 italic">{item.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA button */}
      <div className="mt-10">
        <button className="px-6 py-3 text-white bg-lime-500 hover:bg-lime-600 rounded-full font-semibold shadow-md transition">
          Get Started in Minutes →
        </button>
        <p className="mt-3 text-sm text-gray-500">
          Join thousands of digital entrepreneurs who’ve skipped the hard work
        </p>
      </div>
    </section>
  );
};

export default SolutionSection;
