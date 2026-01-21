import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ZoomIn } from 'lucide-react';
import { CHARACTERS, LOGO_URL, MAP_URL, PALACE_LOCATIONS } from './constants';
import CharacterCard from './components/CharacterCard';
import Modal from './components/Modal';
import CharacterDetail from './components/CharacterDetail';

export default function App() {
  const [selectedCharId, setSelectedCharId] = useState<string | null>(null);
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);

  const selectedCharacter = CHARACTERS.find(c => c.id === selectedCharId);

  return (
    <div className="min-h-screen font-sans text-royal-dark bg-royal-paper selection:bg-royal-gold/30">
      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-5" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-paper.png")' }}></div>

      {/* Header */}
      <header className="fixed w-full top-0 z-40 bg-royal-cream/80 backdrop-blur-md border-b border-royal-gold/20 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-center">
          <img src={LOGO_URL} alt="Logo" className="h-16 md:h-20 object-contain drop-shadow-md" />
        </div>
      </header>

      <main className="pt-28 pb-16 space-y-24 max-w-6xl mx-auto px-6">
        
        {/* 1. World View Section */}
        <section className="text-center space-y-8 py-10 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <span className="block text-royal-gold font-serif text-lg tracking-[0.3em] font-bold">WORLD VIEW</span>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
              2026년 대한민국.
            </h1>
            <div className="w-16 h-1 bg-royal-dark mx-auto my-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto leading-loose text-lg font-light">
              당신을 사랑하는 네명의 후궁들.
            </p>
          </motion.div>
        </section>

        {/* 2. Characters Section */}
        <section>
          <div className="flex items-center gap-4 mb-10 justify-center">
             <div className="h-px w-12 bg-gray-300"></div>
             <h2 className="text-3xl font-serif font-bold text-center">CHARACTER</h2>
             <div className="h-px w-12 bg-gray-300"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {CHARACTERS.map((char) => (
              <CharacterCard 
                key={char.id} 
                character={char} 
                onClick={() => setSelectedCharId(char.id)} 
              />
            ))}
          </div>
        </section>

        {/* 3. Palace Section */}
        <section className="bg-white p-6 md:p-12 rounded-2xl shadow-xl border border-royal-gold/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 font-serif text-9xl text-royal-gold select-none pointer-events-none">宮</div>
          
          <div className="mb-8 text-center md:text-left">
             <h2 className="text-3xl font-serif font-bold mb-2">선화궁 (宣和宮)</h2>
             <p className="text-gray-500">서울 종로구 북악산 기슭에 위치한 황제의 거처</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Map Interaction */}
            <div className="relative group cursor-zoom-in rounded-lg overflow-hidden border-2 border-royal-dark/10 shadow-inner" onClick={() => setIsMapModalOpen(true)}>
              <img src={MAP_URL} alt="Palace Map" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                 <div className="bg-white/90 px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                    <ZoomIn size={16} />
                    <span className="text-xs font-bold">지도 크게 보기</span>
                 </div>
              </div>
            </div>

            {/* Locations List */}
            <div className="space-y-6">
              {PALACE_LOCATIONS.map((loc, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="mt-1">
                    <MapPin className="text-royal-gold group-hover:text-red-700 transition-colors" size={20} />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-gray-800 group-hover:text-royal-gold transition-colors">{loc.name}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mt-1">{loc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-royal-dark text-royal-cream py-8 border-t-4 border-royal-gold">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="font-serif font-bold text-lg mb-4 text-royal-gold">플레이 가능 플랫폼</h3>
          <div className="flex justify-center gap-8 text-sm md:text-base tracking-widest opacity-80">
            <span>크랙 (CRACK)</span>
            <span className="text-royal-gold">/</span>
            <span>플레이툰 (PLAITOON)</span>
          </div>
          <p className="mt-8 text-xs text-gray-500">© 2026 ROYAL ROMANCE. All Rights Reserved.</p>
        </div>
      </footer>

      {/* Character Modal */}
      <Modal 
        isOpen={!!selectedCharId} 
        onClose={() => setSelectedCharId(null)}
        title={selectedCharacter?.name}
      >
        {selectedCharacter && <CharacterDetail character={selectedCharacter} />}
      </Modal>

      {/* Map Modal */}
      <Modal
        isOpen={isMapModalOpen}
        onClose={() => setIsMapModalOpen(false)}
        title="선화궁 배치도"
      >
        <div className="flex justify-center bg-gray-50 p-4 rounded-lg">
           <img src={MAP_URL} alt="Full Map" className="max-w-full max-h-[70vh] object-contain" />
        </div>
        <p className="text-center mt-4 text-gray-500 text-sm">
           겉모습은 완벽한 조선시대 양식이지만, 내부는 최첨단 기술이 집약되어 있습니다.
        </p>
      </Modal>
    </div>
  );
}