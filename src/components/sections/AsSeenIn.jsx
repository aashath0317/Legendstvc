import React from 'react';

const AsSeenIn = () => {
    const brands = [
        "Politico",
        "USA TODAY",
        "BLACK ENTERPRISE",
        "SBJ",
        "Forbes",
        "yahoo! sports",
        "abc NEWS",
        "msnbc",
        "CNBC",
        "ADWEEK",
        "yahoo! finance",
        "Entrepreneur"
    ];

    return (
        <section className="bg-gray-100 py-16 border-t border-gray-200 overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-6">

                {/* Section Header */}
                <div className="text-center mb-10">
                    <h3 className="text-black font-black italic uppercase tracking-widest text-sm">
                        As Seen In
                    </h3>
                </div>

                {/* Marquee Container */}
                <div className="relative w-full overflow-hidden">
                    {/* Gradient Fade Edges for smooth look */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-100 to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-100 to-transparent z-10"></div>

                    <div className="flex items-center animate-marquee whitespace-nowrap">
                        {/* Tripling the list for seamless infinite scroll */}
                        {[...brands, ...brands, ...brands].map((brand, i) => (
                            <div key={i} className="mx-12 shrink-0">
                                {/* Replace this span with <img src="..." /> if you have logo files */}
                                <span className="text-3xl md:text-4xl font-black text-gray-400 uppercase tracking-tighter hover:text-black transition-colors duration-300 cursor-default font-anton">
                                    {brand}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AsSeenIn;