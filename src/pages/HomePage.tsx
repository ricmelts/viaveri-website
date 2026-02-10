import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import MissionSection from '../components/sections/MissionSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ScrollPath from '../components/ui/ScrollPath';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <ProjectsSection />
      <ScrollPath />
    </>
  );
};

export default HomePage;