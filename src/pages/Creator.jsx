import React from "react";
import "./Creator.css"; // Main CSS for this page
import CreatorHero from "../pages/Creator/CreatorHero";
import CreatorHowTo from "../pages/Creator/CreatorHowTo";
import CreatorBenefits from "../pages/Creator/CreatorBenefits";
import CreatorCTA from "../pages/Creator/CreatorCTA";

function Creator() {
    return (
        <div className="creator-page">
            {/* Section 1: "Upload Once. Earn Forever." */}
            <CreatorHero />

            {/* Section 2: "How It Works" (4 Steps) */}
            <CreatorHowTo />

            {/* Section 3: "Creator Benefits" (Bento Grid) */}
            <CreatorBenefits />

            {/* Section 4: Final CTA */}
            <CreatorCTA />
        </div>
    );
}

export default Creator;