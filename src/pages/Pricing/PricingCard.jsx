import React, { useState, useRef } from "react";
import "./PricingCard.css";

function PricingCard({ plan, isFeatured }) {
    const [style, setStyle] = useState({});
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        // Get mouse position relative to card center
        const x = e.clientX - (rect.left + width / 2);
        const y = e.clientY - (rect.top + height / 2);

        // Calculate rotation (max 15 degrees)
        const rotateX = (y / (height / 2)) * -15;
        const rotateY = (x / (width / 2)) * 15;

        setStyle({
            transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
            transition: "transform 0.1s ease-out",
        });
    };

    const handleMouseLeave = () => {
        setStyle({
            transform: "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)",
            transition: "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
        });
    };

    const cardClasses = `pricing-card ${isFeatured ? "featured" : ""}`;
    const btnClasses = `card-cta-btn ${isFeatured ? "featured-btn" : ""}`;

    return (
        <div
            className={cardClasses}
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={style}
        >
            {isFeatured && <div className="featured-badge">Most Popular</div>}

            {/* Inner content div to get "lifted" */}
            <div className="card-content">
                <h3 className="card-plan-name">{plan.name}</h3>
                <p className="card-description">{plan.description}</p>

                <div className="card-price">
                    {plan.price}
                    {plan.name !== 'Free Explorer' && <span className="price-per-month">/mo</span>}
                </div>

                <p className="card-ideal-for">{plan.idealFor}</p>

                <button className={btnClasses}>{plan.cta}</button>
            </div>
        </div>
    );
}

export default PricingCard;