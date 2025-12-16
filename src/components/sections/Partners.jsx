import React, { useState } from 'react';

const TeamCard = ({ name, title, image, bio }) => {
    return (
        <div className="group relative w-full sm:w-[350px] mx-auto perspective-1000">
            <div className="relative bg-zinc-900 border border-zinc-800 p-6 transition-all duration-300 hover:border-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]">

                {/* Image & Header */}
                <div className="flex flex-col items-center text-center">
                    <div className="relative w-32 h-32 mb-4">
                        {/* Image placeholder with triangle mask implication or just styled */}
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

const Partners = () => {
    const teamMembers = [
        {
            name: "Collin Castellaw",
            title: "Co-Founder",
            image: "/partners/1.webp", // Using existing placeholder images for now
            bio: "A visionary leader with deep roots in sports marketing and content creation, driving the strategic direction of the platform."
        },
        {
            name: "Deron Guidry",
            title: "Co-Founder",
            image: "/partners/2.webp",
            bio: " bringing decades of expertise in athlete relations and business development to build lasting partnerships."
        },
        {
            name: "Matthew Allinson",
            title: "Chief Legal Officer",
            image: "/partners/3.webp",
            bio: "Ensuring regulatory compliance and structuring deals that protect both the platform and its partners."
        },
        {
            name: "Joellen Ferrer",
            title: "President, PlayersTV+",
            image: "/partners/4.webp",
            bio: "Leading the charge in content acquisition and distribution strategies across global markets."
        },
        {
            name: "Bryan Terry",
            title: "President, Players Studio",
            image: "/partners/5.webp",
            bio: "Overseeing creative production and studio operations to deliver premium sports content."
        }
    ];

    const advisors = [
        {
            name: "Adam Cheyer",
            title: "AI & Technology",
            image: "/partners/1.webp", // Reusing placeholders
            bio: "Co-founder of Siri and Viv Labs, bringing cutting-edge AI expertise to the platform."
        },
        {
            name: "Michele Ghee",
            title: "Advertising & Media",
            image: "/partners/2.webp",
            bio: "Former CEO of Ebony & Jet, with a proven track record in media transformation and advertising."
        },
        {
            name: "Thasunda Duckett",
            title: "Brand & Media",
            image: "/partners/3.webp",
            bio: "President & CEO of TIAA, offering strategic insights into brand building and financial sustainability."
        },
        {
            name: "Tara August",
            title: "Talent & Production",
            image: "/partners/4.webp",
            bio: "SVP at Turner Sports, expert in talent management and high-level production execution."
        }
    ];

    return (
        <section className="bg-black py-24 border-t border-gray-900 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* Team Section Header */}
                <div className="text-center mb-24">
                    <h4 className="font-bold italic uppercase tracking-wider text-sm mb-4">
                        TEAM
                    </h4>
                    <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-wide leading-none mb-8 font-anton">
                        MEET THE PEOPLE<br />
                        WRITING OUR PLAYBOOK
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
                        Our founding team combines deep expertise in sports content, marketing, and athlete relations.
                    </p>
                </div>

                {/* Founders Row (Centered) */}
                <div className="flex flex-wrap justify-center gap-8 mb-12">
                    {teamMembers.slice(0, 2).map((member, idx) => (
                        <TeamCard key={idx} {...member} />
                    ))}
                </div>

                {/* Executives Row (Centered) */}
                <div className="flex flex-wrap justify-center gap-8 mb-32">
                    {teamMembers.slice(2).map((member, idx) => (
                        <TeamCard key={idx + 2} {...member} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Partners;