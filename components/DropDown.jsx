"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const DropDown = ({ title, list1 }) => {
  const [IsOpen, setIsOpen] = useState(false);
  const divRef = useRef();

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target !== divRef.current) {
        setIsOpen(false);
      }
    });
  });

  return (
    <div className=" group w-full">
      <button
        ref={divRef}
        onClick={() => setIsOpen(!IsOpen)}
        className=" text-xs w-fit"
      >
        {title}
      </button>
        <div
          className=" invisible group-hover:visible top-[82px] text-sm z-50 w-screen py-5 px-5 grid grid-cols-3 h-fit bg-gray-100 rounded-md text-[#1A374D] absolute left-0"
        >
          {list1.map((module, i) => {
            return (
              <div
                key={i}
                className="  flex flex-row-reverse items-center justify-center text-[0.9rem] w-full py-2 mx-auto hover:bg-gray-300 transition-all duration-300"
              >
                <Link
                  className=" relative mx-auto flex flex-row-reverse items-center justify-center"
                  href={module.link}
                >
                  {module.name}
                </Link>
              </div>
            );
          })}
        </div>
    </div>
  );
};

export default DropDown;
