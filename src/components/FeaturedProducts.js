import React from 'react';
import ProductItem from './ProductItem';
import { products } from '../mock/products';
import ExpandButton from './ExpandButton';

const FeaturedProducts = () => {
  const featured = products.filter(product => product.featured);
  
  const handleExpand = () => {
    console.log("Expandiendo galería de productos");
  };
  
  return (
    <section id="catalogo" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-primary mb-8 text-center">Más solicitados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {featured.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
        <ExpandButton onClick={handleExpand} />
      </div>
    </section>
  );
};

export default FeaturedProducts;