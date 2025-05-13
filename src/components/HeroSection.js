import React from 'react';
import DiscoverButton from './DiscoverButton';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-8 animate-fade-in">
          <div className="bg-white h-24 w-24 rounded-full mb-4 flex items-center justify-center shadow-lg">
            <span className="text-gray-500">Logo</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">Fashyel</h1>
          <p className="text-lg text-secondary font-sans">Fashyel se parece a ti</p>
        </div>
        
        <div className="animate-fade-in delay-200">
          <DiscoverButton />
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1.5s ease-out forwards;
        }
        .delay-200 {
          animation-delay: 0.5s;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;