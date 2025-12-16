import React from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="infos" className="bg-cat-brown text-cat-cream">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact */}
          <div>
            <h3 className="font-hand text-4xl font-bold mb-6 border-b border-cat-cream/30 pb-2 inline-block">Contact</h3>
            <ul className="space-y-4 font-sans">
              <li className="flex items-start gap-3">
                <MapPin className="shrink-0 mt-1" />
                <span>217 Rue Droite<br/>04200 Sisteron</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="shrink-0" />
                <a href="tel:0492622128" className="hover:text-white transition-colors">04 92 62 21 28</a>
              </li>
              <li className="flex gap-4 mt-6">
                <a href="#" className="hover:text-cat-dark transition-colors"><Instagram size={28} /></a>
                <a href="#" className="hover:text-cat-dark transition-colors"><Facebook size={28} /></a>
              </li>
            </ul>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="font-hand text-4xl font-bold mb-6 border-b border-cat-cream/30 pb-2 inline-block">Horaires</h3>
            <ul className="space-y-3 font-sans">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Vendredi - Mardi</span>
                <span className="font-bold">18h30 - 21h30</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2 text-white/60">
                <span>Mercredi - Jeudi</span>
                <span className="italic">Fermé</span>
              </li>
            </ul>
          </div>

          {/* Mini About */}
          <div>
            <h3 className="font-hand text-4xl font-bold mb-6 border-b border-cat-cream/30 pb-2 inline-block">Le Chat Noir</h3>
            <p className="font-sans text-sm leading-relaxed mb-4">
              Restaurant de Burgers à Sisteron !<br/>
              Améliore ton burger avec les différents choix.
            </p>
            <div className="w-full h-32 bg-cat-dark/20 rounded-lg flex items-center justify-center overflow-hidden">
               {/* Sisteron Map Embed */}
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2861.956795413346!2d5.940668976686156!3d44.19230577910657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cb7b6c50768e83%3A0x40819a5fd979c0!2s217%20Rue%20Droite%2C%2004200%20Sisteron!5e0!3m2!1sfr!2sfr!4v1709220000000!5m2!1sfr!2sfr" 
                 width="100%" 
                 height="100%" 
                 style={{border:0}} 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 className="opacity-80 hover:opacity-100 transition-opacity"
                 title="Carte Sisteron"
               ></iframe>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center border-t border-cat-cream/20 pt-8 font-sans text-sm opacity-60">
          © {new Date().getFullYear()} Le Chat Noir. Sisteron.
        </div>
      </div>
    </footer>
  );
};