"use client";
import React from "react";
import Slide1 from "@assets/img1.jpg";
import Image from "next/image";
// import Sponsor from "./Sponsor";
// import Sectionextra from "./sectionexra";
import WrittenContent from "../../WrittenContent";
import { useState, useEffect } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  useEffect(() => {
    setTitle("IT Support and Managed Services:");

    setContent(
      "Count on our dedicated support team for prompt assistance and proactive monitoring of your IT infrastructure. We handle troubleshooting, hardware and software issues, as well as managing backups and updates. Our comprehensive support services are tailored to meet your specific needs."
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
          <p className="text-lg">
            Home/ Services/ IT Support & Managed Services{" "}
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold">
            IT Support & Managed Services
          </h1>
        </div>
      </div>
      <WrittenContent title={title} content={content} />
    </div>
  );
};

export default page;
