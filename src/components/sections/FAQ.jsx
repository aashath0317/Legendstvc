import React, { useState } from 'react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-800">
            <button
                onClick={onClick}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
            >
                <span className="text-xl md:text-2xl font-bold text-white group-hover:text-red-600 transition-colors">
                    {question}
                </span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    {/* Chevron Icon */}
                    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white group-hover:text-red-600">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16.5303 20.8839C16.2374 21.1768 15.7626 21.1768 15.4697 20.8839L7.82318 13.2374C7.53029 12.9445 7.53029 12.4697 7.82318 12.1768L8.17674 11.8232C8.46963 11.5303 8.9445 11.5303 9.2374 11.8232L16 18.5858L22.7626 11.8232C23.0555 11.5303 23.5303 11.5303 23.8232 11.8232L24.1768 12.1768C24.4697 12.4697 24.4697 12.9445 24.1768 13.2374L16.5303 20.8839Z" fill="currentColor"></path>
                    </svg>
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="pb-6 text-gray-400 leading-relaxed text-lg">
                    {answer}
                </div>
            </div>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "Why invest in startups?",
            answer: (
                <p>
                    <a href="https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/updated-11" className="text-white underline hover:text-red-600 transition-colors">Regulation CF</a> allows investors to invest in startups and early-growth companies. This is different from helping a company raise money on Kickstarter; with Regulation CF Offerings, you aren’t buying products or merchandise - you are buying a piece of a company and helping it grow.
                </p>
            )
        },
        {
            question: "How much can I invest?",
            answer: (
                <p>
                    <a href="https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/updated-3" className="text-white underline hover:text-red-600 transition-colors">Accredited investors</a> can invest as much as they want. But if you are NOT an accredited investor, your investment limit depends on either your annual income or net worth, whichever is greater. If the number is less than $124,000, you can only invest 5% of it. If both are greater than $124,000 then your investment limit is 10%.
                </p>
            )
        },
        {
            question: "How do I calculate my net worth?",
            answer: "To calculate your net worth, just add up all of your assets and subtract all of your liabilities (excluding the value of the person’s primary residence). The resulting sum is your net worth."
        },
        {
            question: "What are the tax implications of an equity crowdfunding investment?",
            answer: "We cannot give tax advice, and we encourage you to talk with your accountant or tax advisor before making an investment."
        },
        {
            question: "Who can invest in a Regulation CF Offering?",
            answer: "Individuals over 18 years of age can invest."
        },
        {
            question: "What do I need to know about early-stage investing? Are these investments risky?",
            answer: "There will always be some risk involved when investing in a startup or small business. And the earlier you get in the more risk that is usually present. If a young company goes out of business, your ownership interest could lose all value. You may have limited voting power to direct the company due to dilution over time. You may also have to wait about five to seven years (if ever) for an exit via acquisition, IPO, etc. Because early-stage companies are still in the process of perfecting their products, services, and business model, nothing is guaranteed. That’s why startups should only be part of a more balanced, overall investment portfolio."
        },
        {
            question: "When will I get my investment back?",
            answer: "The Common Stock (the \"Shares\") of LegendsTV Digital (the \"Company\") are not publicly-traded. As a result, the shares cannot be easily traded or sold. As an investor in a private company, you typically look to receive a return on your investment under the following scenarios: The Company gets acquired by another company. The Company goes public (makes an initial public offering). In those instances, you receive your pro-rata share of the distributions that occur, in the case of acquisition, or you can sell your shares on an exchange. These are both considered long-term exits, taking approximately 5-10 years (and often longer) to see the possibility for an exit. It can sometimes take years to build companies. Sometimes there will not be any return, as a result of business failure."
        },
        {
            question: "Can I sell my shares?",
            answer: "Shares sold via Regulation Crowdfunding offerings have a one-year lockup period before those shares can be sold under certain conditions."
        },
        {
            question: "Exceptions to limitations on selling shares during the one-year lockup period:",
            answer: (
                <>
                    <p className="mb-4">In the event of death, divorce, or similar circumstance, shares can be transferred to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>The company that issued the securities</li>
                        <li>An accredited investor</li>
                        <li>A family member (child, stepchild, grandchild, parent, stepparent, grandparent, spouse or equivalent, sibling, mother-in-law, father-in-law, son-in-law, daughter-in-law, brother-in-law, or sister-in-law, including adoptive relationships)</li>
                    </ul>
                </>
            )
        },
        {
            question: "What happens if a company does not reach their funding target?",
            answer: "If a company does not reach their minimum funding target, all funds will be returned to the investors after the close of the offering."
        },
        {
            question: "How can I learn more about a company's offering?",
            answer: "All available disclosure information can be found on the offering pages for our Regulation Crowdfunding offering."
        },
        {
            question: "What if I change my mind about investing?",
            answer: "You can cancel your investment at any time, for any reason, until 48 hours prior to a closing occurring. If you’ve already funded your investment and your funds are in escrow, your funds will be promptly refunded to you upon cancellation. To submit a request to cancel your investment please email: info@dealmakersecurities.com"
        },
        {
            question: "How do I keep up with how the company is doing?",
            answer: "At a minimum, the company will be filing with the SEC and posting on its website an annual report, along with certified financial statements. Those should be available 120 days after the fiscal year end. If the company meets a reporting exception, or eventually has to file more reported information to the SEC, the reporting described above may end. If these reports end, you may not continually have current financial information about the company."
        },
        {
            question: "What relationship does the company have with DealMaker Securities?",
            answer: "Once an offering ends, the company may continue its relationship with DealMaker Securities for additional offerings in the future. DealMaker Securities’ affiliates may also provide ongoing services to the company. There is no guarantee any services will continue after the offering ends."
        },
        {
            question: "What is LegendsTV Digital?",
            answer: "LegendsTV Digital (LTV) is a new sports media company built out of a vision to disrupt the conventional hierarchy of the industry. However, despite being a newly formed entity, the expertise exhibited by LegendsTV Digital's founding team makes the company anything but a rookie in the sports media landscape."
        }
    ];

    return (
        <section className="bg-black py-24 border-t border-gray-900 text-white">
            {/* UPDATED: Changed from max-w-4xl to max-w-7xl to allow full width for image */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* INNER CONTAINER: Keeps the Text and Header narrow (readable)
                   This mimics the max-w-4xl you had before for the text parts.
                */}
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h4 className="font-bold italic uppercase tracking-wider text-sm mb-4">
                            FAQ
                        </h4>
                        <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-wide leading-none mb-6 font-anton">
                            FREQUENTLY ASKED<br />QUESTIONS
                        </h2>
                    </div>

                    {/* FAQ List */}
                    <div className="space-y-2 mb-24">
                        {faqData.map((item, index) => (
                            <FAQItem
                                key={index}
                                question={item.question}
                                answer={item.answer}
                                isOpen={openIndex === index}
                                onClick={() => toggleFAQ(index)}
                            />
                        ))}
                    </div>
                </div>

                {/* IMAGE: Now sits outside the inner container, allowing it to be HUGE (max-w-7xl)
                */}
                <div className="w-full">
                    <img
                        src="/team.webp"
                        alt="LegendsTV Team"
                        className="w-full h-auto object-cover rounded-xl opacity-90 transition-all duration-700"
                    />
                </div>

            </div>
        </section>
    );
};

export default FAQ;