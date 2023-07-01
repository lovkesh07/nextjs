"use client";
import React from "react";
import Slide1 from "../../../public/Images/gen-ai.jpg";
import Image from "next/image";
import WrittenContent from "../../WrittenContent";
import Content from "./Content";
import { useEffect, useState } from "react";
import Piclongcard from "./Piclongcard";

const page = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  useEffect(() => {
    setTitle(" AI and Generative AI Solutions");

    setContent(
      "At Dotclu, we specialize in providing cutting-edge IT services in the field of Artificial Intelligence (AI) and Generative AI. Our expert team of AI engineers and data scientists are dedicated to helping businesses harness the power of AI to drive innovation, automate processes, and unlock new opportunities. With our comprehensive range of AI solutions, we empower organizations to stay ahead in today's fast-paced digital landscape."
    );
  }, []);

  return (
    <div className="">
      <div className="relative bg-center ">
        <Image
          src={Slide1}
          alt="badag"
          width={2000}
          height={2000}
          className="  mt-20 w-[100%] h-[40vh] lg:h-[60vh]"
        />
        <div className=" absolute top-[50%] translate-y-[-50%] text-white px-10 md:px-16">
          <h1 className="backdrop-brightness-50 p-8 text-3xl sm:text-5xl lg:text-6xl font-bold" data-aos="fade-up"/>
          <h1
            className="backdrop-brightness-50 p-8 text-3xl sm:text-5xl lg:text-6xl font-bold"
            data-aos="fade-up"
          >
            AI & Generative AI
          </h1>
        </div>
      </div>
      <WrittenContent title={title} content={content} />
      {/* <Piclongcard /> */}
      <Content />
    </div>
  );
};

export default page;
