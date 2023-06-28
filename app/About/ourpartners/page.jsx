import React from "react";
import Slide1 from "@assets/img1.jpg";
import Image from "next/image";
import Sponser from "./Sponsor";
import Cards from './Partnercard';

const page = () => {
  return (
    <div className="">
      <div className="relative">
        <Image
          src={Slide1}
          alt="badag"
          width={800}
          height={800}
          className=" w-full h-[80vh]"
        />
        <div className=" absolute top-[50%] translate-y-[-50%] text-white px-10 md:px-16">
          <h1 className="text-3xl sm:text-5xl font-bold">
            We’ve partnered up with these brands
          </h1>
        </div>
      </div>

      <Sponser/>
      <Cards/>
    </div>
  );
};

export default page;
