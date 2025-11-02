import React from "react";
import "./PricingGrid.css";
import PricingCard from "./PricingCard"; // We'll create this next

const plans = [
    {
        name: "Free Explorer",
        description: "Browse & download selected assets",
        price: "₹0",
        idealFor: "Curious Learners",
        cta: "Start for Free",
    },
    {
        name: "Creator Pro",
        description: "Upload 10 products, earn 80% commission, analytics access",
        price: "₹499",
        idealFor: "Individual Creators",
        cta: "Get Started",
    },
    {
        name: "Vault Access",
        description: "Unlimited downloads, product drops, and premium assets",
        price: "₹999",
        idealFor: "Entrepreneurs",
        cta: "Sign Up Now",
    },
    {
        name: "Agency Suite",
        description: "Unlimited uploads, white-label license, API & support",
        price: "₹2999",
        idealFor: "Agencies & Teams",
        cta: "Contact Sales",
    },
];

function PricingGrid() {
    return (
        <section className="pricing-grid-section">
            <div className="pricing-grid-container">
                {plans.map((plan) => (
                    <PricingCard
                        key={plan.name}
                        plan={plan}
                        isFeatured={plan.name === "Vault Access"}
                    />
                ))}
            </div>
        </section>
    );
}

export default PricingGrid;