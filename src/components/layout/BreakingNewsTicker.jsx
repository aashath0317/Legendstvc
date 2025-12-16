import React from 'react';

const BreakingNewsTicker = () => (
    <div className="bg-black border-b border-gray-800 h-10 flex items-center relative overflow-hidden z-50">
        {/* Keep your <style> tag here or move to global CSS */}
        <style>
            {`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 30s linear infinite; }
        .animate-marquee-custom { animation: marquee 40s linear infinite; }
        @keyframes glow-pulse { 0% { transform: scale(1); box-shadow: 0 0 0 rgba(220,38,38,0); } 50% { transform: scale(1.05); box-shadow: 0 0 20px rgba(220,38,38,0.7); } 100% { transform: scale(1); box-shadow: 0 0 0 rgba(220,38,38,0); } }
        .animate-glow-pulse { animation: glow-pulse 2s infinite ease-in-out; }
        .text-glow { text-shadow: 0 0 20px rgba(220,38,38,0.8), 0 0 40px rgba(220,38,38,0.4); }
        .icon-glow { filter: drop-shadow(0 0 8px rgba(220,38,38,0.8)) drop-shadow(0 0 15px rgba(220,38,38,0.4)); }
      `}
        </style>
        <div className="bg-red-600 text-white text-xs font-black uppercase px-4 h-full flex items-center z-20 relative shrink-0 shadow-[4px_0_10px_rgba(0,0,0,0.5)] skew-x-[-10deg] -ml-2 pl-6">
            <span className="skew-x-[10deg]">Breaking News:</span>
        </div>
        <div className="flex items-center w-full overflow-hidden whitespace-nowrap">
            <div className="animate-marqueeVZ flex items-center w-max">
                <div className="flex items-center animate-marquee">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex items-center">
                            <span className="text-gray-300 text-xs font-bold uppercase tracking-wide px-4">Watch Co-Founder <span className="text-white">Akeel Asath</span> on Bloomberg</span>
                            <span className="text-red-600 mx-2 text-[10px]">●</span>
                            <span className="text-gray-300 text-xs font-bold uppercase tracking-wide px-4">Invest in the <span className="text-white">Future of LegendsTV</span> today</span>
                            <span className="text-red-600 mx-2 text-[10px]">●</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default BreakingNewsTicker;