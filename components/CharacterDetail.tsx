import React, { useState } from 'react';
import { Character } from '../types';
import { motion } from 'framer-motion';

interface CharacterDetailProps {
  character: Character;
}

const CharacterDetail: React.FC<CharacterDetailProps> = ({ character }) => {
  const [activeImage, setActiveImage] = useState(character.images[0]);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Left: Gallery */}
      <div className="space-y-4">
        <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-md border-4 border-white bg-gray-100">
          <motion.img
            key={activeImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            src={activeImage}
            alt={character.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {character.images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImage(img)}
              className={`relative flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${
                activeImage === img ? 'border-royal-gold scale-105' : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <img src={img} alt="thumb" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Right: Info */}
      <div className="space-y-6">
        <div>
          <span className={`inline-block px-3 py-1 text-xs text-white rounded-full mb-2 ${character.themeColor}`}>
            {character.age}세 · {character.height}
          </span>
          <h2 className="text-4xl font-serif font-bold text-royal-dark mb-4 border-b pb-4 border-royal-gold/30">
            {character.name}
          </h2>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-royal-gold font-serif flex items-center">
            <span className="w-2 h-2 rounded-full bg-royal-gold mr-2"></span>
            인물 소개
          </h3>
          <ul className="space-y-2">
            {character.description.map((desc, i) => (
              <li key={i} className="text-gray-700 text-sm md:text-base leading-relaxed pl-4 border-l-2 border-gray-200">
                {desc}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm mt-6">
          <h3 className="text-lg font-bold text-gray-800 font-serif mb-2 flex items-center">
             <span className="text-xl mr-2">🏰</span>
             처소 : {character.roomName}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {character.roomDesc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;