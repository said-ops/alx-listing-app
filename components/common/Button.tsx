import React from "react";
import { buttonProps } from "@/interfaces";


function Button({text,height,bgColor,textColor,width}:buttonProps) {

  return (
    <button className={`flex justify-center items-center ${textColor}  ${bgColor} rounded-full`}
    style={{width,height}}
    >
      {text}
    </button>
  );
}

export default Button;
