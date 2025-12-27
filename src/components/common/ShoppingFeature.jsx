import { useRef } from "react";
import { shoppingFeature } from "../../data/mac.js";

export default function ShoppingFeature() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === "left" ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full h-auto bg-[rgb(245,245,247)] py-[160px]">
      <div className="w-full h-auto pb-[74px]">
        <div className="w-[1260px] h-auto mx-auto">
          <h2 className="text-[56px] font-semibold">Why Apple is the best</h2>
          <h2 className="text-[56px] font-semibold">place to buy Mac.</h2>
        </div>
      </div>

      <div className="relative group">
        <div
          ref={scrollRef}
          className="overflow-x-auto scroll-smooth scrollbar-hide select-none px-[650px] "
        >
          <div className="flex gap-4 px-[22px] min-w-max">
            {shoppingFeature.Features && shoppingFeature.Features.map((item, index) => (
              <div
                key={index}
                className="relative w-[372px] h-[324px] rounded-2xl flex-shrink-0 overflow-hidden shadow-sm hover:shadow-md border border-gray-100 bg-white transition-all duration-300 p-8 flex flex-col justify-start"
              >
                 <span className="text-3xl mb-4 block text-gray-800">
                  <img src={item.icon} alt="" />
                 </span>

                <h3 className="text-[24px] font-semibold text-[#1d1d1f] leading-tight mb-3">
                    {item.title}
                </h3>
                  <p className="text-[17px] text-[#1d1d1f] font-normal">
                    {item.text}
                  </p>
                 <div className="w-[36px] h-[36px] bg-black rounded-full flex items-center justify-center absolute bottom-5 right-5">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    className="w-4 h-4 fill-white"
  >
    <path d="M16 8.5h-4.5V4a1.5 1.5 0 0 0-3 0v4.5H4a1.5 1.5 0 0 0 0 3h4.5V16a1.5 1.5 0 0 0 3 0v-4.5H16a1.5 1.5 0 0 0 0-3z" />
  </svg>
</div>

              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-end w-[1260px] mx-auto gap-4 mt-4 pb-10">
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
    </section>
  );
}
