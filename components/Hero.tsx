"use client";

import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";

function Hero() {
  // 1. scroll function
  const handleSroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, or rent a car — quickly and easily!
        </h1>

        <p className="hero__subtitle">
          Compare prices from the world's leading car rental companies
        </p>

        <CustomButton
          title="Explore Car"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleSroll}
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
}

export default Hero;
