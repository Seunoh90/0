import React from 'react';
import { motion } from 'framer-motion';
import { Character } from '../types';
import { Search } from 'lucide-react';

interface CharacterCardProps {
  character: Character;
  onClick: () => void;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative cursor-pointer bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:shadow-royal-gold/20 transition-all duration-300"
      onClick={onClick}
    >
      <div className="aspect-[3/4] overflow-hidden relative">
        <img
          src={character.images[0]}
          alt={character.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        
        {/* Hover Overlay Icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/50">
                <Search className="text-white w-6 h-6" />
            </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex items-center gap-2 mb-1">
             <div className={`w-1 h-8 ${character.themeColor}`}></div>
             <div>
                <h3 className="text-2xl font-serif font-bold">{character.name}</h3>
                <p className="text-xs opacity-80 font-sans tracking-widest">{character.roomName.split(' ')[0]}</p>
             </div>
          </div>
          <p className="text-sm text-gray-200 mt-2 font-light line-clamp-2">
            {character.shortDesc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default CharacterCard;