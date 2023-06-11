"use client"
import React from "react";
import Slide1 from "@assets/img1.jpg";
import Image from "next/image";
import Sponsor from "./Sponsor";
import Sectionextra from "./sectionexra";
import WrittenContent from "../../WrittenContent";

const AboutUs = () => {
    const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  useEffect(() => {
    setTitle("IT Consulting Services");

    setContent(
     " Our team of experienced consultants will thoroughly assess your current IT infrastructure and understand your business objectives. We provide detailed recommendations tailored to your unique needs, suggesting improvements to optimize your technology environment. Our consultants analyze your systems, processes, and workflows to enhance efficiency and productivity, ensuring that your IT aligns with your business goals."
    );
  }, []);
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
          <p className="text-lg">Home/IT Consulting Services</p>
          <h1 className="text-3xl sm:text-5xl font-bold">
            IT Consulting Services
          </h1>
          {/* <p>
            Accelerating business transformation and delivering engaging user
            experiences
          </p> */}
        </div>
      </div>
      <WrittenContent title={title} content={content} />

      {/* <div className="p-16 w-full bg-gradient-to-r from-cyan-700 to-blue-700 flex justify-center items-center py-10">
        <div className="w-fit px-4">
          <button className=" my-5 text-white bg-transparent border border-white  px-5 py-2 rounded-md">
          FUN FACT
          </button>
          <p className="text-white font-thin py-3 text-5xl">
            Computer programming would be the second most linguistically diverse
            country in the world, with over 700 different languages.
          </p>
        </div>
      </div> */}

      {/* <section className="mx-auto p-8 lg:p-24 bg-slate-800">
        <h1 className="lg:py-6 text-4xl lg:text-6xl text-slate-200">
          Explore our services
        </h1>

        <div className="lg:py-6 text-slate-200 lg:pl-[540px]">
          <ul className="leading-8 ">
            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
                Digital Application Development
                <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-200">
                With AR VR Services stamp the learning that lasts long in the
                students’ minds and enable them to submerge themselves into
                simulative, interactive, and immersive learning experiences.
              </p>
            </li>
            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
                Mobile Engineering
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
                Quality Engineering <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-200">
                Free yourself from traditional education practices by building
                high-performant AI-based apps that simplify learning processes
                and enables educators to understand students’ need better.
              </p>
            </li>

            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
                IoT & Wearables Solutions <br />
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
      </section> */}

      {/* <Sponsor/> */}
      {/* <Sectionextra /> */}
    </div>
  );
};

export default AboutUs;
