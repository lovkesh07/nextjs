import React from "react";
import Slide1 from "@assets/img1.jpg";
import Image from "next/image";
import Portfolio from "./Portfolio";
import Sectionextra from "./sectionexra";
import ContactUsForm from "./ContactUsForm";

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
          <p className="text-lg py-2">Home / Life At Kellton</p>
          <h1 className="text-3xl sm:text-5xl font-bold">
            Chart your growth with us
          </h1>
          <button className="p-4 lg:p-4 my-8 lg:my-8 border-2 border-white">
            See Open Positions
          </button>
        </div>
      </div>

      <div className="mx-auto p-8 lg:p-24">
        <p className="text-2xl lg:text-5xl py-5 font-medium pr-2">
          {" "}
          Careers at Dotclu
        </p>
        <br />
        <br />
        <div className="text-left lg:px-24 lg:text-justify">
          <p className=" text-xl md:text-2xl lg:text-2xl">
            Are you passionate about technology and driven by innovation? Join
            the talented team at Dotclu and embark on a rewarding career in the
            dynamic world of IT. We are constantly on the lookout for skilled
            professionals who are eager to make a difference, push boundaries,
            and shape the future of technology.
          </p>{" "}
          <br />
          {/* <p className=" text-xl md:text-2xl lg:text-2xl ">
            At Kellton, the culture of savoring even the micro successes is
            taken as a reminder that big results come from baby steps. These
            accomplishments are cherished and a gateway to many fresh ideas is
            opened with events like “Kellfesta”, "Confluence" , “Winter Refresh”
            and many more.
          </p> */}
        </div>
      </div>

      <Portfolio />

      <div className="mx-auto p-8 lg:p-24">
        <p className="text-xl lg:text-2xl pr-2">
          Professional & personal development{" "}
        </p>
        <p className="text-2xl lg:text-5xl py-4 font-medium pr-2">
          {" "}
          Why Work with Us?{" "}
        </p>
        <br />

        {/* <div className="text-left lg:text-justify">
          <p className=" text-xl md:text-2xl lg:text-xl">
            The training and upskilling practices at Kellton enable our
            employees to be future ready by transforming themselves into the
            next generation of business and technology ready workforce.
            <br /> We encourage our employees to upskill themselves in
            technologies of the future like artificial intelligence and machine
            learning, blockchain, Internet of Things, DevOps and Cloud.
            Kelltonites receive Industry recognized certifications after
            completing the same.{" "}
          </p>{" "}
        </div> */}
      </div>

      <section className="mx-auto p-8 lg:pl-16 ">
        <div className="lg:pl-[540px]">
          <ul className="leading-8 ">
            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-4xl my-6 lg:my-2 font-medium">
                1. Innovation and Collaboration: <br />
              </h1>

              <p className="border-b-[1px] border-solid border-slate-800">
                At Dotclu, we foster a culture of innovation and collaboration.
                We believe that great ideas come from diverse perspectives and
                teamwork. You'll have the opportunity to work with a talented
                and passionate team, exchanging ideas, and collaborating on
                exciting projects that make a real impact.{" "}
              </p>
            </li>
            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-4xl my-6 lg:my-6 font-medium">
               2. Cutting-Edge Technologies: <br />
              </h1>

              <p className="border-b-[1px] border-solid border-slate-800">
                We stay at the forefront of technology advancements and embrace
                the latest tools and frameworks. Working with us means gaining
                exposure to cutting-edge technologies, allowing you to enhance
                your skills, expand your knowledge, and stay ahead in the
                rapidly evolving IT landscape.
              </p>
            </li>
            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-4xl my-6 lg:my-6 font-medium">
               3. Professional Growth: <br />
              </h1>

              <p className="border-b-[1px] border-solid border-slate-800">
                We are committed to your professional growth and development.
                Through mentorship programs, training opportunities, and
                continuous learning initiatives, we provide the support and
                resources you need to enhance your skills, broaden your
                expertise, and advance your career within the organization.{" "}
              </p>
            </li>

            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-4xl my-6 lg:my-6 font-medium">
               4. Challenging Projects: <br />
              </h1>

              <p className="border-b-[1px] border-solid border-slate-800">
                As an IT company, we take on diverse and challenging projects
                across various industries. You'll have the chance to work on
                projects that stimulate your intellect, push your boundaries,
                and enable you to showcase your skills and creativity.{" "}
              </p>
            </li>

            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-4xl my-6 lg:my-6 font-medium">
               5. Collaborative and Inclusive Culture: <br />
              </h1>

              <p className="border-b-[1px] border-solid border-slate-800">
                We believe in fostering a collaborative and inclusive work
                environment where everyone's ideas and contributions are valued.
                We celebrate diversity and promote equal opportunities for all.
                Join us and be a part of a team that values and respects every
                individual's unique perspectives and experiences.{" "}
              </p>
            </li>
          </ul>
        </div>
      </section>

      <Sectionextra />
      <ContactUsForm />
    </div>
  );
};

export default page;
