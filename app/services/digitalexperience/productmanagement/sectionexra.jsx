import React from "react";

const sectionexra = () => {
  return (
    <div className="mx-auto p-8 lg:p-24 text-slate-200 bg-slate-800">
      <h1>Why Kellton for Product Management?</h1>
      <h1 className="font-medium text-xl md:text-2xl lg:text-6xl" data-aos="fade-up">
        Just a few reasons why
      </h1>

      <div class="grid grid-cols-1 p-8 lg:p-12 gap-x-1 gap-y-1  md:grid-cols-2 lg:grid-cols-2">
        <div className=" p-8 lg:p-12 shadow-[-10px_-10px_0px_10px_#F7FAFC]
 ">
          <ul className="leading-8 my-4  ">
            <li className=" py-4 lg:my-2 border-b-[1px] border-solid border-slate-200" data-aos="fade-up">
              <h1 className="lg:text-3xl font-medium">
                Proven track record
                <br />
              </h1>
              <p>
                We have a proven track record of delivering high-quality product
                management services to businesses across a wide range of
                industries.
              </p>
            </li>
            <li className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-200" data-aos="fade-up">
              <h1 className="lg:text-3xl font-medium">
                Comprehensive services
                <br />
              </h1>
              <p>
                Our comprehensive product management offerings cover the entire
                product lifecycle, from ideation to end-of-life, ensuring that
                our clients have the support they need at every stage.
              </p>
            </li>
          </ul>
        </div>

        <div className=" p-8 lg:p-12 lg:px-16 shadow-[10px_10px_0px_10px]
 ">
          <div className=" ">
            <ul className="leading-8 my-4  ">
              <li className=" py-4 lg:my-2 border-b-[1px] border-solid border-slate-200" data-aos="fade-up">
                <h1 className="lg:text-3xl font-medium">
                  Tailored approach
                  <br />
                </h1>
                <p>
                  We take a tailored approach to product management, working
                  closely with each client to understand their unique needs and
                  goals.
                </p>
              </li>
              <li className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-200" data-aos="fade-up">
                <h1 className="lg:text-3xl font-medium">
                  Industry expertise <br />
                </h1>
                <p>
                  Our team of product management experts offer in-depth
                  expertise across a wide range of industries, including
                  healthcare, finance, retail, and more.
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
