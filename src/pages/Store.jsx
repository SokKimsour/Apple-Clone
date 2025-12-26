import React, { useRef, useState } from "react";
import { storeCategories } from "../data/storeData";

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
        <div className="bg-[#f5f5f7]">
            {/* Top info bar */}
            <div className="flex items-center justify-center w-full h-[58px] text-[14px] text-[#1d1d1f]">
                Pay monthly at 0% APR when you choose to check out at Apple with Apple Card Monthly Installments.
                <span className="text-blue-600 ml-1 cursor-pointer">Learn more</span>
            </div>

            {/* Store-style gradient */}
            <div className="relative overflow-hidden bg-[#f5f5f7]">
                {/* Color band */}
                <div
                    className="
      absolute inset-x-0 top-0 h-[200px]
      bg-[linear-gradient(90deg,
        rgba(10,132,255,0.45),
        rgba(90,200,250,0.40),
        rgba(255,214,10,0.35),
        rgba(255,159,10,0.35)
      )]
    "
                />

                {/* Vertical fade */}
                <div
                    className="
      absolute inset-x-0 top-0 h-[260px]
      bg-linear-to-b from-transparent via-[#f5f5f7]/40 to-[#f5f5f7]
    "
                />

                {/* Content */}
                <div className="relative max-w-[1100px] mx-auto h-[260px] flex items-center justify-between px-4">
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
                className={`mt-14 bg-white w-full h-auto px-5 py-8 overflow-x-auto scrollbar-hide select-none transition-all duration-300 ${isDragging ? "cursor-grabbing" : "cursor-grab"
                    }`}
            >
                <div className="flex gap-12 px-4 w-max">
                    {storeCategories.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col items-center min-w-[110px] group"
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
        </div>
    );
};

export default Store;
