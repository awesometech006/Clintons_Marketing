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
import RichTextSection from "../pages/Home/RichTextSection";
import TestinomonialSection from "../pages/Home/TestinomonialSection";
import AboutSection from "../pages/Home/AboutSection";
import CreatorLanding from "../pages/Home/CreatorLanding";
import FutureRoadmap from "../pages/Home/FutureRoadmap"
function Home() {
  return (
    <div>
      <HeroSection />
      <RichTextSection title="What Is 90caliber Caliber Global Academy?" description="Clinton’s Marketing Hub is your all-in-one digital powerhouse — where creators sell smarter, entrepreneurs build faster, and businesses find everything they need to grow."
      secondaryText="We bring together digital products, marketing kits, AI tools, and automation systems into one intelligent platform — a place where every click leads to opportunity."
      />
      <FeaturesSection />
      <SellingServices />
            <RichTextSection tag="The Vault – Unlimited Access
" title="Welcome to the digital goldmine" description="Unlock thousands of premium assets, exclusive bundles, and AI-powered business tools inside The Vault — our members-only library for entrepreneurs and creators who want unlimited downloads, product drops, and early access to new assets." button="Join The Vault"
      />
            <DigitalProductsSection />
      <TestinomonialSection />
<AboutSection />
     <CreatorLanding/>
     <FutureRoadmap />
      {/* <SolutionSection />
      <ProductShowcase /> */}
      <PLRProductUsage/>
      <PLRMonetizationStrategies/>
      <SuccessStories/>
 
      {/* <DigitalEmpireSection/> */}
      {/* <BonusSection/> */}
      {/* <FinalCTAAndGuarantee /> */}
      <PricingSection/>
      <FAQSection/>
      {/* Hero section, features, etc. */}
    </div>
  );
}

export default Home;
