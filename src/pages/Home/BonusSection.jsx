import React from 'react';
import { ArrowRight } from 'lucide-react'; // Using lucide-react for the arrow icon

// Component for a single bonus card
const BonusCard = ({ imageUrl, title, description }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
    <div className="relative">
      {/* "Bonus" tag */}
      <span className="absolute top-4 left-4 bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-full z-10">
        Bonus
      </span>
      {/* Image Placeholder - replace with actual image */}
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover object-top border-b border-gray-200" />
    </div>
    <div className="p-6 flex-grow">
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-base">{description}</p>
    </div>
  </div>
);

// Main Component
const BonusSection = () => {
  const bonuses = [
    {
      imageUrl: 'https://via.placeholder.com/400x200/000000/FFFFFF?text=Sales+Funnel', // Placeholder image
      title: 'High-Converting Sales Funnel Templates',
      description: 'Pre-designed, editable sales funnel templates for platforms like ClickFunnels, Kartra, or Elementor, including landing pages, upsell pages, and thank-you pages.',
    },
    {
      imageUrl: 'https://via.placeholder.com/400x200/000000/FFFFFF?text=Email+Automation', // Placeholder image
      title: 'Email Marketing Automation Sequences',
      description: 'Done-for-you email sequences (welcome series, sales sequences, abandoned cart recovery). Optimize templates for Mailchimp, ActiveCampaign, or ConvertKit.',
    },
    {
      imageUrl: 'https://via.placeholder.com/400x200/000000/FFFFFF?text=Social+Media', // Placeholder image
      title: 'Social Media Marketing Toolkit',
      description: 'Ready-to-use post templates for Instagram, Facebook, LinkedIn, and Pinterest. Includes graphics, hashtags, and a posting strategy guide.',
    },
    {
      imageUrl: 'https://via.placeholder.com/400x200/000000/FFFFFF?text=SEO+Guide', // Placeholder image
      title: 'SEO Guide & Strategy Pack',
      description: 'Complete SEO optimization guide with keyword research templates, content planning tools, and ranking strategies for digital products.',
    },
    {
      imageUrl: 'https://via.placeholder.com/400x200/000000/FFFFFF?text=Upselling', // Placeholder image
      title: 'Upselling Playbook',
      description: 'Strategic upselling and cross-selling templates to maximize your revenue. Includes scripts, sales scripts and automation workflows.',
    },
    {
      imageUrl: 'https://via.placeholder.com/400x200/000000/FFFFFF?text=Pricing+Strategy', // Placeholder image
      title: 'Pricing Strategy Guide',
      description: 'Data-driven pricing strategies for digital products. Includes pricing calculators, competitor analysis templates, and value metrics.',
    },
  ];

  return (
    <div className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8 font-sans text-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        {/* Top Tag */}
        <div className="mb-6">
          <span className="inline-block px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
            ⚡ Special Limited Time Offer
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
          Get <span className="bg-green-400 text-black px-3 py-1 rounded-lg inline-block -rotate-1">$6,464</span>
        </h2>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-8 leading-tight">
          Worth of Premium Bonuses For Free
        </h2>

        {/* Subheading */}
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
          Supercharge your success with our comprehensive bonus package designed to help you sell more and scale faster
        </p>

        {/* Bonuses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {bonuses.map((bonus, index) => (
            <BonusCard
              key={index}
              imageUrl={bonus.imageUrl}
              title={bonus.title}
              description={bonus.description}
            />
          ))}
        </div>

        {/* Call to Action Button */}
        <button className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-lg text-black bg-green-400 hover:bg-green-300 transition-colors duration-300 transform hover:-translate-y-1 hover:scale-105">
          Claim All Bonuses Now <ArrowRight className="ml-3 -mr-1 h-5 w-5" />
        </button>

        {/* Footer Text */}
        <p className="mt-8 text-sm text-gray-500">
          Limited time offer • All bonuses included with your purchase
        </p>
      </div>
    </div>
  );
};

export default BonusSection;