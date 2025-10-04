import React from 'react';
import HeroSection from "../pages/Home/HeroSection";
import SellingServices from "../pages/Home/SellingServices";
import FeaturesSection from "../pages/Home/FeaturesSection";
function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <SellingServices />
      {/* Hero section, features, etc. */}
    </div>
  );
}

export default Home;
