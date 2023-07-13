"use client";
import React from "react";
import Slide1 from "../../../public/Images/gen-ai.jpg";
import Image from "next/image";
import WrittenContent from "../../WrittenContent";
import Content from "./Content";
import { useEffect, useState } from "react";
import Piclongcard from "./Piclongcard";
import Maincontent from "./Maincontent";

const page = () => {


  return (
    <div className="">
      <div className="relative bg-center ">
        <Image
          src="https://cdn.clickworker.com/wp-content/uploads/2022/09/BenefitsofAI.webp"
          alt="badag"
          width={800}
          height={800}
          className="  mt-20 w-[100%] h-[40vh] lg:h-[60vh]"
        />
        <div className=" absolute top-[50%] translate-y-[-50%] text-white px-10 md:px-16">
          <h1
            className="backdrop-brightness-50 p-8 text-3xl sm:text-5xl lg:text-6xl font-bold"
            data-aos="fade-up"
          >
            AI & Generative AI
          </h1>
        </div>
      </div>
      <Maincontent/>

      <Piclongcard />
    </div>
  );
};

export default page;
