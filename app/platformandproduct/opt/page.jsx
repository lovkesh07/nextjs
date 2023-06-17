import React from "react";
import Slide1 from "@assets/img1.jpg";
import Image from "next/image";
import Longcard from "@components/Longcard";

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
          {/* <p className="text-lg">Home / Products / Optima</p> <br /> */}
          <h1 className="text-3xl sm:text-5xl font-bold">Optima</h1> <br />
          <p>
            An IoT-enabled digital oilfield analytics platform for effective
            management and monitoring of operations and resources
          </p>
        </div>
      </div>

      <div className="mx-auto p-8 lg:p-24">
        <p className="text-2xl lg:text-5xl py-5 font-medium pr-2">
          {" "}
          Optima is a digital enterprise solution for effective management and
          monitoring of operations and resources.
        </p>
        <br />
        <br />
        <div className="text-left lg:px-24 ">
          <p className=" text-xl md:text-2xl lg:text-2xl">
            It leverages cutting-edge technologies—IoT, Blockchain, Mobility,
            Edge Computing, and Machine Learning—and utilizes real-time data for
            domain-driven decision-making. A single unified integrated platform
            built on a microservices architecture that is configurable,
            customizable, and scalable. This solution can be deployed on Cloud
            or on-premise enabling seamless integration and automation of
            workflow and processes.
            <br />
            <br />
            Our vision through this solution is to help clients gain operational and process efficiency in order to maximize productivity and achieve significant cost savings. Optima allows transparent and accountable workflows with actionable data-driven insights via dashboards and analytics for a broad range of audiences.
          </p>{" "}
        </div>
      </div>

      <Longcard
        a={"24000+"}
        b={"Users per day"}
        c={"35000+"}
        d={"Employee requests processed per month"}
        e={"`<6` "}
        f={"Seconds Website Loading time"}
      />

      <section className="mx-auto p-8 lg:p-24">
        <h1 className="lg:py-6 text-4xl lg:text-6xl text-slate-700">
        Optima Features

        </h1>

        <div className="lg:py-6 text-slate-800 lg:pl-[540px]">
          <ul className="leading-8 ">
            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
              Integrated Visualization <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-800">
                We provide automated solutions that cover essential functions of
                human resources. We have designed tHRive to help you recruit,
                staff, train, and boost employee relations with an edge.
              </p>
            </li>
            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
              Intelligent Alarming
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
              SCADA Real-time Data
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
              Well Operation Lifecycle
                <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-800">
                With Dotclu as your digital transformation partner, we can
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
