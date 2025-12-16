import React from 'react';
import { Play } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black py-20 border-t border-gray-900">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
                <div className="text-3xl font-black italic text-white tracking-tighter flex items-center gap-1 font-anton mb-6">
                    <div className="w-8 h-8 bg-red-600 flex items-center justify-center rounded-sm transform -skew-x-12">
                        <Play className="fill-white w-4 h-4 ml-0.5" />
                    </div>
                    LEGENDS<span className="text-red-600">TV</span>
                </div>
                <p className="text-gray-500 text-sm mb-8 text-center max-w-sm">
                    The first ever Legend-owned media network and lifestyle ecosystem.
                </p>
                <div className="text-xs text-gray-700">
                    &copy; 2025 Legends Media Group. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;