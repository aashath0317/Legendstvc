import React from 'react';
import { Play, Twitter, Instagram, Linkedin, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black py-16 border-t border-gray-900 text-gray-400 font-sans text-xs leading-relaxed">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* Top Section: Logo & Socials */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                    {/* Logo */}
                    <div className="text-2xl font-black italic tracking-tighter flex items-center gap-1 font-anton text-white">
                        LEGENDS<span className="text-red-600">TV</span>
                        <div className="w-6 h-6 bg-red-600 flex items-center justify-center rounded-sm transform -skew-x-12 ml-1">
                            <Play className="fill-white w-3 h-3 ml-0.5" />
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="hover:text-white transition-colors"><Youtube size={20} /></a>
                        {/* TikTok icon is not in standard Lucide package usually, using a placeholder or omitted if not critical, but user showed icons. We can stick to standard ones or import specifically if needed. For now using standard set. */}
                    </div>
                </div>

                {/* Legal Text Sections */}
                <div className="space-y-6 text-justify">
                    <p className="font-bold text-white">
                        1. Statista
                    </p>
                    <p>
                        Equity crowdfunding investments in private placements, and start-up investments in particular, are speculative and involve a high degree of risk and those investors who cannot afford to lose their entire investment should not invest in start-ups. Companies seeking startup investment through equity crowdfunding tend to be in earlier stages of development and their business model, products and services may not yet be fully developed, operational or tested in the public marketplace. There is no guarantee that the stated valuation and other terms are accurate or in agreement with the market or industry valuations. Further, investors may receive illiquid and/or restricted stock that may be subject to holding period requirements and/or liquidity concerns.
                    </p>
                    <p>
                        DealMaker Securities LLC, a registered broker-dealer, and member of <a href="#" className="underline">FINRA</a> | <a href="#" className="underline">SIPC</a>, located at 30 East 23rd Street, 2nd Floor, NY, NY 10010, is the Intermediary for this offering and is not an affiliate of or connected with the Issuer. Please check our background on FINRA's <a href="#" className="underline">BrokerCheck</a>. DealMaker Securities LLC does not make investment recommendations. DealMaker Securities LLC is NOT placing or selling these securities on behalf of the Issuer. DealMaker Securities LLC is NOT soliciting this investment or making any recommendations by collecting, reviewing, and processing an Investor's documentation for this investment. DealMaker Securities LLC conducts Anti-Money Laundering, Identity and Bad Actor Disqualification reviews of the Issuer, and confirms they are a registered business in good standing. DealMaker Securities LLC is NOT vetting or approving the information provided by the Issuer or the Issuer itself.
                    </p>
                    <p>
                        Contact information is provided for Investors to make inquiries and requests to DealMaker Securities LLC regarding Regulation CF in general, or the status of such investor's submitted documentation, specifically. DealMaker Securities LLC may direct Investors to specific sections of the Offering Circular to locate information or answers to their inquiry but does not opine or provide guidance on issuer related matters.
                    </p>
                    <p>
                        This website may contain forward-looking statements and information relating to, among other things, the company, its business plan and strategy, and its industry. These forward-looking statements are based on the beliefs of, assumptions made by, and information currently available to the company's management. When used in the offering materials, the words "estimate," "project," "believe," "anticipate," "intend," "expect" and similar expressions are intended to identify forward-looking statements. These statements reflect management's current views with respect to future events and are subject to risks and uncertainties that could cause the company's actual results to differ materially from those contained in the forward-looking statements. Investors are cautioned not to place undue reliance on these forward-looking statements, which speak only as of the date on which they are made. The company does not undertake any obligation to revise or update these forward-looking statements to reflect events or circumstances after such date or to reflect the occurrence of unanticipated events.
                    </p>
                </div>

                {/* Bottom Row */}
                <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-900 border-opacity-50">
                    <div>
                        &copy; All Rights Reserved
                    </div>
                    <div>
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;