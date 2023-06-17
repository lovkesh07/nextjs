import React from "react";
import Slide1 from "@assets/img1.jpg";
import Image from "next/image";
import Longcard from "@components/Longcard";

import ContactUsForm from "@components/ContactUsForm";
import Cards from './AboutCard';
import Sectionextra from "./sectionexra";

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
          {/* <p className="text-lg">Home / Products / Dotclu4Health</p> <br /> */}
          <h1 className="text-3xl sm:text-5xl font-bold">
            Dotclu4Health
          </h1>{" "}
          <br />
          <p>
            Deploy leading-edge digital solutions that transform fitness
            equipment and gyms into smart and connected ecosystems
          </p>
        </div>
      </div>

      <div className="mx-auto p-8 lg:p-24">
        <p className="text-2xl lg:text-5xl py-5 font-medium pr-2">
          {" "}
          Have you ever imagined yourself as an owner of something truly
          exceptional, quite valuable, something creative, and digital?
        </p>
        <br />
        <br />
        <div className="text-left lg:px-24 ">
          <p className=" text-xl md:text-2xl lg:text-2xl">
            Rapid digitalization of the fitness industry is moving consumers
            from one-size-fits-all regimens to intelligent equipment and gyms
            that provide hyper-personalized insights. From button-based consoles
            to touch based customized consoles to smart wearables,digitized gym
            kiosks, a new wave of connected fitness experiences is on the
            ascent. <br />
            <br />
            By leveraging K4 Connected Fitness Solution, one can engineer
            innovation in fitness with the right tools and go to market faster
            as well. We offer a comprehensive suite of integrated solutions for
            fitness solution providers across automation, manufacturing,
            production, supply chain, logistics, cloud, AI/VA, software, remote
            diagnostics, edge analytics, and more. We help you build a smart
            fitness ecosystem that goes beyond conventional fitness routines and
            delivers intuitive user experiences tailored to individual goals.
          </p>{" "}
        </div>
      </div>

      <Longcard
        a={"15+"}
        b={"Years of Experience"}
        c={"100+"}
        d={"Global Clients"}
        e={"1200+"}
        f={"Expert Developers"}
      />

      <section className="mx-auto p-8 lg:p-24 ">
        <h1 className="lg:py-6 text-4xl lg:text-6xl text-slate-700">
        Dotclu4Health™ - Connecting your brand to your customers
        </h1>

        <div className="lg:py-6 text-slate-800 lg:pl-[540px]">
          <ul className="leading-8 ">
            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
              Product Design & Manufacturing) <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-800">
              Leverage end-to-end product design and manufacturing of tablet consoles for fitness bikes, rowers, treadmills, and more. Turn to our smart mirror solution for strength training, wellness, gym kiosks, etc., powered by K4Connected Platform and Android-based software for high-definition performance.
              </p>
            </li>
            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
              Automation Testing Framework<br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-800">
              Employ automation testing framework services with a coverage of 50% - 60% of manual test cases for Android-based devices, hosted in every stage of development and production.
              </p>
            </li>
            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
              Smart Device Provisioning (Lock Mode) <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-800">
              Develop Lock mode apps customized to Android with Dotclu Smart SDK and runtime cloud provisioning capabilities for quick spin-up of an array of workloads on demand.
              </p>
            </li>

            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
              Gamification
                <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-800">
              Take a step beyond touch-screen consoles for gamified fitness with Dotclu solutions across immersive experiences, digital twin, metaverse, and AR/VR/MR on fitness applications for virtual headsets and glasses.
              </p>
            </li>
          </ul>
        </div>
      </section>


      <Cards/>

      

     <Sectionextra/>
      <ContactUsForm />
    </div>
  );
};

export default page;
