"use client";
import React from "react";
import Slide1 from "@assets/cyber.jpg";
import Image from "next/image";
import WrittenContent from "../../WrittenContent";
import Content from "@app/Content";
import { useState, useEffect } from "react";
import Piclongcard from "./Piclongcard";
import Maincontent from "./Maincontent";

const AboutUs = () => {

  return (
    <div className="">
      <div className="relative">
        <Image
          src={Slide1}
          alt="badag"
          width={800}
          height={800}
          className=" w-full h-[40vh] lg:h-[60vh] mt-20"
        />
        <div className=" absolute top-[50%] translate-y-[-50%] text-white px-10 md:px-16">
          <h1 className="backdrop-brightness-50 p-8 text-3xl sm:text-5xl lg:text-6xl font-bold" data-aos="fade-up">
            Cybersecurity Services
          </h1>
        </div>
      </div>

      <Maincontent/>
      {/* <WrittenContent title={title} content={content} /> */}
      <Piclongcard/>

      {/* <Content title={"more info"} content={miancontent}/> */}

    </div>
  );
};

export default AboutUs;
