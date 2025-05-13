import React from 'react';
import DropdownMenu from './DropdownMenu';

const LayoutHeader = () => {
  return (
    <header className="bg-white py-6 px-6 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center">
        <div className="flex items-center">
          <div className="bg-gray-200 h-10 w-10 rounded-full mr-3"></div>
          <h1 className="text-xl font-serif font-bold text-black">Fashyel</h1>
          <span className="ml-3 text-gray-600 font-sans hidden md:block">Fashyel se parece a ti</span>
        </div>
        
        <div className="ml-auto">
          <DropdownMenu />
        </div>
      </div>
    </header>
  );
};

export default LayoutHeader;