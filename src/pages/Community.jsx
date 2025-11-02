import React from "react";
import "./Community.css"; // Main CSS for this page
import CommunityHero from "../pages/Community/CommunityHero";
import CommunityFeatures from "../pages/Community/CommunityFeatures";
import CommunityCTA from "../pages/Community/CommunityCTA";

function Community() {
    return (
        <div className="community-page">
            {/* Section 1: Hero with floating orbs */}
            <CommunityHero />

            {/* Section 2: Horizontal scroll with spotlight */}
            <CommunityFeatures />

            {/* Section 3: Final CTA */}
            <CommunityCTA />
        </div>
    );
}

export default Community;