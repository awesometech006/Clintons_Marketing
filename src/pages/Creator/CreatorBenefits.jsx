import React from "react";
import "./CreatorBenefits.css";

// This is a helper component for the Aurora effect
const BenefitCard = ({ children, className = "" }) => {
    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    };

    return (
        <div
            className={`benefit-card ${className}`}
            onMouseMove={handleMouseMove}
        >
            <div className="benefit-card-content">
                {children}
            </div>
        </div>
    );
};

function CreatorBenefits() {
    return (
        <section className="creator-benefits-section">
            <div className="creator-benefits-container">
                <h2 className="benefits-headline">🏆 Creator Benefits</h2>

                <div className="benefits-grid">
                    {/* Large Card */}
                    <BenefitCard className="bento-span-2">
                        <span className="benefit-large-text">80%</span>
                        <span className="benefit-small-text">Commission Per Sale</span>
                    </BenefitCard>

                    {/* Small Cards */}
                    <BenefitCard>
                        <span className="benefit-small-text">Dedicated Creator Dashboard</span>
                    </BenefitCard>
                    <BenefitCard>
                        <span className="benefit-small-text">Smart Product Analytics</span>
                    </BenefitCard>
                    <BenefitCard>
                        <span className="benefit-small-text">Featured Listings for Top Creators</span>
                    </BenefitCard>
                    <BenefitCard>
                        <span className="benefit-small-text">Affiliate Collaboration Tools</span>
                    </BenefitCard>

                    {/* Wide Card */}
                    <BenefitCard className="bento-span-2">
                        <span className="benefit-small-text">Lifetime Earnings from The Vault Access</span>
                    </BenefitCard>
                </div>
            </div>
        </section>
    );
}

export default CreatorBenefits;