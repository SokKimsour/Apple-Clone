import React, { useEffect, useRef } from "react";

const EntertainmentSection = () => {
  const topScrollRef = useRef(null);
  const bottomScrollRef = useRef(null);
  const topScrollAccumulator = useRef(0);
  const bottomScrollAccumulator = useRef(0);

  // Hero images (top row)
  const heroImages = [
    { src: "/assets/image/tv/10002.jpg", title: "Apple TV+", description: "Original series and movies" },
    { src: "/assets/image/tv/10004.jpg", title: "Apple Music", description: "Stream your favorite songs" },
    { src: "/assets/image/tv/10006.jpg", title: "Apple Arcade", description: "Unlimited games" },
    { src: "/assets/image/tv/10002.jpg", title: "Apple TV+", description: "Original series and movies" },
    { src: "/assets/image/tv/10004.jpg", title: "Apple Music", description: "Stream your favorite songs" },
    { src: "/assets/image/tv/10006.jpg", title: "Apple Arcade", description: "Unlimited games" },
  ];

  // Mini cards (bottom row)
  const miniImages = [
    { src: "/assets/image/tv/10021.jpg", label: "Watch now" },
    { src: "/assets/image/tv/10022.jpg", label: "Stream now" },
    { src: "/assets/image/tv/10043.jpg", label: "Play now" },
    { src: "/assets/image/tv/10044.jpg", label: "Listen now" },
    { src: "/assets/image/tv/10045.jpg", label: "Watch now" },
    { src: "/assets/image/tv/10046.jpg", label: "Stream now" },
    { src: "/assets/image/tv/10061.jpg", label: "Play now" },
    { src: "/assets/image/tv/10063.jpg", label: "Listen now" },
    { src: "/assets/image/tv/10065.jpg", label: "Watch now" },
    { src: "/assets/image/tv/10066.jpg", label: "Stream now" },
    { src: "/assets/image/tv/10081.jpg", label: "Play now" },
    { src: "/assets/image/tv/10021.jpg", label: "Watch now" },
    { src: "/assets/image/tv/10022.jpg", label: "Stream now" },
    { src: "/assets/image/tv/10043.jpg", label: "Play now" },
    { src: "/assets/image/tv/10044.jpg", label: "Listen now" },
    { src: "/assets/image/tv/10045.jpg", label: "Watch now" },
    { src: "/assets/image/tv/10046.jpg", label: "Stream now" },
    { src: "/assets/image/tv/10061.jpg", label: "Play now" },
    { src: "/assets/image/tv/10063.jpg", label: "Listen now" },
    { src: "/assets/image/tv/10065.jpg", label: "Watch now" },
    { src: "/assets/image/tv/10066.jpg", label: "Stream now" },
    { src: "/assets/image/tv/10081.jpg", label: "Play now" },
  ];

  // Auto scroll
  useEffect(() => {
    const topRowScrollAmount = 3 * (1250 + 20); // 3 items + gap
    const bottomRowScrollAmount = 11 * (470 + 20); // 11 items + gap

    const interval = setInterval(() => {
      // Top row
      if (topScrollRef.current) {
        topScrollAccumulator.current += 0.6;
        if (topScrollAccumulator.current >= 1) {
          const pixels = Math.floor(topScrollAccumulator.current);
          topScrollAccumulator.current -= pixels;
          topScrollRef.current.scrollLeft += pixels;

          if (topScrollRef.current.scrollLeft >= topRowScrollAmount) {
            topScrollRef.current.scrollLeft -= topRowScrollAmount;
          }
        }
      }

      // Bottom row
      if (bottomScrollRef.current) {
        bottomScrollAccumulator.current += 0.4;
        if (bottomScrollAccumulator.current >= 1) {
          const pixels = Math.floor(bottomScrollAccumulator.current);
          bottomScrollAccumulator.current -= pixels;
          bottomScrollRef.current.scrollLeft += pixels;

          if (bottomScrollRef.current.scrollLeft >= bottomRowScrollAmount) {
            bottomScrollRef.current.scrollLeft -= bottomRowScrollAmount;
          }
        }
      }
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#f5f5f7] py-24 overflow-hidden">
      {/* Title */}
      <h2 className="text-center text-4xl md:text-5xl font-semibold mb-16 py-[40px]">
       Endless entertainment.
      </h2>

      {/* Top row */}
      <div
        ref={topScrollRef}
        className="w-full overflow-x-auto scrollbar-hide
                   flex gap-[20px] px-24 pb-[20px]
                   cursor-grab active:cursor-grabbing"
      >
        {heroImages.map((item, index) => (
          <div
            key={index}
            className="group relative
                       min-w-[1250px] h-[700px]
                       flex-shrink-0
                       overflow-hidden
                       shadow-xl
                       snap-start"
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-medium mb-1">{item.title}</h3>
              <p className="text-sm opacity-90">{item.description}</p>
            </div>

            <button className="absolute bottom-8 right-8 bg-white text-black px-5 py-2 rounded-full text-sm font-medium shadow">
              Explore
            </button>
          </div>
        ))}
      </div>

      {/* Bottom row */}
      <div
        ref={bottomScrollRef}
        className="w-full overflow-x-auto scrollbar-hide
                   flex gap-[20px] px-24 py-10
                   cursor-grab active:cursor-grabbing"
      >
        {miniImages.map((item, index) => (
          <div
            key={index}
            className="group relative
                       min-w-[470px] h-[260px]
                       flex-shrink-0
                       overflow-hidden
                       shadow-lg"
          >
            <img
              src={item.src}
              alt={item.label}
              className="w-full h-full object-cover"
            />

            <button className="absolute bottom-5 left-5 bg-white text-black px-4 py-1.5 rounded-full text-xs font-medium">
              {item.label}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EntertainmentSection;
