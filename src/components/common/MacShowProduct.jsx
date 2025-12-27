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
    <div className="pb-[160px]">
      <h1 className="text-7xl font-semibold w-[1260px] mx-auto py-[80px]">
        Mac
      </h1>
      <div className="w-[1260px] mx-auto">
        <div className="w-[480px] bg-[rgb(232,232,237)] flex justify-center items-center text-lg rounded-full border-[6px] border-[rgb(232,232,237)]">
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
        className="w-full h-[700px] flex items-center justify-start px-[650px] overflow-x-scroll gap-[18px] scrollbar-hide snap-x"
      >
        {filteredProducts.map((product) => (
          <div
            key={product.name}
            className="w-[372px] h-[620px] flex flex-col justify-between items-center snap-center shrink-0"
          >
            <img
              className="w-[372px] h-[252px] object-contain"
              src={product.image}
              alt={product.name}
            />
            <div className="flex flex-col justify-between items-center w-[372px] h-[82px]">
              <h1 className="text-2xl font-bold">{product.name}</h1>
              <p className="text-lg">{product.chip}</p>
            </div>
            <div className="text-center flex flex-col justify-start items-center w-[372px] h-[116px] px-7 mb-10">
              <p className="text-lg text-black/50 my-4">
                {product.description}
              </p>
              <p className="text-lg">
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
        ))}
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
    </div>
  );
}
