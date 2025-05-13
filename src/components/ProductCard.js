import React, { useState } from 'react';
import Modal from './Modal';

const ProductCard = ({ product }) => {
  const [showModal, setShowModal] = useState(false);

  const handleWhatsApp = () => {
    window.open('https://wa.me/525512345678', '_blank');
  };

  return (
    <>
      <div className="group relative bg-white overflow-hidden shadow-md hover:shadow-xl transition duration-500">
        <div className="bg-gray-200 h-64 flex items-center justify-center">
          <span className="text-gray-500">Imagen: {product.image}</span>
        </div>
        
        <div className="p-6">
          <h3 className="font-serif text-xl font-bold text-black mb-2">{product.name}</h3>
          <p className="text-gray-600 font-sans mb-4">{product.description}</p>
          
          <div className="flex justify-between items-center">
            <span className="font-serif text-lg text-gold-500">${product.price}</span>
            <button 
              onClick={() => setShowModal(true)}
              className="bg-black text-white px-4 py-2 font-sans text-sm uppercase tracking-wider hover:bg-gray-800 transition duration-300"
            >
              Comprar
            </button>
          </div>
        </div>
        
        <div className="absolute top-4 right-4 bg-gold-500 text-white px-3 py-1 font-sans text-xs uppercase tracking-wider">
          Nuevo
        </div>
      </div>

      {showModal && (
        <Modal 
          product={product} 
          onClose={() => setShowModal(false)}
          onWhatsApp={handleWhatsApp}
        />
      )}
    </>
  );
};

export default ProductCard;