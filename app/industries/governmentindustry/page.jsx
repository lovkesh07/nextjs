"use client";
import React from "react";
import Slide1 from "../../../public/Images/government.png";
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
    setTitle("IT Training and Education");

    setContent1(
      "    Deliver customized training programs to technology companies, focusing on the latest programming languages, frameworks, and software development methodologies to enhance their developers' skills."
    );
    setContent2(
      "   Conduct workshops and training sessions for non-profit organizations, educating them on cybersecurity best practices, data protection, and compliance to ensure the security of donor information."
    );
    sethead1("  - Technology Companies:");
    sethead2("   - Non-Profit Organizations:");
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
            Home / Industries / Retail, E-Commerce & Distribution
          </p>{" "} */}
          <br />
          <h1 className="backdrop-brightness-50 p-8 text-3xl sm:text-5xl lg:text-6xl font-bold" data-aos="fade-up">
          Government Sector
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
      {/* <Solution /> */}
      <Longcard />
      {/* <ContactUsForm /> */}
    </div>
  );
};

export default page;
