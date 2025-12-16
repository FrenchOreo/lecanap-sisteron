import React from 'react';
import { ArrowDown } from 'lucide-react';
import { CatLogo } from './CatLogo';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center bg-cat-brown text-cat-cream overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
      
      <div className="z-10 text-center px-4 animate-fade-in-up">
        <div className="mb-6 mx-auto w-48 h-48 sm:w-64 sm:h-64 bg-cat-dark rounded-full flex items-center justify-center shadow-2xl border-4 border-cat-cream">
           {/* Stylized Cat Silhouette placeholder */}
           <CatLogo className="w-32 h-32 sm:w-44 sm:h-44 text-cat-brown" />
        </div>
        
        <h1 className="font-hand text-6xl sm:text-8xl font-bold mb-4 drop-shadow-lg">
          Le Chat Noir
        </h1>
        <div className="w-24 h-1 bg-cat-cream mx-auto mb-6 rounded-full"></div>
        <p className="font-sans text-lg sm:text-2xl font-light tracking-wide mb-8 uppercase">
          Restaurant de Burgers à Sisteron • Sur Place ou à Emporter
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#menu" 
            className="bg-cat-cream text-cat-brown hover:bg-white px-8 py-3 rounded-full font-bold font-sans transition-all transform hover:scale-105 shadow-lg"
          >
            Voir la Carte
          </a>
          <a 
            href="#infos" 
            className="bg-transparent border-2 border-cat-cream text-cat-cream hover:bg-cat-cream hover:text-cat-brown px-8 py-3 rounded-full font-bold font-sans transition-all"
          >
            Nous Trouver
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 animate-bounce">
        <ArrowDown size={32} />
      </div>
    </section>
  );
};