import React from 'react';

const MacLinks = () => {
    return (
        <section className="bg-white py-10 md:py-20 px-4 md:px-10 lg:px-12">
            <div className="w-full max-w-[1260px] mx-auto">
                <h2 className="text-3xl md:text-[40px] font-semibold text-[#1d1d1f] mb-8 md:mb-12">Mac</h2>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                    {/* Explore Mac Column */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-[12px] font-semibold text-[#6e6e73] mb-1">Explore Mac</h3>
                        <ul className="flex flex-col gap-3">
                            <li><a href="#" className="text-[24px] font-semibold text-[#1d1d1f] hover:underline">Explore All Mac</a></li>
                            <li><a href="#" className="text-[24px] font-semibold text-[#1d1d1f] hover:underline">MacBook Air</a></li>
                            <li><a href="#" className="text-[24px] font-semibold text-[#1d1d1f] hover:underline">MacBook Pro</a></li>
                            <li><a href="#" className="text-[24px] font-semibold text-[#1d1d1f] hover:underline">iMac</a></li>
                            <li><a href="#" className="text-[24px] font-semibold text-[#1d1d1f] hover:underline">Mac mini</a></li>
                            <li><a href="#" className="text-[24px] font-semibold text-[#1d1d1f] hover:underline">Mac Studio</a></li>
                            <li><a href="#" className="text-[24px] font-semibold text-[#1d1d1f] hover:underline">Mac Pro</a></li>
                            <li><a href="#" className="text-[24px] font-semibold text-[#1d1d1f] hover:underline">Displays</a></li>
                            
                            <li className="mt-4"><a href="#" className="text-[14px] text-[#1d1d1f] hover:underline">Compare Mac</a></li>
                            <li><a href="#" className="text-[14px] text-[#1d1d1f] hover:underline">Switch from PC to Mac</a></li>
                        </ul>
                    </div>

                    {/* Shop Mac Column */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-[12px] font-semibold text-[#6e6e73] mb-1">Shop Mac</h3>
                        <ul className="flex flex-col gap-2">
                            <li><a href="#" className="text-[12px] font-semibold text-[#1d1d1f] hover:underline">Shop Mac</a></li>
                            <li><a href="#" className="text-[12px] font-semibold text-[#1d1d1f] hover:underline">Help Me Choose</a></li>
                            <li><a href="#" className="text-[12px] font-semibold text-[#1d1d1f] hover:underline">Mac Accessories</a></li>
                            <li><a href="#" className="text-[12px] font-semibold text-[#1d1d1f] hover:underline">Apple Trade In</a></li>
                            <li><a href="#" className="text-[12px] font-semibold text-[#1d1d1f] hover:underline">Financing</a></li>
                            <li><a href="#" className="text-[12px] font-semibold text-[#1d1d1f] hover:underline">Personal Setup</a></li>
                        </ul>
                    </div>

                    {/* More from Mac Column */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-[12px] font-semibold text-[#6e6e73] mb-1">More from Mac</h3>
                        <ul className="flex flex-col gap-2">
                            <li><a href="#" className="text-[12px] font-semibold text-[#1d1d1f] hover:underline">Mac Support</a></li>
                            <li><a href="#" className="text-[12px] font-semibold text-[#1d1d1f] hover:underline">AppleCare</a></li>
                            <li><a href="#" className="text-[12px] font-semibold text-[#1d1d1f] hover:underline">macOS Tahoe</a></li>
                            <li><a href="#" className="text-[12px] font-semibold text-[#1d1d1f] hover:underline">Apple Intelligence</a></li>
                            <li><a href="#" className="text-[12px] font-semibold text-[#1d1d1f] hover:underline">Apps by Apple</a></li>
                            <li><a href="#" className="text-[12px] font-semibold text-[#1d1d1f] hover:underline">Better with iPhone</a></li>
                            <li><a href="#" className="text-[12px] font-semibold text-[#1d1d1f] hover:underline">iCloud+</a></li>
                            <li><a href="#" className="text-[12px] font-semibold text-[#1d1d1f] hover:underline">Mac for Business</a></li>
                            <li><a href="#" className="text-[12px] font-semibold text-[#1d1d1f] hover:underline">Education</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-[#d2d2d7] pt-8">
                     <p className="text-[12px] text-[#6e6e73] leading-relaxed">
                        * Education pricing is available to current and newly accepted college students and their parents, as well as faculty, staff, and homeschool teachers of all grade levels. For more information, visit <a href="#" className="underline">apple.com/us-edu/store</a>.
                     </p>
                </div>
            </div>
        </section>
    );
};

export default MacLinks;
