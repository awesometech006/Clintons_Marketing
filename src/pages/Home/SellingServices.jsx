import React from "react";

const services = [
  {
    title: "AI Prompts & Workflows",
    count: "5,000+",
    description:
      "Master ChatGPT, Midjourney, and automation systems.",
    tag: "Sell as branded templates",
    imageUrl:
      "https://storage.googleapis.com/msgsndr/0iO3mS8O2ALa5vmXwP3d/media/67f60c430a62177682d341d3.jpeg",
  },
  {
    title: "Brand Kits & Templates",
    count: "1,000+",
    description:
      "Logos, social media packs, and full identity systems.",
    tag: "Sell as productivity solutions",
    imageUrl:
      "https://storage.googleapis.com/msgsndr/0iO3mS8O2ALa5vmXwP3d/media/67f60c430a62175110d341d2.jpeg",
  },
  {
    title: "Marketing Funnels & Tools",
    count: "500+",
    description:
      "Ready-to-launch ad creatives, email systems, and landing pages.",
    tag: "Rebrand and sell online courses",
    imageUrl:
      "https://storage.googleapis.com/msgsndr/0iO3mS8O2ALa5vmXwP3d/media/67f60c440a62172ccad341d8.jpeg",
  },
    {
    title: "Courses & eBooks",
    count: "5,000+",
    description:
      "Learn high-income skills in hours",
    tag: "Sell as branded templates",
    imageUrl:
      "https://storage.googleapis.com/msgsndr/0iO3mS8O2ALa5vmXwP3d/media/67f60c430a62177682d341d3.jpeg",
  },
  {
    title: "Ready-to-Launch Business Kits",
    count: "1,000+",
    description:
      "Buy entire brands, products, and digital franchises",
    tag: "Sell as productivity solutions",
    imageUrl:
      "https://storage.googleapis.com/msgsndr/0iO3mS8O2ALa5vmXwP3d/media/67f60c430a62175110d341d2.jpeg",
  },
  {
    title: "Resell-Ready Assets",
    count: "500+",
    description:
      "Earn instantly with PLR and white-label products",
    imageUrl:
      "https://storage.googleapis.com/msgsndr/0iO3mS8O2ALa5vmXwP3d/media/67f60c440a62172ccad341d8.jpeg",
  },
    {
    title: "3D Models & Motion Graphics",
    count: "500+",
    description:
      "Earn instantly",
    imageUrl:
      "https://storage.googleapis.com/msgsndr/0iO3mS8O2ALa5vmXwP3d/media/67f60c440a62172ccad341d8.jpeg",
  },
      {
    title: "Marketing Assets",
    count: "500+",
    description:
      "Earn instantly",
    imageUrl:
      "https://storage.googleapis.com/msgsndr/0iO3mS8O2ALa5vmXwP3d/media/67f60c440a62172ccad341d8.jpeg",
  },
];

const SellingServices = () => {
  return (
    <section className="relative bg-black py-24 px-6 sm:px-8">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:24px_24px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Header */}
        <p className="inline-block bg-[#1c1c1c] text-[#a1a1a1] text-sm font-medium px-4 py-1.5 rounded-full">
          UNLIMITED NICHES, UNLIMITED OPTIONS
        </p>

        <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
           Explore Digital Categories{" "}
          {/* <span className="text-[#c6ff3e]">Start Selling Online</span> */}
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-400">
          Choose from{" "}
          <strong className="font-bold text-[#c6ff3e]">Over 1 Million</strong>{" "}
          premium digital products with full resell rights.
        </p>

        {/* Cards Grid */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <div
              key={i}
              className="relative bg-gradient-to-b from-[#1A1A1A] to-[#111] rounded-2xl p-8 pt-24 border border-zinc-800 shadow-[0_0_20px_rgba(0,0,0,0.4)] hover:-translate-y-2 transition-transform duration-300 ease-in-out"
            >
              {/* Floating Image */}
              <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-40 h-40 flex items-center justify-center">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-xl shadow-lg border border-zinc-800"
                />
              </div>

              {/* Title and Count */}
              <div className="flex items-center justify-center gap-3">
                <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <span className="bg-zinc-800 text-zinc-300 text-xs font-semibold px-3 py-1 rounded-full">
                  {service.count}
                </span>
              </div>

              {/* Description */}
              <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Footer Tag */}
              <div className="mt-6 flex justify-center">
                <div className="inline-flex items-center gap-2 bg-black text-zinc-300 text-xs px-3 py-1.5 rounded-full border border-zinc-700">
                  <span className="w-2 h-2 bg-[#c6ff3e] rounded-full"></span>
                  {service.tag}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SellingServices;
