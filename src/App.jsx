import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Investors from './components/sections/Investors';
import Opportunity from './components/sections/Opportunity';
import Platform from './components/sections/Platform';
import Stats from './components/sections/Stats';
import Roadmap from './components/sections/Roadmap';

// Note: Ensure you create the Investors, Opportunity, Platform, Stats, and Footer files 
// following the pattern of the files above.

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-600 selection:text-white overflow-x-hidden">

      <Header />

      <main>
        <Hero />
        <Investors />
        <Opportunity />
        <Platform />
        <Stats />
        <Roadmap />
      </main>

      <Footer />
    </div>
  );
}