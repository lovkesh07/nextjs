"use client"
import React from "react";
import Slide1 from "@assets/img1.jpg";
import Image from "next/image";
import Longcard from "./longcard";
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
          className=" w-full h-[80vh]"
        />
        <div className=" absolute top-[50%] translate-y-[-50%] text-white px-10 md:px-16">
          <p className="text-lg">
            Home / Industries / Custom Software Development
          </p>{" "}
          <br />
          <h1 className="text-3xl sm:text-5xl font-bold">
            Custom Software Development
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
      <Longcard />
    </div>
  );
};

export default page;
