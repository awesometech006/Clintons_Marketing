import React from 'react';
import { Check, ArrowRight } from 'lucide-react'; // Using lucide-react for check and arrow icons

// Component for a single pricing plan card
const PricingCard = ({ plan, price, period, description, features, buttonText, isLifetime = false }) => (
  <div className={`relative rounded-xl shadow-xl p-8 flex flex-col h-full ${isLifetime ? 'bg-black text-white' : 'bg-white text-gray-900 border border-gray-200'}`}>
    {isLifetime && (
      <div className="absolute top-0 right-0 bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
        50% OFF
      </div>
    )}

    <h3 className="text-xl font-bold mb-2">{plan}</h3>
    <p className={`mb-4 ${isLifetime ? 'text-gray-400' : 'text-gray-600'}`}>{description}</p>
    
    <div className="mb-6">
      <span className="text-4xl font-extrabold">{price}</span>
      <span className={`text-xl font-semibold ${isLifetime ? 'text-gray-400' : 'text-gray-500'}`}>{period}</span>
      {isLifetime && (
        <p className="text-green-400 text-sm mt-1">Save ₹1,000+/year</p>
      )}
    </div>

    <ul className="space-y-3 flex-grow mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${isLifetime ? 'text-green-400' : 'text-green-600'}`} />
          <span className={`${isLifetime ? 'text-gray-300' : 'text-gray-700'}`}>{feature}</span>
        </li>
      ))}
    </ul>

    <button className={`w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm transition-colors duration-300
      ${isLifetime 
        ? 'bg-green-500 text-black hover:bg-green-400' 
        : 'bg-black text-white hover:bg-gray-800'
      }`}>
      {buttonText} <ArrowRight className="ml-3 -mr-1 h-5 w-5" />
    </button>
  </div>
);

// Main Component
const PricingSection = () => {
  const monthlyFeatures = [
    'PLR License',
    'Access to 1M+ PLR Products',
    'Commercial Usage Rights',
    'Unlimited Downloads',
    'Regular Updates',
    'Ready-to-Sell Templates',
    'Basic Marketing Tools',
  ];

  const lifetimeFeatures = [
    'PLR + MRR License',
    'Lifetime Updates Access',
    'White-Label Rights',
    'All Future Updates',
    'Premium Marketing Kit',
    'Business Analytics Tools',
  ];

  return (
    <div className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        {/* Top Tag */}
        <div className="mb-6">
          <span className="inline-block px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
            ⭐ Simple, Transparent Pricing
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
          Start Building Your <span className="bg-black text-white px-2 py-1 rounded-lg inline-block -rotate-1">Digital Empire</span>
        </h2>

        {/* Subheading */}
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
          Choose the perfect plan to kickstart your digital product business
        </p>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          <PricingCard
            plan="Monthly"
            description="Perfect for getting started with PLR products"
            price="₹99"
            period="/month"
            features={monthlyFeatures}
            buttonText="Get Instant Access"
          />
          <PricingCard
            plan="Lifetime"
            description="Best value for long-term success"
            price="₹499"
            period=" one-time"
            features={lifetimeFeatures}
            buttonText="Get Lifetime Access"
            isLifetime={true}
          />
        </div>
      </div>
    </div>
  );
};

export default PricingSection;