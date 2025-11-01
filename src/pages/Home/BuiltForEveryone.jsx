import React, { useState } from "react";
import "./BuiltForEveryone.css";

const content = [
    {
        id: "entrepreneurs",
        title: "For Entrepreneurs",
        description: "Ready-made products to start and scale fast.",
    },
    {
        id:"creators",
        title: "For Creators",
        description: "A launchpad to turn ideas into income.",
    },
    {
        id: "agencies",
        title: "For Agencies",
        description: "White-label tools and templates to boost clients’ growth.",
    },
];

function BuiltForEveryone() {
    const [activeTab, setActiveTab] = useState(content[0].id);

    const activeContent = content.find((item) => item.id === activeTab);

    return (
        <section className="built-section">
            <div className="built-container">
                <h2 className="built-headline">Built for Everyone</h2>

                {/* Tab Headers */}
                <div className="built-tabs-nav">
                    {content.map((item) => (
                        <button
                            key={item.id}
                            className={`built-tab-btn ${item.id === activeTab ? "active" : ""
                                }`}
                            onClick={() => setActiveTab(item.id)}
                        >
                            {item.title}
                        </button>
                    ))}
                    {/* This "glider" is the animated underline */}
                    <div className={`built-tab-glider ${activeTab}`}></div>
                </div>

                {/* Tab Content */}
                <div className="built-tab-content">
                    <p>{activeContent.description}</p>
                </div>
            </div>
        </section>
    );
}

export default BuiltForEveryone;