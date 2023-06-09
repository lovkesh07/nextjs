import React from "react";
import Slide1 from "@assets/img1.jpg";
import Image from "next/image";
import Longcard from "./ContactLongCard";
import ContactUsForm from "@components/ContactUsForm";
import WrittenContent from "./ContactWrittenPart";
import Acknowledgement from "./Acknowledgement";
import OurOffice from "./OurOffice";
import Endsection from "./Endsection";

const AboutUs = () => {
  return (
    <div className="">
      <div className="relative">
        <Image
          src={Slide1}
          alt="badag"
          width={800}
          height={800}
          className=" mt-20 w-[100%] h-[40vh] lg:h-[60vh] object-fit"
        />
        <div className=" absolute top-[50%] translate-y-[-50%] text-white px-10 md:px-16">
          <h1 className="text-3xl sm:text-5xl font-bold">
            Let’s level up your brand together
          </h1>
          <p className="text-lg py-2">
            Our friendly team would love to hear from you
          </p>
        </div>
      </div>
      <WrittenContent />
      <Acknowledgement />
      <Longcard />
      <ContactUsForm />
      <OurOffice />
      <Endsection />
    </div>
  );
};

export default AboutUs;
