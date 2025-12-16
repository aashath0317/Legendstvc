import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../ui/Button';

const DiveDeeper = () => {
    const images = [
        "/sliding_images/1.webp",
        "/sliding_images/2.webp",
        "/sliding_images/3.webp",
        "/sliding_images/4.webp",
        "/sliding_images/5.webp"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <section className="bg-white py-24 border-t border-gray-200 text-black">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT COLUMN: Stacked Image Slider */}
                    <div className="flex flex-col items-center justify-center">

                        {/* Stack Container */}
                        <div className="relative w-full max-w-[500px] aspect-[16/9] mb-10">
                            {/* Decorative 'Back' Cards to create the stack effect */}
                            <div className="absolute top-0 left-0 w-full h-full bg-black rounded-lg transform -rotate-3 -translate-x-4 translate-y-2 z-0"></div>
                            <div className="absolute top-0 left-0 w-full h-full bg-black rounded-lg transform -rotate-6 -translate-x-8 translate-y-4 z-[-1]"></div>

                            {/* Main Active Slide */}
                            <div className="relative z-10 w-full h-full rounded-lg overflow-hidden shadow-xl border border-gray-200 bg-white">
                                <img
                                    src={images[currentIndex]}
                                    alt={`Investor Deck Slide ${currentIndex + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Oval Navigation Buttons */}
                        <div className="flex gap-4">
                            <button
                                onClick={prevSlide}
                                className="w-16 h-10 flex items-center justify-center border border-black rounded-full hover:bg-black hover:text-white transition-all duration-300"
                            >
                                <ChevronLeft className="w-6 h-6" strokeWidth={1.5} />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="w-16 h-10 flex items-center justify-center border border-black rounded-full hover:bg-black hover:text-white transition-all duration-300"
                            >
                                <ChevronRight className="w-6 h-6" strokeWidth={1.5} />
                            </button>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Content & Form */}
                    <div className="text-center lg:text-left">
                        <h2 className="text-5xl md:text-6xl font-anton uppercase leading-[0.9] mb-6">
                            Dive Deeper Into <br /> This Opportunity
                        </h2>
                        <p className="text-gray-600 text-lg mb-10 font-medium">
                            Download the investor deck for the inside scoop about investing in LegendsTV Digital.
                        </p>

                        <div className="w-full max-w-md mx-auto lg:mx-0">
                            <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500 text-left">
                                Enter your email
                            </label>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    placeholder="example@gmail.com"
                                    className="flex-1 bg-gray-100 border border-gray-300 px-4 py-4 rounded-sm text-black focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all placeholder:text-gray-400"
                                />
                                <Button
                                    primary={true}
                                    className="whitespace-nowrap py-4 px-8 shadow-lg hover:shadow-xl bg-red-600 text-white font-anton uppercase tracking-widest text-sm"
                                >
                                    Download Deck
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DiveDeeper;