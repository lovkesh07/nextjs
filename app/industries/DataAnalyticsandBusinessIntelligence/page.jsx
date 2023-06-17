"use client"
import React from "react";
import Slide1 from "@assets/img1.jpg";
import Image from "next/image";
import Longcard from "@components/Longcard";

import ContactUsForm from "@components/ContactUsForm";
import Solution from "./solution";
import WrittenContent2 from "@app/WrittenContent2";
import { useEffect,useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [head1, sethead1] = useState("");
  const [head2, sethead2] = useState("");
  const [content1, setContent1] = useState("");
  const [content2, setContent2] = useState("");

  useEffect(() => {
    setTitle("Data Analytics and Business Intelligence");

    setContent1(
      "Analyze customer data to identify patterns and preferences, enabling targeted marketing campaigns, personalized advertisements, and data-driven decision-making for improved customer acquisition and retention."
    );
    setContent2(
      "Implement data analytics solutions to monitor machine performance, predict equipment failures, and optimize production processes, resulting in reduced downtime and increased productivity."
    );
    sethead1("- Marketing and Advertising Industry: ");
    sethead2("- Manufacturing Industry: ");
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
          {/* <p className="text-lg">
            Home / Industries / Data Analytics and Business Intelligence
          </p>{" "} */}
          <br />
          <h1 className="text-3xl sm:text-5xl font-bold">
            Data Analytics and Business Intelligence
          </h1>{" "}
          <br />
        </div>
      </div>
      <WrittenContent2
        title={title}
        content1={content1}
        content2={content2}
        head1={head1}
        head2={head2}
      />
        <Longcard
        a={"15+"}
        b={"Years of Experience"}
        c={"100+"}
        d={"Global Clients"}
        e={"1200+"}
        f={"Expert Developers"}
      />
    </div>
  );
};

export default page;
