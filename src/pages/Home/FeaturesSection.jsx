import React from 'react';

// --- SVG Icons (as React components) ---
// Using inline SVGs makes the component self-contained.
const TrendingUpIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-3.75-.625m3.75.625V3.375" />
  </svg>
);

const GraduationCapIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path d="M12 14.25L2.25 9l9.75-5.25L21.75 9l-9.75 5.25z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9v6m16.5-6v6l-9.75 5.25L3.75 15V9m16.5 0l-9.75 5.25L3.75 9" />
  </svg>
);

const BundleIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75L3 7.5m9 5.25l9-5.25" />
  </svg>
);

const GiftIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 19.5v-8.25M12 4.875A2.625 2.625 0 1014.625 2.25 2.625 2.625 0 0012 4.875zM12 4.875L12 19.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.875c-2.43 0-4.5 1.48-5.463 3.633A2.25 2.25 0 005.25 9.75h13.5A2.25 2.25 0 0017.463 8.508C16.5 6.354 14.43 4.875 12 4.875z" />
  </svg>
);


// --- Feature Data ---
const featuresLeft = [
  {
    icon: <TrendingUpIcon className="w-8 h-8 text-black" />,
    title: 'Sell Instantly',
    description: 'Simply resell or promote the content with your own branding.',
  },
  {
    icon: <GraduationCapIcon className="w-8 h-8 text-black" />,
    title: 'Sell DIY Courses',
    description: 'Merge different materials to build a comprehensive course.',
  },
];

const featuresRight = [
  {
    icon: <BundleIcon className="w-8 h-8 text-black" />,
    title: 'Sell in Bundles',
    description: 'Group products together and sell as one package.',
  },
  {
    icon: <GiftIcon className="w-8 h-8 text-black" />,
    title: 'Give Away for Free',
    description: 'Use as lead magnets or include as free bonuses.',
  },
];


const FeaturesSection = () => {
  return (
    <div className="relative bg-[#F9FFF6] overflow-hidden py-20 sm:py-32">
      {/* Green background glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-lime-200/30 rounded-full blur-3xl" 
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="inline-block bg-zinc-100 text-sm text-zinc-600 font-medium px-4 py-2 rounded-full">
            Your Tools. Your Terms. Your Success
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900">
            <span className="px-4 py-2 bg-black text-[#B1F35F] rounded-2xl">No Middleman</span> just you and your hustle!
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-zinc-600">
            Digital products, made for you and ready to sell. It's never been easier—<span className="italic text-[#F26B54]">pick your product, market it, and start profiting!</span>
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-3 items-center gap-y-16 lg:gap-x-8">
          
          {/* Left Features */}
          <div className="space-y-12 text-center lg:text-left">
            {featuresLeft.map((feature, index) => (
              <div key={index} className="flex flex-col items-center lg:items-start lg:flex-row gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900">{feature.title}</h3>
                  <p className="mt-1 text-zinc-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Center Image and CTA */}
          <div className="flex flex-col items-center order-first lg:order-none">
             <a
              href="#"
              className="bg-[#B6FF6B] text-black font-bold text-lg px-12 py-4 rounded-xl shadow-lg hover:bg-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-[#F9FFF6] transition-all duration-300 ease-in-out"
            >
              Get Instant Access
            </a>
            <div className="relative mt-2">
              <img 
                src="https://storage.googleapis.com/msgsndr/0iO3mS8O2ALa5vmXwP3d/media/67f4a27267351374dfdf8372.png" // Replace with your actual image
                alt="Claw machine grabbing a smartphone" 
                className="w-full max-w-sm" 
              />
            </div>
          </div>
          
          {/* Right Features */}
          <div className="space-y-12 text-center lg:text-left">
            {featuresRight.map((feature, index) => (
              <div key={index} className="flex flex-col items-center lg:items-start lg:flex-row gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900">{feature.title}</h3>
                  <p className="mt-1 text-zinc-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;