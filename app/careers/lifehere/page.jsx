import React from "react";
import Slide1 from "@assets/img1.jpg";
import Image from "next/image";
import Portfolio from "./Portfolio";


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
          <p className="text-lg py-2">Home / Life At Kellton</p>
          <h1 className="text-3xl sm:text-5xl font-bold">
            Chart your growth with us
          </h1>
          <button className="p-4 lg:p-4 my-8 lg:my-8 border-2 border-white">
            See Open Positions
          </button>
        </div>
      </div>

      <div className="mx-auto p-8 lg:p-24">
        <p className="text-2xl lg:text-5xl py-5 font-medium pr-2">
          {" "}
          Celebrating people everyday, by creating instances of a wholesome life
          at Kellton
        </p>
        <br />
        <br />
        <div className="text-left lg:px-24 lg:text-justify">
          <p className=" text-xl md:text-2xl lg:text-2xl">
            What's our recipe to a happy work life? Well, that’s a secret but
            there are a few ingredients that we swear by. A constant smile on
            the faces of the people, mixed with the warmth of alliance, a
            garnish of many activities- big, or small - be it work and chill
            together by the river, or festivals like Thanksgiving, Holi or
            Christmas celebrated at our second home, Kellton celebrates its
            people everyday by letting them celebrate a wholesome life at
            Kellton.
          </p>{" "}
          <br />
          <p className=" text-xl md:text-2xl lg:text-2xl ">
            At Kellton, the culture of savoring even the micro successes is
            taken as a reminder that big results come from baby steps. These
            accomplishments are cherished and a gateway to many fresh ideas is
            opened with events like “Kellfesta”, "Confluence" , “Winter Refresh”
            and many more.
          </p>
        </div>
      </div>

      <Portfolio />

      <div className="mx-auto p-8 lg:p-24">
        <p className="text-xl lg:text-2xl pr-2">
          Professional & personal development{" "}
        </p>
        <p className="text-2xl lg:text-5xl py-4 font-medium pr-2">
          {" "}
          We invest in our people’s goals and growth{" "}
        </p>
        <br />

        <div className="text-left lg:text-justify">
          <p className=" text-xl md:text-2xl lg:text-xl">
            The training and upskilling practices at Kellton enable our
            employees to be future ready by transforming themselves into the
            next generation of business and technology ready workforce.
            <br /> We encourage our employees to upskill themselves in
            technologies of the future like artificial intelligence and machine
            learning, blockchain, Internet of Things, DevOps and Cloud.
            Kelltonites receive Industry recognized certifications after
            completing the same.{" "}
          </p>{" "}
        </div>
      </div>

      <section className="mx-auto p-8 lg:p-24 bg-slate-300">

        <div className="lg:py-6  bg-slate-300 lg:pl-[540px]">
          <ul className="leading-8 ">
            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-4xl my-6 lg:my-6 font-medium">
                Initial Learning Program (ILP) <br />
              </h1>
                
                <p >
                  We conduct an Initial Learning Program of stipulated months
                  for all entry level graduates honing their technical as well
                  as soft skills. Employees are provided with flexibility to
                  progress across technical, domain and management tracks.{" "}
                </p>
                <span>---------------------------------------------------------------------------------------------------------------</span>
            </li>
            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-4xl my-6 lg:my-6 font-medium">
                Continuous Learning Program (CLP) <br />
              </h1>
                
                <p>
                  We support our employees by facilitating a plethora of
                  training and certification programs like AWS Certified Cloud
                  Practitioner, CCSP, OCAJP and JBPM training to name a few.
                  <br />
                  We provide Continuous Learning & Personalized Career Growth
                  options for all our employees as well as a structured training
                  program for offshore employees.
                </p>
                <span>---------------------------------------------------------------------------------------------------------------</span>
            </li>
            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-4xl my-6 lg:my-6 font-medium">
                Graduate and Student Training Programs <br />
              </h1>
                
                <p>
                  Kellton provides a host of opportunities to young graduates
                  and students to work with contemporary technologies and
                  building solutions that positively impacts the world around
                  us. We offer full time opportunities, internships, academic
                  projects and mentorship programs.
                  <br />
                  You will be constantly challenged and exposed to diverse
                  technologies and people while you transform ideas into
                  tangible business results, opening wonderful arenas of growth
                  and development.{" "}
                </p>
                <span>---------------------------------------------------------------------------------------------------------------</span>
            </li>
          </ul>

        </div>
      </section>
    </div>
  );
};

export default page;
