import React from "react";
import "./AboutPage.css"; // Main CSS for the page
import AnimatedTextSection from "../pages/About/AnimatedTextSection"; // Section 1
import VisionSection from "../pages/About/VisionSection"; // Section 2
import ValuesSection from "../pages/About/ValuesSection"; // Section 3

function AboutPage() {
  return (
    <div className="about-page">
      {/* Section 1: Hero Headline with Glitch Animation */}
      <AnimatedTextSection
        headline="“We’re Not Building a Marketplace — We’re Building a Revolution.”"
      />

      {/* Section 2: Vision & Movement */}
      <VisionSection />

      {/* Section 3: Our Values */}
      <ValuesSection />

      {/* You can add more sections here */}
    </div>
  );
}

export default AboutPage;