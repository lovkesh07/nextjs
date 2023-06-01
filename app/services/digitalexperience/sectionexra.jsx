import React from "react";

const sectionexra = () => {
  return (
    <div className="mx-auto p-8 lg:p-24 text-slate-200 bg-slate-800">
      <h1>Why Kellton for Digital Experience?</h1>
      <h1 className="font-medium text-xl md:text-2xl lg:text-6xl">
        Just a few reasons why
      </h1>

      <div class="grid grid-cols-1 p-8 lg:p-12 gap-x-1 gap-y-1  md:grid-cols-2 lg:grid-cols-2">
        <div className=" p-2 lg:p-12 border-4 border-rose-900  ">
          <ul className="leading-8 my-4  ">
            <li className=" py-4 lg:my-2 border-b-[1px] border-solid border-slate-200">
              <h1 className="lg:text-3xl font-medium">
                Leader in application services <br />
              </h1>
              <p>
                Our expertise in end-to-end digital application design and
                development allows us to create robust, scalable software
                solutions to tight timescales.
              </p>
            </li>
            <li className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-200">
              <h1 className="lg:text-3xl font-medium">
                Handpicked experts
                <br />
              </h1>
              <p>
                Our global team of experienced, certified consultants and
                developers is well-versed with the latest tools, technologies,
                and platforms.
              </p>
            </li>
          </ul>
        </div>

        <div className=" p-2 lg:p-12 border-4  border-rose-900 ">
          <div className=" ">
            <ul className="leading-8 my-4  ">
              <li className=" py-4 lg:my-2 border-b-[1px] border-solid border-slate-200">
                <h1 className="lg:text-3xl font-medium">
                  Customer-centric approach <br />
                </h1>
                <p>
                  We design and build solutions that meet your unique business
                  needs to help your organization thrive.
                </p>
              </li>
              <li className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-200">
                <h1 className="lg:text-3xl font-medium">
                  IP ownership <br />
                </h1>
                <p>
                  We ensure strict compliance with industry protocols for
                  complete confidentiality, helping safeguard intellectual
                  property.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" w-[85%] sm:w-1/2 my-5 py-5 mx-auto flex flex-col sm:flex-row gap-3 rounded-md items-center justify-center">
        <button className=" p-3 border-solid border-white border-[1px] text-white rounded-md">
          Let's Work Together
        </button>
      </div>
    </div>
  );
};

export default sectionexra;
