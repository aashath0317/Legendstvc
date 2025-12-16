import React from 'react';
import Button from '../ui/Button';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
// The following CSS imports are typically needed but should be handled globally (e.g., in index.css or App.jsx)
// import '@vidstack/react/player/styles/default/theme.css';
// import '@vidstack/react/player/styles/default/layouts/video.css';

// Helper function to create the MediaPlayer instance
const createPlayer = (src) => (
    <MediaPlayer
        src={src}
        viewType="video"
        streamType="on-demand"
        logLevel="warn"
        playsInline
        title="LegendsTV Exclusive Content"
        autoPlay
        muted
        loop
    >
        <MediaProvider />
        {/* Default controls and UI for video playback */}
        <DefaultVideoLayout icons={defaultLayoutIcons} />
    </MediaPlayer>
);

const MediaShowcase = () => {
    // Placeholder video sources for demonstration. Replace with your actual URLs.
    const VIDEO_SOURCES = [
        "https://mydrive.akeelaasath.workers.dev/0:/gary_sources/othervideos/1.mp4",
        "https://mydrive.akeelaasath.workers.dev/0:/gary_sources/othervideos/2.mp4",
        "https://mydrive.akeelaasath.workers.dev/0:/gary_sources/othervideos/3.mp4",
        "https://mydrive.akeelaasath.workers.dev/0:/gary_sources/othervideos/4.mp4",
        "https://mydrive.akeelaasath.workers.dev/0:/gary_sources/othervideos/5.mp4",
    ];

    const items = [
        {
            title: 'The "Texas-Sized" Spotlight On LegendsTV',
            desc: "LegendsTV was recently featured on Good Morning Texas, where Co-Founder Deron Guidrey shared how the network is changing the game in sports media. The segment highlights our athlete-owned model, and how we're positioning to disrupt a $75B industry by giving athletes a way to get more personal with their audiences.",
            // Embed the video player directly
            media: createPlayer(VIDEO_SOURCES[0]),
            reverse: false
        },
        {
            title: "Watch Our Co-Founders At The New York Stock Exchange",
            desc: "In this exclusive FinTechTV interview from the floor of the iconic New York Stock Exchange, our Co-Founders share the bold vision behind LegendsTV and how we're disrupting the sports media landscape. Get an inside look at the future of athlete-led content, the origin of the company, and why this movement is reshaping the entire industry.",
            media: createPlayer(VIDEO_SOURCES[1]),
            reverse: true
        },
        {
            title: "Invest And Secure Your Exclusive Event Invite",
            desc: "All LegendsTV investors get exclusive access to OwnersFest—our annual celebration bringing together athlete partners, fans, and investors for an unforgettable experience. As an owner, you're not on the sidelines—you're in the game.",
            media: createPlayer(VIDEO_SOURCES[2]),
            hasButton: true,
            reverse: false
        },
        {
            title: "Watch Our Special Interview During Kyrie's 24-Hour Livestream",
            desc: "Experience the unfiltered energy of our co-founders as they join Kyrie Irving's historic livestream. They discuss the importance of athlete ownership, creative freedom, and building a platform that truly serves the culture.",
            media: createPlayer(VIDEO_SOURCES[3]),
            reverse: true
        },
        {
            title: "Watch Our Co-Founder Deron Guidrey On Bloomberg",
            desc: "Catch our Co-Founder discussing the mechanics of crowd-sourcing seed money and the future of fan ownership on Bloomberg Technology. Learn how we are democratizing investment in sports media.",
            media: createPlayer(VIDEO_SOURCES[4]),
            reverse: false
        }
    ];

    return (
        <section className="bg-black py-24 border-t border-gray-900 overflow-hidden relative">
            {/* Background Texture (Optional subtle red accent) */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-24">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${item.reverse ? 'lg:flex-row-reverse' : ''}`}
                    >
                        {/* Media Player Side */}
                        <div className="w-full lg:w-1/2 relative">
                            {/* The video player itself (item.media is the JSX element) */}
                            <div className="aspect-video bg-zinc-900 rounded-lg overflow-hidden border border-white/10 relative shadow-2xl">
                                {item.media}
                            </div>
                            {/* Removed image and play button overlay logic as MediaPlayer provides its own UI */}
                        </div>

                        {/* Text Side */}
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <h3 className="text-3xl md:text-4xl font-anton uppercase text-white mb-6 leading-tight">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 text-base md:text-lg leading-relaxed font-medium mb-8">
                                {item.desc}
                            </p>

                            {item.hasButton && (
                                <Button
                                    primary={true}
                                    animated={true}
                                    className="text-sm md:text-base py-4 px-10 shadow-[0_0_20px_rgba(220,38,38,0.5)] border border-red-500/50"
                                >
                                    Join Us To Make History And Invest Now
                                </Button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MediaShowcase;