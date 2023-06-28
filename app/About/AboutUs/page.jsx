"use client";
import React from "react";
import Slide1 from "@assets/img1.jpg";
import Image from "next/image";
import Longcard from "@components/Longcard";
import FlipCards from "./FlipCards";
import WrittenContent from "../../WrittenContent";
import { useEffect, useState } from "react";

const AboutUs = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  useEffect(() => {
    setTitle("About Us");

    setContent(
      "At Dotclu, we are a dynamic and innovative IT company dedicated to providing cutting-edge technology solutions to businesses of all sizes. With a team of experienced professionals and a passion for driving digital transformation, we strive to empower our clients to leverage technology effectively, optimize their operations, and achieve their business objectives."
    );
  }, []);
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
            Tracing milestones of our growth
          </h1>
        </div>
      </div>
      <WrittenContent title={title} content={content} />
      
      <Longcard 
        a={"114M USD"}
        b={"Annual Revenue"}
        c={"1000+"}
        d={"Clients served sill date"}
        e={"1800+"}
        f={"Employee"}
      />

      <FlipCards />
      <div className=" w-full bg-gradient-to-r from-cyan-700 to-blue-700 flex justify-center items-center py-10">
        <div className="w-fit px-4">
          <h1 className=" text-5xl text-white font-bold">
            Facing a challenge?
          </h1>
          <p className="text-white font-thin py-3">
            We will make sure you stay ahead of the curve.
          </p>
          <button className=" my-5 text-white bg-transparent border border-white  px-5 py-2 rounded-md">
            Let's Talk
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
