import React from 'react';

export const Section = ({ children, className = "", id = "" }) => (
    <section id={id} className={`py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto ${className}`}>
        {children}
    </section>
);

export const SectionHeading = ({ children, align = "center", color = "text-white" }) => (
    <h2 className={`text-4xl md:text-6xl font-anton uppercase mb-8 leading-tight ${align === "center" ? "text-center" : "text-left"} ${color}`}>
        {children}
    </h2>
);