import React from 'react';
import { SectionHeading } from '../ui/Section';

const Opportunity = () => {
    return (
        <section
            id="opportunity"
            className="py-24 relative bg-white text-black bg-no-repeat"
            style={{
                backgroundImage: "url('/opportunity_bg.webp')",
                backgroundPosition: "center 500px",
                backgroundSize: "100% auto"
            }}
        >
            <div className="absolute inset-0 bg-white/50 pointer-events-none z-0"></div>
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                {/* Left Content */}
                <div className="space-y-6">
                    <div className="text-red-600 font-black italic uppercase tracking-wider text-sm">Opportunity</div>
                    <SectionHeading align="left" color="text-black">
                        Legends Are Redefining <br /> The New Creator Economy
                    </SectionHeading>
                    <p className="text-gray-700 text-lg leading-relaxed font-medium">
                        Legends are no longer just the faces of brands – they <span className="italic font-bold">are</span> the brands, building empires and turning fan engagement into monetization. By redefining the creator economy, they're disrupting a $75B+ global sports media market and shifting power from corporations to creators.
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
                            <div className="text-[10px] uppercase font-bold text-gray-400 leading-tight">Annual Growth in Legend-Driven<br />Audience Engagement</div>
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
    );
};

export default Opportunity;