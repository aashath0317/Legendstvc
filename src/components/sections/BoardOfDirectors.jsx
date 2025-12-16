import React from 'react';

// Reusing the TeamCard structure from Partners.jsx to ensure exact behavior match
const BoardCard = ({ name, title, image, bio }) => {
    return (
        <div className="group relative w-full sm:w-[350px] mx-auto perspective-1000">
            <div className="relative bg-zinc-900 border border-zinc-800 p-6 transition-all duration-300 hover:border-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]">

                {/* Image & Header */}
                <div className="flex flex-col items-center text-center">
                    <div className="relative w-32 h-32 mb-4">
                        <div className="w-full h-full relative overflow-hidden">
                            <img
                                src={image}
                                alt={name}
                                className="w-full h-full object-cover object-top transition-all duration-500"
                            />
                        </div>
                    </div>

                    <h3 className="text-xl font-bold uppercase font-anton tracking-wide text-white mb-1">
                        {name}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                        {title}
                    </p>
                </div>

                {/* Expandable Bio Section */}
                <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-64 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    <p className="text-gray-400 text-sm leading-relaxed text-center pb-4 border-t border-zinc-800 pt-4 mt-2">
                        {bio}
                    </p>
                </div>

                {/* Read More Indicator */}
                <div className="flex justify-center mt-2 group-hover:hidden transition-opacity duration-300">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 flex items-center gap-1">
                        Read More <span className="text-xs">▼</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

const BoardOfDirectors = () => {
    const directors = [
        {
            name: "Chris Paul",
            title: "Board Member",
            image: "/strategic-advisors/1.webp",
            bio: "NBA All-Star and entrepreneur bringing elite leadership and strategic insight to the boardroom."
        },
        {
            name: "Damian Lillard",
            title: "Board Member",
            image: "/strategic-advisors/2.webp",
            bio: "Professional athlete with a keen eye for business innovation and community impact."
        },
        {
            name: "Dwyane Wade",
            title: "Board Member",
            image: "/strategic-advisors/3.webp",
            bio: "NBA legend and business mogul helping guide the future of athlete-owned media."
        },
        {
            name: "Travis Kelce",
            title: "Board Member",
            image: "/strategic-advisors/4.webp",
            bio: "Super Bowl champion utilizing his platform to expand reach and engagement."
        },
        {
            name: "Kyrie Irving",
            title: "Board Member",
            image: "/strategic-advisors/5.webp",
            bio: "World-class athlete focused on creative control and authenticity in sports media."
        },
        {
            name: "Carmelo Anthony",
            title: "Board Member",
            image: "/strategic-advisors/6.webp",
            bio: " Basketball icon and investor driving growth through strategic partnerships."
        },
        {
            name: "Vernon Davis",
            title: "Board Member",
            image: "/strategic-advisors/7.webp",
            bio: "Former NFL star turned entrepreneur and actor, bridging sports and entertainment."
        }
    ];

    return (
        <section className="bg-black py-24 border-t border-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* Header Section */}
                <div className="text-center mb-20">
                    <h4 className="font-bold italic uppercase tracking-wider text-sm mb-4">
                        Board of Directors
                    </h4>
                    <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-wide leading-none mb-6 font-anton">
                        GUIDING OUR VISION
                    </h2>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto font-light">
                        Our Board of Directors is composed of seasoned leaders and visionaries dedicated to driving our strategic direction and ensuring long-term success.
                    </p>
                </div>

                {/* Grid Layout - 3 Columns (Centering the items is key, similar to Partners) */}
                <div className="flex flex-wrap justify-center gap-8">
                    {directors.map((director, index) => (
                        <BoardCard key={index} {...director} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default BoardOfDirectors;