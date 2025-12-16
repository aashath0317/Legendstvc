import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Investors from './components/sections/Investors';
import Opportunity from './components/sections/Opportunity';
import Platform from './components/sections/Platform';
import Stats from './components/sections/Stats';
import Roadmap from './components/sections/Roadmap';
import ImpactShowcase from './components/sections/ImpactShowcase';
import MediaShowcase from './components/sections/MediaShowcase';
import Press from './components/sections/Press';
import AsSeenIn from './components/sections/AsSeenIn';
import DiveDeeper from './components/sections/DiveDeeper';
import Partners from './components/sections/Partners';
import BoardOfDirectors from './components/sections/BoardOfDirectors';
import FAQ from './components/sections/FAQ';

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
        <ImpactShowcase />
        <DiveDeeper />
        <MediaShowcase />
        <Press />
        <AsSeenIn />
        <Partners />
        <BoardOfDirectors />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}