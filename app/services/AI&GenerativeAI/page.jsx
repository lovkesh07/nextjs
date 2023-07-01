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
    setTitle("AR/VR Services");

    setContent(
      "We offer cutting-edge Augmented Reality and Virtual Reality solutions to enhance user experiences and create immersive digital environments. Our skilled team combines innovative technologies with creative expertise to develop AR/VR applications across various industries, such as gaming, real estate, retail, education, and training. Whether you need AR/VR simulations, virtual tours, interactive 3D experiences, or training simulations, we can design and develop customized AR/VR solutions that captivate users, boost engagement, and deliver impactful experiences. As an IT company, we are committed to delivering exceptional services that address your specific requirements. We help you stay at the forefront of technological innovation, enabling you to achieve your business objectives efficiently and securely."
    );
  }, []);

  return (
    <div className="">
      <div className="relative bg-center ">
        <Image
          src={Slide1}
          alt="badag"
          width={800}
          height={800}
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
      <Piclongcard />
      <Content />
    </div>
  );
};

export default page;
