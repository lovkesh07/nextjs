import React from "react";

const sectionexra = () => {
  return (
    <div className="mx-auto p-8 lg:p-24 text-slate-200 bg-slate-800">
      <h1 data-aos="fade-up" >Why Kellton for Product Design?</h1>
      <h1 className="font-medium text-xl md:text-2xl lg:text-6xl" data-aos="fade-up">
        Just a few reasons why
      </h1>

      <div class="grid grid-cols-1 p-8 lg:p-12 gap-x-1 gap-y-1  md:grid-cols-2 lg:grid-cols-2">
        <div className=" p-2 lg:p-12 border-4 border-rose-900  " data-aos="fade-up">
          <ul className="leading-8 my-4  ">
            <li className=" py-4 lg:my-2 border-b-[1px] border-solid border-slate-200" data-aos="fade-up">
              <h1 className="lg:text-3xl font-medium">
                Collaborative process
                <br />
              </h1>
              <p>
                We work closely with clients throughout the product design
                process so that results align with key business needs.
              </p>
            </li>
            <li className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-200" data-aos="fade-up">
              <h1 className="lg:text-3xl font-medium">
                Handpicked experts
                <br />
              </h1>
              <p>
                We provide an experienced team of cutting-edge design
                specialists to take your project from concept to completion.
              </p>
            </li>
          </ul>
        </div>

        <div className=" p-2 lg:p-12 border-4  border-rose-900 " data-aos="fade-up">
          <div className=" ">
            <ul className="leading-8 my-4  ">
              <li className=" py-4 lg:my-2 border-b-[1px] border-solid border-slate-200" data-aos="fade-up">
                <h1 className="lg:text-3xl font-medium">
                  Customer-centric approach <br />
                </h1>
                <p>
                  We take a strongly user-centric approach to create designs
                  with a sustainable market edge.
                </p>
              </li>
              <li className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-200" data-aos="fade-up">
                <h1 className="lg:text-3xl font-medium">
                  Continuous innovation DNA <br />
                </h1>
                <p>
                  We’re future focused, and are constantly innovating to create
                  next-generation digital products.
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
