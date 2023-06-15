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
            Home / Industries / Fintech, Banking, Financial Services & Insurance
          </p>{" "}
          <br />
          <h1 className="text-3xl sm:text-5xl font-bold">
            Fintech, Banking, Financial <br /> Services & Insurance
          </h1>{" "}
          <br />
          <p>
            FinTech software solutions designed to unlock agility, cost
            leadership, and operational efficiency
          </p>
        </div>
      </div>

      <div className="mx-auto p-8 lg:p-24">
        <p className="text-2xl lg:text-5xl py-5 font-medium pr-2"> Overview</p>
        <br />
        <br />
        <div className="text-left lg:px-24 ">
          <p className=" text-xl md:text-2xl lg:text-2xl">
            What's our recipe to a happy work life? Well, that’s a secret but
            there are a few ingredients that we swear by. A constant smile on
            the faces of the people, mixed with the warmth of alliance, a
            garnish of many activities- big, or small - be it work and chill
            together by the river, or festivals like Thanksgiving, Holi or
            Christmas celebrated at our second home, Dotclu celebrates its
            people everyday by letting them celebrate a wholesome life at
            Dotclu.As a leading banking and financial software development
            company, we help empower Digital Transformation-driven intelligent
            banking by enabling instant and secure transactions to deliver
            omnichannel experiences across products and services. Our continuous
            innovation enables the banking sector to capitalize on a modernized
            architecture underpinned by disruptive technologies. We are a leader
            in developing cloud-based FinTech software solutions for achieving
            operational excellence. Some of the biggest names in the banking and
            financial services domain rely on our solutions to optimize every
            customer touchpoint across channels. Our lean software development
            methodology allows enterprises to build and evolve applications
            quickly.
          </p>{" "}
        </div>
      </div>

      <section className="mx-auto p-8 lg:p-24 bg-slate-800">
      <h1 className="lg:py-6 text-4xl lg:text-6xl text-slate-200">
      Innovative Banking Solutions
        </h1>
        <div className="lg:py-6 text-slate-200 lg:pl-[540px]">
          <ul className="leading-8 ">
            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
                Cloud <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-200">
                Financial institutions are making a shift towards cloud-based
                Software-as-a-Service (SaaS) applications for non-core business
                processes such as CRM, financial accounting, and KYC
                verification.
              </p>
             
            </li>
            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
                Conversational AI in Banking <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-200">
                Design thinking and FinTech innovation built around data and
                Artificial Intelligence (AI) can help create new models of
                customer engagement.
              </p>
              
            </li>
            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
                Blockchain <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-200">
                Several key attributes such as cryptographic security, built-in
                redundancy, and process integrity make the blockchain technology
                uniquely suited for enabling secure B2B interactions
              </p>
             
            </li>

            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
                Mobility enabled Cardless ATM <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-200">
                Bank are leveraging mobility solutions to break down the
                barriers of access to ATMs by enabling contactless transactions
                without the need of a debit or credit card .{" "}
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
