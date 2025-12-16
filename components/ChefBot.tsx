import React, { useState } from 'react';
import { Sparkles, ChefHat, Cat } from 'lucide-react';
import { getChefRecommendation } from '../services/geminiService';

export const ChefBot: React.FC = () => {
  const [mood, setMood] = useState('Curieux');
  const [hunger, setHunger] = useState('Grosse faim');
  const [preference, setPreference] = useState('Viande');
  const [recommendation, setRecommendation] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAskChef = async () => {
    setLoading(true);
    setRecommendation('');
    const result = await getChefRecommendation(mood, hunger, preference);
    setRecommendation(result);
    setLoading(false);
  };

  return (
    <section id="chef-ia" className="py-20 bg-cat-dark text-cat-cream">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-cat-brown rounded-full mb-4">
            <Cat size={32} className="text-white" />
          </div>
          <h2 className="font-hand text-5xl font-bold mb-4">Le Chef IA vous conseille</h2>
          <p className="font-sans text-gray-400 max-w-lg mx-auto">
            Indécis ? Laissez notre intelligence artificielle féline composer le burger idéal pour vous aujourd'hui.
          </p>
        </div>

        <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="space-y-2">
              <label className="block font-hand text-2xl">Votre Humeur</label>
              <select 
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                className="w-full bg-cat-dark border border-gray-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-cat-brown focus:outline-none"
              >
                <option>Curieux</option>
                <option>Aventurier</option>
                <option>Fatigué</option>
                <option>Joyeux</option>
                <option>En colère</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="block font-hand text-2xl">Votre Faim</label>
              <select 
                value={hunger}
                onChange={(e) => setHunger(e.target.value)}
                className="w-full bg-cat-dark border border-gray-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-cat-brown focus:outline-none"
              >
                <option>Petite faim</option>
                <option>Normale</option>
                <option>Grosse faim</option>
                <option>Faim de loup</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block font-hand text-2xl">Préférence</label>
              <select 
                value={preference}
                onChange={(e) => setPreference(e.target.value)}
                className="w-full bg-cat-dark border border-gray-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-cat-brown focus:outline-none"
              >
                <option>Viande</option>
                <option>Poulet</option>
                <option>Végétarien</option>
                <option>Épicé</option>
                <option>Fromage ++</option>
              </select>
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={handleAskChef}
              disabled={loading}
              className="bg-gradient-to-r from-cat-brown to-orange-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mx-auto"
            >
              {loading ? (
                <>
                  <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                  Le Chef réfléchit...
                </>
              ) : (
                <>
                  <Sparkles size={20} />
                  Demander au Chef
                </>
              )}
            </button>
          </div>

          {recommendation && (
            <div className="mt-8 p-6 bg-cat-cream text-cat-dark rounded-xl border-l-4 border-cat-brown animate-fade-in relative">
              <ChefHat className="absolute -top-4 -left-4 text-cat-brown bg-cat-cream rounded-full p-1" size={40} />
              <div className="font-sans italic text-lg leading-relaxed whitespace-pre-wrap">
                "{recommendation}"
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
