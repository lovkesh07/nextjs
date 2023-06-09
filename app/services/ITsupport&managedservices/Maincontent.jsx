import React from "react";

const Maincontent = () => {
  const people = [
    {
      imageUrl:
        "https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041857.jpg",
    },
    {
      imageUrl:
        "https://media.istockphoto.com/id/1251531453/photo/business-people-meeting-using-calculator-notebook-stock-market-chart-paper-for-analysis-plans.jpg?b=1&s=612x612&w=0&k=20&c=7pYRp6EW8qx_KbiI5Ar43XLWDwmlI2W9q_UqD5YgRGY=",
    },
    {
      imageUrl:
        "https://media.istockphoto.com/id/1267868305/photo/handshake-meeting-of-business-people-and-working-cooperation-in-the-organization.jpg?s=612x612&w=0&k=20&c=VcEjMYR-tzrGm6VRkUgd2FZtJi1WB7xlnB6hCSwsJg4=",
    },
  ];

  return (
    <>
      <div>
        <div className="w-full p-8 lg:px-24 sm:p-12 md:p-20" data-aos="fade-up"> 
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold py-5">
            IT Support and Managed Services
          </h1>

          <p className="">
            At Dotclu, we provide comprehensive IT support and managed services
            to ensure the smooth and efficient operation of your IT
            infrastructure. Our expert team of IT professionals is dedicated to
            resolving technical issues, optimizing system performance, and
            proactively managing your IT environment. With our tailored support
            solutions, you can focus on your core business while we take care of
            your IT needs.
          </p>

          <div>
            <h1 className="text-3xl sm:text-4xl md:text-3xl font-bold py-16" data-aos="fade-up">
            IT Support Services:

            </h1>

            <div className=" py-5 md:px-16 w-full  flex flex-col md:flex-row gap-8">
              <div className=" w-full md:w-[40%] h-full my-auto">
                <img
                  className="aspect-[14/13] w-full lg:h-[80vh] object-cover rounded-2xl"
                  src="https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041857.jpg"
                  alt="" data-aos="fade-up"
                />
              </div>
              <div className=" w-full md:w-[60%]">
                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                  <span className="font-bold text-3xl">1.</span>{" "}
                  <span className="font-bold text-3xl">
                  Help Desk Support:



                  </span>{" "}
                  <br />
                  <p className="py-5 md:text-sm">
                    {" "}
                    Our help desk support services provide prompt assistance to end-users, addressing their IT-related queries, issues, and requests. Our skilled technicians are available to provide remote support, troubleshooting, and resolution of technical problems, ensuring minimal downtime and uninterrupted workflow.

                  </p>
                </div>

                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                  <span className="font-bold text-3xl">2.</span>{" "}
                  <span className="font-bold text-3xl">
                    {" "}
                    On-Site Support:


                  </span>
                  <br />
                  <p className="py-5 md:text-sm">
                  In situations that require hands-on assistance, we offer on-site support to quickly diagnose and resolve complex IT issues. Our technicians have the expertise to handle hardware installations, network troubleshooting, and infrastructure maintenance, providing efficient and reliable on-site support.
                  </p>
                </div>

                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                  <span className="font-bold text-3xl">3.</span>{" "}
                  <span className="font-bold text-3xl">
                  System Maintenance and Updates:


                  </span>
                  <br />
                  <p className="py-5 md:text-sm">
                  We proactively monitor and maintain your IT systems to ensure optimal performance and security. Our team performs regular system checks, updates software and firmware, and applies security patches to mitigate vulnerabilities and keep your infrastructure up to date.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl md:text-3xl font-bold py-16">
            Managed Services:


            </h1>

            <div className=" py-5 md:px-16 w-full flex flex-col md:flex-row-reverse gap-8">
              <div className=" w-full md:w-[40%] h-full my-auto">
                <img
                  className="aspect-[14/13] lg:h-[110vh] w-full object-cover rounded-2xl"
                  src="https://media.istockphoto.com/id/1251531453/photo/business-people-meeting-using-calculator-notebook-stock-market-chart-paper-for-analysis-plans.jpg?b=1&s=612x612&w=0&k=20&c=7pYRp6EW8qx_KbiI5Ar43XLWDwmlI2W9q_UqD5YgRGY="
                  alt="" data-aos="fade-up"
                />
              </div>
              <div className=" w-full md:w-[60%]">

                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                  <span className="font-bold text-3xl">1.</span>{" "}
                  <span className="font-bold text-3xl">
                  Network Management:

                  </span>{" "}
                  <br />
                  <p className="py-5 md:text-sm">
                    {" "}
                    We take care of your network infrastructure, ensuring its stability, security, and performance. Our experts monitor network traffic, manage network devices, configure routers and switches, and implement security measures to safeguard your data and maintain uninterrupted connectivity.
                  </p>
                </div>

                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                  <span className="font-bold text-3xl">2.</span>{" "}
                  <span className="font-bold text-3xl">
                    {" "}
                    Server Management:
                  </span>
                  <br />
                  <p className="py-5 md:text-sm">
                  Our server management services ensure the smooth operation of your servers. We handle server provisioning, configuration, monitoring, and maintenance to optimize performance, ensure data integrity, and minimize downtime. Our proactive approach ensures that potential issues are identified and resolved before they impact your business.
                  </p>
                </div>

                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                  <span className="font-bold text-3xl">3.</span>{" "}
                  <span className="font-bold text-3xl">
                  Data Backup and Recovery:


                  </span>
                  <br />
                  <p className="py-5 md:text-sm">
                  We implement robust data backup and recovery solutions to protect your critical business data. Our experts set up regular backups, verify data integrity, and develop comprehensive disaster recovery plans. In the event of data loss or system failure, we ensure prompt recovery, minimizing data loss and restoring business continuity.

                  </p>
                </div>

                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                  <span className="font-bold text-3xl">4.</span>{" "}
                  <span className="font-bold text-3xl">
                  Security Management:



                  </span>
                  <br />
                  <p className="py-5 md:text-sm">
                  We employ robust security measures to protect your IT infrastructure from threats and attacks. Our managed security services include firewall management, intrusion detection and prevention, vulnerability assessments, and security incident response. We continuously monitor your systems for potential security breaches, ensuring the confidentiality and integrity of your data.

                  </p>
                </div>

                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                  <span className="font-bold text-3xl">5.</span>{" "}
                  <span className="font-bold text-3xl">
                  Vendor Management:


                  </span>
                  <br />
                  <p className="py-5 md:text-sm">
                  We act as a single point of contact for managing your IT vendors and service providers. Our experts handle vendor selection, contract negotiations, and ongoing vendor performance management, ensuring that you receive quality services and optimal value from your technology partners.

                  </p>
                </div>

                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                  <span className="font-bold text-3xl">6.</span>{" "}
                  <span className="font-bold text-3xl">
                  IT Asset Management:


                  </span>
                  <br />
                  <p className="py-5 md:text-sm">
                  We help you manage and optimize your IT assets throughout their lifecycle. Our asset management services include inventory tracking, license management, hardware and software procurement, and retirement planning. By efficiently managing your IT assets, we reduce costs, streamline operations, and ensure compliance.

                  </p>
                </div>


              </div>
            </div>
          </div>

          <p className="" data-aos="fade-up">
            At Dotclu, we understand the critical role that IT plays in your
            business success. Our IT support and managed services provide the
            expertise, reliability, and peace of mind you need to focus on your
            core business while leaving your IT operations in capable hands.
            Contact us today to learn more about how we can support your IT
            infrastructure and drive your business forward.
          </p>
        </div>
      </div>
    </>
  );
};

export default Maincontent;
