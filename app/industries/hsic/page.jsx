import React from "react";
import Slide1 from "@assets/img1.jpg";
import Image from "next/image";
import Longcard from "./longcard";
import ContactUsForm from "@components/ContactUsForm";

const page = () => {
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
            Home / Industries / HiTech, SaaS, ISV & Communications
          </p>{" "}
          <br />
          <h1 className="text-3xl sm:text-5xl font-bold">
            HiTech, SaaS, ISV & <br />
            Communications
          </h1>{" "}
          <br />
          <p>ISVs - adapting to change ASAP</p>
        </div>
      </div>

      <div className="mx-auto p-8 lg:p-24">
        <p className="text-2xl lg:text-5xl py-5 font-medium pr-2"> Overview</p>
        <br />
        <br />
        <div className="text-left lg:px-24 ">
          <p className=" text-xl md:text-2xl lg:text-2xl">
            In business, things change quickly. One day, it is all about the
            desktop, then suddenly it is all about mobile. No sooner do you get
            your head around mobile; it is all about wearable tech. Add the
            issues around ever-changing consumer trends, evolving business
            models, and unplanned investments to that, and it appears it’s
            impossible to plan for anything. Unless you have a partner that
            specializes in helping businesses quickly identify shifts and adapt
            accordingly.
            <br /> <br />
            Adjusting your software development processes rapidly and regularly
            can be one of the biggest business challenges. We help companies
            enhance their value chain, improve flexibility and implement agile
            and responsive product development processes. You can call on our
            dedicated design, UX, and technical experts to deliver shorter
            software release cycles and creates POCs rapidly as and when
            required. If you want to change with the times and not constantly
            catch up with them, we’re ready to help you right now.
          </p>{" "}
        </div>
      </div>

      <Longcard />
      <ContactUsForm />
    </div>
  );
};

export default page;
