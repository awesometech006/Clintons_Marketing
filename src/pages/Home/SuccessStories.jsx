import React from 'react';
import { ArrowRight } from 'lucide-react'; // Using lucide-react for the arrow icon

// Component for a single success story/mockup card
const StoryCard = ({ title, highlight, color, className }) => (
  <div className={`relative w-64 h-96 mx-4 shrink-0 rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 ease-in-out hover:scale-[1.02] ${className}`}>
    {/* Mockup Screen Content (to match the image style) */}
    <div className={`p-4 h-full flex flex-col justify-center items-center text-center ${color === 'light' ? 'bg-white' : 'bg-black'}`}>
      <div className={`text-sm font-semibold ${color === 'light' ? 'text-gray-500' : 'text-gray-400'} mb-2`}>{title}</div>
      <h3 className={`text-xl font-bold mb-4 ${color === 'light' ? 'text-gray-900' : 'text-green-400'}`}>
        {highlight}
      </h3>
      
      {/* Visual Placeholder (Simulating a website screenshot) */}
      <div className={`w-full h-48 rounded-lg border-2 ${color === 'light' ? 'border-gray-200 bg-gray-50' : 'border-gray-700 bg-gray-800'} p-2 space-y-1`}>
        <div className={`h-2 w-3/4 rounded ${color === 'light' ? 'bg-gray-200' : 'bg-gray-700'}`}></div>
        <div className={`h-2 w-full rounded ${color === 'light' ? 'bg-gray-200' : 'bg-gray-700'}`}></div>
        <div className={`h-2 w-5/6 rounded ${color === 'light' ? 'bg-gray-200' : 'bg-gray-700'}`}></div>
      </div>
    </div>
  </div>
);

// Main Component
const SuccessStories = () => {
  const stories = [
    { title: 'All in one Dental Care Bundle', highlight: 'Transform Your Dental Studio with Ease', color: 'light', className: 'rotate-[-3deg]' },
    { title: 'The E-book Box', highlight: 'Boost the Creation of Your Projects by Up to 8X', color: 'light', className: 'rotate-[-1deg]' },
    { title: 'Marketing Resources', highlight: 'Marketing resources to make your business shine', color: 'dark', className: 'rotate-[1deg]' },
    { title: 'Real Estate Templates', highlight: 'Get 50+ Real Estate Templates for Instagram', color: 'dark', className: 'rotate-[3deg]' },
    // Mock card to show the overflow effect
    { title: 'Fitness Planner', highlight: 'Launch a Premium Fitness Planner in 24 Hours', color: 'light', className: 'opacity-70 rotate-[5deg] ml-[-4rem]' }, 
  ];

  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-2 leading-none">
            <span className="bg-black text-white px-3 py-1 rounded-md inline-block">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 font-semibold mt-2">
            BUILT WITH ASSETBAY
          </p>
        </div>

        {/* Success Stories Carousel/Gallery (Simulated) */}
        <div className="flex justify-center items-center overflow-x-visible py-8 -mx-4">
          <div className="flex space-x-4 lg:space-x-8">
            {stories.map((story, index) => (
              <StoryCard
                key={index}
                title={story.title}
                highlight={story.highlight}
                color={story.color}
                className={story.className}
              />
            ))}
          </div>
        </div>
        
        {/* Final CTA Button for this section */}
        <div className="mt-12">
          <button className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full shadow-lg text-black bg-lime-400 hover:bg-lime-300 transition-colors duration-300 transform hover:-translate-y-1 hover:scale-105">
            Start Building Your Business <ArrowRight className="ml-3 -mr-1 h-5 w-5" />
          </button>
          <p className="mt-4 text-sm text-gray-500">
            Start your digital business today
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;