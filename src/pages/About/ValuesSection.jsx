import React from "react";
import "./ValuesSection.css";

// SVG Icons for each value (Same as before)
const icons = {
    transparency: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
    ),
    innovation: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
    ),
    community: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h2a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4 5a4 4 0 11-8 0 4 4 0 018 0zM12 14v6m-4-6l-2 2m8-2l2 2m0-12H6a2 2 0 00-2 2v6l-2 2m18 0l-2-2v-6a2 2 0 00-2-2h-4"></path>
        </svg>
    ),
    profitability: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V3m0 13v6m-3-3h6m-3-6H9m3-9V3m-3 3h6m-3-6v3"></path>
        </svg>
    ),
};

// values array (Same as before)
const values = [
    {
        id: "transparency",
        title: "Transparency",
        description: "Clear licensing, clear pricing, no surprises.",
        icon: icons.transparency,
    },
    {
        id: "innovation",
        title: "Innovation",
        description: "Continuous AI integration and new product categories.",
        icon: icons.innovation,
    },
    {
        id: "community",
        title: "Community",
        description: "Creators and buyers working together to grow.",
        icon: icons.community,
    },
    {
        id: "profitability",
        title: "Profitability",
        description: "Every asset is designed to deliver results.",
        icon: icons.profitability,
    },
];

function ValuesSection() {
    return (
        <section className="about-values-section">
            <div className="about-values-container">
                <h2 className="about-values-headline">Our Values</h2>
                <div className="about-values-grid">
                    {values.map((value) => (
                        // REMOVED the "value-card-wrapper"
                        <div key={value.id} className="value-card">
                            <div className="value-card-content">
                                <div className="value-card-icon">{value.icon}</div>
                                <h3 className="value-card-title">{value.title}</h3>
                                {/* Description is now in the same container */}
                                <p className="value-card-description">{value.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ValuesSection;