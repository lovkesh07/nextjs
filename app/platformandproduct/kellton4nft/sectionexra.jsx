import React from "react";

const sectionexra = () => {
  return (
    <div className="mx-auto p-8 lg:p-24 text-slate-200 bg-slate-800">
      <h1>The Kellton Advantage</h1>
      <h1 className="font-medium text-xl md:text-2xl lg:text-6xl" data-aos="fade-up">
        Just a few reasons why
      </h1>

      <div class="grid grid-cols-1 p-8 lg:p-12 gap-x-1 gap-y-1  md:grid-cols-2 lg:grid-cols-2">
       
        <div className=" p-8 lg:p-12 shadow-[-10px_-10px_0px_10px_#F7FAFC] ">
          <ul className="leading-8 my-4  ">
            <li className=" py-4 lg:my-2 border-b-[1px] border-solid border-slate-200" data-aos="fade-up">
              <h1 className="lg:text-3xl font-medium">
                World Class Tech & Proven Skills <br />
              </h1>
              <p>
                Kellton brings world-class technology and proven skills to help
                enterprises simplify their business operations and deliver
                greater value through new, digital-ﬁrst models.
              </p>
            </li>
            <li className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-200" data-aos="fade-up">
              <h1 className="lg:text-3xl font-medium">
                Collaboration Benefits
                <br />
              </h1>
              <p>
                With Kellton as a digital transformation partner on your side,
                unlock your business’s full potential through digital adoption.
                We offer flexible engagement models and the shortest
                implementation time.
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
                  Cutting Edge Digital Capabilities <br />
                </h1>
                <p>
                  Unlocking the next level of customer engagement via end-to-end
                  digital solutions by unraveling distinctive business needs
                  through a dedicated digital core network.
                </p>
              </li>
              <li className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-200" data-aos="fade-up">
                <h1 className="lg:text-3xl font-medium">
                  Professional Expertise <br />
                </h1>
                <p>
                  A leading team of 1800+ experts working at the bleeding edge
                  of technological disruption that serves 200+ clients globally.
                  We deliver rich business-centric solutions and stay at the
                  forefront of digital innovation.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sectionexra;
