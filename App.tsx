import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { ChefBot } from './components/ChefBot';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  
  // Simple fade-in effect on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
      section.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-cat-cream overflow-x-hidden selection:bg-cat-brown selection:text-white">
      <Header />
      <main>
        <Hero />
        <Menu />
        <ChefBot />
      </main>
      <Footer />
    </div>
  );
};

export default App;
