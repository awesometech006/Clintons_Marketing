import React from "react";
import "./PricingHero.css";

function PricingHero() {
    return (
        <section className="pricing-hero-section">
            <div className="pricing-hero-container">
                <h1 className="pricing-headline shimmer-text">
                    Choose the Right Plan for Your Digital Journey.
                </h1>

                {/* Page-level CTAs */}
                <div className="page-cta-buttons">
                    <button className="page-cta-btn btn-primary">Start Free</button>
                    <button className="page-cta-btn btn-secondary">Upgrade Anytime</button>
                </div>
            </div>
        </section>
    );
}

export default PricingHero;