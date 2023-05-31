"use client"
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const DropDown = ({ title, list1 }) => {
  const [IsOpen, setIsOpen] = useState(false);
  const divRef = useRef();


  useEffect(()=>{
    window.addEventListener("click",(e)=>{
      if(e.target !== divRef.current){
        setIsOpen(false);
      }
    })
  })

  return (
    <div
      onClick={() => setIsOpen(!IsOpen)}
      className=" bg-[rgba(16,44,81,255)] relative w-full"
    >
      <button  ref={divRef} onClick={() => setIsOpen(!IsOpen)} className=" text-xs w-fit">
        {title}
      </button>
      {IsOpen ? (
        <ArrowDropUpIcon fontSize="small" />
      ) : (
        <ArrowDropDownIcon fontSize="small" />
      )}
      {IsOpen && (
        <div className=" text-sm z-50 w-[180px] h-fit bg-gray-100 rounded-md text-[rgba(16,44,81,255)] absolute top-[35px] md:top-[55px] left-[50%] translate-x-[-50%] opacity-100  transition-all duration-300">
          {list1.map((module, i) => {
            return (
              <div
                key={i}
                className=" text-[0.9rem] w-full py-2 mx-auto  border-b-[1px] border-black"
              >
                <Link href={module.link}>{module.name}</Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DropDown;
