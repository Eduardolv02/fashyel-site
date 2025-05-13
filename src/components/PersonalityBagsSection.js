import React, { useState } from 'react';
import PersonalityBagItem from './PersonalityBagItem';
import { personalityBags } from '../mock/personalityBags';
import ExpandButton from './ExpandButton';

const PersonalityBagsSection = () => {
  const handleExpand = () => {
    console.log("Expandiendo galería de bolsos por personalidad");
  };

  return (
    <section id="personalidad" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-primary mb-8 text-center">Bolsos basados en tu personalidad</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personalityBags.map(bag => (
            <PersonalityBagItem key={bag.id} bag={bag} />
          ))}
        </div>
        <ExpandButton onClick={handleExpand} />
      </div>
    </section>
  );
};

export default PersonalityBagsSection;