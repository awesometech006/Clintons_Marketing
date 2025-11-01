import React from 'react';
import { ShoppingCart, Users, Globe, BookOpen } from 'lucide-react'; // Using lucide-react for icons
import { ArrowRight } from 'lucide-react'; // Using lucide-react for the arrow icon

// Component for a single benefit card
const RichTextSection = ({ icon: Icon, title, description }) => (
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
const PLRProductUsage = (props) => {
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
            {props.tag}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
            {props.title} 
            {/* <span className="bg-green-600 text-white px-2 py-1 rounded-lg inline-block -rotate-1">Your Way</span> */}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
{props.description}           </p>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
{props.secondaryText}           </p>
       <button className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-lg text-black bg-green-400 hover:bg-green-300 transition-colors duration-300 transform hover:-translate-y-1 hover:scale-105">
         {props.button}<ArrowRight className="ml-3 -mr-1 h-5 w-5" />
        </button>
        </div>
      </div>
    </div>
  );
};

export default PLRProductUsage;