import React from 'react';
import { ArrowRight } from 'lucide-react'; // Using lucide-react for the arrow icon

// Component for a single strategy card
const StrategyCard = ({ strategyNumber, title, description }) => (
  <div className="bg-gray-800 p-6 rounded-xl flex flex-col justify-between h-full hover:bg-gray-700 transition-colors duration-200">
    <div>
      <p className="text-sm font-semibold text-gray-400 mb-2">Strategy {strategyNumber}</p>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300 text-base">{description}</p>
    </div>
    <div className="mt-6 flex items-center justify-between">
      <span className="text-green-400 font-medium text-sm">High Profit Potential</span>
      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-200" />
    </div>
  </div>
);

// Main Component
const PLRMonetizationStrategies = () => {
  const strategies = [
    {
      strategyNumber: '01',
      title: 'Digital Commerce Store',
      description: 'Launch your own digital storefront with ready-to-sell PLR products and automated delivery.',
    },
    {
      strategyNumber: '02',
      title: 'Content Repurposing',
      description: 'Transform PLR content into unique new products like e-books, audio courses, or video courses.',
    },
    {
      strategyNumber: '04', // Note: Strategy 03 is skipped based on the image
      title: 'Membership Site',
      description: 'Build a recurring revenue stream with PLR content organized into monthly membership tiers.',
    },
    {
      strategyNumber: '05',
      title: 'Sell on Etsy',
      description: 'Package PLR templates, graphics, and digital resources for Etsy\'s creative marketplace.',
    },
    {
      strategyNumber: '06',
      title: 'Online Courses',
      description: 'Transform PLR content into structured learning experiences and sell them on course platforms.',
    },
    {
      strategyNumber: '08', // Note: Strategy 07 is skipped based on the image
      title: 'Create Custom Bundles',
      description: 'Combine multiple PLR products into high-value bundles for increased profit margins.',
    },
    {
      strategyNumber: '09',
      title: 'Sell on Landing Page',
      description: 'Create dedicated sales pages for individual PLR products with focused marketing campaigns.',
    },
    {
      strategyNumber: '10',
      title: 'Email Newsletters',
      description: 'Use PLR content to create valuable email sequences and monetize your subscriber list.',
    },
  ];

  return (
    <div className="bg-black py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        {/* Top Tag */}
        <span className="inline-block px-4 py-2 text-sm font-semibold text-green-400 bg-gray-800 rounded-full mb-6">
          💲 10 Proven Monetization Strategies
        </span>

        {/* Main Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
          Turn Your PLR Into <span className="text-green-400">Profit Machines</span>
        </h2>

        {/* Subheading */}
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-16">
          Discover the exact strategies successful entrepreneurs use to transform PLR content into multiple income streams. Each method is proven and profitable.
        </p>

        {/* Strategies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {strategies.map((strategy, index) => (
            <StrategyCard
              key={index}
              strategyNumber={strategy.strategyNumber}
              title={strategy.title}
              description={strategy.description}
            />
          ))}
        </div>

        {/* Call to Action Button */}
        <button className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-sm text-black bg-green-400 hover:bg-green-300 transition-colors duration-300 transform hover:-translate-y-1 hover:scale-105">
          Start Your PLR Business Today <ArrowRight className="ml-3 -mr-1 h-5 w-5" />
        </button>

        {/* Footer Text */}
        <p className="mt-8 text-sm text-gray-500">
          Get instant access to all 10 strategies + step-by-step guides
        </p>
      </div>
    </div>
  );
};

export default PLRMonetizationStrategies;