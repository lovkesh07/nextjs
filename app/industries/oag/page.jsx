import React from "react";
import Slide1 from "@assets/img1.jpg";
import Image from "next/image";
import Longcard from "./longcard";
import ContactUsForm from "@components/ContactUsForm";
import Midsec from "./midsec";

const page = () => {
  return (
    <div className="mt-[80px] ">
      <div className="relative">
        <Image
          src={Slide1}
          alt="badag"
          width={800}
          height={800}
          className=" w-full h-[80vh]"
        />
        <div className=" absolute top-[50%] translate-y-[-50%] text-white px-10 md:px-16">
          <p className="text-lg">Home / Industries / Oil and Gas</p> <br />
          <h1 className="text-3xl sm:text-5xl font-bold">
            Oil and Gas Transformation Solutions
          </h1>{" "}
          <br />
          <p>Applying SAP Capabilities that Cover the Landscape</p>
        </div>
      </div>

      <div className="mx-auto p-8 lg:p-24">
        <p className="text-2xl lg:text-5xl py-5 font-medium pr-2"> Overview</p>
        <br />
        <br />
        <div className="text-left lg:px-24 ">
          {/* <h1 className="font-medium text-xl md:text-2xl lg:text-2xl">Delivering the Next-Generation Digital Solutions for Sustained and Sustainable Impact</h1> */}
          {/* <br/> */}
          <p className=" text-xl md:text-2xl lg:text-2xl">
            While the oil and gas industry touches every corner of commerce, it
            has some unique challenges. Such is its size that many assets often
            become forgotten, under-utilized, or ill-maintained. Then, as
            individual companies merge, it can be difficult to integrate their
            operations into your own, not to mention the challenges faced by
            operational transparency, well production, process visibility, cash
            flow prediction, and risk management. Thankfully, there is a
            solution used by over 98% of the Fortune 500 oil and gas companies.
            <br /> <br />
            SAP is the dominant, industry-wide Enterprise Resource Planning
            (ERP) software. Kellton4ERP for Oil and Gas, backed by SAP’s
            choicest resources and technology methodologies, is our unique
            approach that helps O&G companies overcome industry-specific
            challenges and achieve growth and efficiency to manage a successful
            transformation. Our experts have crafted a proven 4-step process
            that simplifies and speeds up implementation in as little as 12
            weeks. That’s just three months to make your business much easier
            and better!
          </p>{" "}
        </div>
      </div>

      <Midsec />
      <Longcard />
      <ContactUsForm />
    </div>
  );
};

export default page;
