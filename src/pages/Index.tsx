import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import FeaturedTopics from '@/components/sections/FeaturedTopics';
import About from '@/components/sections/About';
import MediaHub from '@/components/sections/MediaHub';
import Expertise from '@/components/sections/Expertise';
import ClinicalPortfolio from '@/components/sections/ClinicalPortfolio';
import Contact from '@/components/sections/Contact';

export default function Index() {
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentSection]);

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return (
          <>
            <Hero onNavigate={setCurrentSection} />
            <FeaturedTopics onNavigate={setCurrentSection} />
          </>
        );
      case 'about':
        return <About />;
      case 'media':
        return <MediaHub />;
      case 'expertise':
        return <Expertise onNavigate={setCurrentSection} />;
      case 'portfolio':
        return <ClinicalPortfolio />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <>
            <Hero onNavigate={setCurrentSection} />
            <FeaturedTopics onNavigate={setCurrentSection} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation onNavigate={setCurrentSection} currentSection={currentSection} />
      <main className="flex-1">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}