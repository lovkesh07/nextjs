import React from "react";

const Maincontent = () => {

  const people = [
    {
      imageUrl:
        "https://www.smartmechatronics.de/fileadmin/_processed_/0/f/csm_Cybersecurity_Engineering_1200x785_577f41624f.jpg",
    },
    {
      imageUrl:
        "https://media.istockphoto.com/id/1448403442/photo/digital-background-security-systems-and-data-protection-person-biometrics-identity-by.webp?b=1&s=170667a&w=0&k=20&c=9jZKGTo-0uf1UrV7judNhmPB0NUIm2wM9Pa9zTt3ElY=",
    },
    {
      imageUrl:
        "https://img.freepik.com/premium-photo/hacking-attack-internet-security-concept-with-faceless-hackers-hoody-using-laptop-touching-virtual-screen-with-identification-button-blue-background_670147-208.jpg",
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
            IT Training and Education Solutions
          </h1>

          <p className="">
            At Dotclu, we offer comprehensive IT training and education services
            to empower individuals and organizations with the knowledge and
            skills required to excel in today's technology-driven world. Our
            experienced instructors and industry experts deliver engaging and
            practical training programs that cover a wide range of IT
            disciplines. Whether you are looking to enhance your technical
            expertise or upskill your workforce, our training solutions are
            designed to meet your specific learning needs.
          </p>

          <div className=" my-16 mt-4 lg:mt-6">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
                {people.map((person) => (
                  <li key={person.name} data-aos="fade-up">
                    <img
                      className="aspect-[14/13] w-full h-[60vh] rounded-2xl object-cover  "
                      src={person.imageUrl}
                      alt=""
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-3xl font-bold py-16">
            Customized Training Programs:
          </h1>

          <ul className=" py-5 md:px-16 lg:px-24 w-full sm:w-[90%]">
            <li className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10">
              <span className="font-bold text-3xl">1.</span>{" "}
              <span className="font-bold text-3xl">Technology Training:</span>{" "}
              <br />
              <p className="py-5">
                {" "}
                We provide training programs that cover a wide array of
                technologies, including programming languages, database
                management systems, cloud computing, cybersecurity, and more.
                Our courses are tailored to different skill levels, from
                beginners to advanced professionals, ensuring that participants
                gain the knowledge they need to excel in their respective
                fields.
              </p>
            </li>

            <li className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10">
              <span className="font-bold text-3xl">2.</span>{" "}
              <span className="font-bold text-3xl">
                Certification Preparation:
              </span>
              <br />
              <p className="py-5">
                We offer training programs designed to prepare individuals for
                various IT certifications, such as Cisco, Microsoft, CompTIA,
                and AWS. Our expert instructors provide in-depth knowledge,
                hands-on practice, and valuable exam preparation techniques,
                helping participants increase their chances of success in
                certification exams.
              </p>
            </li>

            <li className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10">
              <span className="font-bold text-3xl">3.</span>{" "}
              <span className="font-bold text-3xl">
                Industry-Specific Training:
              </span>
              <br />
              <p className="py-5">
                We understand that different industries have unique IT
                requirements. Therefore, we offer industry-specific training
                programs that focus on technology applications and best
                practices relevant to specific sectors, such as healthcare,
                finance, manufacturing, and retail. These programs equip
                participants with the specialized skills needed to excel in
                their industry of choice.
              </p>
            </li>
          </ul>

          <h1 className="text-3xl sm:text-4xl md:text-3xl font-bold py-16">
            Flexible Training Formats:
          </h1>

          <ul className=" py-5 md:px-16 lg:px-24 w-full sm:w-[90%]">
            <li className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10">
              <span className="font-bold text-3xl">1.</span>{" "}
              <span className="font-bold text-3xl">Classroom Training:</span>{" "}
              <br />
              <p className="py-5">
                {" "}
                We offer traditional classroom-based training programs that
                provide a conducive learning environment for participants. Our
                state-of-the-art training facilities are equipped with the
                necessary tools and resources to facilitate interactive learning
                experiences, foster collaboration, and encourage hands-on
                practice.
              </p>
            </li>

            <li className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10">
              <span className="font-bold text-3xl">2.</span>{" "}
              <span className="font-bold text-3xl">
                {" "}
                Virtual Instructor-Led Training (VILT):
              </span>
              <br />
              <p className="py-5">
                For those who prefer the flexibility of remote learning, we
                provide virtual instructor-led training programs. Participants
                can join live training sessions from anywhere, interact with
                instructors in real-time, and engage with fellow learners
                through virtual collaboration tools. VILT offers the convenience
                of online learning while maintaining the benefits of
                instructor-led instruction.
              </p>
            </li>

            <li className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10">
              <span className="font-bold text-3xl">3.</span>{" "}
              <span className="font-bold text-3xl"> On-Demand Learning:</span>
              <br />
              <p className="py-5">
                Our on-demand learning solutions allow participants to access
                training materials and modules at their own pace and
                convenience. With a library of pre-recorded video tutorials,
                interactive exercises, and self-assessment quizzes, learners can
                acquire new skills and knowledge on their own schedule, making
                it ideal for busy professionals seeking flexibility.
              </p>
            </li>
          </ul>

          <h1 className="text-3xl sm:text-4xl md:text-3xl font-bold py-16">
            Corporate Training and Upskilling:
          </h1>

          <ul className=" py-5 md:px-16 lg:px-24 w-full sm:w-[90%]">
            <li className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10">
              <span className="font-bold text-3xl">1.</span>{" "}
              <span className="font-bold text-3xl">
                Employee Skill Development:
              </span>{" "}
              <br />
              <p className="py-5">
                {" "}
                We partner with organizations to provide tailored training
                programs to upskill their workforce and meet their specific
                business needs. Our customized corporate training programs cover
                a wide range of topics, including project management, data
                analytics, cybersecurity, agile methodologies, and more,
                ensuring that employees have the skills required to drive
                organizational success.
              </p>
            </li>

            <li className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10">
              <span className="font-bold text-3xl">2.</span>{" "}
              <span className="font-bold text-3xl">
                {" "}
                Technology Adoption Training:
              </span>
              <br />
              <p className="py-5">
                When implementing new technologies or software within your
                organization, we offer training programs that facilitate smooth
                technology adoption. Our instructors provide hands-on training,
                step-by-step guidance, and best practices to ensure that
                employees can leverage the full potential of new technologies
                and maximize their productivity.
              </p>
            </li>

            <li className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10">
              <span className="font-bold text-3xl">3.</span>{" "}
              <span className="font-bold text-3xl">
                {" "}
                Leadership and Professional Development:
              </span>
              <br />
              <p className="py-5">
                We offer training programs that focus on developing leadership
                and professional skills within the IT industry. From effective
                communication and team management to strategic planning and
                decision-making, our leadership development programs empower IT
                professionals to become effective leaders and drive
                organizational growth.
              </p>
            </li>
          </ul>

          <p className="">
            At Dotclu, we are committed to delivering high-quality IT training
            and education solutions that empower individuals and organizations
            to thrive in the digital age. Our experienced instructors, flexible
            training formats, and customized programs ensure that you receive
            the most effective and relevant training for your specific needs.
            Contact us today to embark on your IT learning journey.
          </p>
        </div>
      </div>
    </>
  );
};

export default Maincontent;
