import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12" id="about">
     <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-lime-400">
          We’re Not Building a Marketplace — We’re Building a Revolution.
        </h2>

        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
          90caliber global academy was founded with one vision: to empower
          creators and entrepreneurs to own their digital future.
        </p>

        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
          We’re not another store — we’re a movement. A place where digital
          assets meet innovation, where every product is built with purpose, and
          every creator gets the recognition and revenue they deserve.
        </p>

        <p className="text-gray-300 text-lg mb-10 leading-relaxed">
          Our mission is simple — to make digital business accessible,
          scalable, and profitable for everyone.
        </p>

        <div className="text-left bg-gray-900 rounded-lg p-8 shadow-lg max-w-3xl mx-auto border border-gray-800">
          <h3 className="text-2xl font-semibold mb-4 text-lime-400">
            Our Values
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li>💎 <strong>Transparency</strong> – clear licensing, clear pricing, no surprises.</li>
            <li>⚡ <strong>Innovation</strong> – continuous AI integration and new product categories.</li>
            <li>🌍 <strong>Community</strong> – creators and buyers working together to grow.</li>
            <li>💰 <strong>Profitability</strong> – every asset is designed to deliver results.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
