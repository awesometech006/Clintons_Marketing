import React, { useEffect, useRef, useState } from "react";
import "./CreatorHowTo.css";

const steps = [
    {
        title: "Step 1: Create & Upload",
        desc: "Add your templates, courses, AI tools, or assets in just a few clicks.",
    },
    {
        title: "Step 2: Set Your Price & License",
        desc: "Choose personal, commercial, or resell rights. Full flexibility.",
    },
    {
        title: "Step 3: Earn on Every Sale",
        desc: "Automatic payouts, detailed analytics, and instant visibility.",
    },
    {
        title: "Step 4: Collaborate & Grow",
        desc: "Join the Creator Partner Program to multiply your reach.",
    },
];

function CreatorHowTo() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 } // Trigger when 20% is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            className={`creator-howto-section ${isVisible ? 'is-visible' : ''}`}
            ref={sectionRef}
        >
            <div className="creator-howto-container">
                {/* The Timeline Line */}
                <div className="timeline-line"></div>

                {steps.map((step, index) => (
                    <div key={index} className="timeline-step">
                        <div className="timeline-node"></div>
                        <div className="timeline-content">
                            <h3 className="timeline-title">{step.title}</h3>
                            <p className="timeline-desc">{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default CreatorHowTo;