import React from "react";
import EntertainmentSection from "../components/common/EntertainmentSection";
import { getAssetPath } from "../assets";

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
      <div className="relative w-full h-[500px] md:h-[calc(100vh-44px)] max-h-[850px] overflow-hidden bg-white mb-3">
        <video
          src={getAssetPath("assets/video/largetall_2x.mp4")}
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 flex flex-col items-center text-center pt-16 md:pt-[55px] px-6">
          <h1 className="text-4xl md:text-[56px] lg:text-[64px] leading-[1.05] font-semibold text-black/90 mb-2 tracking-tight">
            Wrapping up this special season.
          </h1>

          <p className="text-xl md:text-[28px] leading-tight font-normal text-black/90 mb-4 max-w-[600px]">
            There’s still time to make their holiday one of a kind.
          </p>

          <button
            className="
              inline-flex items-center justify-center
              px-5 py-2
              bg-[#0071e3] hover:bg-[#0077ed]
              text-white text-[17px]
              rounded-full
              transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-[#0071e3]/40
            "
          >
            Shop gifts
          </button>
        </div>
      </div>

      {/* 2 - iPhone */}
      <div
        className="w-full h-[500px] md:h-[690px] mx-auto bg-cover bg-bottom md:bg-center bg-no-repeat mb-3 relative"
        style={{ backgroundImage: `url(${getAssetPath("assets/image/global/10025.jpg")})` }}
      >
        <div className="text-center pt-12 md:pt-[53px] px-6 z-10">
          <h2 className="text-3xl md:text-[56px] font-semibold tracking-tight text-white md:text-black mb-2 leading-tight">
            iPhone
          </h2>
          <p className="text-xl md:text-[28px] font-normal text-white md:text-black mb-4 leading-tight">
            Say hello to the latest generation of iPhone.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="inline-flex items-center justify-center
              px-5 py-2
              bg-[#0071e3] hover:bg-[#0077ed]
              text-white text-[17px]
              rounded-full
              transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-[#0071e3]/40">
              Learn more
            </button>
            <button className="inline-flex items-center justify-center
              px-5 py-2
              hover:bg-[#0077ed]/10
              text-[#0071e3] text-[17px]
              rounded-full
              transition-colors duration-200
              border border-[#0071e3]
              bg-transparent">
              Shop iPhone
            </button>
          </div>
        </div>
      </div>

      {/* 3 - AirPods */}
      <div
        className="w-full h-[500px] md:h-[690px] mx-auto bg-cover bg-bottom md:bg-center bg-no-repeat mb-3 relative"
        style={{ backgroundImage: `url(${getAssetPath("assets/image/global/10026.jpg")})` }}
      >
        <div className="text-center pt-12 md:pt-[53px] px-6 z-10 w-full absolute top-0 left-0 right-0">
          <h2 className="text-3xl md:text-[56px] font-semibold tracking-tight text-white mb-2 leading-tight">
            AirPods Pro 3
          </h2>
          <p className="text-xl md:text-[28px] font-normal text-white mb-4 leading-tight">
            The world’s best in-ear Active Noise Cancellation.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="inline-flex items-center justify-center
              px-5 py-2
              bg-[#0071e3] hover:bg-[#0077ed]
              text-white text-[17px]
              rounded-full
              transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-[#0071e3]/40">
              Learn more
            </button>
            <button className="inline-flex items-center justify-center
              px-5 py-2
              hover:bg-[#0077ed]
              text-[#0071e3] text-[17px]
              rounded-full
              transition-colors duration-200
              border border-[#0071e3]
              bg-transparent">
              Buy
            </button>
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <div className="w-full px-3 md:px-0 mb-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-3">
          
          {/* Card 1 - Gift Card */}
          <div
            className="w-full h-[500px] md:h-[580px] bg-cover bg-center bg-no-repeat relative group overflow-hidden"
            style={{ backgroundImage: `url(${getAssetPath("assets/image/global/10029.jpg")})` }}
          >
            <div className="text-center pt-8 md:pt-[53px] px-6">
              <h3 className="text-3xl md:text-[40px] font-semibold tracking-tight text-black mb-2 leading-tight">
                Apple Gift Card
              </h3>
              <p className="text-lg md:text-[21px] font-normal text-black/90 mb-4 leading-tight">
                Let them spend the holidays however they like.
              </p>
              <div className="flex gap-4 justify-center">
                <button className="text-[#0066cc] hover:underline text-[17px]">Learn more &gt;</button>
                <button className="text-[#0066cc] hover:underline text-[17px]">Buy &gt;</button>
              </div>
            </div>
          </div>

          {/* Card 2 - iPad Air */}
          <div
            className="w-full h-[500px] md:h-[580px] bg-cover bg-center bg-no-repeat relative group overflow-hidden"
            style={{ backgroundImage: `url(${getAssetPath("assets/image/global/10031.jpg")})` }}
          >
            <div className="text-center pt-8 md:pt-[53px] px-6">
              <h3 className="text-3xl md:text-[40px] font-semibold tracking-tight text-white md:text-black mb-2 leading-tight">
                iPad Air
              </h3>
              <p className="text-lg md:text-[21px] font-normal text-white md:text-black/90 mb-4 leading-tight">
                Now supercharged by the M3 chip.
              </p>
              <div className="flex gap-4 justify-center">
                <button className="text-[#0066cc] hover:underline text-[17px]">Learn more &gt;</button>
                <button className="text-[#0066cc] hover:underline text-[17px]">Buy &gt;</button>
              </div>
            </div>
          </div>

          {/* Card 3 - Watch */}
          <div
            className="w-full h-[500px] md:h-[580px] bg-cover bg-center bg-no-repeat relative group overflow-hidden"
            style={{ backgroundImage: `url(${getAssetPath("assets/image/global/10032.jpg")})` }}
          >
            <div className="text-center pt-8 md:pt-[53px] px-6">
              <h3 className="text-3xl md:text-[40px] font-semibold tracking-tight text-white mb-2 leading-tight">
                Apple Watch Series 11
              </h3>
              <p className="text-lg md:text-[21px] font-normal text-white mb-4 leading-tight">
                The ultimate way to watch your health.
              </p>
              <div className="flex gap-4 justify-center">
                <button className="text-[#0066cc] hover:underline text-[17px]">Learn more &gt;</button>
                <button className="text-[#0066cc] hover:underline text-[17px]">Buy &gt;</button>
              </div>
            </div>
          </div>

          {/* Card 4 - iPad */}
          <div
            className="w-full h-[500px] md:h-[580px] bg-cover bg-center bg-no-repeat relative group overflow-hidden"
            style={{ backgroundImage: `url(${getAssetPath("assets/image/global/10033.jpg")})` }}
          >
            <div className="text-center pt-8 md:pt-[53px] px-6">
              <h3 className="text-3xl md:text-[40px] font-semibold tracking-tight text-black mb-2 leading-tight">
                iPad
              </h3>
              <p className="text-lg md:text-[21px] font-normal text-black/90 mb-4 leading-tight max-w-[300px] mx-auto">
                Now with the speed of the A16 chip.
              </p>
              <div className="flex gap-4 justify-center">
                <button className="text-[#0066cc] hover:underline text-[17px]">Learn more &gt;</button>
                <button className="text-[#0066cc] hover:underline text-[17px]">Buy &gt;</button>
              </div>
            </div>
          </div>

          {/* Card 5 - Trade In */}
          <div
            className="w-full h-[500px] md:h-[580px] bg-cover bg-center bg-no-repeat relative group overflow-hidden"
            style={{ backgroundImage: `url(${getAssetPath("assets/image/global/10036.jpg")})` }}
          >
            <div className="text-center pt-8 md:pt-[53px] px-6">
              <h3 className="text-3xl md:text-[40px] font-semibold tracking-tight text-black mb-2 leading-tight">
                Apple Trade In
              </h3>
              <p className="text-lg md:text-[21px] font-normal text-black/90 mb-4 leading-tight max-w-[320px] mx-auto">
                Get up to $180–$670 in credit when you trade in iPhone 13 or higher.
              </p>
              <div className="flex gap-4 justify-center">
                <button className="text-[#0066cc] hover:underline text-[17px]">Learn more &gt;</button>
                <button className="text-[#0066cc] hover:underline text-[17px]">Buy &gt;</button>
              </div>
            </div>
          </div>

          {/* Card 6 - Apple Card */}
          <div
            className="w-full h-[500px] md:h-[580px] bg-cover bg-center bg-no-repeat relative group overflow-hidden"
            style={{ backgroundImage: `url(${getAssetPath("assets/image/global/10037.jpg")})` }}
          >
            <div className="text-center pt-8 md:pt-[53px] px-6">
              <h3 className="text-3xl md:text-[40px] font-semibold tracking-tight text-black mb-2 leading-tight">
                Apple Card
              </h3>
              <p className="text-lg md:text-[21px] font-normal text-black/90 mb-4 leading-tight">
                Get up to 3% Daily Cash back with every purchase.
              </p>
              <div className="flex gap-4 justify-center">
                <button className="text-[#0066cc] hover:underline text-[17px]">Learn more &gt;</button>
                <button className="text-[#0066cc] hover:underline text-[17px]">Buy &gt;</button>
              </div>
            </div>
          </div>
           <div className="w-full h-auto mb-3 ">Learn More</div>
        </div>
      </div>

      {/* Slide */}
      <div className="w-full h-auto mb-3 ">
        <EntertainmentSection />
      </div>
    </div>


  );
};

export default Home;
