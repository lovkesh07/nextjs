import React from "react";

const Maincontent = () => {
  const people = [
    {
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/06/02/15/38/cloud-computing-4246668_1280.jpg",
    },
    {
      imageUrl:
        "https://media.istockphoto.com/id/1395551212/vector/cloud-computing-businessman.jpg?s=612x612&w=0&k=20&c=69hKwwpkXxiuC43xkXUXJ3B8EUiEnWsZ3e0m9_Twipc=",
    },
    {
      imageUrl:
        "https://media.istockphoto.com/id/539224852/vector/business-work.jpg?s=612x612&w=0&k=20&c=KFcLYbHe7w7EphFDYCo9Uqlvhuf2XXi5ySuyATB03SU=",
    },
  ];

  return (
    <>
      <div>
        <div className="w-full p-8 lg:px-24 sm:p-12 md:p-20">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold py-5">
            Cloud Computing Solutions
          </h1>

          <p className="">
            At Dotclu, we specialize in providing comprehensive IT services in
            the realm of Cloud Computing. Our expert team of cloud architects
            and engineers is dedicated to helping businesses leverage the power
            of cloud technology to transform their operations, enhance
            scalability, and drive innovation. With our robust suite of cloud
            computing solutions, we empower organizations to stay ahead in
            today's fast-paced digital landscape.
          </p>

          <div className=" my-16 mt-4 lg:mt-6">
            {/* <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
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
        </div> */}
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-3xl font-bold py-16">
              Cloud Infrastructure Solutions:
            </h1>

            <div className=" py-5 md:px-16 w-full  flex flex-col md:flex-row gap-8">
              <div className=" w-full md:w-[40%] h-full my-auto">
                <img
                  className="aspect-[14/13] w-full object-cover rounded-2xl"
                  src="https://cdn.pixabay.com/photo/2019/06/02/15/38/cloud-computing-4246668_1280.jpg"
                  alt=""
                />
              </div>
              <div className=" w-full md:w-[60%]">
                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10">
                  <span className="font-bold text-3xl">1.</span>{" "}
                  <span className="font-bold text-3xl">Cloud Migration:</span>{" "}
                  <br />
                  <p className="py-5 md:text-sm">
                    {" "}
                    We facilitate seamless migration of your existing IT
                    infrastructure to the cloud, ensuring minimal disruption and
                    maximum efficiency. Our team assesses your current
                    infrastructure, designs a tailored cloud migration strategy,
                    and executes the migration process, leveraging leading cloud
                    platforms such as Amazon Web Services (AWS), Microsoft
                    Azure, and Google Cloud Platform (GCP).
                  </p>
                </div>

                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10">
                  <span className="font-bold text-3xl">2.</span>{" "}
                  <span className="font-bold text-3xl">
                    {" "}
                    Infrastructure as a Service (IaaS):{" "}
                  </span>
                  <br />
                  <p className="py-5 md:text-sm">
                    Our IaaS solutions provide virtualized computing resources,
                    including servers, storage, and networking, delivered via
                    the cloud. We design and deploy scalable and reliable
                    infrastructure architectures that align with your business
                    requirements, enabling you to rapidly provision resources,
                    optimize costs, and achieve high availability.
                  </p>
                </div>

                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10">
                  <span className="font-bold text-3xl">3.</span>{" "}
                  <span className="font-bold text-3xl">
                    Disaster Recovery and Business Continuity:
                  </span>
                  <br />
                  <p className="py-5 md:text-sm">
                    We develop robust disaster recovery and business continuity
                    strategies using cloud-based technologies. By leveraging
                    cloud infrastructure, data replication, and automated backup
                    solutions, we ensure that your critical systems and data are
                    protected, and your business can quickly recover from
                    disruptive events.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-3xl font-bold py-16">
              Cloud Application Solutions:
            </h1>

            <div className=" py-5 md:px-16 w-full flex flex-col md:flex-row-reverse gap-8">
              <div className=" w-full md:w-[40%] h-full my-auto">
                <img
                  className="aspect-[14/13] w-full object-cover rounded-2xl"
                  src="https://media.istockphoto.com/id/539224852/vector/business-work.jpg?s=612x612&w=0&k=20&c=KFcLYbHe7w7EphFDYCo9Uqlvhuf2XXi5ySuyATB03SU="
                  alt=""
                />
              </div>
              <div className=" w-full md:w-[60%]">
                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10">
                  <span className="font-bold text-3xl">1.</span>{" "}
                  <span className="font-bold text-3xl">
                    Platform as a Service (PaaS):
                  </span>{" "}
                  <br />
                  <p className="py-5 md:text-sm">
                    {" "}
                    Our PaaS solutions enable businesses to develop, deploy, and
                    manage applications without the complexity of underlying
                    infrastructure. We help you leverage cloud platforms to
                    streamline application development, automate deployment
                    processes, and scale applications seamlessly.
                  </p>
                </div>

                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10">
                  <span className="font-bold text-3xl">2.</span>{" "}
                  <span className="font-bold text-3xl">
                    {" "}
                    Serverless Computing:
                  </span>
                  <br />
                  <p className="py-5 md:text-sm">
                    We utilize serverless computing technologies, such as AWS
                    Lambda and Azure Functions, to build highly scalable and
                    event-driven applications. Serverless architecture allows
                    you to focus on writing code without managing
                    infrastructure, enabling rapid development, cost
                    optimization, and effortless scalability.
                  </p>
                </div>

                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10">
                  <span className="font-bold text-3xl">3.</span>{" "}
                  <span className="font-bold text-3xl">
                    Cloud-native Development:
                  </span>
                  <br />
                  <p className="py-5 md:text-sm">
                    Our cloud-native development approach embraces microservices
                    architecture, containerization, and DevOps practices. We
                    help you design and develop cloud-native applications that
                    are scalable, resilient, and highly adaptable to changing
                    business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl md:text-3xl font-bold py-16">
              Cloud Data Solutions:
            </h1>
            <div className=" py-5 md:px-16 w-full flex flex-col md:flex-row gap-8">
              <div className=" w-full md:w-[40%] h-full my-auto">
                <img
                  className="aspect-[14/13] w-full object-cover rounded-2xl"
                  src="https://media.istockphoto.com/id/1395551212/vector/cloud-computing-businessman.jpg?s=612x612&w=0&k=20&c=69hKwwpkXxiuC43xkXUXJ3B8EUiEnWsZ3e0m9_Twipc="
                  alt=""
                />
              </div>
              <div className="  w-full md:w-[60%]">
                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10">
                  <span className="font-bold text-3xl">1.</span>{" "}
                  <span className="font-bold text-3xl">
                    Database as a Service (DBaaS):
                  </span>{" "}
                  <br />
                  <p className="py-5 md:text-sm">
                    {" "}
                    Our DBaaS solutions leverage cloud database technologies,
                    such as Amazon RDS, Azure SQL Database, and Google Cloud
                    SQL, to simplify database management and optimize
                    performance. We help you choose the right database solution,
                    migrate your data to the cloud, and ensure data security,
                    availability, and scalability.
                  </p>
                </div>

                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10">
                  <span className="font-bold text-3xl">2.</span>{" "}
                  <span className="font-bold text-3xl">
                    {" "}
                    Big Data and Analytics:
                  </span>
                  <br />
                  <p className="py-5 md:text-sm">
                    We enable businesses to harness the power of big data and
                    advanced analytics in the cloud. By leveraging cloud-based
                    data processing platforms, such as AWS EMR, Azure HDInsight,
                    and Google BigQuery, we help you unlock insights, make
                    data-driven decisions, and derive business value from your
                    data.
                  </p>
                </div>

                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10">
                  <span className="font-bold text-3xl">3.</span>{" "}
                  <span className="font-bold text-3xl">
                    Data Warehousing and Data Integration:
                  </span>
                  <br />
                  <p className="py-5 md:text-sm">
                    Our solutions encompass cloud data warehousing and data
                    integration, leveraging platforms like Amazon Redshift,
                    Azure Synapse Analytics, and Google BigQuery. We design and
                    implement scalable data warehousing architectures, along
                    with seamless data integration pipelines, to centralize,
                    analyze, and extract value from your data assets.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-3xl font-bold py-16">
              Cloud Security Solutions:
            </h1>
            <div>
              <div className=" py-5 md:px-16 w-full flex flex-col md:flex-row-reverse gap-8">
                <div className=" w-full md:w-[40%] h-full my-auto">
                  <img
                    className="aspect-[14/13] w-full object-cover rounded-2xl"
                    src="https://cdn.pixabay.com/photo/2019/06/02/15/38/cloud-computing-4246668_1280.jpg"
                    alt=""
                  />
                </div>
                <div className=" w-full md:w-[60%]">
                  <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10">
                    <span className="font-bold text-3xl">1.</span>{" "}
                    <span className="font-bold text-3xl">
                      Cloud Security Assessment:
                    </span>{" "}
                    <br />
                    <p className="py-5 md:text-sm">
                      {" "}
                      We conduct comprehensive security assessments of your
                      cloud infrastructure and applications, identifying
                      potential vulnerabilities, and recommending strategies to
                      enhance security and compliance. Our experts ensure that
                      your cloud environment adheres to industry best practices
                      and regulatory standards.
                    </p>
                  </div>

                  <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10">
                    <span className="font-bold text-3xl">2.</span>{" "}
                    <span className="font-bold text-3xl">
                      {" "}
                      Identity and Access Management (IAM):
                    </span>
                    <br />
                    <p className="py-5 md:text-sm">
                      We implement robust IAM solutions to control user access,
                      enforce fine-grained permissions, and protect your cloud
                      resources. Our solutions enable you to manage user
                      identities, authenticate and authorize access, and ensure
                      data privacy and security.
                    </p>
                  </div>

                  <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10">
                    <span className="font-bold text-3xl">3.</span>{" "}
                    <span className="font-bold text-3xl">
                      Cloud Security Monitoring and Incident Response:
                    </span>
                    <br />
                    <p className="py-5 md:text-sm">
                      Our solutions encompass cloud data warehousing and data
                      integration, leveraging platforms like Amazon Redshift,
                      Azure Synapse Analytics, and Google BigQuery. We design
                      and implement scalable data warehousing architectures,
                      along with seamless data integration pipelines, to
                      centralize, analyze, and extract value from your data
                      assets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Maincontent;
