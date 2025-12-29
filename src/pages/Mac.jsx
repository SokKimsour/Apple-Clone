import { useRef } from "react";
import { macData_menu } from "../data/mac";
import { getAssetPath } from "../utils/assets";
import MacShowProduct from "../components/common/MacShowProduct";
import ShoppingFeature from "../components/common/ShoppingFeature";
import WhyMac from "../components/common/WhyMac";
import UnlockMac from "../components/common/UnlockMac";
import MacLinks from "../components/common/MacLinks";

const Mac = () => {
    const scrollRef = useRef(null);

    return (
        <div className="">

            <div className="relative group w-full max-w-[1260px] mx-auto">
                {/* Left Arrow */}
                <button
                    onClick={() => {
                        if (scrollRef.current) {
                            scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
                        }
                    }}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-md block md:hidden disabled:opacity-0 transition-opacity"
                    aria-label="Scroll left"
                >
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>

                <div 
                    ref={scrollRef}
                    className="flex overflow-x-auto scrollbar-hide items-center justify-start w-full py-4 gap-4 md:gap-8 px-4 md:px-0 scroll-smooth"
                >
                    {macData_menu.navigation_menu.map((item) => (
                        <div key={item.name} className="flex flex-col items-center justify-center min-w-[70px] md:min-w-auto shrink-0 md:shrink cursor-pointer hover:opacity-80 transition-opacity" >
                            <img src={getAssetPath(item.image)} alt={item.name} className="w-10 h-10 md:w-auto md:h-auto" />
                            <p className="text-[10px] md:text-[12px] whitespace-nowrap pt-2">{item.name}</p>
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={() => {
                        if (scrollRef.current) {
                            scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
                        }
                    }}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-md block md:hidden transition-opacity"
                    aria-label="Scroll right"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
            <div className="bg-[rgb(245,245,247)]">
                <p className="text-sm text-center py-4">Buy Mac with education savings.<span className="text-blue-500">Shop</span></p>
            </div>
            <MacShowProduct />
            <ShoppingFeature />
            <WhyMac />
            {/* helpchooseme */}
            <div className="w-full h-auto py-16 md:py-[160px]">
                <div >
                    <h1 className="text-4xl md:text-[56px] font-semibold w-full max-w-[1260px] mx-auto mb-10 md:mb-[74px] px-4 md:px-0 text-center md:text-left">Help me choose.</h1>
                    <div className="w-full max-w-[1260px] h-auto md:h-[480px] grid grid-cols-1 md:grid-cols-2 mx-auto bg-gray-200/50 rounded-2xl overflow-hidden"> 
                        <div className="flex flex-col items-center justify-center text-center md:text-justify px-6 md:px-28 gap-4 py-10 md:py-0">
                            <p className="text-2xl md:text-[32px] font-semibold">Answer a few questions to find the best Mac for you.</p>
                             <button
                className="inline-flex items-center justify-center
              px-[18px] py-[8px]
              bg-[#0071e3] hover:bg-[#0077ed]
              text-white text-[17px]
              rounded-full
              transition-colors duration-200
              focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3]/40"
              >
                Get Started
              </button>
                        </div>
                        <img src={getAssetPath("assets/image/global/helpmechoose.png")} alt="helpmechoose" className="w-full h-[300px] md:h-full object-cover p-5" />
                    </div>
                </div>
            </div>
            <div className="w-full h-auto py-16 md:py-[160px] bg-gray-200/50">
                <div >
                    <h1 className="text-4xl md:text-[56px] font-semibold w-full max-w-[1260px] mx-auto mb-10 md:mb-[74px] px-4 md:px-0 text-center md:text-left">Switch to Mac.</h1>
                    <div className="w-full max-w-[1260px] h-auto md:h-[580px] grid grid-cols-1 md:grid-cols-2 mx-auto gap-5 px-4 md:px-0"> 
                        <div className="grid grid-rows-[auto_1fr] md:grid-rows-2 rounded-2xl bg-white overflow-hidden min-h-[500px] md:min-h-0">
                            <div className="flex flex-col items-center justify-center gap-2 px-6 md:px-28 py-10 md:py-0 text-center">
                                <p className="text-2xl md:text-[32px] font-semibold">Give us the old. Save on</p>
                                <p className="text-2xl md:text-[32px] font-semibold">the new.</p>
                                <p className="text-[16px] ">With Apple Trade In, you can get a great value for your current device and apply it toward a new one. If your device isn’t eligible for credit, we’ll recycle it for free.</p>
                                <p className="text-[16px] text-blue-500 ">See what your device is worth</p>
                            </div>
                            <div className="w-full h-full bg-white">
                                <img src={getAssetPath("assets/image/global/switchtomac1.png")} alt="switchtomac" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="grid grid-rows-[auto_1fr] md:grid-rows-2 rounded-2xl bg-white overflow-hidden min-h-[500px] md:min-h-0">
                            <div className="flex flex-col items-center justify-center gap-2 px-6 md:px-28 py-10 md:py-0 text-center">
                                <p className="text-2xl md:text-[32px] font-semibold">Mac does that.</p>
                                <p className="text-[16px]">see how easy it is to switch to mac.</p>
                                <p className="text-[16px] text-blue-500 ">learn more</p>
                            </div>
                            <div className="w-full h-full bg-white">
                                <img src={getAssetPath("assets/image/global/10003.png")} alt="switchtomac" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-auto py-16 md:py-[160px] bg-gray-200/50">
                <div >
                    <h1 className="text-4xl md:text-[56px] font-semibold w-full max-w-[1260px] mx-auto mb-10 md:mb-[74px] px-4 md:px-0 text-center md:text-left">Mac essentials.</h1>
                    <div className="w-full max-w-[1260px] h-auto md:h-[580px] grid grid-cols-1 md:grid-cols-2 mx-auto gap-5 px-4 md:px-0"> 
                        <div className="grid grid-rows-[auto_1fr] md:grid-rows-2 rounded-2xl bg-white overflow-hidden min-h-[500px] md:min-h-0">
                            <div className="flex flex-col items-center justify-center gap-2 px-6 md:px-28 py-10 md:py-0 text-center">
                                <p className="text-2xl md:text-[32px] font-semibold">Mac accessories.</p>
                                <p className="text-[16px] ">Explore keyboards, mice, and other essentials.</p>
                                <p className="text-[16px] text-blue-500 ">Shop mac accessories</p>
                            </div>
                            <div className="w-full h-full bg-white">
                                <img src={getAssetPath("assets/image/global/switchtomac1.png")} alt="switchtomac" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="grid grid-rows-[auto_1fr] md:grid-rows-2 rounded-2xl bg-white overflow-hidden min-h-[500px] md:min-h-0">
                            <div className="flex flex-col items-center justify-center gap-2 px-6 md:px-28 py-10 md:py-0 text-center">
                                <p className="text-2xl md:text-[32px] font-semibold">Studio Display.</p>
                                <p className="text-[16px] text-center">The 27-inch 5K Retina display pairs beautifully with any Mac.</p>
                                <p className="text-[16px] text-blue-500 ">learn more</p>
                            </div>
                            <div className="w-full h-full bg-white">
                                <img src={getAssetPath("assets/image/global/10003.png")} alt="switchtomac" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <UnlockMac />
            <MacLinks />
        </div>  
    );
};

export default Mac;
