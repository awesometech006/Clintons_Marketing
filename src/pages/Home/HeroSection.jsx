import React from "react";

function HeroSection() {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* ✅ Marquee Bar */}
      <div className="bg-[#c6ff3e] text-black font-semibold text-sm py-2 overflow-hidden">
        <div className="marquee relative flex whitespace-nowrap">
          <span className="mx-6">
            ⚡ EARLY BIRD SALE - Lock in your $7 Launch Price
          </span>
          <span className="mx-6">
            ⚡ EARLY BIRD SALE - Lock in your $7 Launch Price
          </span>
          <span className="mx-6">
            ⚡ EARLY BIRD SALE - Lock in your $7 Launch Price
          </span>
          <span className="mx-6">
            ⚡ EARLY BIRD SALE - Lock in your $7 Launch Price
          </span>
          {/* Duplicate for seamless scroll */}
          <span className="mx-6">
            ⚡ EARLY BIRD SALE - Lock in your $7 Launch Price
          </span>
          <span className="mx-6">
            ⚡ EARLY BIRD SALE - Lock in your $7 Launch Price
          </span>
          <span className="mx-6">
            ⚡ EARLY BIRD SALE - Lock in your $7 Launch Price
          </span>
          <span className="mx-6">
            ⚡ EARLY BIRD SALE - Lock in your $7 Launch Price
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 text-center py-24 px-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Start Your <br className="hidden md:block" />
          Digital Business with <br className="hidden md:block" />
          <span className="bg-[#c6ff3e] text-black px-3 py-1 rounded-md inline-block mt-2">
            1 Million+
          </span>{" "}
          PLR Products
        </h1>

        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
          Infinite collection of templates, video courses, ebooks and more. Ready
          for you to sell or use any way you want.
        </p>

        <div className="mt-10">
          <button className="bg-[#c6ff3e] text-black font-semibold px-6 py-3 rounded-md hover:opacity-90 transition">
            GET LIFETIME ACCESS →
          </button>
        </div>

        {/* Trusted Section */}
        <div className="mt-10 flex flex-col items-center">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <img
                key={i}
                src={`https://i.pravatar.cc/50?img=${i}`}
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-black"
              />
            ))}
          </div>

          <div className="flex items-center mt-3 space-x-2 text-sm text-gray-400">
            <span className="text-[#c6ff3e]">★★★★★</span>
            <span>Trusted by Solopreneurs</span>
          </div>
        </div>
      </div>

      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:24px_24px] pointer-events-none" />
    </section>
  );
}

export default HeroSection;
