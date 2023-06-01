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
    <div className="mt-[80px]">
      <div className="relative">
        <Image
          src={Slide1}
          alt="badag"
          width={800}
          height={800}
          className=" w-full h-[80vh]"
        />
        <div className=" absolute top-[50%] translate-y-[-50%] text-white px-10 md:px-16">
          <p className="text-lg">Home / Products / KLGAME™</p> <br />
          <h1 className="text-3xl sm:text-5xl font-bold">KLGAME™</h1> <br />
          <p>
            An award-winning product by Kellton to understand user behavior &
            deliver rich customer experience
          </p>
        </div>
      </div>

      <div className="mx-auto p-8 lg:p-24">
        <p className="text-2xl lg:text-5xl py-5 font-medium pr-2">
          {" "}
          If the internet has brought people closer to each other, the Internet
          of Things (IoT) has brought people closer to everyday objects.
        </p>
        <br />
        <br />
        <div className="text-left lg:px-24 ">
          <p className=" text-xl md:text-2xl lg:text-2xl">
            IoT allows devices to connect, talk, and share information among
            themselves, from fridges and car stereos to watches to toothbrushes.
            While smart homes, wearable tech, and connected cars are still a
            niche, IoT has exploded in high-footfall industries such as
            airports, retail outlets, museums, conferences, and hospitality
            destinations. At Kellton, we have created a unique solution to help
            you accelerate your IoT endeavors.
            <br />
            <br />
            KLGAME™ (Kellton Location-based Gamification, Analytics, and Rich
            Messaging Engine) is a unique IoT solution by Kellton leveraging the
            power of Bluetooth Low Energy beacon technology for locating users’
            movements and behavior. We can help you deliver rich user
            experiences in several innovative ways across various industries.
            Together, using big data analytics, we can help you better
            understand your users’ behaviors, movements, and demographics so
            that you can take relevant actions and enhance experiences.
          </p>{" "}
        </div>
      </div>

      <Longcard />

      <section className="mx-auto p-8 lg:p-24 ">
        <h1 className="lg:py-6 text-4xl lg:text-6xl text-slate-700">
          KLGAME™ Services
        </h1>

        <div className="lg:py-6 text-slate-800 lg:pl-[540px]">
          <ul className="leading-8 ">
            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
                Flexible, Adaptable & Scalable Solutions <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-800">
                Take a flexible and adaptable approach to create various
                industry-specific solutions with minimal customization. Be it
                for Travel, Hospitality, Retail, Entertainment or Healthcare.
              </p>
            </li>
            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
                Seamless Integrations
                <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-800">
                Leverage a configurable structure that can be customized to your
                business needs. Enable rich notifications (text, audio, and
                video) to your customers’ smartphones or wearable devices.
              </p>
            </li>
            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
                Insight Driven Relevant Actions
                <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-800">
                Understand user location/behavior and take relevant actions
                through reports, minute-to-minute monitoring about user activity
                and demographics using the potential of Analytics and Big Data.
              </p>
            </li>

            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
                Personalized Customer Experience
                <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-800">
                A next-gen solution that delivers a rich, personalized customer
                experience. This unprecedented level of customer engagement
                enhances customer experiences and helps your brand build a new
                trajectory of growth.
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
