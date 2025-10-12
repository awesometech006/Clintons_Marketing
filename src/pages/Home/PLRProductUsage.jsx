import React from 'react';
import { ShoppingCart, Users, Globe, BookOpen } from 'lucide-react'; // Using lucide-react for icons

// Component for a single benefit card
const BenefitCard = ({ icon: Icon, title, description }) => (
  <div className="bg-black text-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-0.5">
    <div className="flex items-center space-x-4">
      <Icon className="w-6 h-6 text-green-400" />
      <div>
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  </div>
);

// Main Component
const PLRProductUsage = () => {
  const benefits = [
    {
      icon: ShoppingCart,
      title: "Sell Digital Products",
      description: "Create and sell digital downloads to generate passive income streams.",
    },
    {
      icon: Users,
      title: "Sell Memberships",
      description: "Build recurring revenue with exclusive membership content access.",
    },
    {
      icon: Globe,
      title: "Build E-Commerce Stores",
      description: "Launch professional digital storefronts for seamless product sales.",
    },
    {
      icon: BookOpen,
      title: "Offer Online Courses",
      description: "Transform content into valuable educational courses for your audience.",
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header/Title Section */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-gray-700 bg-gray-200 rounded-full mb-4">
            PRIVATE LABEL RIGHTS
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
            Use PLR Products <span className="bg-green-600 text-white px-2 py-1 rounded-lg inline-block -rotate-1">Your Way</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dive into the content library to engage, educate, and grow your audience. Drive traffic, gain followers, and start building your digital empire today!
          </p>
        </div>

        {/* Content Section: Image Placeholder and Benefit Cards */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Side: Mockup Image Placeholder */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
            {/* This is a visual placeholder for the phone mockup image from the original design */}
            <div className="relative w-64 h-[400px] bg-gray-900 rounded-[2.5rem] shadow-2xl border-8 border-gray-800 transform rotate-[-5deg] scale-95 lg:scale-100">
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-gray-700 rounded-full"></div>
              <div className="p-6 text-gray-300 text-sm space-y-3">
                <p className="flex items-center"><span className="text-green-400 mr-2">●</span> Rulemaking Flexibility</p>
                <p className="flex items-center"><span className="text-green-400 mr-2">●</span> Editable Content</p>
                <p className="flex items-center"><span className="text-green-400 mr-2">●</span> Monetization Opportunities</p>
                <p className="flex items-center"><span className="text-green-400 mr-2">●</span> Time & Cost Efficiency</p>
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-xs uppercase font-semibold text-green-400">🔥 Bonus Content</p>
                  <p className="mt-1">Rights to use for own business</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side: Benefit Cards */}
          <div className="w-full lg:w-2/3 space-y-6">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default PLRProductUsage;