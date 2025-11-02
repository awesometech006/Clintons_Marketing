import React from "react";
import "./AnimatedTextSection.css";

function AnimatedTextSection({ headline }) {
    return (
        <section className="about-hero-section">
            <div className="about-hero-gradient-bg"></div>
            <div className="about-hero-content">
                {/* ADDED data-text attribute HERE */}
                <h1 className="about-hero-headline glitch-effect" data-text={headline}>
                    {headline}
                </h1>
            </div>
        </section>
    );
}

export default AnimatedTextSection;