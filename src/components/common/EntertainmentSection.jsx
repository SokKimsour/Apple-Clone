import React, { useEffect, useRef } from "react";
import { getAssetPath } from "../../assets";

const EntertainmentSection = () => {
  const topScrollRef = useRef(null);
  const bottomScrollRef = useRef(null);
  const topScrollAccumulator = useRef(0);
  const bottomScrollAccumulator = useRef(0);

  // Hero images (top row)
  const heroImages = [
    { src: "assets/image/whymac/tv/10002.jpg", title: "Apple TV+", description: "Original series and movies" },
    { src: "assets/image/whymac/tv/10004.jpg", title: "Apple Music", description: "Stream your favorite songs" },
    { src: "assets/image/whymac/tv/10006.jpg", title: "Apple Arcade", description: "Unlimited games" },
    { src: "assets/image/whymac/tv/10002.jpg", title: "Apple TV+", description: "Original series and movies" },
    { src: "assets/image/whymac/tv/10004.jpg", title: "Apple Music", description: "Stream your favorite songs" },
    { src: "assets/image/whymac/tv/10006.jpg", title: "Apple Arcade", description: "Unlimited games" },
  ];

  // Mini cards (bottom row)
  const miniImages = [
    { src: "assets/image/whymac/tv/10021.jpg", label: "Watch now" },
    { src: "assets/image/whymac/tv/10022.jpg", label: "Stream now" },
    { src: "assets/image/whymac/tv/10043.jpg", label: "Play now" },
    { src: "assets/image/whymac/tv/10044.jpg", label: "Listen now" },
    { src: "assets/image/whymac/tv/10045.jpg", label: "Watch now" },
    { src: "assets/image/whymac/tv/10046.jpg", label: "Stream now" },
    { src: "assets/image/whymac/tv/10061.jpg", label: "Play now" },
    { src: "assets/image/whymac/tv/10063.jpg", label: "Listen now" },
    { src: "assets/image/whymac/tv/10065.jpg", label: "Watch now" },
    { src: "assets/image/whymac/tv/10066.jpg", label: "Stream now" },
    { src: "assets/image/whymac/tv/10081.jpg", label: "Play now" },
    { src: "assets/image/whymac/tv/10021.jpg", label: "Watch now" },
    { src: "assets/image/whymac/tv/10022.jpg", label: "Stream now" },
    { src: "assets/image/whymac/tv/10043.jpg", label: "Play now" },
    { src: "assets/image/whymac/tv/10044.jpg", label: "Listen now" },
    { src: "assets/image/whymac/tv/10045.jpg", label: "Watch now" },
    { src: "assets/image/whymac/tv/10046.jpg", label: "Stream now" },
    { src: "assets/image/whymac/tv/10061.jpg", label: "Play now" },
    { src: "assets/image/whymac/tv/10063.jpg", label: "Listen now" },
    { src: "assets/image/whymac/tv/10065.jpg", label: "Watch now" },
    { src: "assets/image/whymac/tv/10066.jpg", label: "Stream now" },
    { src: "assets/image/whymac/tv/10081.jpg", label: "Play now" },
  ];

  // Auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      // Top row
      if (topScrollRef.current) {
        topScrollAccumulator.current += 1; // Slightly faster
        if (topScrollAccumulator.current >= 1) {
          const pixels = Math.floor(topScrollAccumulator.current);
          topScrollAccumulator.current -= pixels;
          topScrollRef.current.scrollLeft += pixels;

          // Infinite scroll logic check
          const maxScroll = topScrollRef.current.scrollWidth / 2;
          if (topScrollRef.current.scrollLeft >= maxScroll - 10) {
             topScrollRef.current.scrollLeft = 0;
          }
        }
      }

      // Bottom row
      if (bottomScrollRef.current) {
        bottomScrollAccumulator.current += 0.8;
        if (bottomScrollAccumulator.current >= 1) {
          const pixels = Math.floor(bottomScrollAccumulator.current);
          bottomScrollAccumulator.current -= pixels;
          bottomScrollRef.current.scrollLeft += pixels;

          const maxScroll = bottomScrollRef.current.scrollWidth / 2;
          if (bottomScrollRef.current.scrollLeft >= maxScroll - 10) {
             bottomScrollRef.current.scrollLeft = 0;
          }
        }
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#f5f5f7] py-10 md:py-24 overflow-hidden">
      {/* Title */}
      <h2 className="text-center text-3xl md:text-5xl font-semibold mb-8 md:mb-16 py-5 md:py-10">
        Endless entertainment.
      </h2>

      {/* Top row */}
      <div
        ref={topScrollRef}
        className="w-full overflow-x-auto scrollbar-hide
                   flex gap-5 px-4 md:px-24 pb-5
                   cursor-grab active:cursor-grabbing"
      >
        {heroImages.map((item, index) => (
          <div
            key={index}
            className="group relative
                       min-w-[300px] h-[180px] md:min-w-[900px] lg:min-w-[1100px] md:h-[600px]
                       shrink-0
                       overflow-hidden
                       shadow-xl
                       snap-start
                       rounded-2xl"
          >
            <img
              src={getAssetPath(item.src)}
              alt={item.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-white">
              <h3 className="text-lg md:text-2xl font-medium mb-1">{item.title}</h3>
              <p className="text-xs md:text-sm opacity-90">{item.description}</p>
            </div>

            <button className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-white text-black px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-medium shadow hover:bg-gray-100 transition">
              Explore
            </button>
          </div>
        ))}
      </div>

      {/* Bottom row */}
      <div
        ref={bottomScrollRef}
        className="w-full overflow-x-auto scrollbar-hide
                   flex gap-5 px-4 md:px-24 py-5 md:py-10
                   cursor-grab active:cursor-grabbing"
      >
        {miniImages.map((item, index) => (
          <div
            key={index}
            className="group relative
                       min-w-[200px] h-[120px] md:min-w-[400px] md:h-[225px]
                       shrink-0
                       overflow-hidden
                       shadow-lg
                       rounded-xl"
          >
            <img
              src={getAssetPath(item.src)}
              alt={item.label}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <button className="absolute bottom-3 left-3 md:bottom-5 md:left-5 bg-white text-black px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[10px] md:text-xs font-medium shadow hover:scale-105 transition">
              {item.label}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EntertainmentSection;
