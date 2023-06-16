"use client";
import React from "react";
import Slide1 from "@assets/img1.jpg";
import Image from "next/image";
import Longcard from "./longcard";
import Midsec from "./midsec";
import WrittenContent2 from "@app/WrittenContent2";
import { useEffect,useState } from "react";


const page = () => {
  const [title, setTitle] = useState("");
  const [head1,sethead1] = useState("");
  const [head2,sethead2] = useState("");
  const [content1, setContent1] = useState("");
  const [content2, setContent2] = useState("");

  useEffect(() => {
    setTitle("AR/VR Services");

    setContent1(
      "   Develop virtual reality property tours, allowing potential buyers to explore properties remotely, visualize different design options, and make informed purchase decisions."
      );
      setContent2(
      "Create augmented reality training simulations for medical professionals, offering realistic surgical scenarios and patient interactions to enhance surgical skills and improve patient outcomes."
      );
      sethead1("- Real Estate Industry: ");
      sethead2("- Healthcare Industry: ");
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
          {/* <p className="text-lg">Home / Industries / Ar/Vr Services</p> <br /> */}
          <h1 className="text-3xl sm:text-5xl font-bold">
            Ar/Vr Services
          </h1>{" "}
        </div>
      </div>
      <WrittenContent2 title={title} content1={content1} content2={content2} head1={head1} head2={head2} />
      {/* <Midsec /> */}
      <Longcard />
    </div>
  );
};

export default page;
