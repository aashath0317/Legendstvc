import React, { useState, useEffect } from 'react';
import { Play, Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import BreakingNewsTicker from './BreakingNewsTicker';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
            <BreakingNewsTicker />
            <header className={`transition-all duration-300 w-full ${scrolled ? 'bg-black/95 backdrop-blur-md border-b border-gray-800 py-2' : 'bg-gradient-to-b from-black/80 to-transparent py-4'}`}>
                <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 flex justify-between items-center">
                    <div className="text-3xl font-black italic tracking-tighter cursor-pointer flex items-center gap-1 font-anton">
                        <div className="w-9 h-9 bg-red-600 flex items-center justify-center rounded-sm transform -skew-x-12">
                            <Play className="fill-white w-5 h-5 ml-0.5" />
                        </div>
                        LEGENDS<span className="text-red-600">TV</span>
                    </div>

                    <nav className="hidden lg:flex space-x-8 items-center text-xs font-bold uppercase tracking-wider text-gray-300">
                        <a href="#mission" className="hover:text-white transition">Opportunity</a>
                        <a href="#platform" className="hover:text-white transition">Platform</a>
                        <a href="#roadmap" className="hover:text-white transition">Roadmap</a>
                        <Button className="py-3 px-8 text-xs ml-4" animated={true}>Invest Now</Button>
                    </nav>

                    <button className="lg:hidden text-white z-50 relative" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>

                    {isMenuOpen && (
                        <div className="absolute top-full left-0 right-0 bg-zinc-900/95 backdrop-blur-lg border-b border-gray-800 p-6 flex flex-col items-center space-y-6 lg:hidden shadow-2xl animate-in slide-in-from-top-5">
                            <a href="#mission" className="text-lg font-bold uppercase tracking-widest text-white" onClick={() => setIsMenuOpen(false)}>Opportunity</a>
                            <a href="#platform" className="text-lg font-bold uppercase tracking-widest text-white" onClick={() => setIsMenuOpen(false)}>Platform</a>
                            <a href="#roadmap" className="text-lg font-bold uppercase tracking-widest text-white" onClick={() => setIsMenuOpen(false)}>Roadmap</a>
                            <Button className="w-full" animated={true}>Invest Now</Button>
                        </div>
                    )}
                </div>
            </header>
        </div>
    );
};

export default Header;