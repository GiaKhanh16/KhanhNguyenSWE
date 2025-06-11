"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MAX_VISIBILITY = 3;
const Card = ({ imageUrl }: { imageUrl: string }) => (
  <div className="w-full rounded-2xl overflow-hidden transition-all duration-300 ease-out shadow-lg">
    <img
      src={imageUrl || "/placeholder.svg"}
      alt="Carousel image"
      className="w-full transition-all duration-300 ease-out"
    />
  </div>
);

const Carousel = ({ children }: { children: React.ReactNode }) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);

  return (
    <div
      className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96"
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

// const Image_URL = ["./Gallery/mytennis", "./Gallery/tennisnummber"];
export default function Component() {
  const imageUrls = [
    "/Gallery/mytennis.png",
    "/Gallery/tennisnumber.png",
    "/Gallery/coding.jpg",
    "/Gallery/coding4.jpg",
    "/Gallery/m4.jpg",
    "/Gallery/me2.jpg",
    "/Gallery/me3.jpg",
  ];
  return (
    <div className="w-[950px]  flex overflow md:justify-center m-20 sm:m-0">
      {/* make the width dynamic */}
      <Carousel>
        {imageUrls.map((url, i) => (
          <Card key={i} imageUrl={url} />
        ))}
      </Carousel>
    </div>
  );
}
