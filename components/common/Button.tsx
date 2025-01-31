import React from "react";
import { buttonProps } from "@/interfaces";
function Button({text,height,bgColor,textColor,width}:buttonProps) {

  return (
    <button className={`${bgColor} ${textColor} h-[${height}] w-[${width}]  rounded-full p-4 flex justify-center items-center `}>
      {text}
    </button>
  );
}

export default Button;
