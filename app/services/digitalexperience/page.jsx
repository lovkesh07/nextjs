import React from "react";
import WrittenContent from "./WrittenContent";
import Slide1 from "@assets/img1.jpg";
import Brands from "./brands";
import Image from "next/image";
import Card from "./Card";
import Blogs from "./Blogs";

const page = () => {
  return (
    <div className="mt-[80px] bg-gray-300">
      <div className="relative">
        <Image
          src={Slide1}
          alt="badag"
          width={800}
          height={800}
          className=" w-full h-[80vh]"
        />
        <div className=" absolute top-[50%] translate-y-[-50%] text-white px-10 md:px-16">
          <p className="text-lg">Home / Digital Experience</p> <br />
          <h1 className="text-3xl sm:text-5xl font-bold">
            Digital Experience
          </h1>{" "}
          <br />
          <p>Building transformational, customer-centric digital experiences</p>
        </div>
      </div>
      <WrittenContent />
      <Card />
      <section className="mx-auto p-8 lg:p-24 bg-slate-800">
        <h1 className="lg:py-6 text-4xl lg:text-6xl text-slate-200">
          Explore Our Services
        </h1>
        <div className="lg:py-6 text-slate-200 lg:pl-[540px]">
          <ul className="leading-8 ">
            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
                Product Strategy & Consulting
                <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-200">
                We help you develop and execute winning product strategies to
                stand head and shoulders above the rest of the market.
              </p>
            </li>
            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
                Product Design
                <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-200">
                Our designs are treated with a balance of insight, innovation,
                and human-centered approaches to help you deliver impactful
                customer experiences.
              </p>
            </li>
            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
                Product Management
                <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-200">
                We offer a range of product management services to help drive
                long-term digital success, including market research, customer
                feedback analysis and product strategy development.
              </p>
            </li>
          </ul>
        </div>
        <div className=" w-[85%] sm:w-1/2 my-5 py-5 mx-auto bg-gray-300 flex flex-col sm:flex-row gap-3 rounded-md items-center justify-center">
          <p className="py-3">Got a tricky challenge</p>
          <button className=" p-3 bg-white rounded-md">Let's Talk</button>
        </div>
      </section>
      <Brands />
      <section className="mx-auto p-8 lg:p-24 bg-slate-800">
        <p className="text-lg text-white">Why Kellton for Digital Experience?</p>
        <h1 className="lg:py-6 text-4xl lg:text-6xl text-slate-200">
          Just a few reasons why
        </h1>
        <div className="lg:py-6 text-slate-200 lg:pl-[540px]">
          <ul className="leading-8 ">
            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
                Leader in application services
                <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-200">
                Our expertise in end-to-end digital application design and
                development allows us to create robust, scalable software
                solutions to tight timescales.
              </p>
            </li>
            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
                Handpicked experts
                <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-200">
                Our global team of experienced, certified consultants and
                developers is well-versed with the latest tools, technologies,
                and platforms.
              </p>
            </li>
            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
                Customer-centric approach
                <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-200">
                We design and build solutions that meet your unique business
                needs to help your organization thrive.
              </p>
            </li>
          </ul>
        </div>
        <div className=" w-[85%] sm:w-1/2 my-5 py-5 mx-auto flex flex-col sm:flex-row gap-3 rounded-md items-center justify-center">
          <button className=" p-3 border-solid border-white border-[1px] text-white rounded-md">Let's Work Together</button>
        </div>
      </section>
      <Blogs/>
    </div>
  );
};

export default page;
