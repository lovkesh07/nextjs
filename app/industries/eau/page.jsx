import React from "react";
import Slide1 from "@assets/img1.jpg";
import Image from "next/image";
import Longcard from "./longcard";
import ContactUsForm from "@components/ContactUsForm";
import Midsec from './midsec';

const page = () => {
  return (
    <div className="mt-[80px] bg-gray-300">
      <div className="relative">
        <Image
          src={Slide1}
          alt="badag"
          width={800}
          height={800}
          className=" w-full h-[60vh]"
        />
        <div className=" absolute top-[50%] translate-y-[-50%] text-white px-10 md:px-16">
          <p className="text-lg">
            Home / Industries / Energy and Utilities
          </p>{" "}
          <br />
          <h1 className="text-3xl sm:text-5xl font-bold">
          Energy and Utilities
          </h1>{" "}
          <br />
          <p>Robust Solutions to Fuel Holistic Transformation</p>
        </div>
      </div>

      <div className="mx-auto p-8 lg:p-24">
        <p className="text-2xl lg:text-5xl py-5 font-medium pr-2"> Overview</p>
        <br />
        <br />
        <div className="text-left lg:px-24 ">
            <h1 className="font-medium text-xl md:text-2xl lg:text-2xl">Delivering the Next-Generation Digital Solutions for Sustained and Sustainable Impact</h1>
            <br/>
          <p className=" text-xl md:text-2xl lg:text-2xl">
          Smart utilities, intelligent customer experience management, and innovative energy management–technology is revolutionizing the energy and utility sector in every direction. Fortunately, we have the smarts to help you race ahead.
            <br /> <br />
            From proven methodologies to tested frameworks, our unique integrated service-delivery model is packed with every punch to be one of the industry's most comprehensive and popular offerings. We have perfected it over years of working with the leading utility and energy companies across the globe. As a result, we now have extensive experience building effective solutions across enterprise applications, customer service and billing, asset management, front office operations, account management, and order management. We understand the challenges organizations face while adopting new technologies, which is why Kellton is ready to help you navigate the complexities of digital transformation and be a disruptor.
          </p>{" "}
        </div>
      </div>

<Midsec/>
      <Longcard />
      <ContactUsForm />
    </div>
  );
};

export default page;
