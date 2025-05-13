import React, { useState } from 'react';
import LayoutHeader from './components/LayoutHeader';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeaturedProducts from './components/FeaturedProducts';
import CollectionsSection from './components/CollectionsSection';
import PersonalityBagsSection from './components/PersonalityBagsSection';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';

const App = () => {
  const [currentPage] = useState('home');
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div className="font-sans text-gray-900">
      <LayoutHeader />
      
      <main>
        {currentPage === 'home' && (
          <>
            <HeroSection />
            <AboutSection />
            <FeaturedProducts />
            <CollectionsSection />
            <PersonalityBagsSection />
          </>
        )}
      </main>
      
      <Footer />
      {isAdmin && <AdminPanel />}
    </div>
  );
};

export default App;

// DONE