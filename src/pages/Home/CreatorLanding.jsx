import React from "react";

const CreatorLanding = () => {
  return (
    <div className="w-full">
      {/* White Section */}
      <section className="bg-white text-black py-20 px-6 md:px-16 text-center" id="creator">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Upload Once. Earn Forever.
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Your creativity deserves more than likes — it deserves income.
        </p>

        <p className="max-w-3xl mx-auto text-gray-600 mb-12">
          Join thousands of creators turning their work into assets that
          generate passive revenue every single day. <strong>Clinton’s Hub</strong> gives
          you the platform, analytics, and audience to scale your success.
        </p>

        <div className="text-left max-w-2xl mx-auto mb-12">
          <p className="mb-3">
            🔹 <strong>Step 1: Create & Upload</strong> — Add your templates, courses,
            AI tools, or assets in just a few clicks.
          </p>
          <p className="mb-3">
            🔹 <strong>Step 2: Set Your Price & License</strong> — Choose personal,
            commercial, or resell rights. Full flexibility.
          </p>
          <p className="mb-3">
            🔹 <strong>Step 3: Earn on Every Sale</strong> — Automatic payouts,
            detailed analytics, and instant visibility to global buyers.
          </p>
          <p>
            🔹 <strong>Step 4: Collaborate & Grow</strong> — Join the Creator Partner
            Program — team up with influencers and affiliates to multiply your
            reach.
          </p>
        </div>

        <button className="bg-lime-500 hover:bg-lime-600 text-black font-semibold py-3 px-8 rounded-md transition">
          Become a Creator →
        </button>
      </section>

      {/* Black Section */}
      <section className="bg-black text-white py-20 px-6 md:px-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Creator Benefits
        </h2>

        <ul className="space-y-4 text-lg text-gray-200 mb-12">
          <li>✅ 80% Commission per sale</li>
          <li>✅ Dedicated Creator Dashboard</li>
          <li>✅ Smart Product Analytics</li>
          <li>✅ Featured Listings for Top Creators</li>
          <li>✅ Affiliate Collaboration Tools</li>
          <li>✅ Lifetime Earnings from The Vault Access</li>
        </ul>

        <button className="bg-lime-500 hover:bg-lime-600 text-black font-semibold py-3 px-8 rounded-md transition">
          Start Earning Now →
        </button>
      </section>
       <section className="bg-white text-black py-20 px-6 md:px-16 text-center" id="community">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          We’re More Than a Platform — We’re a Movement.
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Join a community of forward thinkers, creators, and digital hustlers.
        </p>
        <p className="max-w-3xl mx-auto text-gray-600 mb-12">
          Engage in challenges, share insights, and collaborate on global projects.
        </p>

        <ul className="space-y-4 text-lg text-gray-800 mb-12 max-w-2xl mx-auto text-left">
          <li>💬 Forums & Networking Groups</li>
          <li>🏆 Monthly Creator Contests</li>
          <li>📈 Case Studies & Success Stories</li>
          <li>🤝 Collaboration Events</li>
          <li>🌍 Affiliate & Partner Opportunities</li>
        </ul>
            <button className="bg-lime-500 hover:bg-lime-600 text-black font-semibold py-3 px-8 rounded-md transition">
          Join the Community →
        </button>
      </section>
    </div>
  );
};

export default CreatorLanding;
