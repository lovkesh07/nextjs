"use client"
import React from "react";
import Slide1 from "../../../public/Images/invest.webp";
import Image from "next/image";
import Longcard from "@components/Longcard";

import ContactUsForm from "@components/ContactUsForm";
import WrittenContent2 from "@app/WrittenContent2";
import { useEffect,useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [head1, sethead1] = useState("");
  const [head2, sethead2] = useState("");
  const [content1, setContent1] = useState("");
  const [content2, setContent2] = useState("");

  useEffect(() => {
    setTitle("Custom Software Development");

    setContent1(
      "Develop custom software solutions to automate production processes, track inventory, and optimize supply chain management for improved operational efficiency."
    );
    setContent2(
      "Create secure and scalable software applications for banks and financial institutions to facilitate online banking, payments, and fraud detection."
    );
    sethead1("- Manufacturing Industry: ");
    sethead2("- Financial Industry: ");
  }, []);
  return (
    <div className="">
      <div className="relative">
        <Image
          src={Slide1}
          alt="badag"
          width={800}
          height={800}
          className=" w-full h-[60vh]"
        />
        <div className=" absolute top-[50%] translate-y-[-50%] text-white px-10 md:px-16">
          {/* <p className="text-lg">
            Home / Industries / Custom Software Development
          </p>{" "} */}
          <br />
          <h1 className="backdrop-brightness-50 p-8 text-3xl sm:text-5xl lg:text-6xl font-bold" data-aos="fade-up">
          Financial Industry
          </h1>{" "}
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
