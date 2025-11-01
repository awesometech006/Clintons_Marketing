import React from "react";
import "./WhyChooseUs.css"; // We will create this CSS file next

// --- Feature data based on your content ---
const featureList = [
    {
        icon: (
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
        ),
        title: "Creator-Focused",
        description: "Upload, license, and earn with zero tech hassle.",
    },
    {
        icon: (
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
            </svg>
        ),
        title: "Verified Quality",
        description: "Every digital product is reviewed for quality and performance.",
    },
    {
        icon: (
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
            </svg>
        ),
        title: "Flexible Licensing",
        description: "Personal, commercial, or resell rights — you choose.",
    },
    {
        icon: (
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
            </svg>
        ),
        title: "Real-Time Analytics",
        description: "Track sales, customers, and engagement with detailed insights.",
    },
    {
        icon: (
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a7 7 0 0114 0h1.945M12 3v1m0 16v1m-9-9h-1m18 0h-1M5.636 5.636l-.707-.707M19.091 19.091l-.707-.707M5.636 18.364l-.707.707M19.091 4.909l-.707.707"></path>
            </svg>
        ),
        title: "Global Reach",
        description: "Sell and buy from anywhere. Your market is the world.",
    },
];

function WhyChooseUs() {
    return (
        <section className="why-section">
            <div className="why-container">
                <h2 className="why-headline">Why Choose Us</h2>

                <div className="why-grid">
                    {featureList.map((feature, index) => (
                        <div key={index} className="why-card">
                            <div className="why-card-inner">
                                <div className="why-card-icon">{feature.icon}</div>
                                <h3 className="why-card-title">{feature.title}</h3>
                                <p className="why-card-desc">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;