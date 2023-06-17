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
          {/* <p className="text-lg">Home / Products / Dotclu4Commerce</p> <br /> */}
          <h1 className="text-3xl sm:text-5xl font-bold">
            Dotclu4Commerce
          </h1>{" "}
          <br />
          <p>
            A uniquely scalable e-commerce solution for targeted customer
            experiences and easy partner/seller network management
          </p>
        </div>
      </div>

      <div className="mx-auto p-8 lg:p-24">
        <p className="text-2xl lg:text-5xl py-5 font-medium pr-2">
          {" "}
          Stand out online with personalized customer experiences.
        </p>
        <br />
        <br />
        <div className="text-left lg:px-24 ">
          <p className=" text-xl md:text-2xl lg:text-2xl">
            In an extremely competitive e-commerce market, online businesses
            must capture their audiences' interest and turn them into paying
            customers. It is imperative for e-commerce businesses to understand
            their customer better and leverage cutting-edge technologies to
            deliver seamless, customized experiences.
            <br />
            <br />
            At Dotclu, we capitalize on Commerce Framework to deliver a
            portfolio of custom e-commerce solutions that help brands stand out
            and put their operations on autopilot. Our roadmap for e-commerce
            entails prototyping, piloting, Proof-of-Concept (PoC), and
            implementing dynamic pricing engines to help achieve sustainable and
            consistent growth along with thoughtful capability building. We rely
            on next-gen digital capabilities such as AI, Blockchain, RPA
            (Robotic Process Automation), AR (Augmented Reality), and Data
            Analytics for developing automated and algorithm-driven platforms.
          </p>{" "}
        </div>
      </div>

      <Longcard
        a={"90%"}
        b={"Increase in customer delight achieved"}
        c={"1.5 MM+"}
        d={"Transactions/year (approximately)"}
        e={"2X"}
        f={"Improved Conversion Rate"}
      />

      <section className="mx-auto p-8 lg:p-24 ">
        <h1 className="lg:py-6 text-4xl lg:text-6xl text-slate-700">
          Dotclu4Commerce Services
        </h1>

        <div className="lg:py-6 text-slate-800 lg:pl-[540px]">
          <ul className="leading-8 ">
            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
                Customer Satisfaction <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-800">
                We design and deliver customized, high-quality, and
                user-friendly E-commerce platforms which ensure hassle-free
                online shopping experiences driving better customer experiences.
              </p>
            </li>
            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
                Next-Gen Solutions
                <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-800">
                Dotclu can assist you to move towards a futuristic solution
                through next-gen digital capabilities such as AI, RPA, AR-VR and
                Blockchain for data driven analytics and insights providing
                personalized services.
              </p>
            </li>
            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
                Seamless Integration <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-800">
                At Dotclu, our experts seamlessly integrate end-to-end
                solutions that allow you and your customers to access the
                platform anywhere, any time optimizing your business strategy.
              </p>
            </li>

            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
                Security and Scalability
                <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-800">
                We design, develop, and deploy an intelligent solution tailored
                for web, iOS, and Android platforms with scalable and
                user-friendly features enabling safe, fast, and intuitive
                business transactions.
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
