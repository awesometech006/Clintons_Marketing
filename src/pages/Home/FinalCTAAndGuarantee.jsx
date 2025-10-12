import React from 'react';
import { Play, ArrowRight } from 'lucide-react'; // Using lucide-react for the play icon

// Component for a single course card
const CourseCard = ({ title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 flex flex-col h-full hover:shadow-xl transition-shadow duration-200">
    <div className="flex items-center mb-4">
      <span className="text-xs font-semibold text-white bg-black px-2 py-0.5 rounded mr-3">
        Course
      </span>
      <Play className="w-5 h-5 text-red-600" />
    </div>
    <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm flex-grow">{description}</p>
  </div>
);

// Main Component
const VideoTrainingSection = () => {
  const courses = [
    {
      title: 'Digital Business Foundation',
      description: 'Learn how to build a sustainable online business with digital products. Includes business planning, market research, and implementation strategies.',
    },
    {
      title: 'Digital Product Launch Guide',
      description: 'Step-by-step system for launching digital products successfully. Covers product preparation, marketing strategy, and launch execution.',
    },
    {
      title: 'Professional Copywriting',
      description: 'Master the fundamentals of writing effective marketing copy. Learn proven frameworks for creating compelling product descriptions and marketing materials.',
    },
    {
      title: 'Course Creation Masterclass',
      description: 'Professional guide to creating and launching online courses. Learn content planning, recording techniques, and course delivery best practices.',
    },
  ];

  return (
    <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header Section */}
        <div className="mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-gray-700 bg-gray-200 rounded-full mb-6">
            Complete Video Training Included
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-2 leading-tight">
            Master Digital Business
            <br />
            <span className="bg-lime-400 text-black px-4 py-1 rounded-md inline-block">Video Training Included</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start your journey with our comprehensive video training library designed for complete beginners
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              description={course.description}
            />
          ))}
        </div>

        {/* Resell CTA Box */}
        <div className="inline-block bg-black text-white px-6 py-3 rounded-xl shadow-lg mb-10 transform rotate-1">
          <p className="text-lg font-semibold flex items-center justify-center">
            Oh, and guess what? You can resell these courses too! 😉
          </p>
        </div>

        {/* Final CTA Button */}
        <button className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full shadow-lg text-black bg-lime-400 hover:bg-lime-300 transition-colors duration-300 transform hover:-translate-y-1 hover:scale-105">
          Get Instant Access <ArrowRight className="ml-3 -mr-1 h-5 w-5" />
        </button>

        {/* Footer Text */}
        <p className="mt-4 text-sm text-gray-500">
          All training courses included with your purchase
        </p>
      </div>
    </div>
  );
};

export default VideoTrainingSection;