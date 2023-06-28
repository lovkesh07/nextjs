"use client";
import React from "react";
import Slide1 from "@assets/itman4.webp";
import Image from "next/image";
import WrittenContent from "../../WrittenContent";
import Content from "@app/Content";
import { useState, useEffect } from "react";
import Piclongcard from "./Piclongcard";


const page = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [miancontent,setmaincontent] = useState("");

  useEffect(() => {
    setTitle("IT Support and Managed Services:");

    setContent(
      "Count on our dedicated support team for prompt assistance and proactive monitoring of your IT infrastructure. We handle troubleshooting, hardware and software issues, as well as managing backups and updates. Our comprehensive support services are tailored to meet your specific needs."
    );

    setmaincontent("Our dedicated support team is available to provide prompt assistance and proactive monitoring for your IT infrastructure. We offer technical support services, handling hardware and software issues, troubleshooting network problems, and resolving IT-related queries. Additionally, we provide managed services, taking care of routine maintenance tasks, system updates, data backups, and proactive monitoring to detect and address potential issues before they impact your business operations. With our comprehensive support services, you can focus on your core business while relying on us for smooth IT operations.")
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
            IT Support & Managed Services
          </h1>
        </div>
      </div>
      <WrittenContent title={title} content={content} />
      <Piclongcard/>

      <Content title={"more info"} content={miancontent}/>
    </div>
  );
};

export default page;
