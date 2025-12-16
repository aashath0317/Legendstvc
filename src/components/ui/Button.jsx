import React from 'react';

const Button = ({ children, className = "", primary = true, animated = false }) => (
    <button
        className={`
      px-8 py-4 font-bold uppercase tracking-wider text-sm transition-all duration-300 
      ${primary
                ? "bg-red-600 text-white hover:bg-red-700"
                : "border border-white text-white hover:bg-white hover:text-black"
            } 
      ${animated
                ? "animate-glow-pulse rounded-md shadow-[0_0_15px_rgba(220,38,38,0.5)]"
                : "transform hover:-translate-y-1 hover:shadow-lg rounded-sm"
            }
      ${className}
    `}
    >
        {children}
    </button>
);

export default Button;