import React, { useRef, useState } from "react";
import { storeCategories } from "../data/storeData";
import { storeTheLatestData } from "../data/store_theLatest";
import { storePersonalizationData } from "../data/storePersonalizationData.js";

const Store = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="">
      {/* Top info bar */}
      <div className="flex items-center justify-center w-full h-[58px] text-[14px] text-[#1d1d1f]">
        Pay monthly at 0% APR when you choose to check out at Apple with Apple
        Card Monthly Installments.
        <span className="text-blue-600 ml-1 cursor-pointer">Learn more</span>
      </div>

      {/* Store-style gradient */}
      <div className="relative overflow-hidden">
        <div className="relative max-w-[2280px] mx-auto max-h-[280px] flex items-center justify-between px-4">
          {/* Left */}
          <h1 className="text-[clamp(64px,8vw,96px)] font-extrabold tracking-tight bg-gradient-to-r from-[#0a84ff] via-[#5ac8fa] to-[#ff9f0a] bg-clip-text text-transparent">
            Store
          </h1>

          {/* Right */}
          <div className="flex flex-col text-right gap-3 max-w-[420px]">
            <h2 className="text-[28px] font-semibold text-[#1d1d1f]">
              Give something special this holiday.
            </h2>

            <a className="text-[17px] font-medium text-[#0066cc] hover:underline">
              Connect with a Specialist ↗
            </a>
            <a className="text-[17px] font-medium text-[#0066cc] hover:underline">
              Find an Apple Store ↗
            </a>
          </div>
        </div>
      </div>

      {/*Scrollbar with Drag-to-Scroll*/}
      <section
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={`mt-14 bg-white w-full h-auto px-5 py-8 overflow-x-auto scrollbar-hide select-none transition-all duration-300 ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        <div className="flex gap-12 px-4 w-max w-full h-[204px] pl-[146px]">
          {storeCategories.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center min-w-[110px] group"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-18 min-[830px]:h-[80px] object-contain transition-transform group-hover:scale-105 pointer-events-none"
              />

              <span className="mt-4 text-[17px] font-medium text-[#1d1d1f] group-hover:text-[#0066cc] transition-colors whitespace-nowrap">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </section>
      {/*The latest*/}
      <section className="py-16">
        <div className="w-full pl-[140px] h-auto">
          <h2 className="text-[28px] font-semibold">
            <span className="tracking-tight bg-gradient-to-r from-[#0a84ff] via-[#5ac8fa] to-[#ff9f0a] bg-clip-text text-transparent">
              The latest.
            </span>
            <span className="text-[28px] text-gray-500">Truly</span>
          </h2>
          <span className="text-[28px] text-gray-500">awe-inspired gifts.</span>
        </div>

        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`overflow-x-auto scroll-smooth scrollbar-hide select-none pt-[16px] pb-[40px] pl-[140px]  ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          <div className="flex gap-6 px-[22px] min-w-max">
            {storeTheLatestData.products.map((item) => (
              <div
                key={item.name}
                className="relative w-[480px] h-[500px] rounded-2xl flex-shrink-0 overflow-hidden shadow-2xl border border-gray-200 bg-black"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Gradient overlay (Apple-style) */}
                <div className="absolute inset-0 " />

                {/* Text content */}
                <div className="relative z-10 p-6">
                  <span className="block text-xs font-semibold tracking-wide text-black/80 uppercase">
                    {item.category}
                  </span>

                  <h3 className="mt-1 text-[34px] font-semibold text-black tracking-tight">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-[15px]tracking-tight bg-gradient-to-r from-[#0a84ff] via-[#5ac8fa] to-[#ff9f0a] bg-clip-text text-transparent max-w-[80%]">
                    {item.description}
                  </p>

                  <p className="mt-3 text-[15px] font-medium text-black">
                    From {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Personalization. Make it one of a kind.*/}
      <section className="py-16">
        <div className="w-full pl-[140px] h-auto">
          <h2 className="text-[28px] font-semibold">
            <span className="tracking-tight bg-gradient-to-r from-[#0a84ff] via-[#5ac8fa] to-[#ff9f0a] bg-clip-text text-transparent">
              Personalization.
            </span>
            <span className="text-[28px] text-gray-500">Make it one of a kind.</span>
          </h2>
        </div>

        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`overflow-x-auto scroll-smooth scrollbar-hide select-none pt-[16px] pb-[40px] pl-[140px]  ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          <div className="flex gap-6 px-[22px] min-w-max">
            {storePersonalizationData.products.map((item) => (
              <div
                key={item.id}
                className="relative w-[420px] h-[460px] rounded-2xl flex-shrink-0 overflow-hidden border border-gray-200 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Softer overlay than “The latest” */}
                <div className="absolute inset-0 bg-white/30" />

                {/* Text */}
                <div className="relative z-10 p-6">
                  <span className="block text-[11px] font-semibold uppercase tracking-wide text-gray-600">
                    {item.category}
                  </span>

                  <h3 className="mt-1 text-[26px] font-semibold text-gray-900 tracking-tight leading-tight">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-[15px] text-gray-700 max-w-[85%] leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Store;
