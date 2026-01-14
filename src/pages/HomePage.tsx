import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import PricingSection from '../components/sections/PricingSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <PricingSection />
    </>
  );
};

export default HomePage;