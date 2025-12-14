import React, { useState, useEffect } from 'react';
import { Play, Check, ChevronDown, ChevronUp, Menu, X, ArrowRight, Instagram, Twitter, Linkedin, Facebook, Monitor, Smartphone, Globe } from 'lucide-react';

/**
 * Shared Components & Data
 */

const Button = ({ children, className = "", primary = true, animated = false }) => (
  <button 
    className={`
      px-8 py-3 font-bold uppercase tracking-wider text-sm transition-all duration-300 
      ${primary 
        ? "bg-red-600 text-white" 
        : "border border-white text-white hover:bg-white hover:text-black"
      } 
      ${animated 
        ? "animate-glow-pulse rounded-md" 
        : "transform hover:-translate-y-1 hover:shadow-lg rounded-sm"
      }
      ${className}
    `}
  >
    {children}
  </button>
);

const Section = ({ children, className = "", id = "" }) => (
  <section id={id} className={`py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

const SectionHeading = ({ children, align = "center", light = false }) => (
  <h2 className={`text-3xl md:text-5xl font-black uppercase mb-8 leading-tight ${align === "center" ? "text-center" : "text-left"} ${light ? "text-white" : "text-white"}`}>
    {children}
  </h2>
);

/**
 * Breaking News Ticker Component
 */
const BreakingNewsTicker = () => (
  <div className="bg-black border-b border-gray-800 h-10 flex items-center relative overflow-hidden z-50">
    <style>
      {`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        /* Custom Glow & Bounce Animation */
        @keyframes glow-pulse {
          0% { 
            transform: scale(1); 
            box-shadow: 0 0 0 rgba(220, 38, 38, 0); 
          }
          50% { 
            transform: scale(1.05); 
            box-shadow: 0 0 20px rgba(220, 38, 38, 0.7); 
          }
          100% { 
            transform: scale(1); 
            box-shadow: 0 0 0 rgba(220, 38, 38, 0); 
          }
        }
        .animate-glow-pulse {
          animation: glow-pulse 2s infinite ease-in-out;
        }
      `}
    </style>
    {/* Red Label */}
    <div className="bg-red-600 text-white text-xs font-black uppercase px-4 h-full flex items-center z-20 relative shrink-0 shadow-[4px_0_10px_rgba(0,0,0,0.5)] skew-x-[-10deg] -ml-2 pl-6">
        <span className="skew-x-[10deg]">Breaking News:</span>
    </div>
    
    {/* Scrolling Text */}
    <div className="flex items-center w-full overflow-hidden whitespace-nowrap mask-image-gradient">
      <div className="animate-marquee flex items-center">
        {/* Content duplicated for seamless loop */}
        {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center">
                <span className="text-gray-300 text-xs font-bold uppercase tracking-wide px-4">Watch our Co-Founder <span className="text-white">Deron Guidrey</span> on Bloomberg</span>
                <span className="text-red-600 mx-2 text-[10px]">●</span>
                <span className="text-gray-300 text-xs font-bold uppercase tracking-wide px-4">Watch our special <span className="text-white">Kyrie Live interview</span> with Collin Castellaw</span>
                <span className="text-red-600 mx-2 text-[10px]">●</span>
                 <span className="text-gray-300 text-xs font-bold uppercase tracking-wide px-4">Invest in the <span className="text-white">Future of Sports Media</span> today</span>
                <span className="text-red-600 mx-2 text-[10px]">●</span>
            </div>
        ))}
      </div>
    </div>
  </div>
);

/**
 * Main App Component
 */
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-600 selection:text-white overflow-x-hidden">
      
      {/* --- HEADER GROUP --- */}
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
        <BreakingNewsTicker />
        
        <header className={`transition-all duration-300 w-full ${scrolled ? 'bg-black/95 backdrop-blur-md border-b border-gray-800 py-2' : 'bg-gradient-to-b from-black/80 to-transparent py-4'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <div className="text-2xl font-black italic tracking-tighter cursor-pointer flex items-center gap-1">
                <div className="w-8 h-8 bg-red-600 flex items-center justify-center rounded-sm">
                    <Play className="fill-white w-4 h-4 ml-0.5" />
                </div>
                PLAYERS<span className="text-red-600">TV</span>
            </div>
            
            <nav className="hidden md:flex space-x-8 items-center text-sm font-bold uppercase tracking-wide">
                <a href="#mission" className="hover:text-red-500 transition">Mission</a>
                <a href="#platform" className="hover:text-red-500 transition">Platform</a>
                <a href="#team" className="hover:text-red-500 transition">Team</a>
                <a href="#faq" className="hover:text-red-500 transition">FAQ</a>
                {/* Applied the 'animated' prop here for the glow effect */}
                <Button className="py-2 px-6 text-xs" animated={true}>Invest Now</Button>
            </nav>

            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
            </button>
            </div>
        </header>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800 absolute top-full left-0 right-0 p-6 flex flex-col space-y-6 shadow-2xl animate-in slide-in-from-top-5">
            <a href="#mission" onClick={() => setIsMenuOpen(false)} className="block text-xl font-bold uppercase hover:text-red-600">Mission</a>
            <a href="#platform" onClick={() => setIsMenuOpen(false)} className="block text-xl font-bold uppercase hover:text-red-600">Platform</a>
            <a href="#team" onClick={() => setIsMenuOpen(false)} className="block text-xl font-bold uppercase hover:text-red-600">Team</a>
            <Button className="w-full text-center" animated={true}>Invest Now</Button>
          </div>
        )}
      </div>

      {/* --- HERO SECTION --- */}
      {/* Added extra padding-top to account for the ticker + header height */}
      <div className="relative pt-40 pb-16 md:pt-56 md:pb-24 overflow-hidden min-h-[90vh] flex items-center">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-black">
             <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-red-900/20 rounded-full blur-[120px]"></div>
             <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-red-800/10 rounded-full blur-[100px]"></div>
             {/* Grid Pattern Overlay */}
             <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Hero Content */}
          <div className="space-y-8 animate-in slide-in-from-left duration-700 fade-in">
            <div className="inline-block px-3 py-1 bg-red-600/20 border border-red-600/50 rounded text-red-500 text-xs font-bold uppercase tracking-widest mb-2">
                Athlete Owned • Fan Fuelled
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tight">
              Join Sports <br /> Icons In <br />
              Building The <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Future</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed">
              Invest alongside Chris Paul, Dwyane Wade, and 50+ athletes in the first ever athlete-owned media network.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button animated={true}>Invest Now</Button>
              <Button primary={false} className="flex items-center gap-2">
                <Play size={16} className="fill-white" /> Watch Trailer
              </Button>
            </div>

            {/* Funding Stats */}
            <div className="mt-8 p-6 bg-gray-900/80 backdrop-blur border border-gray-800 rounded-xl max-w-md">
              <div className="flex justify-between text-sm font-bold mb-3 uppercase tracking-wider">
                <span className="text-white">$1,240,500 Raised</span>
                <span className="text-gray-500">Goal: $5M</span>
              </div>
              <div className="w-full bg-gray-800 h-3 rounded-full overflow-hidden mb-3">
                <div className="bg-gradient-to-r from-red-600 to-red-500 h-full w-[25%] rounded-full shadow-[0_0_10px_rgba(220,38,38,0.5)]"></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 font-medium">
                  <span>1,542 Investors</span>
                  <span>12 Days Left</span>
              </div>
            </div>
          </div>

          {/* Hero Video/Image */}
          <div className="relative group cursor-pointer animate-in slide-in-from-right duration-700 fade-in delay-200">
            <div className="relative z-10 aspect-video bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
              <img 
                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop" 
                alt="Chris Paul Intro" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition duration-500 scale-105 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-red-600/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-300 backdrop-blur-sm border-4 border-red-500/30">
                  <Play className="fill-white ml-2 w-10 h-10" />
                </div>
              </div>
              
              <div className="absolute bottom-6 left-6">
                  <p className="text-xs font-bold text-red-500 uppercase tracking-widest mb-1">Featured</p>
                  <p className="text-xl font-bold uppercase">The Future of Sports Media</p>
              </div>
            </div>
            
            {/* Decorative elements behind video */}
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-red-600/30 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>

      {/* --- INVESTOR TICKER --- */}
      <div className="border-y border-gray-800 bg-black py-8 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-0">
          <p className="text-center text-gray-500 uppercase text-xs font-bold tracking-[0.2em] mb-8">Backed By Legends & Industry Titans</p>
          <div className="flex justify-between items-center flex-wrap gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {['NBA', 'NFL', 'MLB', 'WNBA', 'PGA', 'FIFA'].map((league, i) => (
              <div key={i} className="text-2xl md:text-4xl font-black text-white/80 select-none">
                 {league}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- MISSION SECTION --- */}
      <Section id="mission" className="bg-zinc-950">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-1 bg-red-600"></div>
                <h3 className="text-red-600 font-bold tracking-wider uppercase text-sm">The Mission</h3>
            </div>
            <SectionHeading align="left">More Than <br/> Entertainment. <br/>A <span className="text-red-600">Movement.</span></SectionHeading>
            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
              Athletes have been the product for too long. PlayersTV puts the power back in their hands, creating an ecosystem where fans get authentic access and athletes own their narratives.
            </p>
            <ul className="space-y-6">
              {[
                { title: 'Athlete Owned & Operated', desc: '50+ investor athletes shaping the direction.' },
                { title: 'Premium Original Content', desc: 'Emmy-winning documentaries and series.' },
                { title: 'Global Distribution', desc: 'Reaching 300M+ households worldwide.' }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded bg-red-600/20 flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                      <h4 className="font-bold text-xl uppercase mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <StatCard number="280M+" label="Monthly Views" icon={<Globe className="w-6 h-6 text-red-500 mb-2"/>} />
             <StatCard number="100+" label="Athlete Partners" icon={<div className="font-black text-red-500 text-xl mb-1">★</div>} />
             <StatCard number="300M+" label="Connected Devices" icon={<Monitor className="w-6 h-6 text-red-500 mb-2"/>} />
             <StatCard number="#1" label="Athlete Network" icon={<div className="font-black text-red-500 text-xl mb-1">#1</div>} />
          </div>
        </div>
      </Section>

      {/* --- PLATFORM SHOWCASE --- */}
      <Section id="platform">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionHeading>Fueling The Creator Economy</SectionHeading>
          <p className="text-gray-400 text-lg">Available on every major streaming platform. We are meeting fans where they are.</p>
        </div>
        
        {/* Device Mockups */}
        <div className="relative my-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] bg-red-600 blur-[120px] opacity-20"></div>
          
          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-4 items-end max-w-6xl mx-auto">
             {/* Phone Left */}
             <div className="hidden md:block md:col-span-3 z-10 translate-x-8 translate-y-4">
                <div className="bg-black border-4 border-gray-800 rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px] w-[260px] mx-auto relative">
                    <img src="https://images.unsplash.com/photo-1542395975-d6d3dd0619cd?q=80&w=800&auto=format&fit=crop" alt="Mobile App" className="w-full h-full object-cover opacity-80" />
                    <div className="absolute bottom-8 left-0 right-0 text-center">
                        <div className="bg-red-600 w-12 h-12 rounded-full mx-auto flex items-center justify-center">
                            <Play className="fill-white ml-1 w-5 h-5" />
                        </div>
                    </div>
                </div>
             </div>
             
             {/* TV Center */}
             <div className="md:col-span-6 z-20 md:-mb-8">
                <div className="bg-black border-b-8 border-gray-800 rounded-xl overflow-hidden shadow-2xl aspect-video relative">
                    <img src="https://images.unsplash.com/photo-1579952363873-27f3bde9be2b?q=80&w=2070&auto=format&fit=crop" alt="Smart TV Interface" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-8">
                        <h4 className="text-3xl font-black uppercase mb-2">The Warmup</h4>
                        <p className="text-gray-300">New episodes every Tuesday</p>
                    </div>
                </div>
                <div className="w-1/3 h-4 bg-gray-800 mx-auto rounded-b-xl"></div>
             </div>
             
             {/* Tablet Right */}
             <div className="hidden md:block md:col-span-3 z-10 -translate-x-8 translate-y-4">
                <div className="bg-black border-4 border-gray-800 rounded-2xl overflow-hidden shadow-2xl h-[400px] w-[300px] mx-auto relative">
                     <img src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=900&auto=format&fit=crop" alt="Tablet App" className="w-full h-full object-cover opacity-80" />
                </div>
             </div>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="mt-24 pt-12 border-t border-gray-800">
           <p className="text-center text-gray-500 font-bold mb-10 text-xs tracking-[0.2em]">DISTRIBUTION PARTNERS</p>
           <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-60">
             {['Samsung TV+', 'Vizio', 'Roku Channel', 'YouTube TV', 'Amazon fireTV', 'LG Channels', 'Sling'].map(brand => (
               <div key={brand} className="text-xl md:text-2xl font-black text-gray-400 hover:text-white transition cursor-default">
                 {brand}
               </div>
             ))}
           </div>
        </div>
      </Section>

      {/* --- COMPARISON / WHY INVEST --- */}
      <div className="bg-zinc-900 py-24 border-y border-gray-800">
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
               <h2 className="text-4xl font-black uppercase mb-6 leading-none">Why Invest <br/> <span className="text-red-600">Now?</span></h2>
               <p className="text-gray-400 mb-8 leading-relaxed">
                 The traditional media model is broken. PlayersTV is the solution, bridging the gap between massive athlete social reach and premium long-form content.
               </p>
               <Button className="w-full md:w-auto">View Pitch Deck</Button>
            </div>
            
            <div className="lg:col-span-3 bg-black/50 p-8 rounded-2xl border border-gray-800">
               <div className="space-y-8">
                 <ComparisonRow title="Athlete Equity" desc="Athletes are owners, not just talent. This aligns incentives for long-term growth." />
                 <ComparisonRow title="Scalable Tech" desc="Proprietary distribution technology delivering content to 300M+ devices instantly." />
                 <ComparisonRow title="Diverse Revenue" desc="Multiple streams including Advertising, Subscriptions, Merch, and Live Events." />
                 <ComparisonRow title="Market Timing" desc="Sports media rights are skyrocketing while the Creator Economy is booming." />
               </div>
            </div>
          </div>
        </Section>
      </div>

      {/* --- TEAM SECTION --- */}
      <Section id="team">
        <SectionHeading>The Team</SectionHeading>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16 text-lg">
          Led by media veterans and iconic athletes committed to the vision.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { name: "Deron Guidrey", role: "Co-Founder", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" },
            { name: "Collin Castellaw", role: "Co-Founder", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop" },
            { name: "Chris Paul", role: "Investor", img: "https://images.unsplash.com/photo-1533597322032-d7696689d544?q=80&w=800&auto=format&fit=crop" },
            { name: "Dwyane Wade", role: "Investor", img: "https://images.unsplash.com/photo-1563299796-b729d0af54a5?q=80&w=800&auto=format&fit=crop" },
            { name: "Vernon Davis", role: "Investor", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" },
            { name: "Travis Kelce", role: "Investor", img: "https://images.unsplash.com/photo-1513159446162-54eb8bdaa79b?q=80&w=800&auto=format&fit=crop" },
            { name: "Carmelo Anthony", role: "Investor", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop" },
            { name: "Kyrie Irving", role: "Investor", img: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=800&auto=format&fit=crop" },
          ].map((member, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl bg-gray-900 border border-gray-800 hover:border-red-600/50 transition duration-500">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-500 scale-100 group-hover:scale-110 filter grayscale group-hover:grayscale-0" 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition duration-300">
                <h4 className="font-bold text-lg uppercase text-white leading-tight">{member.name}</h4>
                <p className="text-red-500 text-xs font-bold uppercase tracking-wider">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* --- TESTIMONIALS / PRESS --- */}
      <div className="bg-white text-black py-20">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="text-red-600 mb-6 flex justify-center">
                <div className="flex gap-1">
                    {[1,2,3,4,5].map(s => <div key={s} className="w-4 h-4 bg-red-600 rounded-full"></div>)}
                </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-black uppercase mb-12 italic leading-tight">"Revolutionizing the way athletes connect with fans and monetize their brand."</h3>
            
            <div className="grid grid-cols-3 gap-8 items-center opacity-60 grayscale">
               <div className="text-2xl font-black">FORBES</div>
               <div className="text-2xl font-black">BLOOMBERG</div>
               <div className="text-2xl font-black">VARIETY</div>
            </div>
         </div>
      </div>

      {/* --- FAQ SECTION --- */}
      <Section id="faq" className="max-w-3xl">
        <SectionHeading>Invest FAQ</SectionHeading>
        <div className="space-y-4 mt-8">
           <FAQItem question="What is the minimum investment?" answer="The minimum investment amount is $250. We want to make ownership accessible to all fans." />
           <FAQItem question="When will I receive my shares?" answer="Shares are distributed after the campaign closes and the funds are settled, typically within 30-60 days." />
           <FAQItem question="Can international investors participate?" answer="Yes, investors from most countries can participate, subject to local laws and regulations." />
           <FAQItem question="What are the perks?" answer="Perks vary by investment tier, including exclusive merch, access to events, and meet-and-greets." />
           <FAQItem question="How do I make a return?" answer="Returns may come through dividends if the company is profitable, or through an exit event such as an IPO or acquisition." />
        </div>
      </Section>

      {/* --- BOTTOM CTA --- */}
      <div className="bg-red-600 py-24 text-center px-6 relative overflow-hidden group">
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-500"></div>
        {/* Animated Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-black/10 whitespace-nowrap pointer-events-none select-none">
            JOIN NOW
        </div>

        <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-black uppercase mb-6 text-white drop-shadow-lg">Don't Miss The Shot</h2>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-medium">Join the team that is changing the game forever.</p>
            <Button className="bg-black text-white hover:bg-gray-900 hover:scale-105 border-none px-12 py-5 text-xl shadow-2xl">
            Invest Now
            </Button>
            <p className="mt-6 text-white/70 text-sm font-semibold">1,500+ Investors • Ends Soon</p>
        </div>
      </div>

      {/* --- FOOTER --- */}
      <footer className="bg-black py-20 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm text-gray-500">
          <div className="space-y-6">
            <div className="text-3xl font-black italic text-white tracking-tighter flex items-center gap-1">
                <div className="w-8 h-8 bg-red-600 flex items-center justify-center rounded-sm">
                    <Play className="fill-white w-4 h-4 ml-0.5" />
                </div>
                PLAYERS<span className="text-red-600">TV</span>
            </div>
            <p className="max-w-xs">The first ever athlete-owned media network and lifestyle ecosystem.</p>
            <div className="flex gap-4 pt-2">
               <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-red-600 hover:text-white transition cursor-pointer"><Twitter size={18} /></div>
               <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-red-600 hover:text-white transition cursor-pointer"><Instagram size={18} /></div>
               <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-red-600 hover:text-white transition cursor-pointer"><Linkedin size={18} /></div>
               <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-red-600 hover:text-white transition cursor-pointer"><Facebook size={18} /></div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase mb-6 tracking-wider">Company</h4>
            <ul className="space-y-3">
              <li className="hover:text-red-500 cursor-pointer transition">About Us</li>
              <li className="hover:text-red-500 cursor-pointer transition">Careers</li>
              <li className="hover:text-red-500 cursor-pointer transition">Press</li>
              <li className="hover:text-red-500 cursor-pointer transition">Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase mb-6 tracking-wider">Invest</h4>
            <ul className="space-y-3">
              <li className="hover:text-red-500 cursor-pointer transition">Offering Circular</li>
              <li className="hover:text-red-500 cursor-pointer transition">Risks</li>
              <li className="hover:text-red-500 cursor-pointer transition">Terms</li>
              <li className="hover:text-red-500 cursor-pointer transition">Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase mb-6 tracking-wider">Newsletter</h4>
            <p className="mb-4">Get the latest updates on athlete partners and shows.</p>
            <div className="flex">
              <input type="email" placeholder="Enter email" className="bg-gray-900 border border-gray-800 px-4 py-3 w-full focus:outline-none focus:border-red-600 rounded-l text-white transition" />
              <button className="bg-red-600 text-white px-5 py-3 rounded-r hover:bg-red-700 transition"><ArrowRight size={20} /></button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-gray-900 text-xs text-gray-700 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; 2025 Players Media Group. All rights reserved.</p>
          <p>
              Investment in startups involves a high degree of risk.
          </p>
        </div>
      </footer>
    </div>
  );
}

/**
 * Helper Components
 */

const StatCard = ({ number, label, icon }) => (
  <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl text-center hover:bg-zinc-800 transition duration-300 group hover:-translate-y-1">
    <div className="flex justify-center mb-2 group-hover:scale-110 transition duration-300">{icon}</div>
    <div className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight">{number}</div>
    <div className="text-xs uppercase font-bold text-gray-500 tracking-widest">{label}</div>
  </div>
);

const ComparisonRow = ({ title, desc }) => (
  <div className="flex items-start gap-5 p-4 rounded-lg hover:bg-gray-900/50 transition duration-300">
    <div className="mt-1 w-8 h-8 rounded-full bg-red-600/10 text-red-600 flex items-center justify-center shrink-0 border border-red-600/20">
      <Check size={16} strokeWidth={3} />
    </div>
    <div>
      <h4 className="font-bold text-white uppercase text-lg mb-1">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-gray-800 bg-zinc-900/30 rounded-lg overflow-hidden transition-all duration-300 hover:border-gray-700">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex justify-between items-center p-6 text-left hover:bg-zinc-900 transition"
      >
        <span className={`font-bold text-lg ${isOpen ? 'text-red-500' : 'text-white'}`}>{question}</span>
        {isOpen ? <ChevronUp className="text-red-600" /> : <ChevronDown className="text-gray-500" />}
      </button>
      <div 
        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-gray-800/50 text-sm md:text-base">
          {answer}
        </div>
      </div>
    </div>
  );
};
