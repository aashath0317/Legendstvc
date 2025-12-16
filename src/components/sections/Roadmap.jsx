import React, { useState, useEffect, useRef } from 'react';
import { Check } from 'lucide-react';
import ImpactShowcase from './ImpactShowcase';

const RoadmapItem = ({ text, status }) => {
    const [isInView, setIsInView] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => setIsInView(entry.isIntersecting));
            },
            { threshold: 0.5, rootMargin: "0px 0px -20% 0px" }
        );
        if (domRef.current) observer.observe(domRef.current);
        return () => observer.disconnect();
    }, []);

    const isCompleted = status === "completed";
    const isActive = isCompleted && isInView;

    return (
        <div ref={domRef} className="flex items-center gap-6 group">
            <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 z-10 relative ${isActive ? "bg-red-600 border-red-600 scale-110 shadow-[0_0_15px_rgba(220,38,38,0.6)]" : "bg-black border-gray-700 scale-100"}`}>
                <div className={`transform transition-transform duration-500 ease-back-out ${isActive ? 'scale-100' : 'scale-0'}`}>
                    <Check className="text-white w-5 h-5" strokeWidth={3} />
                </div>
            </div>
            <div className={`flex-1 py-5 px-6 uppercase font-bold text-sm md:text-base tracking-widest transition-all duration-500 ease-out transform ${isActive ? "bg-red-600 text-white translate-x-2 shadow-xl" : "bg-[#1A1A1A] text-gray-400 translate-x-0 opacity-80"}`}>
                {text}
            </div>
        </div>
    );
};

const RoadmapList = () => {
    const items = [
        { label: "Editorial website launch", status: "completed" },
        { label: "Original content production", status: "completed" },
        { label: "Content acquisition & licensing", status: "completed" },
        { label: "Distribution & Technology", status: "completed" },
        { label: "$6.4M+ Seed Capital Raised", status: "completed" },
        { label: "Secured 50+ Legends", status: "completed" },
        { label: "200M+ Monthly Ad Impressions", status: "completed" },
        { label: "300M+ Devices in OTT/CTV Distribution", status: "completed" },
        { label: "170+ Annual Legend Content Hours", status: "completed" },
        { label: "Acquired Proprietary Ad Technology", status: "completed" },
        { label: "Direct-to-Consumer Streaming Launch (Coming Soon)", status: "upcoming" },
        { label: "Players Studio Launch (Coming Soon)", status: "upcoming" },
        { label: "Global expansion (Coming Soon)", status: "upcoming" },
    ];

    return (
        <div className="relative pl-4 lg:pl-0">
            <div className="absolute left-9 lg:left-5 top-2 bottom-10 w-[2px] bg-gray-800"></div>
            <div className="space-y-8 relative z-10 pb-24">
                {items.map((item, index) => (
                    <RoadmapItem key={index} text={item.label} status={item.status} />
                ))}
            </div>
        </div>
    );
};

const Roadmap = () => {
    return (
        <section id="roadmap" className="bg-black py-24 border-y border-gray-800">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 relative items-start">
                <div className="hidden lg:block sticky top-32">
                    <div>
                        <div className="text-gray-400 font-bold italic uppercase tracking-wider text-sm mb-4">Roadmap</div>
                        <h2 className="text-5xl md:text-6xl font-anton uppercase leading-none text-white mb-8">
                            Built Different: <br /> A Track Record of <br /> Transformation
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed font-medium">
                            PlayersTV is riding massive momentum, fueled by over <span className="text-white font-bold">$6.4M*</span> raised...
                        </p>
                        <p className="text-[10px] text-gray-600 mt-4">*The amount includes related entities.</p>
                    </div>
                </div>

                {/* Mobile Header */}
                <div className="lg:hidden mb-8">
                    <div className="text-gray-400 font-bold italic uppercase tracking-wider text-sm mb-4">Roadmap</div>
                    <h2 className="text-4xl font-anton uppercase leading-none text-white mb-4">Built Different...</h2>
                </div>

                <div className="relative pl-8 lg:border-l-0 border-l-2 border-transparent">
                    <RoadmapList />
                </div>
            </div>
            <ImpactShowcase />
        </section>
    );
};

export default Roadmap;