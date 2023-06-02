import React from "react";
import Slide1 from "@assets/img1.jpg";
import Image from "next/image";
import Sponsor from "./Sponsor";
import Sectionextra from "./sectionexra";
import WrittenContent from "./WrittenContent";

const AboutUs = () => {
  return (
    <div className="mt-[80px] ">
      <div className="relative">
        <Image
          src={Slide1}
          alt="badag"
          width={800}
          height={800}
          className=" w-full h-[80vh]"
        />
        <div className=" absolute top-[50%] translate-y-[-50%] text-white px-10 md:px-16">
          <p className="text-lg">
            Home / Product Engineering / IoT & Wearables Solutions
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold">
            IoT & Wearables Solutions
          </h1>
          <p>Increasing connectivity across your business</p>
        </div>
      </div>

      <WrittenContent />

      <Sectionextra />

      <div className="p-16 w-full bg-gradient-to-r from-cyan-700 to-blue-700 flex justify-center items-center py-10">
        <div className="w-fit px-4">
          {/* <button className=" my-5 text-white bg-transparent border border-white  px-5 py-2 rounded-md">
          FUN FACT
          </button> */}
          <p className=" bg-slate-300 p-3 w-fit rounded-md">FUN FACT</p>
          {/* <h1 className=' text-5xl text-white font-bold'>Facing a challenge?</h1> */}
          <p className="text-white font-thin py-3 text-5xl">
          Global consumers spend 4.2 hours on average on apps every day.
          </p>
          <p>We make sure yours doesn't bring the average down.</p>
        </div>
      </div>

    </div>
  );
};

export default AboutUs;
