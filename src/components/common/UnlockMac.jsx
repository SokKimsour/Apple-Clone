import { useState } from 'react';
import { getAssetPath } from '../../assets';

const UnlockMac = () => {
    const [activeSection, setActiveSection] = useState(0);

    const sections = [
        {
            title: "Mac and iPhone",
            description: "Answer calls or messages from your iPhone directly on your Mac. See and control what’s on your iPhone from your Mac with iPhone Mirroring. Use Universal Clipboard to copy images, video, or text from your iPhone, then paste into another app on your nearby Mac. And thanks to iCloud, you can access your files from either your iPhone or your Mac. And so much more.",
            image: "assets/image/global/unlock1.jpg"
        },
        {
            title: "Mac and iPad",
            description: "Sketch on your iPad and have it appear instantly on your Mac. Or use your iPad as a second display, so you can work on one screen while you reference the other. You can even start something on your iPad — like a presentation or an email — and continue it on your Mac.",
            image: "assets/image/global/unlock2.jpg"
        },
        {
            title: "Mac and Apple Watch",
            description: "Automatically log in to your Mac when you’re wearing your Apple Watch with Auto Unlock. No password typing required.",
            image: "assets/image/global/unlock3.jpg"
        }
    ];

    return (
        <section className="w-full h-auto py-16 md:py-[100px] bg-white">
            <div className="w-full max-w-[1260px] mx-auto px-4 md:px-0">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 md:mb-[74px] gap-4 md:gap-0">
                    <h2 className="text-4xl md:text-[56px] font-semibold text-[#1d1d1f]">
                        Unlock the world of Apple.
                    </h2>
                    <a href="#" className="text-[17px] text-[#0066cc] hover:underline cursor-pointer">
                        Learn how Apple devices work better together &rsaquo;
                    </a>
                </div>

                <div className="w-full h-auto md:h-[600px] bg-[#f5f5f7] rounded-[30px] overflow-hidden flex flex-col md:flex-row">
                    <div className="w-full md:w-[40%] h-auto md:h-full p-8 md:p-[60px] flex flex-col justify-center order-2 md:order-1">
                        <div className="flex flex-col gap-6">
                            {sections.map((section, index) => (
                                <div 
                                    key={index} 
                                    className="border-b border-[#d2d2d7] last:border-0 pb-6 last:pb-0"
                                >
                                    <button 
                                        onClick={() => setActiveSection(index)}
                                        className="w-full flex items-center justify-between text-left group"
                                    >
                                        <h3 className="text-xl md:text-[24px] font-semibold text-[#1d1d1f]">
                                            {section.title}
                                        </h3>
                                        <span className={`text-[24px] text-[#1d1d1f] transition-transform duration-300 ${activeSection === index ? 'rotate-180' : ''}`}>
                                            <svg viewBox="0 0 16 16" width="16" height="16" className="fill-current">
                                              <path d="M13.8 5.67l-5.3 5.3c-.29.29-.77.29-1.06 0L2.2 5.67c-.29-.29-.29-.77 0-1.06.29-.29.77-.29 1.06 0L8 9.39l4.74-4.78c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06z"></path>
                                            </svg>
                                        </span>
                                    </button>
                                    
                                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeSection === index ? 'max-h-[300px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                                        <p className="text-[15px] md:text-[17px] leading-relaxed text-[#1d1d1f]">
                                            {section.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full md:w-[60%] h-[300px] md:h-full relative p-2 order-1 md:order-2">
                        <div className="w-full h-full relative overflow-hidden rounded-[24px]">
                            {sections.map((section, index) => (
                                <img
                                    key={index}
                                    src={getAssetPath(section.image)}
                                    alt={section.title}
                                    className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out ${activeSection === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UnlockMac;
