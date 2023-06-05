import React from "react";
import Slide1 from "@assets/img1.jpg";
import Image from "next/image";
import Longcard from "./longcard";
import ContactUsForm from "@components/ContactUsForm";
import Cards from "./AboutCard";
import Sectionextra from "./sectionexra";
// import Extrasection2 from './extrasection2';

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
          <p className="text-lg">Home / Products / tHRive</p> <br />
          <h1 className="text-3xl sm:text-5xl font-bold">tHRive</h1> <br />
          <p>
            An HR solution for today’s fast-transforming, talent-driven business
            landscape
          </p>
        </div>
      </div>

      <div className="mx-auto p-8 lg:p-24">
        <p className="text-2xl lg:text-5xl py-5 font-medium pr-2">
          {" "}
          Human capital is always at the forefront of any organization’s growth
          initiative.
        </p>
        <br />
        <br />
        <div className="text-left lg:px-24 ">
          <p className=" text-xl md:text-2xl lg:text-2xl">
            When people are proactively managed and engaged with an
            organization’s vision, they demonstrate a genuine willingness to
            innovate. This, in turn, accelerates value creation and drives
            growth for those enterprises. However, as enterprises go into
            talent-hiring overdrive, the stress of managing it all also grows.
            As a result, organizations continually explore ways to boost their
            HR systems. More than anything, they are looking to expand their
            human capital potential without increasing their stress levels.
            <br />
            <br />
            tHRive is Kellton's unique human capital management solution. It is
            an innovative and progressive platform to facilitate human capital
            management and ensure optimal performance at scale. tHRive drives
            speed and visibility into the management of your employee workflows,
            resulting in real-time staff tracking, performance governance, and
            seamless operations on the go.
          </p>{" "}
        </div>
      </div>

      <Longcard />

      <section className="mx-auto p-8 lg:p-24">
        <h1 className="lg:py-6 text-4xl lg:text-6xl text-slate-700">
          tHRive Features
        </h1>

        <div className="lg:py-6 text-slate-800 lg:pl-[540px]">
          <ul className="leading-8 ">
            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
                Agile HCM Experience <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-800">
                We provide automated solutions that cover essential functions of
                human resources. We have designed tHRive to help you recruit,
                staff, train, and boost employee relations with an edge.
              </p>
            </li>
            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
                Secure and Scalable
                <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-800">
                Employee management deals with a considerable amount of
                sensitive data. We help you keep your data in an encrypted
                virtual database and prevent unauthorized access, thereby
                ensuring security.
              </p>
            </li>
            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
                Automated Employee Onboarding
                <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-800">
                We help you establish the HRMS as a productive asset for
                seamless and faster onboarding, shifting the workforce towards
                more growth-oriented priorities.
              </p>
            </li>

            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
                Employee Experience
                <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-800">
                With Kellton as your digital transformation partner, we can
                ensure a consistent and qualitative employee onboarding process
                for every new hire, and without any bias through our HRMS
                solution.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <Cards />

      <Sectionextra />
      <ContactUsForm />
      {/* <Extrasection2/> */}
    </div>
  );
};

export default page;
