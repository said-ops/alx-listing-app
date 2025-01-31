import React from "react";
import { buttonProps } from "@/interfaces";
function Button({text,height,bgColor,textColor}:buttonProps) {

  return (
    <button className={`${bgColor} ${textColor} h-[${height}] rounded-full p-4 flex justify-center items-center`}>
      {text}
    </button>
  );
}

export default Button;
