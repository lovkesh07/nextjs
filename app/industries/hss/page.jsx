import React from "react";
import Slide1 from "@assets/img1.jpg";
import Image from "next/image";
import Longcard from "./longcard";
import ContactUsForm from "@components/ContactUsForm";
import Solution from "./solution";

const page = () => {
  return (
    <div className=" bg-gray-300">
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
            Home / Industries / Healthcare Software Solutions
          </p>{" "}
          <br />
          <h1 className="text-3xl sm:text-5xl font-bold">
            Pharma, Healthcare & Life <br /> Sciences
          </h1>{" "}
          <br />
          <p>
            Leverage intelligent technologies to drive better care experiences
            and improved cost savings
          </p>
        </div>
      </div>

      <div className="mx-auto p-8 lg:p-24">
        <p className="text-2xl lg:text-5xl py-5 font-medium pr-2"> Overview</p>
        <br />
        <br />
        <div className="text-left lg:px-24 ">
          <p className=" text-xl md:text-2xl lg:text-2xl">
            The healthcare industry faces unprecedented challenges in terms of
            fragmented supply chains, poor cost margins, skyrocketing R&D
            expenses, and compliance pressures. The answer lies in leveraging
            the power of new-age digital technologies to automate processes,
            enable data-driven decisions, and expand innovation while ensuring
            minimal risks, redundancies, and costs. Dotclu is a global leader
            in providing healthcare software solutions that empower stakeholders
            across the health and care ecosystem in today’s world of constant
            disruption. We harness the full potential of modern technologies
            such as Mobility, Cloud, Big Data, Artificial Intelligence, Machine
            Learning, IoT, and Wearable, among more, to help organizations
            transform from traditional bricks-and-mortar to a remote,
            hyperconnected service ecosystem and deliver personalized, efficient
            care at the speed of change.
          </p>{" "}
        </div>
      </div>

      <section className="mx-auto p-8 lg:p-24 bg-slate-800">
        <h1 className="lg:py-6 text-4xl lg:text-6xl text-slate-200">
          Our Healthcare Offerings
        </h1>

        <div className="lg:py-6 text-slate-200 lg:pl-[540px]">
          <ul className="leading-8 ">
            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
                The Internet of Healthcare Things (IoHT) <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-200">
                Enable an integrated system of medical systems and applications
                to capture data that helps break silos, increases operational
                visibility, and provides for proactive monitoring.
              </p>
              
            </li>
            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
                Big Data and AI <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-200">
                Detect and analyze patterns across data in real-time to identify
                health conditions, potential treatment methods, and their
                outcomes—and take life-saving decisions at speed.
              </p>
              
            </li>
            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
                Distributed Ledger and Blockchain <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-200">
                Create a secure and standardized record of medical data as a way
                to ensure on-demand access to patient information and drive
                faster, more accurate supply chain analysis.
              </p >
            
            </li>

            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
                ARnatomy <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-200">
                Build and superimpose a 3D model of the patient’s anatomy on the
                patient’s body to perform surgeries with higher levels of
                precision and efficiency.
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
