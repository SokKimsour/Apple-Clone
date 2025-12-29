import { useRef, useState, useEffect } from "react";
import { whyMac } from "../../data/mac.js";

export default function WhyMac() {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Check scroll position to toggle arrow visibility
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => el.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === "left" ? -420 : 420;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full h-auto bg-white pt-[100px] overflow-hidden">
      <div className="w-full max-w-[1260px] 2xl:max-w-[1920px] mx-auto px-4 xl:px-0">
        <h2 className="text-[40px] md:text-[64px] leading-[1.1] font-semibold text-[#1d1d1f] mb-16">
          Why Apple is the best
          <br />
          place to buy Mac.
        </h2>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth gap-6 px-4 xl:px-[calc(50vw-630px)] 2xl:px-[calc(50vw-960px)] pb-12 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {whyMac.map((item) => (
            <div
              key={item.id}
              className="relative min-w-[320px] w-[320px] md:min-w-[400px] md:w-[372px] h-[600px] md:h-[680px] rounded-[24px] overflow-hidden bg-[#f5f5f7] snap-center hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="p-8 h-full flex flex-col z-10 relative">
                <h3
                  className={`text-[20px] font-semibold mb-3 ${
                    item.id <= 2 ? "text-white" : "text-[#1d1d1f]"
                  }`}
                >
                  {item.category}
                </h3>
                <p
                  className={`text-[32px] font-semibold leading-tight opacity-90 ${
                    item.id <= 2 ? "text-white" : "text-[#1d1d1f]"
                  }`}
                >
                  {item.headline}
                </p>
                <div className="absolute bottom-8 right-8 z-20">
                  <button className="w-[36px] h-[36px] bg-[#1d1d1f] rounded-full flex items-center justify-center hover:bg-black transition-colors shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      className="w-4 h-4 fill-white"
                    >
                      <path d="M16 8.5h-4.5V4a1.5 1.5 0 0 0-3 0v4.5H4a1.5 1.5 0 0 0 0 3h4.5V16a1.5 1.5 0 0 0 3 0v-4.5H16a1.5 1.5 0 0 0 0-3z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={getAssetPath(`assets/image/whymac/${item.id}.jpg`)}
                  alt={item.image_alt || ""}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
          <div className="min-w-px h-full"></div>
        </div>
        <div className="flex justify-center md:justify-end w-full max-w-[1260px] 2xl:max-w-[1920px] mx-auto gap-4 mt-4 pb-10 px-4 xl:px-0">
          <button
            onClick={() => scroll("left")}
            className="p-4 bg-gray-200/50 hover:bg-gray-300/80 rounded-full transition-all"
            aria-label="Scroll left"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-4 bg-gray-200/50 hover:bg-gray-300/80 rounded-full transition-all"
            aria-label="Scroll right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
