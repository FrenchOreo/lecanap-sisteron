import React from 'react';
import { Phone, Bike, X, ShoppingBag } from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-cat-cream rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden animate-fade-in-up">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-black/5 hover:bg-black/10 rounded-full transition-colors"
        >
          <X size={24} className="text-cat-dark" />
        </button>

        <div className="p-8 text-center">
          <h2 className="font-hand text-5xl font-bold text-cat-dark mb-2">Commander</h2>
          <p className="text-gray-600 mb-8 font-sans">Comment souhaitez-vous déguster votre burger ?</p>

          <div className="grid gap-4">
            {/* Click & Collect Option */}
            <div className="bg-white p-6 rounded-2xl border-2 border-cat-brown/10 hover:border-cat-brown transition-all group">
              <div className="flex items-center justify-center w-12 h-12 bg-cat-brown text-white rounded-full mx-auto mb-4">
                <ShoppingBag size={24} />
              </div>
              <h3 className="font-hand text-3xl font-bold mb-2">Click & Collect</h3>
              <p className="text-sm text-gray-500 mb-4">Commandez par téléphone et récupérez sur place</p>
              <a 
                href="tel:0492622128" 
                className="inline-flex items-center justify-center gap-2 w-full py-3 bg-cat-dark text-white rounded-xl font-bold hover:bg-black transition-colors"
              >
                <Phone size={18} />
                04 92 62 21 28
              </a>
            </div>

            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink-0 mx-4 text-gray-400 font-hand text-xl">OU</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Uber Eats Option */}
            <div className="bg-[#06C167]/10 p-6 rounded-2xl border-2 border-transparent hover:border-[#06C167] transition-all">
              <div className="flex items-center justify-center w-12 h-12 bg-[#06C167] text-white rounded-full mx-auto mb-4">
                <Bike size={24} />
              </div>
              <h3 className="font-hand text-3xl font-bold mb-2">Livraison</h3>
              <p className="text-sm text-gray-500 mb-4">Faites-vous livrer chez vous</p>
              <a 
                href="https://www.ubereats.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#06C167] text-white rounded-xl font-bold hover:bg-[#05a357] transition-colors"
              >
                Commander sur Uber Eats
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
