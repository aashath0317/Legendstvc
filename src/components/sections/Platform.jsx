import React from 'react';
import { Section } from '../ui/Section';

const Platform = () => {
    const partners = ['fubo', 'DIRECTV', 'firetv', 'philo', 'YouTube TV', 'Apple TV', 'Roku', 'fubo', 'DIRECTV', 'firetv', 'philo', 'YouTube TV', 'Apple TV', 'Roku'];

    return (
        <Section id="platform" className="bg-black">
            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-fast {
          animation: marquee 10s linear infinite;
          width: max-content;
        }
      `}</style>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* LEFT COLUMN: TV + PARTNERS */}
                <div className="flex flex-col w-full">
                    {/* TV Image */}
                    <div className="relative z-10 w-full max-w-xl mx-auto">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-red-600 blur-[100px] opacity-20 pointer-events-none"></div>
                        <img
                            src="/TV.webp"
                            alt="TV Interface"
                            className="w-full h-auto object-contain drop-shadow-2xl relative z-10"
                        />
                    </div>

                    {/* PARTNERS SECTION */}
                    <div className="w-full max-w-xl mx-auto mt-8">
                        <h3 className="text-white font-anton uppercase tracking-widest mb-6 text-xl text-center">
                            World-Class Partner Platforms
                        </h3>
                        <div className="relative w-full overflow-hidden h-16 flex items-center bg-zinc-900/30 rounded-lg border border-white/5">
                            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black to-transparent z-20"></div>
                            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black to-transparent z-20"></div>

                            <div className="animate-marquee-fast flex items-center gap-12 pl-4">
                                {partners.map((brand, i) => (
                                    <span key={i} className="text-2xl font-black italic text-gray-400 shrink-0 uppercase tracking-tighter hover:text-white transition-colors">
                                        {brand}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: TEXT CONTENT */}
                <div className="flex flex-col justify-center lg:pl-8 lg:pt-12">
                    <div className="text-white italic font-bold mb-4 tracking-widest text-sm uppercase flex items-center gap-3">
                        <span className="w-8 h-[2px] bg-red-600"></span>
                        Innovation
                    </div>
                    <h2 className="text-5xl md:text-7xl font-anton uppercase mb-8 leading-[0.9]">
                        Our Premium <br /> Distribution Partners
                    </h2>
                    <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-medium">
                        <p>
                            LegendsTV is one of the first-ever Legend-fan owned media companies, built to revolutionize how fans experience Legend-lifestyle content.
                        </p>
                        <p>
                            Our 360° distribution model—spanning streaming, social, and direct-to-consumer platforms—was designed to finally give Legends the power to control their own narratives.
                        </p>
                        <p>
                            LegendsTV flips the script, putting the Legends in charge and unlocking an entirely new category of media.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Platform;