import React from "react";

const Maincontent = () => {
  const people = [
    {
      imageUrl:
        "https://images.pexels.com/photos/288477/pexels-photo-288477.jpeg?cs=srgb&dl=pexels-energepiccom-288477.jpg&fm=jpg",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uc3VsdGluZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    },
    {
      imageUrl: "https://wallpaperaccess.com/full/2655963.jpg",
    },
  ];

  return (
    <>
      <div>
        <div className="w-full p-8 lg:px-24 sm:p-12 md:p-20">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold py-5">
            IT Consulting Solutions
          </h1>

          <p className="">
            At Dotclu, we offer comprehensive IT consulting services to help
            businesses navigate the ever-changing technological landscape and
            achieve their strategic objectives. Our experienced team of IT
            consultants possesses deep industry knowledge and technical
            expertise to provide tailored solutions that address your unique
            business challenges. Whether you need guidance on IT strategy,
            digital transformation, or technology implementation, we are here to
            support you at every step of your IT journey.
          </p>

          <div>
            <h1 className="text-3xl sm:text-4xl md:text-3xl font-bold py-16" data-aos="fade-up">
            IT Strategy and Roadmap:

            </h1>

            <div className=" py-5 md:px-16 w-full  flex flex-col md:flex-row gap-8">
              <div className=" w-full md:w-[40%] h-full my-auto">
                <img
                  className="aspect-[14/13] w-full lg:h-[80vh] object-cover rounded-2xl"
                  src="https://images.pexels.com/photos/288477/pexels-photo-288477.jpeg?cs=srgb&dl=pexels-energepiccom-288477.jpg&fm=jpg"
                  alt="" data-aos="fade-up"
                />
              </div>
              <div className=" w-full md:w-[60%]">
                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                  <span className="font-bold text-3xl">1.</span>{" "}
                  <span className="font-bold text-3xl">
                  IT Assessment and Alignment:

                  </span>{" "}
                  <br />
                  <p className="py-5 md:text-sm">
                    {" "}
                    We conduct a thorough assessment of your existing IT infrastructure, systems, and processes to identify areas for improvement and optimization. Our consultants work closely with your stakeholders to align your IT strategy with your business goals, ensuring that technology investments drive tangible value and competitive advantage.

                  </p>
                </div>

                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                  <span className="font-bold text-3xl">2.</span>{" "}
                  <span className="font-bold text-3xl">
                    {" "}
                    Digital Transformation Strategy:

                  </span>
                  <br />
                  <p className="py-5 md:text-sm">
                  We help you define and execute a comprehensive digital transformation strategy that leverages emerging technologies to enhance customer experiences, streamline operations, and drive innovation. Our consultants assist in identifying digital opportunities, designing transformation roadmaps, and implementing scalable solutions that future-proof your organization.

                  </p>
                </div>

                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                  <span className="font-bold text-3xl">3.</span>{" "}
                  <span className="font-bold text-3xl">
                  IT Governance and Risk Management:

                  </span>
                  <br />
                  <p className="py-5 md:text-sm">
                  We establish robust IT governance frameworks and risk management strategies to ensure compliance, security, and resilience within your IT environment. Our consultants help you define policies, procedures, and controls that align with industry best practices and regulatory requirements, mitigating risks and safeguarding your valuable assets.

                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl md:text-3xl font-bold py-16" data-aos="fade-up">
            Technology Implementation and Optimization:

            </h1>

            <div className=" py-5 md:px-16 w-full flex flex-col md:flex-row-reverse gap-8">
              <div className=" w-full md:w-[40%] h-full my-auto">
                <img
                  className="aspect-[14/13] lg:h-[80vh] w-full object-cover rounded-2xl"
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uc3VsdGluZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                  alt="" data-aos="fade-up"
                />
              </div>
              <div className=" w-full md:w-[60%]">
                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                  <span className="font-bold text-3xl">1.</span>{" "}
                  <span className="font-bold text-3xl">
                  Technology Selection and Vendor Management:

                  </span>{" "}
                  <br />
                  <p className="py-5 md:text-sm">
                    {" "}
                    We guide you in selecting the right technologies and vendors that align with your business needs and objectives. Our consultants have extensive knowledge of industry-leading solutions and can assist you in evaluating options, negotiating contracts, and managing vendor relationships, ensuring successful technology implementations.

                  </p>
                </div>

                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                  <span className="font-bold text-3xl">2.</span>{" "}
                  <span className="font-bold text-3xl">
                    {" "}
                    IT Infrastructure Design and Implementation:
                  </span>
                  <br />
                  <p className="py-5 md:text-sm">
                  We provide end-to-end support in designing and implementing robust IT infrastructure solutions that are scalable, secure, and aligned with industry standards. From network architecture and hardware selection to cloud migration and virtualization, our consultants optimize your infrastructure to meet your current and future business requirements.
                  </p>
                </div>

                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                  <span className="font-bold text-3xl">3.</span>{" "}
                  <span className="font-bold text-3xl">
                  Application Lifecycle Management:

                  </span>
                  <br />
                  <p className="py-5 md:text-sm">
                  We help you streamline your application lifecycle management processes to enhance software development, testing, deployment, and maintenance. Our consultants assist in selecting the right development methodologies, implementing DevOps practices, and adopting agile approaches, enabling faster time to market and improved software quality.

                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl md:text-3xl font-bold py-16" data-aos="fade-up">
            IT Security and Risk Management:

            </h1>
            <div className=" py-5 md:px-16 w-full flex flex-col md:flex-row gap-8">
              <div className=" w-full md:w-[40%] h-full my-auto">
                <img
                  className="aspect-[14/13] w-full lg:h-[60vh] object-cover rounded-2xl"
                  src="https://wallpaperaccess.com/full/2655963.jpg" data-aos="fade-up"
                  alt=""
                />
              </div>
              <div className="  w-full md:w-[60%]">
                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                  <span className="font-bold text-3xl">1.</span>{" "}
                  <span className="font-bold text-3xl">
                  Cybersecurity Strategy and Implementation:

                  </span>{" "}
                  <br />
                  <p className="py-5 md:text-sm">
                    {" "}
                    We develop comprehensive cybersecurity strategies tailored to your organization's risk profile and industry-specific threats. Our consultants help you implement robust security controls, conduct vulnerability assessments, and establish incident response plans, safeguarding your digital assets and protecting against cyber threats.

                  </p>
                </div>

                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                  <span className="font-bold text-3xl">2.</span>{" "}
                  <span className="font-bold text-3xl">
                    {" "}
                    Business Continuity and Disaster Recovery:

                  </span>
                  <br />
                  <p className="py-5 md:text-sm">
                  We assist in developing business continuity and disaster recovery plans to ensure that your critical IT systems and data are protected and can be quickly restored in the event of disruptions. Our consultants help you assess risks, define recovery objectives, and implement resilient solutions, minimizing downtime and ensuring business continuity.
                  </p>
                </div>

                
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl md:text-3xl font-bold py-16" data-aos="fade-up">
            IT Project Management:

            </h1>
            <div>
              <div className=" py-5 md:px-16 w-full flex flex-col md:flex-row-reverse gap-8">
                <div className=" w-full md:w-[40%] h-full my-auto">
                  <img
                    className="aspect-[14/13] w-full lg:h-[60vh] object-cover rounded-2xl"
                    src="https://www.itarian.com/images/itsm/it-project-management-software.png"
                    alt="" data-aos="fade-up"
                  />
                </div>
                <div className=" w-full md:w-[60%]">
                  <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                    <span className="font-bold text-3xl">1.</span>{" "}
                    <span className="font-bold text-3xl">Project Planning and Execution:
</span>{" "}
                    <br />
                    <p className="py-5 md:text-sm">
                      {" "}
                      We provide expert project management services to ensure successful and timely delivery of your IT initiatives. Our consultants employ industry-standard project management methodologies, monitor progress, manage risks, and facilitate effective communication, keeping projects on track and within budget.
                    </p>
                  </div>

                  <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                    <span className="font-bold text-3xl">2.</span>{" "}
                    <span className="font-bold text-3xl">
                      {" "}
                      Change Management and User Adoption:
                    </span>
                    <br />
                    <p className="py-5 md:text-sm">
                    We assist in managing organizational change and promoting user adoption during IT implementations. Our consultants develop change management strategies, conduct training programs, and facilitate communication to ensure a smooth transition and maximize user engagement.
                    </p>
                  </div>

                
                </div>
              </div>
            </div>
          </div>

          <p className="" data-aos="fade-up">
            At Dotclu, we are committed to delivering strategic IT consulting
            services that drive innovation, enhance efficiency, and enable
            business growth. Our consultants partner with you to understand your
            unique needs and craft tailored solutions that align with your
            business goals. Contact us today to embark on a transformative IT
            consulting journey.
          </p>
        </div>
      </div>
    </>
  );
};

export default Maincontent;
