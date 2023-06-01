import React from "react";
import Slide1 from "@assets/img1.jpg";
import Image from "next/image";
import Longcard from "./longcard";
import ContactUsForm from "@components/ContactUsForm";
import Solution from "./solution";

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
          <p className="text-lg">
            Home / Industries / Non-Profit, Government & Education
          </p>{" "}
          <br />
          <h1 className="text-3xl sm:text-5xl font-bold">
            Non-Profit, Government & <br /> Education
          </h1>{" "}
          <br />
          <p>
            Develop a strategic roadmap to enable the education of the future
          </p>
        </div>
      </div>

      <div className="mx-auto p-8 lg:p-24">
        <p className="text-2xl lg:text-5xl py-5 font-medium pr-2"> Overview</p>
        <br />
        <br />
        <div className="text-left lg:px-24 ">
          <p className=" text-xl md:text-2xl lg:text-2xl">
            Disruptive technology forces compel educational services providers
            worldwide to rethink their education delivery models. Amidst the
            constantly increasing demand for self-paced, omnichannel learning,
            educators are yearning to build a Center for Educational
            Effectiveness (CEE) to successfully implement a blended learning
            approach aided by advanced digital learning tools and enable a
            technology-based approach to instruction, engagement, and
            interaction. At Kellton, we help derive bespoke eLearning and
            educational software solutions by curating digital tools and
            collaborating with industry experts to create a campus of the future
            to generate endless learning opportunities.
          </p>{" "}
        </div>
      </div>

      <section className="mx-auto p-8 lg:p-24 bg-slate-800">
        <h1 className="lg:py-6 text-4xl lg:text-6xl text-slate-200">
          Innovation in Education
        </h1>

        <div className="lg:py-6 text-slate-200 lg:pl-[540px]">
          <ul className="leading-8 ">
            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
                AR/VR <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-200">
                With AR VR Services stamp the learning that lasts long in the
                students’ minds and enable them to submerge themselves into
                simulative, interactive, and immersive learning experiences.
              </p>
             
            </li>
            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
                Intelligent Tutoring
                <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-200">
                Take full advantage of an automated, computer-based learning
                system that reduces the manual intervention of teachers and
                allows students to follow a customized learning approach.
              </p>
             
            </li>
            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
                AI-Based Education Apps <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-200">
                Free yourself from traditional education practices by building
                high-performant AI-based apps that simplify learning processes
                and enables educators to understand students’ need better.
              </p>
              
            </li>

            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
                Education & eLearning Chatbots <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-200">
                Build advanced conversational solutions that deliver human-like
                experiences to students, reduce ambiguity, and help learners
                pursue result-oriented conversations that lead to complete
                satisfaction.
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
