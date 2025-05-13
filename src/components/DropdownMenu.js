import React, { useState } from 'react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between bg-black text-white px-6 py-3 font-sans uppercase tracking-wider hover:bg-gray-800 transition duration-300"
      >
        Explorar
        <svg 
          className={`w-4 h-4 ml-2 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-56 bg-white shadow-lg rounded-md">
          <div className="py-1">
            <a 
              href="#quienes-somos" 
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition"
              onClick={() => setIsOpen(false)}
            >
              Quiénes somos
            </a>
            <a 
              href="#catalogo" 
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition"
              onClick={() => setIsOpen(false)}
            >
              Catálogo
            </a>
            <a 
              href="#colecciones" 
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition"
              onClick={() => setIsOpen(false)}
            >
              Colecciones
            </a>
            <a 
              href="#personalidad" 
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition"
              onClick={() => setIsOpen(false)}
            >
              Bolsos por personalidad
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;