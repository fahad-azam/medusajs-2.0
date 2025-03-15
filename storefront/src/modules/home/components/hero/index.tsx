"use client";

import React, { useRef, useState, useEffect } from "react";
import "./Hero.css";

const IMAGE_WIDTH = 220; // Adjust based on your image size
const IMAGE_PATH = "https://bucket-production-2cd7.up.railway.app/medusa-media/images/";

// Add all your image names here
const imageNames = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"]; 

const Hero: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(true);

  // Create an array of full image URLs
  const images = imageNames.map(name => `${IMAGE_PATH}${name}`);
  const clonedImages = [...images, ...images, ...images]; // Infinite loop effect

  useEffect(() => {
    if (!sliderRef.current) return;

    const handleTransitionEnd = () => {
      if (position <= -IMAGE_WIDTH * images.length * 2) {
        setIsTransitioning(false);
        setPosition(-IMAGE_WIDTH * images.length); // Reset to middle set
      } else if (position >= 0) {
        setIsTransitioning(false);
        setPosition(-IMAGE_WIDTH * images.length); // Reset to middle set
      }
    };

    sliderRef.current.addEventListener("transitionend", handleTransitionEnd);
    return () => {
      sliderRef.current?.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [position, images]);

  const handleArrowClick = (direction: "left" | "right") => {
    setIsTransitioning(true);
    setPosition((prev) => prev + (direction === "left" ? IMAGE_WIDTH : -IMAGE_WIDTH));
  };

  return (
    <div className="hero-container">
      <h2 className="title">Collection Photo</h2>

      {/* Left Arrow */}
      <div className="arrow left" onClick={() => handleArrowClick("left")}>
        &#10094;
      </div>

      <div className="slider">
        <div
          className="form"
          ref={sliderRef}
          style={{
            transform: `translateX(${position}px)`,
            transition: isTransitioning ? "0.3s ease-out" : "none",
          }}
        >
          {clonedImages.map((src, index) => (
            <div className="item" key={index}>
              <div className="content">
                <img src={src} alt={`Image ${index % images.length + 1}`} />
                <div className="des">
                  <span>Image {index % images.length + 1}</span>
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
    </div>
  );
};

export default Hero;
