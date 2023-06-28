"use client";
import React from "react";
import Slide1 from "../../../public/Images/government.png";
import Image from "next/image";
import Longcard from "./longcard";
import { useEffect, useState } from "react";
import Industriescontent from "./Industriescontent";

const page = () => {
    
  return (
    <div className="">
      <div className="relative">
        <Image
          src={Slide1}
          alt="badag"
          width={800}
          height={800}
          className=" mt-20 w-[100%] h-[40vh] lg:h-[60vh] object-fit"
        />
        <div className=" absolute top-[50%] translate-y-[-50%] text-white px-10 md:px-16">
          
          <br />
          <h1 className="backdrop-brightness-50 p-8 text-3xl sm:text-5xl lg:text-6xl font-bold" data-aos="fade-up">
          Government Sector
          </h1>{" "}
        </div>
      </div>
      <Industriescontent/>
      <Longcard />
      
    </div>
  );
};

export default page;
