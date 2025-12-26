import React, { useRef, useState } from "react";
import { storeCategories } from "../data/storeData";
import { storeTheLatestData } from "../data/store_theLatest";
import { storePersonalizationData } from "../data/storePersonalizationData.js";
import { storeHelpData } from "../data/storeHelpData.js";
import { storeDifferenceData } from "../data/storeDifferenceData.jsx";
import { storeAccessoriesData } from "../data/storeAccessoriesData.js";
import { storeMadeToMoveData } from "../data/storeMadeToMoveData.js";
import { appleExperienceData, savingsOffersData } from "../data/storeMoreSectionsData.js";
import { quickLinks } from "../data/storeExtraData.js";

const useDraggableScroll = () => {
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

    return {
        scrollRef,
        isDragging,
        handleMouseDown,
        handleMouseLeave,
        handleMouseUp,
        handleMouseMove
    };
};

// Helper to highlight parts of the text
const renderHighlightedText = (text, highlights, colorClass) => {
    if (!highlights || highlights.length === 0) return text;

    // Create a regex pattern that matches any of the highlight phrases
    // Escape special characters in highlights just in case
    const pattern = new RegExp(`(${highlights.map(h => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g');
    
    // Split the text by the pattern. The capturing group () ensures the delimiters (highlights) are included in the result array.
    const parts = text.split(pattern);

    return parts.map((part, index) => {
        // Check if this part is one of the highlights
        if (highlights.includes(part)) {
             return <span key={index} className={colorClass}>{part}</span>;
        }
        return part;
    });
};

const Store = () => {
    const section1 = useDraggableScroll();
    const section2 = useDraggableScroll();
    const section3 = useDraggableScroll();
    const section4 = useDraggableScroll();
    const section5 = useDraggableScroll();
    const section6 = useDraggableScroll();
    const section7 = useDraggableScroll();
    const section8 = useDraggableScroll();
    const section9 = useDraggableScroll();

    return (
        <div className="">
            {/* Top info bar */}
            <div className="flex items-center justify-center w-full h-[58px] text-[14px] text-[#1d1d1f]">
                Pay monthly at 0% APR when you choose to check out at Apple with Apple
                Card Monthly Installments.
                <span className="text-blue-600  cursor-pointer">Learn more</span>
            </div>

            {/* Store-style gradient */}
            <div className="relative overflow-hidden w-full h-[228px] flex justify-center items-center px-[148px]">
                <div className="relative w-full  flex items-center justify-between px-4">
                    {/* Left */}
                    <h1 className="text-[clamp(64px,8vw,80px)] font-bold  tracking-tight bg-gradient-to-r from-[#0a84ff] via-[#5ac8fa] to-[#ff9f0a] bg-clip-text text-transparent">
                        Store
                    </h1>

                    {/* Right */}
                    <div className="flex flex-col text-right gap-3 max-w-[420px]">
                        <h2 className="text-[28px] font-semibold text-[#1d1d1f]">
                            Give something special this holiday.
                        </h2>

                        <a className="text-[14px] font-medium text-[#0066cc] hover:underline">
                            Connect with a Specialist ↗
                        </a>
                        <a className="text-[14px] font-medium text-[#0066cc] hover:underline">
                            Find an Apple Store ↗
                        </a>
                    </div>
                </div>
            </div>

            {/*Scrollbar with Drag-to-Scroll*/}
            <section
                ref={section1.scrollRef}
                onMouseDown={section1.handleMouseDown}
                onMouseLeave={section1.handleMouseLeave}
                onMouseUp={section1.handleMouseUp}
                onMouseMove={section1.handleMouseMove}
                className={` bg-white w-full h-auto px-[148px] pb-[40px] overflow-x-auto scrollbar-hide select-none transition-all duration-300 ${section1.isDragging ? "cursor-grabbing" : "cursor-grab"
                    }`}
            >
                <div className="flex gap-12 px-4  w-full h-[204px]">
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
            <section className="w-full h-auto pb-[40px]">
                <div className="w-full  h-auto px-[148px]">
                    <h2 className="text-[28px] font-semibold">
                        <span className="tracking-tight bg-gradient-to-r from-[#0a84ff] via-[#5ac8fa] to-[#ff9f0a] bg-clip-text text-transparent">
                            The latest.
                        </span>
                        <span className="text-[28px] text-gray-500">Truly awe-inspired gifts.</span>
                    </h2>

                </div>

                <div
                    ref={section2.scrollRef}
                    onMouseDown={section2.handleMouseDown}
                    onMouseLeave={section2.handleMouseLeave}
                    onMouseUp={section2.handleMouseUp}
                    onMouseMove={section2.handleMouseMove}
                    className={`overflow-x-auto scroll-smooth scrollbar-hide select-none px-[148px] pt-[16px] pb-[40px] ${section2.isDragging ? "cursor-grabbing" : "cursor-grab"
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
            {/* Personalization.*/}
             <section className="w-full h-auto pb-[40px]">
                <div className="w-full  h-auto px-[148px]">
                    <h2 className="text-[28px] font-semibold">
                        <span className="tracking-tight bg-gradient-to-r from-[#0a84ff] via-[#5ac8fa] to-[#ff9f0a] bg-clip-text text-transparent">
                            Personalization.
                        </span>
                        <span className="text-[28px] text-gray-500">Truly awe-inspired gifts.</span>
                    </h2>

                </div>

                <div
                    ref={section3.scrollRef}
                    onMouseDown={section3.handleMouseDown}
                    onMouseLeave={section3.handleMouseLeave}
                    onMouseUp={section3.handleMouseUp}
                    onMouseMove={section3.handleMouseMove}
                    className={` overflow-x-auto scroll-smooth scrollbar-hide select-none px-[148px] pt-[16px] pb-[40px] ${section3.isDragging ? "cursor-grabbing" : "cursor-grab"
                        }`}
                >
                    <div className="flex gap-6 px-[22px] min-w-max">
                        {storePersonalizationData.products.map((item) => (
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

                                    
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Help*/}
            <section className="w-full h-auto pb-[40px]">
                <div className="w-full h-auto px-[148px]">
                    <h2 className="text-[28px] font-semibold">
                        <span className="text-[28px] text-gray-500">Help is here. Whenever and however you need it.</span>
                    </h2>
                </div>

                <div
                    ref={section4.scrollRef}
                    onMouseDown={section4.handleMouseDown}
                    onMouseLeave={section4.handleMouseLeave}
                    onMouseUp={section4.handleMouseUp}
                    onMouseMove={section4.handleMouseMove}
                    className={`px-[148px] overflow-x-auto scroll-smooth scrollbar-hide select-none pt-[16px] pb-[40px] ${section4.isDragging ? "cursor-grabbing" : "cursor-grab"}`}
                >
                    <div className="flex gap-6 px-[22px] min-w-max">
                        {storeHelpData.items.map((item) => (
                            <div
                                key={item.id}
                                className="relative w-[480px] h-[500px] rounded-2xl flex-shrink-0 overflow-hidden shadow-2xl border border-gray-200 bg-white"
                            >
                                {/* Image */}
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />

                                {/* Gradient overlay (optional) */}
                                <div className="absolute inset-0" />

                                {/* Text content */}
                                <div className="relative z-10 p-6 pt-8">
                                    <span className="block text-xs font-semibold tracking-wide text-gray-500 uppercase">
                                        {item.category}
                                    </span>

                                    <h3 className="mt-2 text-[28px] font-semibold text-gray-900 tracking-tight leading-tight">
                                        {item.name}
                                    </h3>

                                    {item.description && (
                                        <p className="mt-2 text-[15px] text-gray-700 leading-snug">
                                            {item.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Apple Store difference */}
            <section className="w-full h-auto pb-[40px]">
                <div className="w-full h-auto px-[148px]">
                    <h2 className="text-[28px] font-semibold">
                        <span className="text-[28px] text-gray-500">The Apple Store difference. Even more reasons to shop with us.</span>
                    </h2>
                </div>

                <div
                    ref={section5.scrollRef}
                    onMouseDown={section5.handleMouseDown}
                    onMouseLeave={section5.handleMouseLeave}
                    onMouseUp={section5.handleMouseUp}
                    onMouseMove={section5.handleMouseMove}
                    className={`px-[148px] overflow-x-auto scroll-smooth scrollbar-hide select-none pt-[16px] pb-[40px] ${section5.isDragging ? "cursor-grabbing" : "cursor-grab"}`}
                >
                    <div className="flex gap-4 px-[22px] min-w-max">
                        {storeDifferenceData.items.map((item) => (
                            <div
                                key={item.id}
                                className="relative w-[340px] h-[240px] rounded-2xl flex-shrink-0 overflow-hidden shadow-lg border border-gray-100 bg-white p-6 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1"
                            >
                                {/* Icon Placeholder - using the SVG component from data */}
                                <div className={`w-9 h-9 mb-4 text-3xl ${item.color.includes('gradient') ? 'text-[#1d1d1f]' : item.color}`}>
                                    {item.Icon && <item.Icon />}
                                </div>


                                <div className="flex-1">
                                    <p className="text-[21px] font-semibold leading-tight text-[#1d1d1f]">
                                        {renderHighlightedText(
                                            item.text,
                                            [item.highlight, item.extraHighlight, item.extraHighlight2].filter(Boolean),
                                            item.color
                                        )}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </section>

            {/* Accessories */}
            <section className="w-full h-auto">
                <div className="w-full h-auto px-[148px]">
                    <h2 className="text-[28px] font-semibold">
                        <span className="text-[28px] text-gray-500">{storeAccessoriesData.section_title} {storeAccessoriesData.section_subtitle}</span>
                    </h2>
                </div>

                <div
                    ref={section6.scrollRef}
                    onMouseDown={section6.handleMouseDown}
                    onMouseLeave={section6.handleMouseLeave}
                    onMouseUp={section6.handleMouseUp}
                    onMouseMove={section6.handleMouseMove}
                    className={`overflow-x-auto scroll-smooth scrollbar-hide select-none px-[148px] pt-[16px] pb-[40px] ${section6.isDragging ? "cursor-grabbing" : "cursor-grab"}`}
                >
                    <div className="flex gap-4 px-[22px] min-w-max">
                        {storeAccessoriesData.items.map((item) => (
                            <div
                                key={item.id}
                                className={`relative w-[312px] h-[480px] rounded-2xl flex-shrink-0 overflow-hidden shadow-sm hover:shadow-md border border-gray-100 bg-white transition-all duration-300 group ${item.type === 'link' ? 'bg-[#f5f5f7]' : ''}`}
                            >
                                {/* Conditional Rendering based on Type */}
                                
                                {/* HERO CARD */}
                                {item.type === 'hero' && (
                                    <div className="flex flex-col h-full p-8">
                                        <h3 className="text-[28px] font-semibold text-[#1d1d1f] leading-tight mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-[17px] text-gray-500 mb-8">
                                            {item.subtitle}
                                        </p>
                                        <div className="flex-1 w-full relative">
                                             
                                            {item.image && <img src={item.image} alt="" className="absolute inset-0 w-full h-full object-contain object-bottom" />}
                                        </div>
                                    </div>
                                )}

                                {/* PRODUCT CARD */}
                                {item.type === 'product' && (
                                    <div className="flex flex-col h-full p-6 pt-10">
                                         <div className="flex-1 w-full relative flex items-center justify-center mb-8">
                                            <img 
                                                src={item.image} 
                                                alt={item.name} 
                                                className="w-full h-auto max-h-[200px] object-contain transition-transform duration-500 group-hover:scale-105" 
                                            />
                                         </div>
                                         
                                         <div className="flex flex-col gap-2 mt-auto">
                                            {item.isNew && <span className="text-[12px] font-semibold text-[#bf4800]">New</span>}
                                            <h4 className="text-[17px] font-semibold text-[#1d1d1f] leading-snug min-h-[44px]">
                                                {item.name}
                                            </h4>
                                            
                                            <p className="text-[14px] text-[#1d1d1f]">
                                                {item.price}
                                            </p>

                                            {item.colors && (
                                                <div className="flex gap-2 mt-2">
                                                    {item.colors.map((color, idx) => (
                                                        <div key={idx} className="w-3 h-3 rounded-full border border-gray-200" style={{backgroundColor: color}}></div>
                                                    ))}
                                                </div>
                                            )}
                                         </div>
                                    </div>
                                )}

                                {/* LINK CARD */}
                                {item.type === 'link' && (
                                    <div className="flex flex-col h-full justify-center items-center p-8 text-center cursor-pointer">
                                        <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-4">
                                            {item.text}
                                        </h3>
                                        <span className="text-[#0066cc] text-xl">
                                             →
                                        </span>
                                        <div className="flex-1 w-full relative">
                                             
                                            {item.image && <img src={item.image} alt="" className="absolute inset-0 w-full h-full object-contain object-bottom" />}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Made to move */}
            <section className="w-full h-auto pb-[40px]">
                <div className="w-full h-auto px-[148px]">
                    <h2 className="text-[28px] font-semibold">
                        <span className="text-[28px] text-gray-500">{storeMadeToMoveData.section_title} {storeMadeToMoveData.section_subtitle}</span>
                    </h2>
                </div>

                <div
                    ref={section7.scrollRef}
                    onMouseDown={section7.handleMouseDown}
                    onMouseLeave={section7.handleMouseLeave}
                    onMouseUp={section7.handleMouseUp}
                    onMouseMove={section7.handleMouseMove}
                    className={`overflow-x-auto scroll-smooth scrollbar-hide select-none px-[148px] pt-[16px] pb-[40px] ${section7.isDragging ? "cursor-grabbing" : "cursor-grab"}`}
                >
                    <div className="flex gap-4 px-[22px] min-w-max">
                        {storeMadeToMoveData.items.map((item) => (
                            <div
                                key={item.id}
                                className={`relative w-[312px] h-[480px] rounded-2xl flex-shrink-0 overflow-hidden shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 group ${
                                    item.type === 'hero' ? 'bg-black' : 
                                    item.type === 'promo' ? 'bg-[#f5f5f7]' : 
                                    'bg-white'
                                }`}
                            >
                                {/* HERO CARD */}
                                {item.type === 'hero' && (
                                    <div className="relative flex flex-col h-full overflow-hidden">
                                        {/* Background Image */}
                                        {item.image && (
                                            <img 
                                                src={item.image} 
                                                alt="" 
                                                className="absolute inset-0 w-full h-full object-cover"
                                            />
                                        )}
                                        
                                        {/* Dark overlay for text readability */}
                                        <div className="absolute inset-0 bg-black/20" />
                                        
                                        {/* Text content at bottom */}
                                        <div className="relative mt-auto p-6 z-10">
                                            <h3 className={`text-[21px] font-semibold leading-tight ${item.textColor}`}>
                                                {item.title}
                                            </h3>
                                        </div>
                                    </div>
                                )}

                                {/* PRODUCT CARD */}
                                {item.type === 'product' && (
                                    <div className="flex flex-col h-full p-6 pt-10">
                                        <div className="flex-1 w-full relative flex items-center justify-center mb-8">
                                            <img 
                                                src={item.image} 
                                                alt={item.name} 
                                                className="w-full h-auto max-h-[200px] object-contain transition-transform duration-500 group-hover:scale-105" 
                                            />
                                        </div>
                                        
                                        <div className="flex flex-col gap-2 mt-auto">
                                            {item.isNew && <span className="text-[12px] font-semibold text-[#bf4800]">New</span>}
                                            <h4 className="text-[17px] font-semibold text-[#1d1d1f] leading-snug min-h-[44px]">
                                                {item.name}
                                            </h4>
                                            
                                            <p className="text-[14px] text-[#1d1d1f]">
                                                {item.price}
                                            </p>

                                            {item.colors && (
                                                <div className="flex gap-2 mt-2">
                                                    {item.colors.map((color, idx) => (
                                                        <div key={idx} className="w-3 h-3 rounded-full border border-gray-200" style={{backgroundColor: color}}></div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* PROMO CARD */}
                                {item.type === 'promo' && (
                                    <div className="relative flex flex-col h-full overflow-hidden">
                                        {/* Background Image */}
                                        {item.image && (
                                            <img 
                                                src={item.image} 
                                                alt="" 
                                                className="absolute inset-0 w-full h-full object-cover"
                                            />
                                        )}
                                        
                                        {/* Text content at bottom */}
                                        <div className="relative mt-auto p-6 z-10">
                                            <h3 className="text-[21px] font-semibold text-[#1d1d1f] leading-tight mb-2">
                                                {item.title}
                                            </h3>
                                            <p className="text-[14px] text-gray-600">
                                                {item.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Apple experience */}
            <section className="w-full h-auto pb-[40px] bg-white">
                <div className="w-full h-auto px-[148px]">
                    <h2 className="text-[28px] font-semibold">
                        <span className="text-[28px] text-gray-500">{appleExperienceData.section_title} {appleExperienceData.section_subtitle}</span>
                    </h2>
                </div>

                <div className="relative">
                    <div
                        ref={section8.scrollRef}
                        onMouseDown={section8.handleMouseDown}
                        onMouseLeave={section8.handleMouseLeave}
                        onMouseUp={section8.handleMouseUp}
                        onMouseMove={section8.handleMouseMove}
                        className={`overflow-x-auto scroll-smooth scrollbar-hide select-none px-[148px] pt-[16px] pb-[40px] ${section8.isDragging ? "cursor-grabbing" : "cursor-grab"}`}
                    >
                        <div className="flex gap-4 px-[22px] min-w-max">
                            {appleExperienceData.items.map((item) => (
                                <div
                                    key={item.id}
                                    className="relative w-[400px] h-[500px] rounded-2xl flex-shrink-0 overflow-hidden shadow-sm hover:shadow-md border border-gray-100 bg-white transition-all duration-300"
                                >
                                    {/* Image */}
                                    {item.image && (
                                        <img 
                                            src={item.image} 
                                            alt={item.title} 
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                    )}
                                    
                                    {/* Text content at top */}
                                    <div className="relative p-8 z-10">
                                        <span className="block text-[12px] font-semibold tracking-wide text-gray-500 uppercase mb-3">
                                            {item.category}
                                        </span>
                                        <h3 className="text-[24px] font-semibold text-[#1d1d1f] leading-tight">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Savings and offers */}
            <section className="w-full h-auto pb-[40px]">
                <div className="w-full h-auto px-[148px] pt-[40px]">
                    <h2 className="text-[28px] font-semibold">
                        <span className="text-[28px] text-gray-500">{savingsOffersData.section_title} {savingsOffersData.section_subtitle}</span>
                    </h2>
                </div>

                <div className="relative">
                    <div
                        ref={section9.scrollRef}
                        onMouseDown={section9.handleMouseDown}
                        onMouseLeave={section9.handleMouseLeave}
                        onMouseUp={section9.handleMouseUp}
                        onMouseMove={section9.handleMouseMove}
                        className={`overflow-x-auto scroll-smooth scrollbar-hide select-none px-[148px] pt-[16px] pb-[40px] ${section9.isDragging ? "cursor-grabbing" : "cursor-grab"}`}
                    >
                        <div className="flex gap-4 px-[22px] min-w-max">
                            {savingsOffersData.items.map((item) => (
                                <div
                                    key={item.id}
                                    className="relative w-[400px] h-[500px] rounded-2xl flex-shrink-0 overflow-hidden shadow-sm hover:shadow-md border border-gray-100 bg-white transition-all duration-300 flex flex-col"
                                >
                                    {/* Image */}
                                    {item.image && (
                                        <div className="w-full h-[300px] overflow-hidden">
                                            <img 
                                                src={item.image} 
                                                alt={item.title} 
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    )}
                                    
                                    {/* Text content */}
                                    <div className="p-8 flex-1 flex flex-col">
                                        <h3 className="text-[21px] font-semibold text-[#1d1d1f] leading-snug mb-3">
                                            {item.title}
                                        </h3>
                                        {item.description && (
                                            <p className="text-[14px] text-gray-600 mb-4">
                                                {item.description}
                                            </p>
                                        )}
                                        <div className="mt-auto">
                                            {item.links.map((link, idx) => (
                                                <a key={idx} href={link.url} className="text-[14px] text-[#0066cc] hover:underline mr-4">
                                                    {link.text} →
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Links */}
            <section className="py-24 px-[5%] ">
                <div className="max-w-[1600px]">
                    <h2 className="text-[28px] font-semibold mb-8 text-[#1d1d1f]">Quick Links</h2>
                    <div className="flex flex-wrap gap-3">
                        {quickLinks.map((link) => (
                            <button
                                key={link}
                                className="px-6 py-3 bg-[#e8e8ed] hover:bg-[#d2d2d7] rounded-full text-[14px] font-medium transition-colors text-[#1d1d1f]"
                            >
                                {link}
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Store;
