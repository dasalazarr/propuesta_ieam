import Navigation from './Navigation';
import HeroSection from './HeroSection';
import FeaturedResearch from './FeaturedResearch';
import React from 'react';
import StrategySection from './StrategySection';
import LatestAnalysis from './LatestAnalysis';
import HomeEvents from './HomeEvents';
import NewsletterCTA from './NewsletterCTA';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <StrategySection />
      <LatestAnalysis />
      <HomeEvents />
      <NewsletterCTA />
      <Footer />
    </div>
  );
};

export default Home;
