"use client";
import React from "react";
import Slide1 from "@assets/ittrain2.jpg";
import Image from "next/image";
import WrittenContent from "../../WrittenContent";
import Content from "@app/Content";
import { useState, useEffect } from "react";
import Piclongcard from "./Piclongcard";


const AboutUs = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [miancontent,setmaincontent] = useState("");

  useEffect(() => {
    setTitle("IT Training and Education");

    setContent(
      "Stay ahead in the dynamic technology landscape with our training programs and workshops. We empower individuals and organizations with knowledge and skills in software development, cybersecurity, cloud computing, and data analytics. Our comprehensive training offerings ensure you stay up-to-date with the latest trends."
    );

    setmaincontent("Staying up-to-date with the latest technology trends and acquiring relevant skills is essential in the fast-paced IT landscape. Our training and education programs provide comprehensive learning opportunities for individuals and organizations. We offer workshops, seminars, and customized training sessions in areas such as software development, cybersecurity, cloud computing, and data analytics. Our experienced trainers deliver hands-on training, equipping you and your team with the knowledge and skills needed to excel in the ever-evolving IT industry.")
  }, []);
  return (
    <div className="">
      <div className="relative">
        <Image
          src={Slide1}
          alt="badag"
          width={800}
          height={800}
          className=" w-full h-[40vh] lg:h-[60vh] mt-20 object-fit"
        />
        <div className=" absolute top-[50%] translate-y-[-50%] text-white px-10 md:px-16">
          <h1 className="backdrop-brightness-50 p-8 text-3xl sm:text-5xl lg:text-6xl font-bold" data-aos="fade-up">
            IT Training and Education
          </h1>
        </div>
      </div>
      <WrittenContent title={title} content={content} />
      <Piclongcard/>

      <Content title={"more info"} content={miancontent}/>

    </div>
  );
};

export default AboutUs;
