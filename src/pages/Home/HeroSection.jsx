import React from "react";
import AnimatedHeroBackground from "./AnimatedHeroBackground";
import "../../styles/global.css" // <-- IMPORT THE CSS FILE HERE

function HeroSection() {
  return (
    <section className="hero-section">

      {/* --- Background Visual --- */}
      <div className="hero-background">
        <AnimatedHeroBackground />
      </div>

      {/* --- Foreground Content --- */}
      <div className="hero-content">
        <h1>
          The Future of Digital <br /> Commerce Starts Here.
        </h1>

        <p>
          Discover, Create, and Scale with the world’s most advanced platform
          for digital assets, creators, and entrepreneurs.
        </p>

        {/* CTA Buttons */}
        <div className="hero-buttons">
          <button className="btn btn-primary">
            {/* SVG icon for a right arrow */}
            <svg
              className="btn-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
            Explore The Vault
          </button>
          <button className="btn btn-secondary">
            Become a Creator
          </button>
        </div>
      </div>

    </section>
  );
}

export default HeroSection;