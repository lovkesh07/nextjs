"use client"
import React from "react";
import Slide1 from "../../../public/Images/manuimg.jpg";
import Image from "next/image";
import Longcard from "@components/Longcard";
import WrittenContent2 from "@app/WrittenContent2";
import { useEffect,useState } from "react";
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
<<<<<<< HEAD
=======
        
>>>>>>> a94729e7485d5e89966f7e213a008ef73506fe76
          <br />
          <h1 className="backdrop-brightness-50 p-8 text-3xl sm:text-5xl lg:text-6xl font-bold" data-aos="fade-up">
          Manufacturing Industry
          </h1>
        </div>
      </div>
      <Industriescontent/>
      
      <Longcard
        a={"15+"}
        b={"Years of Experience"}
        c={"100+"}
        d={"Global Clients"}
        e={"1200+"}
        f={"Expert Developers"}
      />
    </div>
  );
};

export default page;
