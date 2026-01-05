import React, { useRef } from "react";
import MacLinks from "../components/common/MacLinks";
import { getAssetPath } from "../assets";
import MacShowProduct from "../components/common/MacShowProduct";
import ShoppingFeature from "../components/common/ShoppingFeature";
import WhyMac from "../components/common/WhyMac";
import UnlockMac from "../components/common/UnlockMac";
import { macData_menu } from "../data/mac";

const Mac = () => {
    const scrollRef = useRef(null);

    return (
        <div className="w-full bg-white">
            {/* 1. Header Links - Responsive Scroll */}
            <div className="relative group w-full max-w-screen-xl mx-auto">
                 {/* Left Arrow (Mobile) */}
                 <button
                    onClick={() => {
                        if (scrollRef.current) {
                            scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
                        }
                    }}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-md md:hidden hidden"
                    aria-label="Scroll left"
                >
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>

                <div 
                    ref={scrollRef}
                    className="flex overflow-x-auto scrollbar-hide items-center justify-start md:justify-center w-full py-4 gap-4 md:gap-8 px-4 md:px-0 scroll-smooth"
                >
                    {macData_menu && macData_menu.navigation_menu && macData_menu.navigation_menu.map((item) => (
                        <div key={item.name} className="flex flex-col items-center justify-center min-w-[70px] md:min-w-auto shrink-0 md:shrink cursor-pointer hover:opacity-80 transition-opacity" >
                            <img src={getAssetPath(item.image)} alt={item.name} className="w-10 h-10 md:w-auto md:h-auto" />
                            <p className="text-[10px] md:text-[12px] whitespace-nowrap pt-2">{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 2. Hero Video */}
            <div className="relative w-full h-[500px] md:h-[calc(100vh-100px)] max-h-[850px] overflow-hidden mb-8 md:mb-12">
                <div className="absolute top-10 md:top-[60px] left-0 right-0 z-10 text-center px-4">
                    <h1 className="text-4xl md:text-[60px] font-semibold text-black leading-tight mb-2">Mac</h1>
                    <p className="text-xl md:text-[30px] font-medium leading-tight text-black">
                        If you can dream it, Mac can do it.
                    </p>
                </div>
                <video
                    src={getAssetPath("assets/video/mac-hero.mp4")}
                    autoPlay
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                />
            </div>

            {/* 3. Get to Know Mac */}
             <div className="w-full max-w-screen-xl mx-auto px-4 md:px-6 mb-12">
                <div className="w-full py-10 px-6 md:px-12 bg-[#f5f5f7] rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
                     <h2 className="text-3xl md:text-[40px] font-semibold text-center md:text-left">
                        Get to know Mac.
                    </h2>
                     {/* Add links or content here if needed from original design */}
                </div>
             </div>

            {/* 4. Product Showcases & Features */}
            {/* Ensuring these components are wrapped or handled responsively inside themselves */}
            <div className="w-full max-w-screen-xl mx-auto px-0 md:px-6 space-y-4 md:space-y-6">
                 <MacShowProduct />
                 <WhyMac />
                 <UnlockMac />
                 <ShoppingFeature />
            </div>

            <div className="pb-20"></div>
        </div>
    );
};

export default Mac;
