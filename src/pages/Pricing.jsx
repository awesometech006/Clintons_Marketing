import React from "react";
import "./Pricing.css"; // Main CSS for this page
import PricingHero from "../pages/Pricing/PricingHero";
import PricingGrid from "../pages/Pricing/PricingGrid";

function Pricing() {
    return (
        <div className="pricing-page">
            {/* Section 1: Headline */}
            <PricingHero />

            {/* Section 2: The 4-Plan Grid */}
            <PricingGrid />
        </div>
    );
}

export default Pricing;