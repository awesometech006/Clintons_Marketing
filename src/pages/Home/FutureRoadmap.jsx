import React from "react";

const FutureRoadmap = () => {
  const phases = [
    {
      title: "Phase 1 – Marketplace Launch",
      desc: "Digital product store + creator onboarding.",
    },
    {
      title: "Phase 2 – The Vault Expansion",
      desc: "Exclusive bundles, automation tools, and AI product drops.",
    },
    {
      title: "Phase 3 – AI Creator Assistant",
      desc: "Generate product descriptions, images, and names using built-in AI.",
    },
    {
      title: "Phase 4 – Smart Licensing Blockchain",
      desc: "NFT-style ownership certificates for verified digital assets.",
    },
    {
      title: "Phase 5 – Global Growth",
      desc: "Multi-language marketplace + international affiliate system.",
    },
  ];

  return (
    <section className="bg-black text-white py-24 px-6 md:px-20 relative overflow-hidden">
      {/* Decorative Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-lime-400/10 via-transparent to-lime-400/10 blur-3xl opacity-50 pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
          🚀 FUTURE ROADMAP
        </h2>
        <p className="text-gray-300 mb-16 text-lg max-w-2xl mx-auto">
          Building the foundation for the next generation of creators, automation, and digital ownership.
        </p>

        {/* Timeline Container */}
        <div className="relative border-l border-lime-500/40 mx-auto max-w-2xl space-y-10 text-left">
          {phases.map((phase, i) => (
            <div
              key={i}
              className="relative pl-10 group transition-transform duration-300 hover:translate-x-2"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-1 w-4 h-4 bg-lime-500 rounded-full group-hover:scale-125 transition-transform"></div>

              <h3 className="text-xl font-semibold text-lime-400 mb-1">
                {phase.title}
              </h3>
              <p className="text-gray-400">{phase.desc}</p>
            </div>
          ))}
        </div>

        {/* Call To Action */}
        <div className="mt-16">
          <button className="bg-lime-500 hover:bg-lime-600 text-black font-semibold py-3 px-8 rounded-md transition shadow-lg hover:shadow-lime-500/30">
            Join the Revolution →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FutureRoadmap;
