"use client";
import React from "react";
import Slide1 from "@assets/cc2.webp";
import Image from "next/image";
import WrittenContent from "../../WrittenContent";
import Content from "../../Content";
import { useState, useEffect } from "react";
import Piclongcard from "./Piclongcard";
import Maincontent from "./Maincontent";


const AboutUs = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [miancontent, setmaincontent] = useState("");

  useEffect(() => {
    setTitle("Cloud Computing Solutions");

    setContent(
      "Experience the power of cloud technology through our comprehensive range of services. We facilitate seamless migration of your IT infrastructure to the cloud and develop cloud-native applications. Our offerings cover cloud strategy, infrastructure setup, migration, and ongoing management, delivering flexibility, scalability, and cost-efficiency. "
    );

    setmaincontent(
      "Our cloud computing services enable you to leverage the power of cloud technology for enhanced efficiency and flexibility. We help you migrate your IT infrastructure to the cloud, ensuring a smooth transition and optimizing resource allocation. Additionally, we develop cloud-native applications, taking full advantage of cloud capabilities. Our team assists with cloud strategy formulation, cloud infrastructure setup, data migration, and ongoing cloud management to ensure your business benefits from increased scalability, cost-efficiency, and accessibility. "
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
          className=" w-full h-[40vh] lg:h-[60vh] mt-20"
        />
        <div className=" absolute top-[50%] translate-y-[-50%] text-white px-10 md:px-16">
          <h1 className="backdrop-brightness-50 p-8 text-3xl sm:text-5xl lg:text-6xl font-bold" data-aos="fade-up">
            Cloud Computing Solutions
          </h1>
        </div>
      </div>
      <Maincontent/>
      {/* <WrittenContent title={title} content={content} /> */}
      <Piclongcard/>

      {/* <Content title={"more info"} content={miancontent} /> */}
    </div>
  );
};

export default AboutUs;
