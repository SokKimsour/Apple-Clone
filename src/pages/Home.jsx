import React from "react";
import EntertainmentSection from "../components/common/EntertainmentSection";
import { getAssetPath } from "../utils/assets";
const productSections = [
  {
    name: "iPad Pro",
    description: "Unbelievably thin. Incredibly powerful.",
    image:
      "https://www.apple.com/v/ipad-pro/am/images/overview/closup/portrait__b5w0s5o9o6cy_large.jpg",
  },
  {
    name: "iPhone 16 Pro",
    description: "Titanium. So strong. So light. So Pro.",
    image:
      "https://www.apple.com/v/iphone-16-pro/c/images/overview/welcome/hero_endframe__b3cjfk8pb9mu_large.jpg",
  },
  {
    name: "MacBook Air",
    description: "Lean. Mean. M3 machine.",
    image:
      "https://www.apple.com/v/macbook-air/s/images/overview/design/design-hero_endframe__olur19sh32mu_large.jpg",
  },
];

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[600px] overflow-hidden bg-white mb-3">
        <video
          src={getAssetPath("assets/video/largetall_2x.mp4")}
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 flex flex-col items-center text-center pt-[40px] px-6">
          <h1 className="text-[32px] min-[830px]:text-[60px] leading-tight text-black/90 mb-2 tracking-tight">
            Wrapping up this special season.
          </h1>

          <p className="text-[22px] min-[830px]:text-[24px] font-light text-black/80 mb-2 max-w-[600px]">
            There’s still time to make their holiday one of a kind.
          </p>

          <button
            className="
              inline-flex items-center justify-center
              px-[18px] py-[8px]
              bg-[#0071e3] hover:bg-[#0077ed]
              text-white text-[15px]
              rounded-full
              transition-colors duration-200
              focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3]/40
            "
          >
            Shop gifts
          </button>
        </div>
      </div>

      {/* 2*/}
      <div 
        className="w-full h-[697px] mx-auto bg-cover bg-center bg-no-repeat mb-3"
        style={{ backgroundImage: `url(${getAssetPath("assets/image/global/10025.jpg")})` }}
      >
        <div className="text-center pt-[20px] z-10">
          <h1 className="text-3xl min-[830px]:text-[50px] font-semibold tracking-tight text-black mb-8">
            iPhone
          </h1>
          <p className="text-2xl font-normal text-black/90 mb-[15px]">
            Say hello to the latest generation of iPhone.
          </p>
          <div className=" flex gap-[18px] justify-center">
            <button className="inline-flex items-center justify-center
              px-[18px] py-[8px]
              bg-[#0071e3] hover:bg-[#0077ed]
              text-white text-[15px]
              rounded-full
              transition-colors duration-200
              focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3]/40">
              Learn more
            </button>
            <button className="inline-flex items-center justify-center
              px-[18px] py-[8px]
            hover:bg-[#0077ed]
              text-[#0071e3] text-[15px]
              rounded-full
              transition-colors duration-200
              border border-[#0071e3]">
              Shop iPhone
            </button>
          </div>
        </div>


        <div className="mt-auto w-full flex justify-center">
        </div>
      </div>
      {/* 3*/}
      <div 
        className="w-full h-[697px] mx-auto bg-cover bg-center bg-no-repeat mb-3"
        style={{ backgroundImage: `url(${getAssetPath("assets/image/global/10026.jpg")})` }}
      >
        <div className="text-center pt-[20px] z-10">
          <h1 className="text-3xl min-[830px]:text-[50px] font-semibold tracking-tight text-black mb-8">
            AirPods Pro 3
          </h1>
          <p className="text-2xl font-normal text-black/90 mb-[15px]">
            The world’s best in-ear Active Noise Cancellation.
          </p>
          <div className=" flex gap-[18px] justify-center">
            <button className="inline-flex items-center justify-center
              px-[18px] py-[8px]
              bg-[#0071e3] hover:bg-[#0077ed]
              text-white text-[15px]
              rounded-full
              transition-colors duration-200
              focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3]/40">
              Learn more
            </button>
            <button className="inline-flex items-center justify-center
              px-[18px] py-[8px]
            hover:bg-[#0077ed]
              text-[#0071e3] text-[15px]
              rounded-full
              transition-colors duration-200
              border border-[#0071e3]">
              Buy
            </button>
          </div>
        </div>


        <div className="mt-auto w-full flex justify-center">
        </div>
      </div>
      {/* 4 Grid col2 row3*/}
      <div className="w-full h-auto mb-3 grid grid-cols-1 min-[830px]:grid-cols-2 min-[830px]:grid-rows-[repeat(3,580px)] auto-rows-[500px] gap-[10px] min-[830px]:gap-[20px]">
        <div 
          className="w-full h-full mx-auto bg-cover bg-center bg-no-repeat mb-3"
          style={{ backgroundImage: `url(${getAssetPath("assets/image/global/10029.jpg")})` }}
        >
          <div className="text-center pt-[20px] z-10">
            <h1 className="text-3xl min-[830px]:text-[50px] font-semibold tracking-tight text-black mb-8">
              Apple Gift Card
            </h1>
            <p className="text-2xl font-normal text-black/90 mb-[15px]">
              Let them spend the holidays however they like.
            </p>
            <div className=" flex gap-[18px] justify-center">
              <button className="inline-flex items-center justify-center
              px-[18px] py-[8px]
              bg-[#0071e3] hover:bg-[#0077ed]
              text-white text-[15px]
              rounded-full
              transition-colors duration-200
              focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3]/40">
                Learn more
              </button>
              <button className="inline-flex items-center justify-center
              px-[18px] py-[8px]
            hover:bg-[#0077ed]
              text-[#0071e3] text-[15px]
              rounded-full
              transition-colors duration-200
              border border-[#0071e3]">
                Buy
              </button>
            </div>
          </div>


          <div className="mt-auto w-full flex justify-center">
          </div>
        </div>
        <div 
          className="w-full h-full mx-auto bg-cover bg-center bg-no-repeat mb-3"
          style={{ backgroundImage: `url(${getAssetPath("assets/image/global/10031.jpg")})` }}
        >
          <div className="text-center pt-[20px] z-10">
            <h1 className="text-3xl min-[830px]:text-[50px] font-semibold tracking-tight text-black mb-8">
              iPad Air
            </h1>
            <p className="text-2xl font-normal text-black/90 mb-[15px]">
              Now supercharged by the M3 chip.
            </p>
            <div className=" flex gap-[18px] justify-center">
              <button className="inline-flex items-center justify-center
              px-[18px] py-[8px]
              bg-[#0071e3] hover:bg-[#0077ed]
              text-white text-[15px]
              rounded-full
              transition-colors duration-200
              focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3]/40">
                Learn more
              </button>
              <button className="inline-flex items-center justify-center
              px-[18px] py-[8px]
            hover:bg-[#0077ed]
              text-[#0071e3] text-[15px]
              rounded-full
              transition-colors duration-200
              border border-[#0071e3]">
                Buy
              </button>
            </div>
          </div>


          <div className="mt-auto w-full flex justify-center">
          </div>
        </div>
        <div 
          className="w-full h-full mx-auto bg-cover bg-center bg-no-repeat mb-3"
          style={{ backgroundImage: `url(${getAssetPath("assets/image/global/10032.jpg")})` }}
        >
          <div className="text-center pt-[20px] z-10">
            <h1 className="text-3xl min-[830px]:text-[50px] font-semibold tracking-tight text-black mb-8">
              Apple Watch Series 11
            </h1>
            <p className="text-2xl font-normal text-black/90 mb-[15px]">
              The ultimate way to watch your health.
            </p>
            <div className=" flex gap-[18px] justify-center">
              <button className="inline-flex items-center justify-center
              px-[18px] py-[8px]
              bg-[#0071e3] hover:bg-[#0077ed]
              text-white text-[15px]
              rounded-full
              transition-colors duration-200
              focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3]/40">
                Learn more
              </button>
              <button className="inline-flex items-center justify-center
              px-[18px] py-[8px]
            hover:bg-[#0077ed]
              text-[#0071e3] text-[15px]
              rounded-full
              transition-colors duration-200
              border border-[#0071e3]">
                Buy
              </button>
            </div>
          </div>


          <div className="mt-auto w-full flex justify-center">
          </div>
        </div>
        <div 
          className="w-full h-full mx-auto bg-cover bg-center bg-no-repeat mb-3"
          style={{ backgroundImage: `url(${getAssetPath("assets/image/global/10033.jpg")})` }}
        >
          <div className="text-center pt-[20px] z-10">
            <h1 className="text-3xl min-[830px]:text-[50px] font-semibold tracking-tight text-black mb-8">
              Ipad
            </h1>
            <p className="text-2xl font-normal text-black/90 mb-[15px]">
              Now with the speed of the A16 chip and double the starting storage.
            </p>
            <div className=" flex gap-[18px] justify-center">
              <button className="inline-flex items-center justify-center
              px-[18px] py-[8px]
              bg-[#0071e3] hover:bg-[#0077ed]
              text-white text-[15px]
              rounded-full
              transition-colors duration-200
              focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3]/40">
                Learn more
              </button>
              <button className="inline-flex items-center justify-center
              px-[18px] py-[8px]
            hover:bg-[#0077ed]
              text-[#0071e3] text-[15px]
              rounded-full
              transition-colors duration-200
              border border-[#0071e3]">
                Buy
              </button>
            </div>
          </div>


          <div className="mt-auto w-full flex justify-center">
          </div>
        </div>
        <div 
          className="w-full h-full mx-auto bg-cover bg-center bg-no-repeat mb-3"
          style={{ backgroundImage: `url(${getAssetPath("assets/image/global/10036.jpg")})` }}
        >
          <div className="text-center pt-[20px] z-10">
            <h1 className="text-3xl min-[830px]:text-[50px] font-semibold tracking-tight text-black mb-8">
              Apple Trade In
            </h1>
            <p className="text-2xl font-normal text-black/90 mb-[15px]">
              Get up to $180–$670 in credit when you trade in iPhone 13 or higher.
            </p>
            <div className=" flex gap-[18px] justify-center">
              <button className="inline-flex items-center justify-center
              px-[18px] py-[8px]
              bg-[#0071e3] hover:bg-[#0077ed]
              text-white text-[15px]
              rounded-full
              transition-colors duration-200
              focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3]/40">
                Learn more
              </button>
              <button className="inline-flex items-center justify-center
              px-[18px] py-[8px]
            hover:bg-[#0077ed]
              text-[#0071e3] text-[15px]
              rounded-full
              transition-colors duration-200
              border border-[#0071e3]">
                Buy
              </button>
            </div>
          </div>


          <div className="mt-auto w-full flex justify-center">
          </div>
        </div>
        <div 
          className="w-full h-full mx-auto bg-cover bg-center bg-no-repeat mb-3"
          style={{ backgroundImage: `url(${getAssetPath("assets/image/global/10037.jpg")})` }}
        >
          <div className="text-center pt-[20px] z-10">
            <h1 className="text-3xl min-[830px]:text-[50px] font-semibold tracking-tight text-black mb-8">
              Apple Card
            </h1>
            <p className="text-2xl font-normal text-black/90 mb-[15px]">
              Get up to 3% Daily Cash back with every purchase.
            </p>
            <div className=" flex gap-[18px] justify-center">
              <button className="inline-flex items-center justify-center
              px-[18px] py-[8px]
              bg-[#0071e3] hover:bg-[#0077ed]
              text-white text-[15px]
              rounded-full
              transition-colors duration-200
              focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3]/40">
                Learn more
              </button>
              <button className="inline-flex items-center justify-center
              px-[18px] py-[8px]
            hover:bg-[#0077ed]
              text-[#0071e3] text-[15px]
              rounded-full
              transition-colors duration-200
              border border-[#0071e3]">
                Buy
              </button>
            </div>
          </div>


          <div className="mt-auto w-full flex justify-center">
          </div>
        </div>
      </div>
      {/* SLide */}
      <div className="w-full h-auto mb-3 ">
        <EntertainmentSection />
      </div>
    </div>
  );
};

export default Home;
