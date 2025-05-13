import React from 'react';

const DiscoverButton = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('quienes-somos');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button 
      onClick={scrollToAbout}
      className="bg-primary text-white px-8 py-3 rounded-full font-sans uppercase tracking-wider hover:bg-opacity-90 transition duration-300 animate-bounce"
    >
      Descubre más
    </button>
  );
};

export default DiscoverButton;