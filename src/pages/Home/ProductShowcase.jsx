// src/components/ProductShowcase.jsx

import React from 'react';

// Data for the product cards, based on your image
const productsRow1 = [
  { name: 'Website Templates', image: 'https://i.imgur.com/rO1BCa3.png' },
  { name: 'Reels', image: 'https://i.imgur.com/vHqLBe7.png' },
  { name: 'Social Media Posts', image: 'https://i.imgur.com/k4P4g4C.png' },
  { name: 'ChatGPT Prompts', image: 'https://i.imgur.com/eucJbF3.png' },
  { name: 'Sales Funnels', image: 'https://i.imgur.com/T0bS6FA.png' },
  { name: 'Canva Templates', image: 'https://i.imgur.com/5H7w2hV.png' },
  { name: 'Notion Templates', image: 'https://i.imgur.com/Fw5gN2k.png' },
];

const productsRow2 = [
  { name: 'UI/UX Designs', image: 'https://i.imgur.com/2U2mhCB.png' },
  { name: 'Ebooks', image: 'https://i.imgur.com/kO1ZThd.png' },
  { name: 'Royalty-Free Music', image: 'https://i.imgur.com/I2ZmC2h.png' },
  { name: 'HD Stock Videos', image: 'https://i.imgur.com/x4hVOTp.png' },
  { name: 'Excel Templates', image: 'https://i.imgur.com/rN5G6b2.png' },
  { name: 'Presentations Pack', image: 'https://i.imgur.com/rV8gE22.png' },
  { name: 'Kids Coloring Books', image: 'https://i.imgur.com/kXl8l75.png' },
];

const ProductCard = ({ name, image }) => (
  <div className="flex-shrink-0 w-[300px] md:w-[350px] mx-4 bg-[#1C1C1C] rounded-lg p-2">
    <img src={image} alt={name} className="w-full h-auto rounded-md object-cover" />
    <p className="text-center text-white font-medium mt-2">{name}</p>
  </div>
);

// This component renders a scrolling row of products
const Scroller = ({ products, direction }) => {
    // We need to duplicate the items to create the seamless infinite scroll effect
    const duplicatedProducts = [...products, ...products];

    return (
        <div 
            className="flex"
            // The animation class is applied here based on the direction prop
            style={{ 
                animation: `infinite-scroll-${direction} 35s linear infinite`
            }}
        >
            {duplicatedProducts.map((product, index) => (
                <ProductCard key={index} name={product.name} image={product.image} />
            ))}
        </div>
    );
};


const ProductShowcase = () => {
  return (
    <section className="bg-black w-full py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            No More Starting from <span className="text-lime-400">Zero!</span>
          </h2>
          <p className="text-lg text-gray-300 mt-4">
            Get started with ready-made products that sell!
          </p>
        </div>

        {/* Scrolling Rows Container */}
        <div className="relative space-y-6">
          {/* Row 1: Scrolls Left */}
          <div className="w-full inline-flex flex-nowrap">
            <Scroller products={productsRow1} direction="left" />
          </div>

          {/* Row 2: Scrolls Right */}
          <div className="w-full inline-flex flex-nowrap">
             <Scroller products={productsRow2} direction="right" />
          </div>
        </div>


        {/* Call to Action Button */}
        <div className="text-center mt-12">
          <button className="bg-lime-400 text-black font-bold py-3 px-8 rounded-lg text-lg hover:bg-lime-500 transition-colors duration-300 flex items-center justify-center mx-auto">
            Get Instant Access
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;