import React from 'react';
import { MENU_STEPS, EXTRAS, FRIES } from '../constants';
import { Check, Plus } from 'lucide-react';

export const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-20 bg-cat-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="bg-cat-brown text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4 inline-block">Le Concept</span>
          <h2 className="font-hand text-6xl font-bold text-cat-dark mb-4">Compose ton Burger !</h2>
          <p className="font-sans text-cat-dark/70 text-xl max-w-2xl mx-auto">
            Améliore ton burger avec les différents choix !<br/>
            Une base unique à <span className="font-bold text-cat-brown text-2xl">11,50€</span>
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {MENU_STEPS.map((step) => (
            <div key={step.step} className="bg-white p-6 rounded-2xl shadow-lg border-2 border-transparent hover:border-cat-brown/20 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-cat-brown text-white flex items-center justify-center font-hand text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="font-hand text-3xl font-bold text-cat-dark">{step.title}</h3>
              </div>
              <ul className="space-y-2 mb-4">
                {step.options.map((option, idx) => (
                  <li key={idx} className="flex items-center gap-2 font-sans text-gray-700">
                    <Check size={16} className="text-green-600" />
                    {option}
                  </li>
                ))}
              </ul>
              {step.note && (
                <div className="text-sm font-bold text-cat-brown bg-cat-brown/10 p-2 rounded-lg text-center">
                  {step.note}
                </div>
              )}
            </div>
          ))}

          {/* Extras Card */}
          <div className="bg-cat-dark text-cat-cream p-6 rounded-2xl shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-white text-cat-dark flex items-center justify-center font-bold">
                  <Plus size={20} />
                </div>
                <h3 className="font-hand text-3xl font-bold">Suppléments</h3>
              </div>
              <ul className="space-y-3">
                {EXTRAS.map((extra, idx) => (
                  <li key={idx} className="flex justify-between items-center font-sans border-b border-white/20 pb-2">
                    <span>{extra.name}</span>
                    <span className="font-bold text-cat-brown">+{extra.price}€</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Fries Section */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-cat-brown/10 max-w-4xl mx-auto transform rotate-1 hover:rotate-0 transition-transform">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="font-hand text-5xl font-bold text-cat-brown mb-2">Les Frites Maison</h3>
              <p className="font-sans text-gray-600 mb-4">{FRIES.details}</p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="text-sm font-bold text-cat-dark uppercase">Tuning (+{FRIES.toppingPrice}€) :</span>
                {FRIES.toppings.map(t => (
                  <span key={t} className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-bold">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-cat-brown text-white p-6 rounded-2xl text-center min-w-[150px]">
              <span className="block font-hand text-5xl font-bold">{FRIES.price.toFixed(2)}€</span>
              <span className="text-xs opacity-80 uppercase tracking-widest">La portion</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};