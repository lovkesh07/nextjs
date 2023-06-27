"use client";
import React from "react";
import Slide1 from "../../../public/Images/e-comm.jpg";
import Image from "next/image";
import Longcard from "@components/Longcard";
import ContactUsForm from "@components/ContactUsForm";
import Midsec from "./midsec";
import WrittenContent2 from "@app/WrittenContent2";
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
          <h1 className="backdrop-brightness-50 p-8 text-3xl sm:text-5xl lg:text-6xl font-bold" data-aos="fade-up">
          E-commerce Industry
          </h1>{" "}
        </div>
      </div>
      <Industriescontent/>

      <Midsec />
      <Longcard
        a={"15+"}
        b={"Years of Experience"}
        c={"100+"}
        d={"Global Clients"}
        e={"1200+"}
        f={"Expert Developers"}
      />
      <ContactUsForm />
    </div>
  );
};

export default page;
