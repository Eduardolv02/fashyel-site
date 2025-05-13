import React, { useState } from 'react';
import Modal from './Modal';

const PersonalityBagItem = ({ bag }) => {
  const [showModal, setShowModal] = useState(false);

  const handleWhatsApp = () => {
    window.open('https://wa.me/525512345678', '_blank');
  };

  return (
    <>
      <div className="group relative bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-500">
        <div className="bg-gray-200 h-64 flex items-center justify-center">
          <span className="text-gray-500">Imagen: {bag.image}</span>
        </div>
        
        <div className="p-6">
          <h3 className="font-serif text-xl font-bold text-primary mb-2">{bag.name}</h3>
          <p className="text-accent font-sans mb-2">{bag.personality}</p>
          <p className="text-gray-600 font-sans mb-4">{bag.description}</p>
          
          <div className="flex justify-between items-center">
            <span className="font-serif text-lg text-accent">${bag.price}</span>
            <button 
              onClick={() => setShowModal(true)}
              className="bg-primary text-white px-4 py-2 rounded-xl font-sans text-sm uppercase tracking-wider hover:bg-opacity-90 transition duration-300"
            >
              Comprar
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <Modal 
          product={bag} 
          onClose={() => setShowModal(false)}
          onWhatsApp={handleWhatsApp}
        />
      )}
    </>
  );
};

export default PersonalityBagItem;