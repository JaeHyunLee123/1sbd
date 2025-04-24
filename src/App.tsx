import { useEffect, useRef, useState } from "react";

export default function App() {
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
    <div className="flex items-center justify-center bg-white dark:bg-black">
      <div className="flex flex-col items-start justify-center w-full p-5 text-white bg-black dark:bg-white">
        <span
          ref={bannerRef}
          className={`text-5xl font-bold sm:text-6xl transition-colors duration-1000 ${
            isVisible
              ? "text-white dark:text-black"
              : "text-black dark:text-white"
          }`}
        >
          음악,
        </span>
        <span
          className={`text-3xl font-semibold sm:text-4xl transition-colors duration-1000 ${
            isVisible
              ? "text-white dark:text-black"
              : "text-black dark:text-white"
          }`}
        >
          당신의 일상을 침공하다!
        </span>
      </div>
    </div>
  );
}
//벤데이 프로젝트

//벤쿠스틱

//뉴비

//프렌즈십
