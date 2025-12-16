import React, { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { CatLogo } from './CatLogo';
import { OrderModal } from './OrderModal';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const navLinks = [
    { name: 'Le Concept', href: '#menu' },
    { name: 'Le Chef IA', href: '#chef-ia' },
    { name: 'Infos', href: '#infos' },
  ];

  return (
    <>
      <header className="fixed w-full z-50 bg-cat-dark/95 backdrop-blur-sm text-cat-cream shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
               {/* Simplified Cat Icon for text logo */}
              <span className="font-hand text-4xl font-bold tracking-wider text-cat-brown">Le Chat Noir</span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="hover:text-cat-brown px-3 py-2 rounded-md text-xl font-hand font-bold transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                ))}
                <button 
                  onClick={() => setIsOrderModalOpen(true)}
                  className="bg-cat-brown hover:bg-orange-800 text-white px-6 py-2 rounded-full font-sans font-medium transition-all transform hover:scale-105 flex items-center gap-2"
                >
                  <ShoppingBag size={18} />
                  Commander
                </button>
              </div>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-cat-cream hover:text-white focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-cat-dark border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-cat-brown block px-3 py-2 rounded-md text-2xl font-hand font-bold text-center"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={() => {
                  setIsOpen(false);
                  setIsOrderModalOpen(true);
                }}
                className="w-full mt-4 bg-cat-brown text-white py-3 rounded-md font-bold font-sans flex items-center justify-center gap-2"
              >
                <ShoppingBag size={18} />
                Commander
              </button>
            </div>
          </div>
        )}
      </header>

      <OrderModal isOpen={isOrderModalOpen} onClose={() => setIsOrderModalOpen(false)} />
    </>
  );
};
