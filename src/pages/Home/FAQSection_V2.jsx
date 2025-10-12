import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react'; // Using lucide-react for the accordion icons

// Component for a single FAQ item (Accordion)
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-base font-normal text-gray-800">{question}</span>
        {isOpen ? (
          <Minus className="w-5 h-5 text-gray-500" />
        ) : (
          <Plus className="w-5 h-5 text-gray-500" />
        )}
      </button>
      {/* Answer content, revealed with a simple conditional */}
      {isOpen && (
        <div className="pb-4 pt-1">
          {/* Placeholder text based on expected answers for a PLR site */}
          <p className="text-gray-600 leading-relaxed text-sm">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

// Main Component
const FAQSection = () => {
  // Questions based on the image, with typical PLR answers
  const faqData = [
    {
      question: 'What are PLR products?',
      answer: 'PLR (Private Label Rights) products are digital goods like e-books, templates, and courses that you can legally modify, rebrand, and sell as your own. You keep 100% of the profit.',
    },
    {
      question: 'How can I use these products?',
      answer: 'You can use them to sell directly, create online courses, build membership sites, use them as lead magnets to grow your email list, or even repurpose them for blog content and social media.',
    },
    {
      question: 'Do I need to credit the original creator?',
      answer: 'No. With the PLR license we provide, you are not required to give credit to the original creator. You can confidently claim authorship and put your own name on the products.',
    },
    {
      question: 'Are the products unique?',
      answer: 'While the base product is sold to multiple users (that\'s the nature of PLR), we encourage you to **customize, rebrand, and modify** the content to make it unique to your business and target audience.',
    },
    {
      question: 'What\'s included in my membership?',
      answer: 'Your membership includes instant access to the entire library of 1M+ PLR products, full commercial and Master Resell Rights, all future product updates, and the bonus marketing toolkit.',
    },
    {
      question: 'Can I cancel my subscription?',
      answer: 'Yes, you can cancel your subscription at any time directly from your account settings. If you purchase the one-time Lifetime plan, there are no ongoing payments to cancel.',
    },
    {
      question: 'How often do you add new products?',
      answer: 'We constantly refresh the library! New, trending, and high-demand digital products are typically added every week to ensure you always have fresh inventory to sell.',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we stand behind our value with a **30-Day, No-Questions-Asked Money-Back Guarantee**. If you are not satisfied, we will issue a full refund.',
    },
  ];

  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-gray-700 bg-gray-100 rounded-full mb-4">
            Common Questions
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-gray-600">
            Everything you need to know about getting started with PLR products
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="bg-white border border-gray-200 rounded-xl divide-y divide-gray-100 shadow-md">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;