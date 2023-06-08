import React from "react";

const sectionexra = () => {
  return (
    <div className="mx-auto p-8 lg:p-24 text-slate-200 bg-slate-800">
      <h1 className=" py-3">Why Work with Us?</h1>
      <h1
        className="font-medium py-3 text-xl md:text-2xl lg:text-6xl"
        data-aos="fade-up"
      >
        Just a few reasons why
      </h1>

      <div class="grid grid-cols-1 my-5 p-5 sm:p-8 lg:p-12 gap-x-1 gap-y-1  md:grid-cols-2 lg:grid-cols-2">
        <div
          className=" p-5 sm:p-8 lg:p-12 shadow-[-10px_-10px_0px_10px_#F7FAFC]
  "
        >
          <ul className="leading-8 my-4  ">
            <li
              className=" py-4 lg:my-2 border-b-[1px] border-solid border-slate-200"
              data-aos="fade-up"
            >
              <h1 className=" py-2 text-xl md:text-2xl lg:text-3xl font-medium">
                Innovation and Collaboration:
                <br />
              </h1>
              <p className=" text-xs sm:text-base">
                At Dotclu, we foster a culture of innovation and collaboration.
                We believe that great ideas come from diverse perspectives and
                teamwork. You'll have the opportunity to work with a talented
                and passionate team, exchanging ideas, and collaborating on
                exciting projects that make a real impact.
              </p>
            </li>
            <li
              className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-200"
              data-aos="fade-up"
            >
              <h1 className=" py-2 text-xl md:text-2xl lg:text-3xl font-medium">
                Cutting-Edge Technologies:
                <br />
              </h1>
              <p className=" text-xs sm:text-base">
                We stay at the forefront of technology advancements and embrace
                the latest tools and frameworks. Working with us means gaining
                exposure to cutting-edge technologies, allowing you to enhance
                your skills, expand your knowledge, and stay ahead in the
                rapidly evolving IT landscape.
              </p>
            </li>
            <li
                className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-200"
                data-aos="fade-up"
              >
                <h1 className=" py-2 text-xl md:text-2xl lg:text-3xl font-medium">
                  Collaborative and Inclusive Culture: <br />
                </h1>
                <p className=" text-xs sm:text-base">
                  We believe in fostering a collaborative and inclusive work
                  environment where everyone's ideas and contributions are
                  valued. We celebrate diversity and promote equal opportunities
                  for all. Join us and be a part of a team that values and
                  respects every individual's unique perspectives and
                  experiences.
                </p>
              </li>
          </ul>
        </div>

        <div
          className=" p-5 sm:p-8 lg:p-12 lg:px-16 shadow-[10px_10px_0px_10px]
 "
        >
          <div className=" ">
            <ul className="leading-8 my-4  ">
              <li
                className=" py-4 lg:my-2 border-b-[1px] border-solid border-slate-200"
                data-aos="fade-up"
              >
                <h1 className=" py-2 text-xl md:text-2xl lg:text-3xl font-medium">
                  Professional Growth: <br />
                </h1>
                <p className=" text-xs sm:text-base">
                  We are committed to your professional growth and development.
                  Through mentorship programs, training opportunities, and
                  continuous learning initiatives, we provide the support and
                  resources you need to enhance your skills, broaden your
                  expertise, and advance your career within the organization.
                </p>
              </li>
              <li
                className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-200"
                data-aos="fade-up"
              >
                <h1 className=" py-2 text-xl md:text-2xl lg:text-3xl font-medium">
                  Challenging Projects: <br />
                </h1>
                <p className=" text-xs sm:text-base">
                  As an IT company, we take on diverse and challenging projects
                  across various industries. You'll have the chance to work on
                  projects that stimulate your intellect, push your boundaries,
                  and enable you to showcase your skills and creativity.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" w-[85%] sm:w-1/2 my-5 py-5 mx-auto flex flex-col sm:flex-row gap-3 rounded-md items-center justify-center">
        <button
          className=" p-3 border-solid border-white border-[1px] text-white rounded-md"
          data-aos="flip-up"
        >
          Let's Work Together
        </button>
      </div>
    </div>
  );
};

export default sectionexra;
