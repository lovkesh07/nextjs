import React from "react";
import Slide1 from "@assets/img1.jpg";
import Image from "next/image";
import Longcard from "./longcard";
import ContactUsForm from "@components/ContactUsForm";
import Solution from "./solution";

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
            Home / Industries / Retail, E-Commerce & Distribution
          </p>{" "}
          <br />
          <h1 className="text-3xl sm:text-5xl font-bold">
            Custom Retail and e-commerce Software Solutions
          </h1>{" "}
          <br />
          <p>
            Deliver higher levels of customer satisfaction with e-commerce
            solutions built on digital intelligence
          </p>
        </div>
      </div>

      <div className="mx-auto p-8 lg:p-24">
        <p className="text-2xl lg:text-5xl py-5 font-medium pr-2">
          {" "}
          E-Commerce Software Development Company with 15+ Years of Experience.
        </p>
        <br />
        <br />
        <div className="text-left lg:px-24 ">
          <p className=" text-xl md:text-2xl lg:text-2xl">
            Dotclu is a global digital transformation enablement company and a
            leading provider of e-commerce software development services. We
            offer custom e-commerce application development services by dwelling
            upon an outside-in approach and benchmarking to overcome pain
            points. As a dynamic e-commerce website development company, we help
            retail and e-commerce industry players deliver on a diversified set
            of growth strategies. Our roadmap for e-commerce entails
            prototyping, piloting, Proof-of-Concept (PoC), and implementing
            dynamic pricing engines to help achieve sustainable and consistent
            growth along with thoughtful capability building.
          </p>{" "}
        </div>
      </div>

      <section className="mx-auto p-8 lg:p-24 bg-slate-800">
        <h1 className="lg:py-6 text-4xl lg:text-6xl text-slate-200">
          Tech Innovation in Retail
        </h1>

        <div className="lg:py-6 text-slate-200 lg:pl-[540px]">
          <ul className="leading-8 ">
            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
                Augmented Reality (AR) and O2O <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-200">
                Digitally-native e-commerce brands are testing Augmented
                Reality-enabled online-to-offline (O2O) experiences as the line
                between physical and digital commerce blurs.
              </p>
             
            </li>
            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
                Artificial Intelligence (AI) <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-200">
                E-Commerce brands are relying on natively-embedded automated
                fraud protection modules to prevent costly chargebacks.
              </p>
              
            </li>
            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
                Robotic Process Automation (RPA) <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-200">
                Although cost remains a top barrier in RPA implementations, more
                and more e-commerce businesses are expected to embrace
                automation to reduce their workforce.
              </p>
              
            </li>

            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
                Blockchain <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-200">
                Payments, supply chain management, and decentralized
                marketplaces are currently the three main use cases for
                blockchain technology in e-commerce.{" "}
              </p>
              
            </li>
          </ul>
        </div>
      </section>

      <Solution />
      <Longcard />
      <ContactUsForm />
    </div>
  );
};

export default page;
