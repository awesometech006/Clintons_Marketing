import React from "react";
import "./CommunityHero.css";

function CommunityHero() {
    return (
        <section className="community-hero-section">
            {/* --- Animated Orbs --- */}
            <div className="orb-container">
                <div className="orb orb-1"></div>
                <div className="orb orb-2"></div>
                <div className="orb orb-3"></div>
            </div>

            {/* --- Content --- */}
            <div className="community-hero-content">
                <h1 className="community-hero-headline">
                    We’re More Than a Platform — We’re a Movement.
                </h1>
                <p className="community-hero-subheadline">
                    Join a community of forward thinkers, creators, and digital hustlers.
                    Engage in challenges, share insights, and collaborate on global projects.
                </p>
            </div>
        </section>
    );
}

export default CommunityHero;