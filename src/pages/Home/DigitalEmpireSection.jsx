import React from 'react';
import { Users, DollarSign, Rocket, ArrowRight, Lock, Check } from 'lucide-react'; // Using lucide-react for icons

// Component for a key metric display (e.g., Active Sellers)
const MetricBox = ({ icon: Icon, value, label }) => (
  <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg">
    <Icon className="w-8 h-8 text-green-400 mb-2" />
    <span className="text-xl font-bold text-white">{value}</span>
    <span className="text-sm text-gray-400">{label}</span>
  </div>
);

// Main Component
const DigitalEmpireSection = () => {
  return (
    <div className="bg-black py-20 px-4 sm:px-6 lg:px-8 font-sans text-white">
      <div className="max-w-7xl mx-auto">
        {/* Top Tag */}
        <div className="text-center mb-6">
          <span className="inline-block px-4 py-2 text-sm font-semibold text-gray-200 bg-gray-800 rounded-full">
            ⚡ Limited Time Offer
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center text-white mb-16 leading-tight">
          Start Building Your <span className="text-green-400">Digital Empire</span>
        </h2>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Column: Metrics and Features */}
          <div className="space-y-8">
            {/* Metric Boxes */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <MetricBox icon={Users} value="50K+" label="Active Sellers" />
              <MetricBox icon={DollarSign} value="$5M+" label="Monthly Sales" />
              <MetricBox icon={Rocket} value="1M+" label="Digital Products" />
            </div>

            {/* Features List */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg space-y-5">
              <p className="flex items-start text-lg text-gray-200">
                <Check className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                Instant Access to 1M+ Premium Products
              </p>
              <p className="flex items-start text-lg text-gray-200">
                <Check className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                Full Commercial & Resell Rights Included
              </p>
              <p className="flex items-start text-lg text-gray-200">
                <Check className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                Ready-to-Sell Templates & Resources
              </p>
              <p className="flex items-start text-lg text-gray-200">
                <Check className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                Lifetime Updates & Support
              </p>
              
              {/* Call to Action Button */}
              <button className="w-full inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-sm text-black bg-green-400 hover:bg-green-300 transition-colors duration-300 mt-6">
                Get Started Now <ArrowRight className="ml-3 -mr-1 h-5 w-5" />
              </button>

              {/* Security Message */}
              <p className="text-center text-gray-500 text-sm mt-4 flex items-center justify-center">
                <Lock className="w-4 h-4 mr-2 text-gray-500" /> Secure Payment • Instant Access • 30-Day Guaranteed
              </p>
            </div>
          </div>

          {/* Right Column: Product Card */}
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-700 p-8 rounded-xl shadow-2xl overflow-hidden border border-gray-700 text-center lg:text-left">
            {/* Master Resell Rights Tag */}
            <div className="absolute top-0 left-0 bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-br-lg z-10">
              MASTER RESELL RIGHTS
            </div>
            
            {/* AssetBay Logo */}
            <div className="absolute top-4 right-4 flex items-center text-lg font-bold text-white">
              <span className="bg-green-400 text-black px-2 rounded-l">assetbay</span>
              <span className="bg-gray-600 text-white px-2 rounded-r">.io</span>
            </div>

            <div className="pt-12 pb-8"> {/* Adjusted padding to make space for top tags */}
              <h3 className="text-3xl font-extrabold text-white mb-2">
                Make Passive Income Selling
              </h3>
              <p className="text-5xl font-extrabold text-green-400 mb-6">
                DIGITAL PRODUCTS
              </p>
              <p className="text-gray-300 text-lg mb-8">
                Earn while you sleep! <strong className="text-green-400">AssetBay</strong> gives you
              </p>

              {/* Product stats and image */}
              <div className="relative flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
                <div className="text-center lg:text-left">
                  <p className="text-5xl font-extrabold text-green-400">11,000+</p>
                  <p className="text-lg text-gray-300">DIGITAL PRODUCTS</p>
                  <p className="text-gray-400 mt-4 text-sm max-w-[200px] mx-auto lg:mx-0">ZERO TECH SKILLS or Content Creation Required</p>
                </div>
                {/* Mockup Laptop/Phone Image */}
                <div className="relative w-[300px] h-[200px] lg:w-[400px] lg:h-[250px]">
                  {/* Laptop placeholder */}
                  <div className="absolute bottom-0 left-0 w-full h-full bg-gray-600 rounded-lg border-2 border-gray-500">
                    {/* Screen content */}
                    <div className="absolute top-2 left-2 right-2 bottom-10 bg-gray-800 rounded-md p-2 grid grid-cols-2 gap-1 text-xs text-gray-400 overflow-hidden">
                       <div className="bg-gray-700 p-1 rounded">Product A</div>
                       <div className="bg-gray-700 p-1 rounded">Product B</div>
                       <div className="bg-gray-700 p-1 rounded">Product C</div>
                       <div className="bg-gray-700 p-1 rounded">Product D</div>
                       <div className="bg-gray-700 p-1 rounded">Product E</div>
                       <div className="bg-gray-700 p-1 rounded">Product F</div>
                    </div>
                    {/* Keyboard */}
                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-gray-500 rounded-b-lg"></div>
                  </div>
                  {/* Phone placeholder */}
                  <div className="absolute right-0 top-[-20px] w-24 h-48 bg-gray-900 rounded-[1rem] border-4 border-gray-800 shadow-xl transform rotate-[10deg]">
                    <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gray-700 rounded-full"></div>
                    <div className="p-2 text-[8px] text-gray-400 space-y-1">
                      <p>Category 1</p>
                      <p>Category 2</p>
                      <p>Category 3</p>
                    </div>
                  </div>

                  {/* Price Tag */}
                  <div className="absolute top-[-30px] right-[-30px] bg-red-600 text-white rounded-full w-24 h-24 flex flex-col items-center justify-center p-2 transform rotate-[15deg] shadow-lg">
                    <span className="text-xs">Get Started</span>
                    <span className="text-sm font-bold line-through">$1999</span>
                    <span className="text-3xl font-extrabold">$499</span>
                  </div>
                </div>
              </div>

              <p className="text-sm font-bold text-orange-400 tracking-wider uppercase mt-8">
                TURN THESE ASSETS INTO A CASH MACHINE - INSTANTLY!
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DigitalEmpireSection;