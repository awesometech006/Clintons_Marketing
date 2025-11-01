import React from "react";
import "./CategoriesSection.css"; // We will create this CSS file next

// --- Your category data ---
// We split them into two rows for the dual-marquee effect
const categoriesRow1 = [
    {
        name: "AI Prompts & Workflows",
        desc: "Master ChatGPT, Midjourney, and automation.",
    },
    {
        name: "Brand Kits & Templates",
        desc: "Logos, social media, and full identity systems.",
    },
    {
        name: "Marketing Funnels & Tools",
        desc: "Ready-to-launch ad creatives and landing pages.",
    },
    {
        name: "Courses & eBooks",
        desc: "Learn high-income skills in hours.",
    },
];

const categoriesRow2 = [
    {
        name: "Ready-to-Launch Business",
        desc: "Buy entire brands, products, and franchises.",
    },
    {
        name: "Resell-Ready Assets",
        desc: "Earn instantly with PLR and white-label products.",
    },
    {
        name: "3D Models & Motion",
        desc: "3D assets, motion graphics, and VFX.",
    },
    {
        name: "Marketing Assets",
        desc: "Ad creatives, email templates, and more.",
    },
];

function CategoriesSection() {
    // This duplicates the arrays to create the seamless looping effect
    const marqueeRow1 = [...categoriesRow1, ...categoriesRow1];
    const marqueeRow2 = [...categoriesRow2, ...categoriesRow2];

    return (
        <section className="categories-section">
            <div className="categories-container">
                <h2 className="categories-headline">Explore Digital Categories</h2>
            </div>

            {/* --- Marquee Animation --- */}
            <div className="categories-marquee-wrapper">
                {/* Row 1: Scrolls Left */}
                <div className="categories-marquee marquee-left">
                    <div className="marquee-track">
                        {marqueeRow1.map((item, index) => (
                            <div key={index} className="marquee-item">
                                <span className="item-name">{item.name}</span>
                                <span className="item-desc">{item.desc}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2: Scrolls Right */}
                <div className="categories-marquee marquee-right">
                    <div className="marquee-track">
                        {marqueeRow2.map((item, index) => (
                            <div key={index} className="marquee-item">
                                <span className="item-name">{item.name}</span>
                                <span className="item-desc">{item.desc}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="categories-cta-container">
                <button className="categories-cta-btn">Browse Categories &rarr;</button>
            </div>
        </section>
    );
}

export default CategoriesSection;