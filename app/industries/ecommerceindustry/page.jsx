"use client";
import React from "react";
import Slide1 from "../../../public/Images/e-comm.jpg";
import Image from "next/image";
import Longcard from "@components/Longcard";
import ContactUsForm from "@components/ContactUsForm";
import Midsec from "./midsec";
import WrittenContent2 from "@app/WrittenContent2";
import { useEffect, useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [head1, sethead1] = useState("");
  const [head2, sethead2] = useState("");
  const [content1, setContent1] = useState("");
  const [content2, setContent2] = useState("");

  useEffect(() => {
    setTitle(" IT Consulting Services:");

    setContent1(
      "Provide IT consulting for hospitals and clinics to optimize their electronic health record systems, streamline patient data management, and enhance data security and privacy."
    );
    setContent2(
      " Offer consulting services to help retailers implement omnichannel strategies, integrate e-commerce platforms, and leverage customer relationship management (CRM) systems for personalized marketing campaigns."
    );
    sethead1(" - Healthcare Industry: ");
    sethead2("   - Retail Industry:");
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
          <h1 className="backdrop-brightness-50 p-8 text-3xl sm:text-5xl lg:text-6xl font-bold" data-aos="fade-up">
          E-commerce Industry
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
      <Midsec />
      <Longcard
        a={"15+"}
        b={"Years of Experience"}
        c={"100+"}
        d={"Global Clients"}
        e={"1200+"}
        f={"Expert Developers"}
      />
      <ContactUsForm />
    </div>
  );
};

export default page;
