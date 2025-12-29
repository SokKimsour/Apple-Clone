import { useState, useRef } from "react";
import { macproduct } from "../../data/mac";

export default function MacShowProduct() {
  const [active, setActive] = useState("All Products");
  const scrollRef = useRef(null);

  const handleClick = (e) => {
    setActive(e.target.textContent);
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
        const { current } = scrollRef;
        const scrollAmount = direction === "left" ? -500 : 500;
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const filteredProducts = active === "All Products"
    ? macproduct.products
    : macproduct.products.filter(product => product.category === active);

  return (
    <div className="pb-16 md:pb-[160px]">
      <h1 className="text-5xl md:text-7xl font-semibold w-full max-w-[1260px] 2xl:max-w-[1920px] mx-auto py-10 md:py-[80px] px-4 xl:px-0">
        Mac
      </h1>
      <div className="w-full max-w-[1260px] 2xl:max-w-[1920px] mx-auto px-4 xl:px-0 overflow-x-auto scrollbar-hide">
        <div className="w-max md:w-[480px] bg-[rgb(232,232,237)] flex justify-start items-center text-sm md:text-lg rounded-full border-[6px] border-[rgb(232,232,237)]">
          <p
            className={`px-5 h-[44px] flex items-center justify-center cursor-pointer transition-all duration-200   ${
              active === "All Products"
                ? "bg-black text-white rounded-full"
                : ""
            }`}
            onClick={handleClick}
          >
            All Products
          </p>
          <p
            className={`px-5 h-[44px] flex items-center justify-center cursor-pointer transition-colors duration-200  ${
              active === "Laptops" ? "bg-black text-white rounded-full" : ""
            }`}
            onClick={handleClick}
          >
            Laptops
          </p>
          <p
            className={`px-5 h-[44px] flex items-center justify-center cursor-pointer transition-colors duration-200 ${
              active === "Desktops" ? "bg-black text-white rounded-full" : ""
            }`}
            onClick={handleClick}
          >
            Desktops
          </p>
          <p
            className={`px-5 h-[44px] flex items-center justify-center cursor-pointer transition-colors duration-200 ${
              active === "Displays" ? "bg-black text-white rounded-full" : ""
            }`}
            onClick={handleClick}
          >
            Displays
          </p>
        </div>
      </div>
      
      <div 
        ref={scrollRef}
        className="w-full h-[700px] flex items-center justify-start px-4 xl:px-[calc(50vw-630px)] 2xl:px-[calc(50vw-960px)] overflow-x-auto gap-4 md:gap-[18px] scrollbar-hide snap-x snap-mandatory"
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="snap-center shrink-0 w-[80vw] md:w-[372px] h-[580px] md:h-[620px] transition-all duration-300"
          >
            <div className="relative w-full h-full bg-white rounded-[24px] md:rounded-[28px] p-6 md:p-8 flex flex-col items-center shadow-lg group hover:scale-[1.02] transition-transform duration-300">
            <img
              className="w-full md:w-[372px] h-[200px] md:h-[252px] object-contain"
              src={product.image}
              alt={product.name}
            />
            <div className="flex flex-col justify-between items-center w-full md:w-[372px] h-auto md:h-[82px] mb-4 md:mb-0 text-center md:text-left">
              <h1 className="text-xl md:text-2xl font-bold">{product.name}</h1>
              <p className="text-sm md:text-lg">{product.chip}</p>
            </div>
            <div className="text-center flex flex-col justify-start items-center w-full md:w-[372px] h-auto md:h-[116px] px-2 md:px-7 mb-6 md:mb-10">
              <p className="text-sm md:text-lg text-black/50 my-2 md:my-4">
                {product.description}
              </p>
              <p className="text-sm md:text-lg">
                From {product.starting_price} or {product.monthly_price}. for
                24 months
              </p>
            </div>
            <div className="flex gap-[18px] justify-center">
              <button
                className="inline-flex items-center justify-center
              px-[18px] py-[8px]
              bg-[#0071e3] hover:bg-[#0077ed]
              text-white text-[17px]
              rounded-full
              transition-colors duration-200
              focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3]/40"
              >
                Learn more
              </button>
              <button
                className="inline-flex items-center justify-center
              px-[18px] py-[8px]
              hover:bg-[#0077ed]
              text-[#0071e3] text-[17px]
              rounded-full
              transition-colors duration-200
              border border-[#0071e3]"
              >
                Buy
              </button>
            </div>
          </div>
          </div>
        ))}
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
  );
}
