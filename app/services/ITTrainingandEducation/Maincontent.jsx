import React from "react";

const Maincontent = () => {
  const people = [
    {
      imageUrl:
        "https://jobgrin.co.in/blog/wp-content/uploads/2020/07/E-learning-Websites-945x945.jpg",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/boy-studying-university-library_23-2148844678.jpg",
    },
    {
      imageUrl:
        "https://png.pngtree.com/thumb_back/fh260/background/20220523/pngtree-online-education-video-tutorial-study-image_1392046.jpg",
    },
  ];

  return (
    <>
      <div>
        <div className="w-full p-8 lg:px-24 sm:p-12 md:p-20" data-aos="fade-up">
     
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


          <div>
            <h1 className="text-3xl sm:text-4xl md:text-3xl font-bold py-16" data-aos="fade-up">
            Customized Training Programs:


            </h1>

            <div className=" py-5 md:px-16 w-full  flex flex-col md:flex-row gap-8">
              <div className=" w-full md:w-[40%] h-full my-auto">
                <img
                  className="aspect-[14/13] w-full lg:h-[80vh] object-cover rounded-2xl"
                  src="https://jobgrin.co.in/blog/wp-content/uploads/2020/07/E-learning-Websites-945x945.jpg"
                  alt="" data-aos="fade-up"
                />
              </div>
              <div className=" w-full md:w-[60%]">
                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                  <span className="font-bold text-3xl">1.</span>{" "}
                  <span className="font-bold text-3xl">
                  Technology Training:


                  </span>{" "}
                  <br />
                  <p className="py-5 md:text-sm">
                    {" "}
                    We provide training programs that cover a wide array of technologies, including programming languages, database management systems, cloud computing, cybersecurity, and more. Our courses are tailored to different skill levels, from beginners to advanced professionals, ensuring that participants gain the knowledge they need to excel in their respective fields.

                  </p>
                </div>

                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                  <span className="font-bold text-3xl">2.</span>{" "}
                  <span className="font-bold text-3xl">
                    {" "}
                    Certification Preparation:


                  </span>
                  <br />
                  <p className="py-5 md:text-sm">
                  We offer training programs designed to prepare individuals for various IT certifications, such as Cisco, Microsoft, CompTIA, and AWS. Our expert instructors provide in-depth knowledge, hands-on practice, and valuable exam preparation techniques, helping participants increase their chances of success in certification exams.
                  </p>
                </div>

                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                  <span className="font-bold text-3xl">3.</span>{" "}
                  <span className="font-bold text-3xl">
                  Industry-Specific Training:


                  </span>
                  <br />
                  <p className="py-5 md:text-sm">
                  We understand that different industries have unique IT requirements. Therefore, we offer industry-specific training programs that focus on technology applications and best practices relevant to specific sectors, such as healthcare, finance, manufacturing, and retail. These programs equip participants with the specialized skills needed to excel in their industry of choice.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl md:text-3xl font-bold py-16" data-aos="fade-up">
            Flexible Training Formats:

            </h1>

            <div className=" py-5 md:px-16 w-full flex flex-col md:flex-row-reverse gap-8">
              <div className=" w-full md:w-[40%] h-full my-auto">
                <img
                  className="aspect-[14/13] lg:h-[80vh] w-full object-cover rounded-2xl"
                  src="https://png.pngtree.com/thumb_back/fh260/background/20220523/pngtree-online-education-video-tutorial-study-image_1392046.jpg"
                  alt="" data-aos="fade-up"
                />
              </div>
              <div className=" w-full md:w-[60%]">
                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                  <span className="font-bold text-3xl">1.</span>{" "}
                  <span className="font-bold text-3xl">
                  Classroom Training:


                  </span>{" "}
                  <br />
                  <p className="py-5 md:text-sm">
                    {" "}
                    We offer traditional classroom-based training programs that provide a conducive learning environment for participants. Our state-of-the-art training facilities are equipped with the necessary tools and resources to facilitate interactive learning experiences, foster collaboration, and encourage hands-on practice.
                  </p>
                </div>

                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                  <span className="font-bold text-3xl">2.</span>{" "}
                  <span className="font-bold text-3xl">
                    {" "}
                    Virtual Instructor-Led Training (VILT):
                  </span>
                  <br />
                  <p className="py-5 md:text-sm">
                  For those who prefer the flexibility of remote learning, we provide virtual instructor-led training programs. Participants can join live training sessions from anywhere, interact with instructors in real-time, and engage with fellow learners through virtual collaboration tools. VILT offers the convenience of online learning while maintaining the benefits of instructor-led instruction.                  </p>
                </div>

                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                  <span className="font-bold text-3xl">3.</span>{" "}
                  <span className="font-bold text-3xl">
                  On-Demand Learning:


                  </span>
                  <br />
                  <p className="py-5 md:text-sm">
                  Our on-demand learning solutions allow participants to access training materials and modules at their own pace and convenience. With a library of pre-recorded video tutorials, interactive exercises, and self-assessment quizzes, learners can acquire new skills and knowledge on their own schedule, making it ideal for busy professionals seeking flexibility.

                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl md:text-3xl font-bold py-16" data-aos="fade-up">
            Corporate Training and Upskilling:

            </h1>
            <div className=" py-5 md:px-16 w-full flex flex-col md:flex-row gap-8">
              <div className=" w-full md:w-[40%] h-full my-auto">
                <img
                  className="aspect-[14/13] w-full lg:h-[80vh] object-cover rounded-2xl"
                  src="https://img.freepik.com/free-photo/boy-studying-university-library_23-2148844678.jpg"
                  alt="" data-aos="fade-up"
                />
              </div>
              <div className="  w-full md:w-[60%]">
                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                  <span className="font-bold text-3xl">1.</span>{" "}
                  <span className="font-bold text-3xl">
                  Employee Skill Development:


                  </span>{" "}
                  <br />
                  <p className="py-5 md:text-sm">
                    {" "}
                    We partner with organizations to provide tailored training programs to upskill their workforce and meet their specific business needs. Our customized corporate training programs cover a wide range of topics, including project management, data analytics, cybersecurity, agile methodologies, and more, ensuring that employees have the skills required to drive organizational success.

                  </p>
                </div>

                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                  <span className="font-bold text-3xl">2.</span>{" "}
                  <span className="font-bold text-3xl">
                    {" "}
                    Technology Adoption Training:

                  </span>
                  <br />
                  <p className="py-5 md:text-sm">
                  When implementing new technologies or software within your organization, we offer training programs that facilitate smooth technology adoption. Our instructors provide hands-on training, step-by-step guidance, and best practices to ensure that employees can leverage the full potential of new technologies and maximize their productivity.
                  </p>
                </div>

                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                  <span className="font-bold text-3xl">3.</span>{" "}
                  <span className="font-bold text-3xl">
                    {" "}
                    Leadership and Professional Development:


                  </span>
                  <br />
                  <p className="py-5 md:text-sm">
                  We offer training programs that focus on developing leadership and professional skills within the IT industry. From effective communication and team management to strategic planning and decision-making, our leadership development programs empower IT professionals to become effective leaders and drive organizational growth.                  </p>
                </div>

                
              </div>
            </div>
          </div>

          <p className="" data-aos="fade-up">
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
