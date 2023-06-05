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
            Home / Industries / Travel, Logistics & Hospitality
          </p>{" "}
          <br />
          <h1 className="text-3xl sm:text-5xl font-bold">
            Travel, Logistics & Hospitality
          </h1>{" "}
          <br />
          <p>
            Unravel the art and science of converting travelers with
            comprehensive travel technology
          </p>
        </div>
      </div>

      <div className="mx-auto p-8 lg:p-24">
        <p className="text-2xl lg:text-5xl py-5 font-medium pr-2"> Overview</p>
        <br />
        <br />
        <div className="text-left lg:px-24 ">
          <p className=" text-xl md:text-2xl lg:text-2xl">
            Our end-to-end travel software solutions, built around the
            industry’s technology needs, help drive business innovation. We
            specialize in providing end-to-end travel management software
            development services to spur Digital Transformation for our clients
            and help them deliver seamless, personalized, and differentiated
            customer experiences. We assist travel businesses in creating new
            engagement models to keep up with the customers’ growing
            expectations in a digitally connected world while balancing costs.
            Our solutions aid travel companies in scaling limitlessly,
            reinventing services, and achieving a customer experience vision,
            from touchpoints to journeys.
          </p>{" "}
        </div>
      </div>

      <section className="mx-auto p-8 lg:p-24 bg-slate-800">
        <h1 className="lg:py-6 text-4xl lg:text-6xl text-slate-200">
          Innovation in Hospitality
        </h1>

        <div className="lg:py-6 text-slate-200 lg:pl-[540px]">
          <ul className="leading-8 ">
            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
                Artificial Intelligence (AI) <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-200">
                Travel brands are embracing Artificial Intelligence (AI) to
                create tailored recommendations for travelers based on their
                previous travel history to drive bookings.
              </p>
              
            </li>
            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
                Augmented Reality (AR) / Virtual Reality (VR) <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-200">
                AR and VR technologies enable travel & hospitality businesses to
                enhance physical environments to encourage more tourists.
              </p>
              
            </li>
            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
                Blockchain <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-200">
                Blockchain’s immutable distributed ledger technology is
                isolating major hospitality industry pain points by removing the
                layers between consumers and sellers.
              </p>
              
            </li>

            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
                Internet of Things (IoT)
                <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-200">
                IoT technology is revolutionizing the hospitality space by
                helping the industry meet compliance requirements and asset
                tracking.
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
