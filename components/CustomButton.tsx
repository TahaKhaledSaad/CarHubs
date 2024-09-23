"use client";

import { CustomButtonProps } from "@/types";
import React from "react";
import Image from "next/image";

function CustomButton({
  title,
  containerStyles,
  textStyles,
  rightIcon,
  handleClick,
  btnType,
}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles} ${textStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>{" "}
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
}

export default CustomButton;
