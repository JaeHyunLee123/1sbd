import { useEffect, useRef, useState } from "react";

const Banner = () => {
  const bannerRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
    };
  }, []);
  return (
    <div className="flex flex-col items-start justify-center w-full p-5 text-white bg-black dark:bg-white">
      <span
        ref={bannerRef}
        className={`text-5xl font-bold sm:text-6xl transition-colors duration-1500 ${
          isVisible
            ? "text-white dark:text-black"
            : "text-black dark:text-white"
        }`}
      >
        음악,
      </span>
      <span
        className={`text-3xl font-semibold sm:text-4xl transition-colors duration-1500 ${
          isVisible
            ? "text-white dark:text-black"
            : "text-black dark:text-white"
        }`}
      >
        당신의 일상을 침공하다!
      </span>
    </div>
  );
};

export default Banner;
