import React from "react";

const Maincontent = () => {
  const people = [
    {
      imageUrl: "https://wallpaperaccess.com/full/4391662.jpg",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?w=2000",
    },
    {
      imageUrl:
        "https://media.istockphoto.com/id/1401460590/photo/businessman-working-on-laptop-with-document-management-icon.webp?b=1&s=170667a&w=0&k=20&c=4H439mT0eE_ltwbhV6MNmDNnkyzIVM-D1DQ3qvbI6eE=",
    },
  ];

  return (
    <>
      <div>
        <div className="w-full p-8 lg:px-24 sm:p-12 md:p-20">
          {/* <p className="text-2xl sm:text-4xl md:text-5xl py-5 ">
          Certainly! Here are some use cases of IT services in the Banking &
          Insurance industry:
        </p> */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold py-5">
            Software Development Solutions
          </h1>

          <p className="">
            At Dotclu, we offer comprehensive IT services in the realm of
            software development. Our expert team of software engineers and
            developers is dedicated to delivering high-quality, innovative, and
            scalable software solutions that drive business growth and success.
            With our proven expertise and cutting-edge technologies, we help
            businesses across industries transform their ideas into robust
            software applications.
          </p>

          {/* <div className=" my-16 mt-4 lg:mt-6">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
                {people.map((person) => (
                  <li key={person.name} data-aos="fade-up">
                    <img
                      className="aspect-[14/13] w-full h-[60vh] rounded-2xl object-cover"
                      src={person.imageUrl}
                      alt=""
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div> */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-3xl font-bold py-16">
              Custom Software Development:
            </h1>

            <div className=" py-5 md:px-16 w-full flex flex-col md:flex-row gap-8">
              <div className=" w-full md:w-[40%] h-full my-auto">
                <img
                  className="aspect-[14/13] w-full object-cover rounded-2xl"
                  src="https://wallpaperaccess.com/full/4391662.jpg"
                  alt=""
                />
              </div>
              <div className="w-full md:w-[60%]">
                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10">
                  <span className="font-bold text-3xl">1.</span>{" "}
                  <span className="font-bold text-3xl">
                    Requirements Analysis and Solution Design:
                  </span>{" "}
                  <br />
                  <p className="py-5 md:text-sm">
                    {" "}
                    We work closely with you to understand your unique business
                    requirements, objectives, and challenges. Our team conducts
                    a thorough analysis to define the scope, architecture, and
                    specifications of your software solution. We leverage our
                    expertise to design a tailored software solution that aligns
                    with your goals and delivers maximum value.
                  </p>
                </div>

                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10">
                  <span className="font-bold text-3xl">2.</span>{" "}
                  <span className="font-bold text-3xl">
                    {" "}
                    Agile Development Methodologies:
                  </span>
                  <br />
                  <p className="py-5 md:text-sm">
                    We follow agile development methodologies, such as Scrum or
                    Kanban, to ensure efficient collaboration, flexibility, and
                    iterative development. Our team delivers incremental
                    releases, enabling you to provide feedback and make
                    necessary adjustments throughout the development process.
                  </p>
                </div>

                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10">
                  <span className="font-bold text-3xl">3.</span>{" "}
                  <span className="font-bold text-3xl">
                    Full-Stack Development:
                  </span>
                  <br />
                  <p className="py-5 md:text-sm">
                    Our skilled developers are proficient in full-stack
                    development, encompassing both frontend and backend
                    technologies. Whether it's building intuitive user
                    interfaces or developing robust server-side applications, we
                    have the expertise to create end-to-end software solutions
                    that meet your requirements.
                  </p>
                </div>

                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10">
                  <span className="font-bold text-3xl">4.</span>{" "}
                  <span className="font-bold text-3xl">
                    Mobile Application Development:
                  </span>
                  <br />
                  <p className="py-5 md:text-sm">
                    We specialize in mobile application development for iOS and
                    Android platforms. From concept to deployment, we create
                    engaging and feature-rich mobile applications that deliver
                    seamless user experiences. Our mobile development solutions
                    include native app development, cross-platform development,
                    and hybrid app development.
                  </p>
                </div>

                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10">
                  <span className="font-bold text-3xl">5.</span>{" "}
                  <span className="font-bold text-3xl">
                    Web Application Development:
                  </span>
                  <br />
                  <p className="py-5 md:text-sm">
                    Our web application development expertise covers a wide
                    range of technologies and frameworks. We develop scalable
                    and secure web applications that cater to diverse business
                    needs, including e-commerce platforms, customer portals,
                    enterprise systems, and more. Our solutions are tailored to
                    provide a user-friendly interface and optimize performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-3xl font-bold py-16">
              Software Integration and APIs:
            </h1>

            <div className=" py-5 md:px-16 w-full flex flex-col md:flex-row-reverse gap-8">
              <div className=" w-full md:w-[40%] h-full my-auto">
                <img
                  className="aspect-[14/13] w-full object-cover rounded-2xl"
                  src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?w=2000"
                  alt=""
                />
              </div>
              <div className="w-full md:w-[60%]">
                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10">
                  <span className="font-bold text-3xl">1.</span>{" "}
                  <span className="font-bold text-3xl">
                    System Integration:
                  </span>{" "}
                  <br />
                  <p className="py-5 md:text-sm">
                    {" "}
                    We seamlessly integrate your software solutions with
                    existing systems and third-party applications, ensuring
                    smooth data flow and interoperability. Our integration
                    solutions enhance efficiency, streamline processes, and
                    improve productivity across your organization.
                  </p>
                </div>

                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10">
                  <span className="font-bold text-3xl">2.</span>{" "}
                  <span className="font-bold text-3xl">
                    {" "}
                    API Development and Integration:
                  </span>
                  <br />
                  <p className="py-5 md:text-sm">
                    We design and develop robust APIs (Application Programming
                    Interfaces) that enable seamless integration and data
                    exchange between different software systems. Our API
                    solutions empower businesses to leverage the power of
                    integration, enabling new functionalities, expanding reach,
                    and fostering collaboration.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-3xl font-bold py-16">
              Quality Assurance and Testing:
            </h1>

            <div className=" py-5 md:px-16 w-full flex flex-col md:flex-row gap-8">
              <div className=" w-full md:w-[40%] h-full my-auto">
                <img
                  className="aspect-[14/13] w-full object-cover rounded-2xl"
                  src="https://media.istockphoto.com/id/1401460590/photo/businessman-working-on-laptop-with-document-management-icon.webp?b=1&s=170667a&w=0&k=20&c=4H439mT0eE_ltwbhV6MNmDNnkyzIVM-D1DQ3qvbI6eE="
                  alt=""
                />
              </div>
              <div className="w-full md:w-[60%]">
                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10">
                  <span className="font-bold text-3xl">1.</span>{" "}
                  <span className="font-bold text-3xl">
                    Quality Assurance and Testing:
                  </span>{" "}
                  <br />
                  <p className="py-5 md:text-sm">
                    {" "}
                    Our dedicated QA team conducts comprehensive testing to
                    ensure the reliability, performance, and security of your
                    software solution. We employ a variety of testing
                    methodologies, including functional testing, performance
                    testing, security testing, and user acceptance testing, to
                    deliver a flawless user experience.
                  </p>
                </div>

                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10">
                  <span className="font-bold text-3xl">2.</span>{" "}
                  <span className="font-bold text-3xl">
                    {" "}
                    Continuous Integration and Deployment:
                  </span>
                  <br />
                  <p className="py-5 md:text-sm">
                    We implement continuous integration and deployment practices
                    to automate the build, testing, and deployment of software
                    applications. This ensures rapid and error-free releases,
                    enabling you to deliver updates and new features to your
                    users seamlessly.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-3xl font-bold py-16">
              Maintenance and Support:
            </h1>

            <div className=" py-5 md:px-16 w-full flex flex-col md:flex-row-reverse gap-8">
              <div className=" w-full md:w-[40%] h-full my-auto">
                <img
                  className="aspect-[14/13] w-full object-cover rounded-2xl"
                  src="https://wallpaperaccess.com/full/4391662.jpg"
                  alt=""
                />
              </div>
              <div className="w-full md:w-[60%]">
                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10">
                  <span className="font-bold text-3xl">1.</span>{" "}
                  <span className="font-bold text-3xl">
                    Software Maintenance and Upgrades:
                  </span>{" "}
                  <br />
                  <p className="py-5 md:text-sm">
                    {" "}
                    Our team provides ongoing maintenance and support services
                    to ensure the optimal performance and longevity of your
                    software application. We offer timely bug fixes, software
                    updates, and enhancements, keeping your software solution up
                    to date and aligned with evolving business needs.
                  </p>
                </div>

                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10">
                  <span className="font-bold text-3xl">2.</span>{" "}
                  <span className="font-bold text-3xl">
                    {" "}
                    Helpdesk and Technical Support:
                  </span>
                  <br />
                  <p className="py-5 md:text-sm">
                    We provide comprehensive helpdesk and technical support
                    services to address any issues or queries related to your
                    software solution. Our team is available to assist you and
                    ensure smooth operation, minimizing any downtime and
                    maximizing user satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="py-5">
            At Dotclu, we are committed to delivering software solutions that
            empower businesses, drive innovation, and fuel growth. With our
            extensive expertise in software development, we transform your ideas
            into robust applications that revolutionize your business processes
            and elevate your competitive edge. Contact us today to embark on
            your software development journey.
          </p>
        </div>
      </div>
    </>
  );
};

export default Maincontent;
