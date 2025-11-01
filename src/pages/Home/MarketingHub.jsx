import React, { useState, useEffect } from "react";
import "./MarketingHub.css"; // We will create this CSS file next

// --- Feature data based on your content ---
const features = [
    {
        icon: (
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"></path>
            </svg>
        ),
        name: "Digital Products",
    },
    {
        icon: (
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m6 0h-6"></path>
            </svg>
        ),
        name: "Marketing Kits",
    },
    {
        icon: (
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m-2 6h-2M7 7l1.414-1.414M17 7l-1.414-1.414M7 17l1.414 1.414M17 17l-1.414 1.414M12 12a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
        ),
        name: "AI Tools",
    },
    {
        icon: (
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
        ),
        name: "Automation Systems",
    },
];

function MarketingHub() {
    const [currentFeature, setCurrentFeature] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentFeature((prevFeature) => (prevFeature + 1) % features.length);
        }, 3000); // Cycle every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hub-section">
            <div className="hub-container">
                <h2 className="hub-headline">
                    Clinton’s Marketing Hub is your all-in-one digital powerhouse
                </h2>
                <p className="hub-subheadline">
                    We bring together digital products, marketing kits, AI tools, and
                    automation systems into one intelligent platform — a place where every
                    click leads to opportunity.
                </p>

                <div className="hub-features-showcase">
                    {features.map((feature, index) => (
                        <div
                            key={feature.name}
                            className={`hub-feature-item ${index === currentFeature ? "active" : ""
                                }`}
                        >
                            <div className="hub-feature-icon">{feature.icon}</div>
                            <span className="hub-feature-name">{feature.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default MarketingHub;