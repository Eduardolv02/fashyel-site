import React from 'react';
import CollectionItem from './CollectionItem';
import { collections } from '../mock/collections';
import ExpandButton from './ExpandButton';

const CollectionsSection = () => {
  const handleExpand = () => {
    console.log("Expandiendo galería de colecciones");
  };
  
  return (
    <section id="colecciones" className="py-20 px-6 bg-secondary bg-opacity-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-primary mb-8 text-center">Nuestras colecciones</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map(collection => (
            <CollectionItem key={collection.id} collection={collection} />
          ))}
        </div>
        <ExpandButton onClick={handleExpand} />
      </div>
    </section>
  );
};

export default CollectionsSection;