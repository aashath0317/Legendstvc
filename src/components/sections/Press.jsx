import React, { useState } from 'react';
import { Play, ChevronLeft, ChevronRight, Newspaper } from 'lucide-react';

const Press = () => {
    // Data for Top Row (Static Grid)
    const topArticles = [
        {
            source: "Forbes",
            title: "Chris Paul Talks PlayersTV Investment",
            img: "/in-the-press/up/1.webp"
        },
        {
            source: "abcNEWS",
            title: "Ken Griffey Jr. on PlayersTV Documentary",
            img: "/in-the-press/up/2.webp"
        },
        {
            source: "yahoo! sports",
            title: "Damian Lillard on Content & PlayersTV Impact",
            img: "/in-the-press/up/3.webp"
        },
        {
            source: "CBS NEWS",
            title: "PlayersTV Co-Founder on Company Vision and Scale",
            img: "/in-the-press/up/4.webp"
        }
    ];

    // Data for Bottom Row (Carousel)
    const bottomArticles = [
        {
            source: "Forbes",
            title: "The Founders Who Are Redefining Athlete Media And Distribution With PlayersTV",
            img: "/in-the-press/down/1.webp"
        },
        {
            source: "ESSENCE",
            title: "First-Ever Athlete-Owned TV Network Backed By Kyrie Irving, Dwyane Wade & More Lands Amazon Deal",
            img: "/in-the-press/down/2.webp"
        },
        {
            source: "ADWEEK",
            title: "NBA's DeAndre Jordan Spreads The Gospel Of Going Plant-Based With His Show, Cooking Clean",
            img: "/in-the-press/down/3.webp"
        },
        {
            source: "Forbes",
            title: "New PlayersTV Series 'Front Office' Will Highlight The Investing Acumen Of Athlete Entrepreneurs",
            img: "/in-the-press/down/4.webp"
        },
        {
            source: "Variety",
            title: "PlayersTV Expands Global Reach With New Strategic Partnerships",
            img: "/in-the-press/down/5.webp"
        },
        {
            source: "TechCrunch",
            title: "How Athlete-Driven Media Is changing The Landscape Of Sports Entertainment",
            img: "/in-the-press/down/6.webp"
        },
        {
            source: "ESPN",
            title: "Exclusive: Inside The Launch Of PlayersTV's Newest Original Series",
            img: "/in-the-press/down/7.webp"
        }
    ];

    // State for Bottom Carousel
    const [startIndex, setStartIndex] = useState(0);
    const itemsToShow = 4; // Number of items visible at once on desktop

    const nextSlide = () => {
        if (startIndex + itemsToShow < bottomArticles.length) {
            setStartIndex(prev => prev + 1);
        }
    };

    const prevSlide = () => {
        if (startIndex > 0) {
            setStartIndex(prev => prev - 1);
        }
    };

    return (
        <section className="bg-black py-24 border-t border-gray-900 overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-12">

                {/* Header */}
                <div className="mb-12">
                    <div className="text-gray-400 font-bold italic uppercase tracking-wider text-sm mb-2">In The Press</div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-anton uppercase text-white leading-none">
                        Making Headlines. Shaping The Future.
                    </h2>
                </div>

                {/* Top Row: Fixed Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    {topArticles.map((item, index) => (
                        <div key={index} className="group relative aspect-[4/5] bg-zinc-900 cursor-pointer overflow-hidden border border-white/10 hover:border-red-600 transition-colors duration-300">
                            {/* Image */}
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                            />

                            {/* Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center z-10">
                                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <Play className="w-5 h-5 fill-white text-white ml-0.5" />
                                </div>
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent pt-20">
                                <div className="text-center">
                                    <h4 className="text-white font-serif font-bold text-xl mb-2">{item.source}</h4>
                                    <p className="text-white text-xs font-bold leading-tight line-clamp-2">
                                        {item.title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Row: Carousel */}
                <div className="relative group/carousel">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {bottomArticles.slice(startIndex, startIndex + itemsToShow).map((item, index) => (
                            <div key={index} className="group relative aspect-[4/5] bg-zinc-900 cursor-pointer overflow-hidden border border-white/10 hover:border-red-600 transition-colors duration-300">

                                {/* "NEWS" Badge */}
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="bg-white text-black text-[10px] font-bold uppercase px-2 py-1">News</span>
                                </div>

                                {/* Image */}
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                />

                                {/* Small Play/Icon Button (Optional variation for bottom row) */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                                        <Newspaper className="w-5 h-5 text-white" />
                                    </div>
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/90 to-transparent pt-24">
                                    <div className="text-center">
                                        <h4 className="text-white font-anton uppercase text-lg mb-2 tracking-wide">{item.source}</h4>
                                        <p className="text-gray-300 text-[10px] font-bold uppercase leading-tight line-clamp-3 tracking-wide">
                                            {item.title}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Carousel Controls */}
                    {startIndex > 0 && (
                        <button
                            onClick={prevSlide}
                            className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform z-30"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                    )}

                    {startIndex + itemsToShow < bottomArticles.length && (
                        <button
                            onClick={nextSlide}
                            className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform z-30"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    )}
                </div>

                {/* Pagination Dots (Optional Visual Cue) */}
                <div className="flex justify-center gap-2 mt-6">
                    {Array.from({ length: Math.ceil(bottomArticles.length / itemsToShow) }).map((_, i) => (
                        <div
                            key={i}
                            className={`h-1.5 rounded-full transition-all duration-300 ${Math.floor(startIndex / itemsToShow) === i ? 'w-8 bg-red-600' : 'w-1.5 bg-gray-800'}`}
                        ></div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Press;