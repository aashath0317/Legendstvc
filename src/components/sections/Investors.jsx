import React from 'react';

// You can move this data to src/data/athletes.js later if you prefer
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

const Investors = () => {
    return (
        <div className="bg-[#181818] py-20 border-y border-gray-800 overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
                <h3 className="text-center font-anton text-3xl md:text-4xl uppercase text-white mb-16 tracking-wide">
                    50+ Professional Legend Investors
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
    );
};

export default Investors;