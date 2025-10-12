import React from 'react';
import HeroSection from "../pages/Home/HeroSection";
import SellingServices from "../pages/Home/SellingServices";
import FeaturesSection from "../pages/Home/FeaturesSection";
import DigitalProductsSection from "../pages/Home/DigitalProductsSection";
import SolutionSection from "../pages/Home/SolutionSection";
import ProductShowcase from "../pages/Home/ProductShowcase";
import PLRProductUsage from "../pages/Home/PLRProductUsage";
import PLRMonetizationStrategies from "../pages/Home/PLRMonetizationStrategies";
import SuccessStories from "../pages/Home/SuccessStories";
import DigitalEmpireSection from "../pages/Home/DigitalEmpireSection";
import BonusSection from "../pages/Home/BonusSection";
import FinalCTAAndGuarantee from "../pages/Home/FinalCTAAndGuarantee";
import PricingSection from "../pages/Home/PricingSection";
import FAQSection from "../pages/Home/FAQSection_V2";
function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <SellingServices />
      <DigitalProductsSection />
      <SolutionSection />
      <ProductShowcase />
      <PLRProductUsage/>
      <PLRMonetizationStrategies/>
      <SuccessStories/>
      <DigitalEmpireSection/>
      <BonusSection/>
      <FinalCTAAndGuarantee />
      <PricingSection/>
      <FAQSection/>
      {/* Hero section, features, etc. */}
    </div>
  );
}

export default Home;
