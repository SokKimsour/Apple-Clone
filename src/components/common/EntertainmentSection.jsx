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
  // Auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      // Top row
      if (topScrollRef.current) {
        topScrollAccumulator.current += 0.6;
        if (topScrollAccumulator.current >= 1) {
          const pixels = Math.floor(topScrollAccumulator.current);
          topScrollAccumulator.current -= pixels;
          topScrollRef.current.scrollLeft += pixels;

          const maxScroll = topScrollRef.current.scrollWidth / 2;
          if (topScrollRef.current.scrollLeft >= maxScroll) {
            topScrollRef.current.scrollLeft -= maxScroll;
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

          const maxScroll = bottomScrollRef.current.scrollWidth / 2;
          if (bottomScrollRef.current.scrollLeft >= maxScroll) {
            bottomScrollRef.current.scrollLeft -= maxScroll;
          }
        }
      }
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#f5f5f7] py-10 min-[830px]:py-24 overflow-hidden">
      {/* Title */}
      <h2 className="text-center text-2xl min-[830px]:text-5xl font-semibold mb-8 min-[830px]:mb-16 py-[20px] min-[830px]:py-[40px]">
        Endless entertainment.
      </h2>

      {/* Top row */}
      <div
        ref={topScrollRef}
        className="w-full overflow-x-auto scrollbar-hide
                   flex gap-[20px] px-4 min-[830px]:px-24 pb-[20px]
                   cursor-grab active:cursor-grabbing"
      >
        {heroImages.map((item, index) => (
          <div
            key={index}
            className="group relative
                       min-w-[300px] h-[200px] min-[830px]:min-w-[1250px] min-[830px]:h-[700px]
                       shrink-0
                       overflow-hidden
                       shadow-xl
                       snap-start"
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />

            <div className="absolute bottom-4 left-4 min-[830px]:bottom-8 min-[830px]:left-8 text-white">
              <h3 className="text-lg min-[830px]:text-2xl font-medium mb-1">{item.title}</h3>
              <p className="text-xs min-[830px]:text-sm opacity-90">{item.description}</p>
            </div>

            <button className="absolute bottom-4 right-4 min-[830px]:bottom-8 min-[830px]:right-8 bg-white text-black px-5 py-3 min-[830px]:px-6 min-[830px]:py-4 rounded-full text-xs min-[830px]:text-sm font-medium shadow">
              Explore
            </button>
          </div>
        ))}
      </div>

      {/* Bottom row */}
      <div
        ref={bottomScrollRef}
        className="w-full overflow-x-auto scrollbar-hide
                   flex gap-[20px] px-4 min-[830px]:px-24 py-5 min-[830px]:py-10
                   cursor-grab active:cursor-grabbing"
      >
        {miniImages.map((item, index) => (
          <div
            key={index}
            className="group relative
                       min-w-[200px] h-[120px] min-[830px]:min-w-[470px] min-[830px]:h-[260px]
                       shrink-0
                       overflow-hidden
                       shadow-lg"
          >
            <img
              src={item.src}
              alt={item.label}
              className="w-full h-full object-cover"
            />

            <button className="absolute bottom-3 left-3 min-[830px]:bottom-5 min-[830px]:left-5 bg-white text-black px-5 py-3 min-[830px]:px-4 min-[830px]:py-1.5 rounded-full text-[10px] min-[830px]:text-xs font-medium">
              {item.label}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EntertainmentSection;
