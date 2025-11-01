import React from "react";

// Data for section 1
const problems = [
  {
    emoji: "😰",
    title: "For Entrepreneurs",
    description:
      "Ready-made products to start and scale fast.",
  },
  {
    emoji: "😡",
    title: "For Creators",
    description:
      "A launchpad to turn ideas into income",
  },
  {
    emoji: "😫",
    title: " For Agencies",
    description:
      "White-label tools and templates to boost clients’ growth.",
  }
];

// Data for section 2
// const brutalFacts = [
//   {
//     label: "89%",
//     title: "Dreams Shattered",
//     description:
//       "89% of digital entrepreneurs quit in despair, their dreams crushed by mounting losses and zero returns.",
//     tag: "↘",
//     color: "text-red-500",
//   },
//   {
//     label: "$12K",
//     title: "Life Savings Lost",
//     description:
//       "Average failed entrepreneur loses $12,000+ of their life savings before giving up – many going into debt.",
//     tag: "🚫",
//     color: "text-orange-500",
//   },
//   {
//     label: "2YRS",
//     title: "Years Wasted",
//     description:
//       "2+ years of life wasted chasing the wrong products while watching others succeed with the right approach.",
//     tag: "⏱️",
//     color: "text-amber-500",
//   },
//   {
//     label: "97%",
//     title: "Total Failure",
//     description:
//       "97% never make a single sale. Their products sit untouched while competitors dominate the market.",
//     tag: "💸",
//     color: "text-yellow-500",
//   },
// ];

const DigitalProductsSection = () => {
  return (
    <section className="relative py-20 bg-white text-center">
      {/* ========================= */}
      {/* Section 1: Problems */}
      {/* ========================= */}
      {/* <div className="inline-block px-4 py-1 mb-6 text-sm font-medium text-red-600 bg-red-50 border border-red-200 rounded-full">
        ⚠️ Your Business maybe at Risk
      </div> */}

      <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
        Built for Everyone{" "}
        {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-orange-500">
          Getting Impossible
        </span> */}
      </h2>

      {/* <p className="mt-3 text-gray-600 font-medium">
        The harsh reality that's crushing dreams of{" "}
        <span className="font-bold text-green-500">
          93% aspiring digital entrepreneurs
        </span>
      </p> */}

      <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 max-w-5xl mx-auto">
        {problems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col p-6 text-left bg-white rounded-2xl border border-gray-100 shadow-[0_4px_10px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)] transition"
          >
            {/* <div className="text-3xl mb-3">{item.emoji}</div> */}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>

      {/* ========================= */}
      {/* Section 2: Brutal Reality */}
      {/* ========================= */}
      {/* <div class
        // </div> */}
      {/* </div> */} 
    </section>
  );
};

export default DigitalProductsSection;
