import React from 'react';
import { testimonials } from '../mock/testimonials';

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-black mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-gray-600 font-sans max-w-2xl mx-auto">
            Experiencias reales con piezas Fashyel
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-gray-200 h-12 w-12 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-serif font-bold text-black">{testimonial.name}</h4>
                  <p className="text-gray-500 font-sans text-sm">{testimonial.product}</p>
                </div>
              </div>
              <p className="text-gray-700 font-sans italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;