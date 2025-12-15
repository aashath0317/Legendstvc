import React, { useState, useEffect } from 'react';
import { Play, Check, ChevronDown, ChevronUp, Menu, X, ArrowRight, Instagram, Twitter, Linkedin, Facebook, Monitor, Globe } from 'lucide-react';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

/**
 * Access Control Wrapper
 */
const ProtectedRoute = ({ children }) => {
  return children;
};

/**
 * Shared Components
 */
const Button = ({ children, className = "", primary = true, animated = false }) => (
  <button
    className={`
      px-8 py-4 font-bold uppercase tracking-wider text-sm transition-all duration-300 
      ${primary
        ? "bg-red-600 text-white hover:bg-red-700"
        : "border border-white text-white hover:bg-white hover:text-black"
      } 
      ${animated
        ? "animate-glow-pulse rounded-md shadow-[0_0_15px_rgba(220,38,38,0.5)]"
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

const SectionHeading = ({ children, align = "center", color = "text-white" }) => (
  <h2 className={`text-4xl md:text-6xl font-anton uppercase mb-8 leading-tight ${align === "center" ? "text-center" : "text-left"} ${color}`}>
    {children}
  </h2>
);

const BreakingNewsTicker = () => (
  <div className="bg-black border-b border-gray-800 h-10 flex items-center relative overflow-hidden z-50">
    <style>
      {`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 30s linear infinite; }
        
        /* ADJUSTED SPEED: 40s */
        .animate-marquee-custom { animation: marquee 40s linear infinite; }

        @keyframes glow-pulse { 0% { transform: scale(1); box-shadow: 0 0 0 rgba(220,38,38,0); } 50% { transform: scale(1.05); box-shadow: 0 0 20px rgba(220,38,38,0.7); } 100% { transform: scale(1); box-shadow: 0 0 0 rgba(220,38,38,0); } }
        .animate-glow-pulse { animation: glow-pulse 2s infinite ease-in-out; }
      `}
    </style>
    <div className="bg-red-600 text-white text-xs font-black uppercase px-4 h-full flex items-center z-20 relative shrink-0 shadow-[4px_0_10px_rgba(0,0,0,0.5)] skew-x-[-10deg] -ml-2 pl-6">
      <span className="skew-x-[10deg]">Breaking News:</span>
    </div>
    <div className="flex items-center w-full overflow-hidden whitespace-nowrap">
      <div className="animate-marquee flex items-center">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center">
            <span className="text-gray-300 text-xs font-bold uppercase tracking-wide px-4">Watch Co-Founder <span className="text-white">Akeel Asath</span> on Bloomberg</span>
            <span className="text-red-600 mx-2 text-[10px]">●</span>
            <span className="text-gray-300 text-xs font-bold uppercase tracking-wide px-4">Invest in the <span className="text-white">Future of LegendsTV</span> today</span>
            <span className="text-red-600 mx-2 text-[10px]">●</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/**
 * Athlete Data
 */
const athletes = [
  { name: "Travis Kelce", img: "/Travis Kelce.avif" },
  { name: "Chiney Ogwumike", img: "/Chiney Ogwumike.avif" },
  { name: "Dwyane Wade", img: "/Dwyane Wade.avif" },
  { name: "Ken Griffey Jr", img: "/Ken Griffey Jr.avif" },
  { name: "Damian Lillard", img: "/Damian Lillard.avif" },
  { name: "Kyrie Irving", img: "/Kyrie Irving.avif" },
  { name: "Carmelo Anthony", img: "/Carmelo Anthony.avif" },
  { name: "Chris Paul", img: "/Chris Paul.avif" },
];

/**
 * Main App Component
 */
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-600 selection:text-white overflow-x-hidden">

      {/* --- HEADER --- */}
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
        <BreakingNewsTicker />
        <header className={`transition-all duration-300 w-full ${scrolled ? 'bg-black/95 backdrop-blur-md border-b border-gray-800 py-2' : 'bg-gradient-to-b from-black/80 to-transparent py-4'}`}>
          <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 flex justify-between items-center">
            <div className="text-3xl font-black italic tracking-tighter cursor-pointer flex items-center gap-1 font-anton">
              <div className="w-9 h-9 bg-red-600 flex items-center justify-center rounded-sm transform -skew-x-12">
                <Play className="fill-white w-5 h-5 ml-0.5" />
              </div>
              LEGENDS<span className="text-red-600">TV</span>
            </div>

            <nav className="hidden lg:flex space-x-8 items-center text-xs font-bold uppercase tracking-wider text-gray-300">
              <a href="#mission" className="hover:text-white transition">Opportunity</a>
              <a href="#platform" className="hover:text-white transition">Platform</a>
              <a href="#team" className="hover:text-white transition">Team</a>
              <Button className="py-3 px-8 text-xs ml-4" animated={true}>Invest Now</Button>
            </nav>

            <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </header>
      </div>

      {/* --- HERO SECTION --- */}
      <div className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black z-0">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          <div className="space-y-8 pt-4 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-anton uppercase leading-[0.9] tracking-tight">
              Join Sports Icons In <br />
              Building The <br />
              First Ever <span className="text-red-600">Athlete-Fan</span> <br />
              Owned Media Company
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              We're making history as the first-ever athlete and fan-owned media platform. With 50+ athlete investors, diverse content, and cutting-edge distribution, our mission is well underway.
            </p>

            <div className="border-l-4 border-red-600 pl-6 bg-white/5 py-5 pr-6 rounded-r-sm text-left max-w-xl">
              <p className="text-white font-bold text-base uppercase font-anton tracking-wide mb-1">
                What is a "Legend"?
              </p>
              <p className="text-gray-400 text-sm">
                Any former or current professional athlete, as well as Hollywood actors, defining the culture of tomorrow.
              </p>
            </div>

            <div className="pt-8">
              <Button animated={true} className="w-full md:w-auto text-lg py-5 px-12 shadow-[0_0_30px_rgba(220,38,38,0.5)]">
                Join Us To Make History And Invest Now
              </Button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-8 text-xs md:text-sm font-bold uppercase tracking-widest text-gray-400 underline decoration-gray-600 hover:text-red-500 hover:decoration-red-500 transition-all cursor-pointer pt-4">
              <span>Sec Filings</span>
              <span>Offering Circular</span>
              <span>Investor Education</span>
            </div>
          </div>

          <div className="flex flex-col w-full shadow-2xl mt-8 lg:mt-0">
            <div className="w-full aspect-video bg-black border border-gray-800 border-b-0 relative z-10 group">
              <MediaPlayer
                src="https://mydrive.akeelaasath.workers.dev/0:/gary_sources/introvideo1.mp4"
                viewType="video"
                streamType="on-demand"
                logLevel="warn"
                crossOrigin
                playsInline
                autoPlay
                muted
                loop
              >
                <MediaProvider />
                <DefaultVideoLayout icons={defaultLayoutIcons} />
              </MediaPlayer>
            </div>

            <div className="grid grid-cols-2 bg-black border border-red-900/40 border-t-0">
              <div className="p-8 border-r border-b border-red-900/40 text-center">
                <div className="text-xs text-gray-400 font-bold uppercase mb-2 tracking-widest">Capital Raised</div>
                <div className="text-4xl lg:text-5xl font-anton text-white">$6.4M</div>
              </div>
              <div className="p-8 border-b border-red-900/40 text-center">
                <div className="text-xs text-gray-400 font-bold uppercase mb-2 tracking-widest">Total Athletes</div>
                <div className="text-4xl lg:text-5xl font-anton text-white">50+</div>
              </div>
              <div className="col-span-2 grid grid-cols-3 divide-x divide-red-900/40">
                <div className="p-6 text-center">
                  <div className="text-[10px] text-gray-400 font-bold uppercase mb-1">Investors</div>
                  <div className="text-2xl font-anton text-white">2,200+</div>
                </div>
                <div className="p-6 text-center">
                  <div className="text-[10px] text-gray-400 font-bold uppercase mb-1">Min. Invest</div>
                  <div className="text-2xl font-anton text-white">$1,000</div>
                </div>
                <div className="p-6 text-center">
                  <div className="text-[10px] text-gray-400 font-bold uppercase mb-1">Share Price</div>
                  <div className="text-2xl font-anton text-white">$5.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- 50+ PROFESSIONAL ATHLETE INVESTORS (BG: #181818) --- */}
      <div className="bg-[#181818] py-20 border-y border-gray-800 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <h3 className="text-center font-anton text-3xl md:text-4xl uppercase text-white mb-16 tracking-wide">
            50+ Professional Athlete Investors
          </h3>
        </div>

        <div className="flex w-full overflow-hidden mask-image-gradient">
          <div className="animate-marquee-custom flex items-center gap-12 pl-12">
            {[...athletes, ...athletes, ...athletes].map((athlete, i) => (
              <div key={i} className="flex flex-col items-center shrink-0 space-y-4">
                <img
                  src={athlete.img}
                  alt={athlete.name}
                  className="h-64 w-auto max-w-none object-contain rounded-md"
                />
                <p className="text-sm font-bold uppercase text-gray-400 font-anton tracking-widest text-center">
                  {athlete.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- OPPORTUNITY SECTION (BG WHITE/TEXTURE) --- */}
      <section
        id="opportunity"
        className="py-24 relative bg-white text-black bg-cover bg-center"
        style={{ backgroundImage: "url('/opportunity_bg.webp')" }}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="text-red-600 font-black italic uppercase tracking-wider text-sm">Opportunity</div>
            <SectionHeading align="left" color="text-black">
              Athletes Are Redefining <br /> The New Creator Economy
            </SectionHeading>
            <p className="text-gray-700 text-lg leading-relaxed font-medium">
              Athletes are no longer just the faces of brands – they <span className="italic font-bold">are</span> the brands, building empires and turning fan engagement into monetization. By redefining the creator economy, they're disrupting a $75B+ global sports media market and shifting power from corporations to creators.
            </p>
          </div>

          {/* Right Content - BY THE NUMBERS */}
          <div className="flex flex-col">
            <div className="bg-red-600 text-white font-bold text-center py-3 uppercase tracking-widest text-sm">
              By The Numbers
            </div>
            <div className="grid grid-cols-2 bg-black border-2 border-black">
              <div className="p-8 text-center border-r border-b border-gray-800">
                <div className="text-4xl md:text-5xl font-anton text-white mb-2">$75B</div>
                <div className="text-[10px] uppercase font-bold text-gray-400 leading-tight">Estimated Global Sports Media<br />Market Size by 2028</div>
              </div>
              <div className="p-8 text-center border-b border-gray-800">
                <div className="text-4xl md:text-5xl font-anton text-white mb-2">30%+</div>
                <div className="text-[10px] uppercase font-bold text-gray-400 leading-tight">Annual Growth in Athlete-Driven<br />Audience Engagement</div>
              </div>
              <div className="p-8 text-center border-r border-gray-800">
                <div className="text-4xl md:text-5xl font-anton text-white mb-2">$480B</div>
                <div className="text-[10px] uppercase font-bold text-gray-400 leading-tight">Estimated Creator Economy<br />Market Size by 2027</div>
              </div>
              <div className="p-8 text-center">
                <div className="text-4xl md:text-5xl font-anton text-white mb-2">28%+</div>
                <div className="text-[10px] uppercase font-bold text-gray-400 leading-tight">Compound Annual Growth Rate<br />Of Digital Sports Content</div>
              </div>
            </div>

            {/* Goldman Sachs Quote Box */}
            <div className="mt-6 bg-white border border-gray-300 p-6 flex items-start gap-4 shadow-lg">
              <div className="bg-[#7399C6] text-white p-2 text-xs font-serif leading-none shrink-0 w-16 text-center">
                Goldman<br />Sachs
              </div>
              <p className="text-gray-800 text-sm font-medium italic">
                "The creator economy could approach <span className="text-red-600 font-bold">half a-trillion dollars by 2027</span>"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- MISSION SECTION --- */}
      <Section id="mission" className="bg-zinc-950">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-1 bg-red-600"></div>
              <h3 className="text-red-600 font-bold tracking-wider uppercase text-sm">The Mission</h3>
            </div>
            <SectionHeading align="left">More Than <br /> Entertainment. <br />A <span className="text-red-600">Movement.</span></SectionHeading>
            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
              Athletes have been the product for too long. LegendsTV puts the power back in their hands, creating an ecosystem where fans get authentic access and athletes own their narratives.
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
                    <h4 className="font-anton text-xl uppercase mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <StatCard number="280M+" label="Monthly Views" icon={<Globe className="w-6 h-6 text-red-500 mb-2" />} />
            <StatCard number="100+" label="Athlete Partners" icon={<div className="font-black text-red-500 text-xl mb-1">★</div>} />
            <StatCard number="300M+" label="Connected Devices" icon={<Monitor className="w-6 h-6 text-red-500 mb-2" />} />
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
                  <h4 className="text-3xl font-anton uppercase mb-2">The Warmup</h4>
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
              <div key={brand} className="text-xl md:text-2xl font-black font-anton text-gray-400 hover:text-white transition cursor-default">
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
              <h2 className="text-4xl font-anton uppercase mb-6 leading-none">Why Invest <br /> <span className="text-red-600">Now?</span></h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                The traditional media model is broken. LegendsTV is the solution, bridging the gap between massive athlete social reach and premium long-form content.
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

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {/* UPDATED FOUNDERS AND TEAM */}
          {[
            { name: "Akeel Asath", role: "Co-Founder", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" },
            { name: "Chad Morton", role: "Co-Founder", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop" },
            { name: "Chris Paul", role: "Investor", img: "/Chris Paul.avif" },
            { name: "Dwyane Wade", role: "Investor", img: "/Dwyane Wade.avif" },
            { name: "Ken Griffey Jr", role: "Investor", img: "/Ken Griffey Jr.avif" },
            { name: "Travis Kelce", role: "Investor", img: "/Travis Kelce.avif" },
            { name: "Carmelo Anthony", role: "Investor", img: "/Carmelo Anthony.avif" },
            { name: "Kyrie Irving", role: "Investor", img: "/Kyrie Irving.avif" },
            { name: "Damian Lillard", role: "Investor", img: "/Damian Lillard.avif" },
            { name: "Chiney Ogwumike", role: "Investor", img: "/Chiney Ogwumike.avif" },
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
                <h4 className="font-anton text-lg uppercase text-white leading-tight">{member.name}</h4>
                <p className="text-red-500 text-xs font-bold uppercase tracking-wider">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* --- FOOTER --- */}
      <footer className="bg-black py-20 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <div className="text-3xl font-black italic text-white tracking-tighter flex items-center gap-1 font-anton mb-6">
            <div className="w-8 h-8 bg-red-600 flex items-center justify-center rounded-sm transform -skew-x-12">
              <Play className="fill-white w-4 h-4 ml-0.5" />
            </div>
            LEGENDS<span className="text-red-600">TV</span>
          </div>
          <p className="text-gray-500 text-sm mb-8 text-center max-w-sm">
            The first ever athlete-owned media network and lifestyle ecosystem.
          </p>
          <div className="text-xs text-gray-700">
            &copy; 2025 Legends Media Group. All rights reserved.
          </div>
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
    <div className="text-3xl md:text-4xl font-anton text-white mb-2 tracking-tight">{number}</div>
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
