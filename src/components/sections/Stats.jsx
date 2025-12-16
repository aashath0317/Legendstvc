import React from 'react';
import { Home, DollarSign, Users, Video } from 'lucide-react';

const Stats = () => {
    return (
        <section className="bg-black border-y border-gray-800 overflow-hidden">
            <div className="flex flex-col lg:flex-row h-auto lg:h-[800px]">
                {/* Left Side: Stats */}
                <div className="lg:w-1/2 p-8 lg:p-20 flex flex-col justify-center bg-black relative z-10">
                    <div className="mb-2">
                        <span className="text-gray-400 font-bold italic uppercase tracking-wider text-sm">Traction</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-anton uppercase leading-[0.9] text-white mb-12">
                        Full 360 Media <br /> Distribution Ecosystem
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                        <div className="flex flex-col">
                            <div className="flex items-center gap-3 mb-2">
                                <Home className="text-red-600 w-8 h-8 icon-glow" strokeWidth={2.5} />
                                <span className="text-5xl font-anton text-red-600 text-glow">300M+</span>
                            </div>
                            <p className="text-gray-300 font-bold uppercase text-xs tracking-wider">
                                available homes and devices.
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center gap-3 mb-2">
                                <DollarSign className="text-red-600 w-8 h-8 icon-glow" strokeWidth={2.5} />
                                <span className="text-5xl font-anton text-red-600 text-glow">200M+</span>
                            </div>
                            <p className="text-gray-300 font-bold uppercase text-xs tracking-wider">
                                available monthly advertising impressions.
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center gap-3 mb-2">
                                <Users className="text-red-600 w-8 h-8 icon-glow" strokeWidth={2.5} />
                                <span className="text-5xl font-anton text-red-600 text-glow">250M+</span>
                            </div>
                            <p className="text-gray-300 font-bold uppercase text-xs tracking-wider">
                                total aggregate Legend social media following.
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center gap-3 mb-2">
                                <Video className="text-red-600 w-8 h-8 icon-glow" strokeWidth={2.5} />
                                <span className="text-5xl font-anton text-red-600 text-glow">10+</span>
                            </div>
                            <p className="text-gray-300 font-bold uppercase text-xs tracking-wider">
                                originally produced series featuring over 30 Legends.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Posters Marquee */}
                <div className="lg:w-1/2 bg-zinc-900 relative overflow-hidden flex items-center h-96 md:h-64 lg:h-auto">
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black via-black/50 to-transparent z-20 pointer-events-none hidden lg:block"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-900 via-zinc-900/50 to-transparent z-20 pointer-events-none hidden lg:block"></div>

                    <div
                        className="flex items-center animate-marquee h-[80%]"
                        style={{ animationDuration: '5s' }}
                    >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num, i) => (
                            <div key={i} className="flex-shrink-0 mx-4 h-full group">
                                <img
                                    src={`/poster/${num}.webp`}
                                    alt={`Show Poster ${num}`}
                                    className="h-full w-auto object-cover rounded-lg shadow-2xl transform transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;