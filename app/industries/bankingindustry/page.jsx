"use client";
import React from "react";
import Slide1 from "@assets/img1.jpg";
import Image from "next/image";
import Longcard from "./longcard";
import ContactUsForm from "@components/ContactUsForm";
import Solution from "./solution";
import WrittenContent2 from "@app/WrittenContent2";
import { useEffect, useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [head1, sethead1] = useState("");
  const [head2, sethead2] = useState("");
  const [content1, setContent1] = useState("");
  const [content2, setContent2] = useState("");

  useEffect(() => {
    setTitle("IT Support and Managed Services");

    setContent1(
      "   Offer 24/7 IT support for hotels and resorts, ensuring smooth functioning of reservation systems, guest Wi-Fi networks, and point-of-sale terminals, while also providing data backup and recovery services."
    );
     setContent2(
      " Provide managed IT services to schools and universities, including maintenance of computer labs, troubleshooting software and hardware issues, and managing student information systems."
    );
    sethead1(" - Hospitality Industry:");
    sethead2("  - Education Sector:");
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
            Home / Industries / Travel, Logistics & Hospitality
          </p>{" "} */}
          <br />
          <h1 className="text-3xl sm:text-5xl font-bold" data-aos="fade-up">
          IT Support and Managed Services
          </h1>{" "}
          <br />
          {/* <p>
            Unravel the art and science of converting travelers with
            comprehensive travel technology
          </p> */}
        </div>
      </div>
      <WrittenContent2
        title={title}
        content1={content1}
        content2={content2}
        head1={head1}
        head2={head2}
      />
      {/* <Solution /> */}
      <Longcard />
      {/* <ContactUsForm /> */}
    </div>
  );
};

export default page;
