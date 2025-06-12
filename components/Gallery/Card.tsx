"use client";

import React, { useState } from "react";
import Image from "next/image"; // Import next/image
import { ChevronLeft, ChevronRight } from "lucide-react";

const MAX_VISIBILITY = 3;

const Card = ({ imageUrl }: { imageUrl: string }) => (
  <div className="w-full rounded-2xl overflow-hidden transition-all duration-300 ease-out shadow-lg">
    <Image
      src={imageUrl || "/placeholder.svg"}
      alt="Carousel image"
      width={384} // Set a default width (adjust based on your design)
      height={384} // Set a default height (adjust based on your design)
      className="w-full h-full object-cover transition-all duration-300 ease-out"
      priority={false} // Set to true for above-the-fold images
    />
  </div>
);

const Carousel = ({ children }: { children: React.ReactNode }) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);

  return (
    <div
      className="relative w-80 h-80 sm:w-80 sm:h-80 md:w-96 md:h-96"
      style={{
        perspective: "500px",
        transformStyle: "preserve-3d",
      }}
    >
      {active > 0 && (
        <button
          className="text-white text-8xl absolute flex items-center justify-center top-1/2 z-10 cursor-pointer select-none bg-transparent border-0 -translate-x-full -translate-y-1/2"
          onClick={() => setActive((i) => i - 1)}
        >
          <ChevronLeft size={35} />
        </button>
      )}
      {React.Children.map(children, (child, i) => (
        <div
          key={i}
          className="absolute w-full h-full transition-all duration-300 ease-out"
          style={
            {
              "--active": i === active ? 1 : 0,
              "--offset": (active - i) / 3,
              "--direction": Math.sign(active - i),
              "--abs-offset": Math.abs(active - i) / 3,
              pointerEvents: active === i ? "auto" : "none",
              opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
              display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
              transform: `
                rotateY(calc(var(--offset) * 50deg))
                scaleY(calc(1 + var(--abs-offset) * -0.4))
                translateZ(calc(var(--abs-offset) * -30rem))
                translateX(calc(var(--direction) * -5rem))
              `,
              filter: "blur(calc(var(--abs-offset) * 1rem))",
            } as React.CSSProperties
          }
        >
          {child}
        </div>
      ))}
      {active < count - 1 && (
        <button
          className="text-white text-8xl absolute flex items-center justify-center top-1/2 right-0 z-10 cursor-pointer select-none bg-transparent border-0 translate-x-full -translate-y-1/2"
          onClick={() => setActive((i) => i + 1)}
        >
          <ChevronRight size={35} />
        </button>
      )}
    </div>
  );
};

export default function Component() {
  const imageUrls = [
    "/Gallery/mytennis.png",
    "/Gallery/tennisnumber.png",
    "/Gallery/courtside.png",
    "/Gallery/m6.jpeg",
    "/Gallery/m4.jpg",
    "/Gallery/me2.jpg",
    "/Gallery/me3.jpg",
  ];
  return (
    <div className="ml-15 w-full max-w-[950px] flex justify-center mx-auto px-4 sm:px-0 my-20 sm:my-0 pb-20 -translate-y-8 sm:translate-y-0">
      <Carousel>
        {imageUrls.map((url, i) => (
          <Card key={i} imageUrl={url} />
        ))}
      </Carousel>
    </div>
  );
}
