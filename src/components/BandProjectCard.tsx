import { ReactNode, useRef } from "react";

// components/BandProjectCard.tsx
interface BandProjectCardProps {
  subTitle: string;
  description: string | ReactNode;
  title: string;
  image: string[];
}

export default function BandProjectCard({
  subTitle,
  description,
  title,
  image,
}: BandProjectCardProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null); // 이미지 너비 측정용

  const scrollLeft = () => {
    const imgWidth = imgRef.current?.clientWidth || 600; // fallback to 600
    scrollRef.current?.scrollBy({ left: -imgWidth, behavior: "smooth" });
  };

  const scrollRight = () => {
    const imgWidth = imgRef.current?.clientWidth || 600;
    scrollRef.current?.scrollBy({ left: imgWidth, behavior: "smooth" });
  };

  return (
    <section className="flex flex-col justify-center space-y-1 max-w-[800px]">
      <h3 className="text-sm font-semibold text-gray-500 sm:text-base">
        {subTitle}
      </h3>
      <p className="sm:text-lg ">{description}</p>
      <h1 className="text-4xl font-bold sm:text-5xl">{title}</h1>
      {image.length < 1 ? (
        <></>
      ) : image.length === 1 ? (
        <div className="w-4/5 mx-auto">
          <img
            alt={title}
            src={image[0]}
            width={1000}
            className="w-full h-auto rounded shadow-lg shadow-neutral-500 dark:shadow-neutral-700"
          />
        </div>
      ) : (
        <div className="flex flex-row items-center justify-center gap-2 mx-auto">
          <button
            onClick={scrollLeft}
            className="h-20 px-2 py-1 text-2xl font-bold transition bg-gray-200 rounded focus:outline-none hover:cursor-pointer active:scale-90 dark:bg-neutral-700"
          >
            {"<"}
          </button>
          <div
            ref={scrollRef}
            className="flex flex-row w-4/5 overflow-x-scroll shadow-lg scrollbar-hidden scroll-smooth shadow-neutral-500 dark:shadow-neutral-700"
          >
            {image.map((img, idx) => (
              <img
                key={idx}
                ref={idx === 0 ? imgRef : null} // 첫 번째 이미지만 ref로 연결
                alt={title}
                src={img}
                width={1000}
                className="w-full "
              />
            ))}
          </div>
          <button
            onClick={scrollRight}
            className="h-20 px-2 py-1 text-2xl font-bold transition bg-gray-200 rounded focus:outline-none hover:cursor-pointer active:scale-90 dark:bg-neutral-700"
          >
            {">"}
          </button>
        </div>
      )}
    </section>
  );
}
