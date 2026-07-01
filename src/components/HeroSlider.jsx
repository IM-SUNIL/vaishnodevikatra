"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroSlider({ images = [], children }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <section className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden flex items-center bg-stone-950">
      {/* Background Images Layer */}
      <div className="absolute inset-0 z-0">
        {images.map((src, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
              } transition-transform duration-10000`}
            >
              <Image
                src={src}
                alt={`Vaishno Devi Backdrop ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover object-center"
              />
            </div>
          );
        })}
        {/* Left-focused gradient overlay for dark text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-900/60 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent z-10"></div>
      </div>

      {/* Hero Content (Children) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl text-left text-white">
          {children}
        </div>
      </div>

      {/* Pagination Indicator Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-saffron-500 w-8"
                  : "bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
