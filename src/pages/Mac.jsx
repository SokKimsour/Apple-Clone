import { macData_menu } from "../data/mac";
import MacShowProduct from "../components/common/MacShowProduct";
import ShoppingFeature from "../components/common/ShoppingFeature";
import WhyMac from "../components/common/WhyMac";
import UnlockMac from "../components/common/UnlockMac";
import MacLinks from "../components/common/MacLinks";
const Mac = () => {
    return (
        <div className="">

            <div className="flex items-center justify-center w-full py-4">
                {macData_menu.navigation_menu.map((item) => (
                    <div key={item.name} className="px-5 flex flex-col items-center justify-center" >
                        <img src={item.image} alt={item.name} />
                        <p className="text-[12px]">{item.name}</p>
                    </div>
                ))}
            </div>
            <div className="bg-[rgb(245,245,247)]">
                <p className="text-sm text-center py-4">Buy Mac with education savings.<span className="text-blue-500">Shop</span></p>
            </div>
            <MacShowProduct />
            <ShoppingFeature />
            <WhyMac />
            {/* helpchooseme */}
            <div className="w-full h-auto py-[160px]">
                <div >
                    <h1 className="text-[56px] font-semibold w-[1260px] mx-auto mb-[74px]">Help me choose.</h1>
                    <div className="w-[1260px] h-[480px] grid grid-cols-2 mx-auto bg-gray-200/50 rounded-2xl"> 
                        <div className="flex flex-col items-center justify-center text-justify px-28 gap-2 ">
                            <p className="text-[32px] font-semibold">Answer a few questions to find the best Mac for you.</p>
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
                        <img src="/assets/image/global/helpmechoose.png" alt="helpmechoose" className="w-full h-full object-cover p-5" />
                    </div>
                </div>
            </div>
            <div className="w-full h-auto pt-[160px] bg-gray-200/50">
                <div >
                    <h1 className="text-[56px] font-semibold w-[1260px] mx-auto mb-[74px]">Switch to Mac.</h1>
                    <div className="w-[1260px] h-[580px] grid grid-cols-2 mx-auto  gap-5"> 
                        <div className="grid grid-rows-2 rounded-2xl bg-white overflow-hidden">
                            <div className="flex flex-col items-center justify-center gap-2 px-28">
                                <p className="text-[32px] font-semibold">Give us the old. Save on</p>
                                <p className="text-[32px] font-semibold">the new.</p>
                                <p className="text-[16px] ">With Apple Trade In, you can get a great value for your current device and apply it toward a new one. If your device isn’t eligible for credit, we’ll recycle it for free.</p>
                                <p className="text-[16px] text-blue-500 ">See what your device is worth</p>
                            </div>
                        
                                <img src="/assets/image/global/switchtomac1.png" alt="switchtomac" className="w-full h-full object-cover" />
                            
                        </div>
                        <div className="grid grid-rows-2 rounded-2xl bg-white overflow-hidden">
                            <div className="flex flex-col items-center justify-center gap-2 px-28">
                                <p className="text-[32px] font-semibold">Mac does that.</p>
                                <p className="text-[16px]">see how easy it is to switch to mac.</p>
                                <p className="text-[16px] text-blue-500 ">learn more</p>
                            </div>
                            <div className="w-full h-full bg-white">
                                <img src="/assets/image/global/10003.png" alt="switchtomac" className="w-full h-full object-cover" />
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="w-full h-auto py-[160px] bg-gray-200/50">
                <div >
                    <h1 className="text-[56px] font-semibold w-[1260px] mx-auto mb-[74px]">Switch to Mac.</h1>
                    <div className="w-[1260px] h-[580px] grid grid-cols-2 mx-auto  gap-5"> 
                        <div className="grid grid-rows-2 rounded-2xl bg-white overflow-hidden">
                            <div className="flex flex-col items-center justify-center gap-2 px-28">
                                <p className="text-[32px] font-semibold">Mac accessories.</p>
                                <p className="text-[16px] ">Explore keyboards, mice, and other essentials.</p>
                                <p className="text-[16px] text-blue-500 ">Shop mac accessories</p>
                            </div>
                        
                                <img src="/assets/image/global/switchtomac1.png" alt="switchtomac" className="w-full h-full object-cover" />
                            
                        </div>
                        <div className="grid grid-rows-2 rounded-2xl bg-white overflow-hidden">
                            <div className="flex flex-col items-center justify-center gap-2 px-28">
                                <p className="text-[32px] font-semibold">Studio Display.</p>
                                <p className="text-[16px] text-center">The 27-inch 5K Retina display pairs beautifully with any Mac.</p>
                                <p className="text-[16px] text-blue-500 ">learn more</p>
                            </div>
                            <div className="w-full h-full bg-white">
                                <img src="/assets/image/global/10003.png" alt="switchtomac" className="w-full h-full object-cover" />
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
