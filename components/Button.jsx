import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

export default function Button({bgColor, text, textColor}) {
  return (
    <Link>
      <button
        className={`hero-btns cursor-pointer text-xs md:text-sm flex gap-1 items-center justify-center 
        ${textColor} ${bgColor} p-3 rounded-full lg:pl-4 lg:pr-3 hover:bg-[#A0C2F4] hover:text-[#001A6E] transition-all duration-300 hover:gap-2 `}>
        {text} <IoIosArrowForward />
      </button>
    </Link>
  );
}
