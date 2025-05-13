import React from 'react';

const CollectionItem = ({ collection }) => {
  return (
    <div className="group relative overflow-hidden h-96 rounded-xl">
      <div className="bg-gray-200 h-full flex items-center justify-center">
        <span className="text-gray-500">Imagen: {collection.coverImage}</span>
      </div>
      
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
        <div className="text-center p-6">
          <h3 className="font-serif text-2xl font-bold text-white mb-2">{collection.name}</h3>
          <p className="text-gray-200 font-sans mb-4">{collection.description}</p>
          <button className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-xl font-sans uppercase tracking-wider text-sm hover:bg-white hover:text-primary transition duration-300">
            Ver colección
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollectionItem;