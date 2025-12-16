import React from 'react';
import { Play } from 'lucide-react';
import Button from '../ui/Button';

const ImpactShowcase = () => {
    // Data matching the target design content
    const campaigns = [
        {
            client: "Ford",
            img: "/thumbnail/1.webp",
            text: "LegendsTV delivers over 18MM+ views and student car giveaway with Drive To Your Dreams campaign"
        },
        {
            client: "Sony",
            img: "/thumbnail/2.webp",
            text: "LegendsTV delivers over 13MM+ views with Sony Bad Boys creative"
        },
        {
            client: "Bounty",
            img: "/thumbnail/3.webp",
            text: "LegendsTV delivers over 8MM+ views with unique 'Bounty Hack' cooking integration"
        },
    ];

    // Brands list
    const brands = ["SONY", "DQ", "Meta", "PEPSI", "Ford"];

    return (
        <section className="bg-black py-24 border-t border-gray-800 overflow-hidden">
            <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12">

                {/* Main Content Split: Left (Visuals) | Right (Text) */}
                <div className="flex flex-col xl:flex-row gap-16 items-start">

                    {/* LEFT COLUMN: Posters & Brands */}
                    <div className="w-full xl:w-7/12">

                        {/* 1. Posters Row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                            {campaigns.map((camp, i) => (
                                <div key={i} className="group relative aspect-[2/3] bg-zinc-900 rounded-lg overflow-hidden border border-white/10 hover:border-red-600 transition-all duration-300 cursor-pointer">
                                    {/* Image Background */}
                                    <img
                                        src={camp.img}
                                        alt={camp.client}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-700"
                                    />

                                    {/* Center Play Button Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center z-10">
                                        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.6)] transform group-hover:scale-110 transition-transform duration-300">
                                            <Play className="w-5 h-5 fill-white text-white ml-0.5" />
                                        </div>
                                    </div>

                                    {/* Bottom Text Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent p-4 pt-12 z-20">
                                        {/* Client Badge */}
                                        <div className="flex justify-center mb-3">
                                            <img src={`/logos/${camp.client.toLowerCase()}.svg`} alt={camp.client} className="h-6 w-auto object-contain" onError={(e) => { e.target.style.display = 'none' }} />
                                            {/* Fallback Badge if logo fails */}
                                            <span className="bg-blue-600/80 text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded-sm">
                                                {camp.client}
                                            </span>
                                        </div>
                                        <p className="text-[10px] leading-tight font-bold uppercase text-center text-gray-200 tracking-wide">
                                            {camp.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* 2. Iconic Brands Marquee */}
                        <div className="pt-4 flex flex-col items-center w-full">
                            <h4 className="text-white font-anton uppercase text-xl md:text-2xl mb-6 text-center">
                                Iconic Brands We've Worked With
                            </h4>

                            {/* Marquee Container */}
                            <div className="w-full relative overflow-hidden mask-image-gradient">
                                <div
                                    className="flex items-center animate-marquee whitespace-nowrap"
                                    style={{ animationDuration: '15s' }}
                                >
                                    {/* Mapping multiple times to ensure seamless loop */}
                                    {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
                                        <span key={i} className="mx-8 text-2xl md:text-4xl font-black italic text-gray-500 uppercase tracking-tighter hover:text-white transition-colors cursor-default">
                                            {brand}
                                        </span>
                                    ))}
                                </div>

                                {/* Fade Edges */}
                                <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black to-transparent z-10"></div>
                                <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black to-transparent z-10"></div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Text Content */}
                    <div className="w-full xl:w-5/12 flex flex-col items-start text-center xl:text-left pt-4">
                        <h2 className="text-4xl md:text-6xl font-anton uppercase leading-[0.9] text-white mb-8">
                            Maximizing Impact <br /> Through <br />
                            <span className="text-red-600">Athlete-Driven</span> <br />
                            Brand Partnerships
                        </h2>
                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-medium">
                            <p>
                                LegendsTV connects brands to audiences through authentic, athlete-led storytelling.
                            </p>
                            <p>
                                Our partners benefit from the unmatched influence and credibility of pro athletes, driving deeper engagement and higher conversion.
                            </p>
                            <p>
                                With custom integrations and talent-powered campaigns, we maximize brand impact while keeping fans at the center.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 3. Bottom CTA Button */}
                <div className="mt-20 flex justify-center w-full">
                    <Button
                        primary={true}
                        animated={true}
                        // Increased shadow spread and opacity for a stronger "glow"
                        className="text-base md:text-lg py-3 px-8 md:px-16 w-full md:w-auto shadow-[0_0_60px_rgba(220,38,38,0.7)] hover:shadow-[0_0_80px_rgba(220,38,38,0.9)] transition-shadow duration-300 border border-red-500/50"
                    >
                        Join Us To Make History And Invest Now
                    </Button>
                </div>

            </div>
        </section>
    );
};

export default ImpactShowcase;