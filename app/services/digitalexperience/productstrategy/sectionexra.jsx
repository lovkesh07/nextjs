import React from "react";

const sectionexra = () => {
  return (
    <div className="mx-auto p-8 lg:p-24 text-slate-200 bg-slate-800">
      <h1>Why Kellton for Product Strategy & Consulting?</h1>
      <h1 className="font-medium text-xl md:text-2xl lg:text-6xl" data-aos="fade-up">
        Just a few reasons why
      </h1>

      <div class="grid grid-cols-1 p-8 lg:p-12 gap-x-1 gap-y-1  md:grid-cols-2 lg:grid-cols-2">
        <div className=" p-2 lg:p-12 border-4 border-rose-900  ">
          <ul className="leading-8 my-4  ">
            <li className=" py-4 lg:my-2 border-b-[1px] border-solid border-slate-200" data-aos="fade-up">
              <h1 className="lg:text-3xl font-medium">
                Extensive experience
                <br />
              </h1>
              <p>
                Our team of experts offer cutting-edge experiences in product
                strategy and consulting, having worked with a wide range of
                clients across industries.
              </p>
            </li>
            <li className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-200" data-aos="fade-up">
              <h1 className="lg:text-3xl font-medium">
                Tailored approach
                <br />
              </h1>
              <p>
                We take a tailored approach to product strategy, working closely
                with each client to understand their unique needs and goals.
              </p>
            </li>
          </ul>
        </div>

        <div className=" p-2 lg:p-12 border-4  border-rose-900 ">
          <div className=" ">
            <ul className="leading-8 my-4  ">
              <li className=" py-4 lg:my-2 border-b-[1px] border-solid border-slate-200" data-aos="fade-up">
                <h1 className="lg:text-3xl font-medium">
                  Proven methodologies <br />
                </h1>
                <p>
                  We leverage industry best practices and methodologies to help
                  businesses develop and execute winning product strategies.
                </p>
              </li>
              <li className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-200" data-aos="fade-up">
                <h1 className="lg:text-3xl font-medium">
                  Collaborative process <br />
                </h1>
                <p>
                  We take a collaborative approach, working closely with our
                  clients throughout the entire product strategy and consulting
                  process.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" w-[85%] sm:w-1/2 my-5 py-5 mx-auto flex flex-col sm:flex-row gap-3 rounded-md items-center justify-center">
        <button className=" p-3 border-solid border-white border-[1px] text-white rounded-md" data-aos="flip-up">
          Let's Work Together
        </button>
      </div>
    </div>
  );
};

export default sectionexra;
