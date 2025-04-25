import { ReactNode } from "react";

// components/BandProjectCard.tsx
interface BandProjectCardProps {
  subTitle: string;
  description: string | ReactNode;
  title: string;
  image: string;
}

export default function BandProjectCard({
  subTitle,
  description,
  title,
  image,
}: BandProjectCardProps) {
  return (
    <section className="flex flex-col space-y-1">
      <h3 className="text-sm font-semibold text-gray-500 sm:text-base">
        {subTitle}
      </h3>
      <p className="sm:text:lg">{description}</p>
      <h1 className="text-4xl font-bold sm:text-xl">{title}</h1>
      <img
        alt={title}
        src={image}
        width={600}
        className="rounded shadow-lg shadow-neutral-500 dark:shadow-neutral-700"
      />
    </section>
  );
}
