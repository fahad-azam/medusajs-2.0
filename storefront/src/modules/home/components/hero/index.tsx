"use client";

import React, { useRef, useState } from "react";
import "./Hero.css";

const images = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpg",
  "/images/8.jpg",
  "/images/9.jpg",
  "/images/10.jpg",
];

const IMAGE_WIDTH = 220; // Approximate width of each image + margin
const MAX_DOTS = 5; // Show only 5 dots at a time

const Hero: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [mouseDownAt, setMouseDownAt] = useState<number | null>(null);
  const [left, setLeft] = useState<number>(0);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleStart = (clientX: number) => {
    setMouseDownAt(clientX);
  };

  const handleEnd = () => {
    setMouseDownAt(null);
    if (formRef.current) {
      formRef.current.classList.remove("left", "right");
    }
  };

  const handleMove = (clientX: number) => {
    if (mouseDownAt === null || !sliderRef.current || !formRef.current) return;

    let speed = 3;
    let newLeft = left + (clientX - mouseDownAt) / speed;
    let leftLimit = formRef.current.scrollWidth - sliderRef.current.clientWidth;

    if (newLeft < 0 && Math.abs(newLeft) < leftLimit) {
      setLeft(newLeft);
      setMouseDownAt(clientX);

      const newIndex = Math.round(Math.abs(newLeft) / IMAGE_WIDTH);
      setActiveIndex(newIndex);
    }
  };

  const handleDotClick = (index: number) => {
    const newLeft = -(index * IMAGE_WIDTH);
    setLeft(newLeft);
    setActiveIndex(index);
  };

  const handleArrowClick = (direction: "left" | "right") => {
    let newIndex = direction === "left" ? activeIndex - 1 : activeIndex + 1;
    if (newIndex < 0) newIndex = 0;
    if (newIndex >= images.length) newIndex = images.length - 1;

    handleDotClick(newIndex);
  };

  // Dynamically generate dots based on visible images
  const startDot = Math.max(0, Math.min(activeIndex - Math.floor(MAX_DOTS / 2), images.length - MAX_DOTS));
  const visibleDots = images.slice(startDot, startDot + MAX_DOTS);

  return (
    <div className="hero-container">
      <h2 className="title">Collection Photo</h2>

      {/* Left Arrow */}
      <div className="arrow left" onClick={() => handleArrowClick("left")}>
        &#10094;
      </div>

      <div
        className="slider"
        ref={sliderRef}
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseUp={handleEnd}
        onMouseMove={(e) => handleMove(e.clientX)}
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      >
        <div className="form" ref={formRef} style={{ transform: `translateX(${left}px)` }}>
          {images.map((src, index) => (
            <div className="item" key={index}>
              <div className="content">
                <img src={src} alt={`Gem ${index + 1}`} />
                <div className="des">
                  <span>Image {index + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <div className="arrow right" onClick={() => handleArrowClick("right")}>
        &#10095;
      </div>

      {/* Clickable Dots for Slide Navigation (Limited to MAX_DOTS) */}
      <div className="dots-container">
        {visibleDots.map((_, index) => {
          const actualIndex = startDot + index;
          return (
            <span
              key={actualIndex}
              className={`dot ${actualIndex === activeIndex ? "active" : ""}`}
              onClick={() => handleDotClick(actualIndex)}
            ></span>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
