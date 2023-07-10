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
        <div className="w-full p-8 lg:px-24 sm:p-12 md:p-20" data-aos="fade-up">
         
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold py-5">
            Cybersecurity Solutions
          </h1>

          <p className="">
            At Dotclu, we provide comprehensive IT services specializing in
            cybersecurity. Our dedicated team of cybersecurity experts is
            committed to protecting your business from evolving cyber threats
            and safeguarding your critical assets. With our advanced
            technologies and proactive approach, we offer a range of
            cybersecurity solutions to mitigate risks and ensure the resilience
            of your digital infrastructure.
          </p>

      

          <div>
            <h1 className="text-3xl sm:text-4xl md:text-3xl font-bold py-16" data-aos="fade-up">
              Cybersecurity Assessment and Consulting:
            </h1>

            <div className=" py-5 md:px-16 w-full  flex flex-col md:flex-row gap-8">
              <div className=" w-full md:w-[40%] h-full my-auto">
                <img
                  className="aspect-[14/13] w-full lg:h-[80vh] object-cover rounded-2xl"
                  src="https://www.smartmechatronics.de/fileadmin/_processed_/0/f/csm_Cybersecurity_Engineering_1200x785_577f41624f.jpg"
                  alt="" data-aos="fade-up"
                />
              </div>
              <div className=" w-full md:w-[60%]">
                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                  <span className="font-bold text-3xl">1.</span>{" "}
                  <span className="font-bold text-3xl">
                    Risk Assessment and Vulnerability Analysis:
                  </span>{" "}
                  <br />
                  <p className="py-5 md:text-sm">
                    {" "}
                    Our cybersecurity professionals conduct thorough risk
                    assessments and vulnerability analyses to identify potential
                    weaknesses and gaps in your systems. We assess your network,
                    applications, and infrastructure to provide a comprehensive
                    view of your cybersecurity posture, enabling you to make
                    informed decisions and prioritize security measures.
                  </p>
                </div>

                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                  <span className="font-bold text-3xl">2.</span>{" "}
                  <span className="font-bold text-3xl">
                    {" "}
                    Security Compliance and Regulatory Guidance:
                  </span>
                  <br />
                  <p className="py-5 md:text-sm">
                    We help you navigate the complex landscape of cybersecurity
                    compliance by providing guidance and support to meet
                    industry-specific regulations and standards. Our experts
                    ensure that your systems align with regulations such as
                    GDPR, HIPAA, PCI DSS, and ISO 27001, minimizing legal and
                    reputational risks.
                  </p>
                </div>

                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                  <span className="font-bold text-3xl">3.</span>{" "}
                  <span className="font-bold text-3xl">
                    Security Policies and Procedures:
                  </span>
                  <br />
                  <p className="py-5 md:text-sm">
                    We assist in the development and implementation of robust
                    security policies and procedures tailored to your
                    organization. By establishing clear guidelines and
                    protocols, we ensure that your employees follow best
                    practices and maintain a security-focused culture within
                    your organization.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl md:text-3xl font-bold py-16" data-aos="fade-up">
              Network and Infrastructure Security:
            </h1>

            <div className=" py-5 md:px-16 w-full flex flex-col md:flex-row-reverse gap-8">
              <div className=" w-full md:w-[40%] h-full my-auto">
                <img
                  className="aspect-[14/13] lg:h-[70vh] w-full object-cover rounded-2xl"
                  src="https://media.istockphoto.com/id/1448403442/photo/digital-background-security-systems-and-data-protection-person-biometrics-identity-by.webp?b=1&s=170667a&w=0&k=20&c=9jZKGTo-0uf1UrV7judNhmPB0NUIm2wM9Pa9zTt3ElY="
                  alt=""  data-aos="fade-up"
                />
              </div>
              <div className=" w-full md:w-[60%]">
                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                  <span className="font-bold text-3xl">1.</span>{" "}
                  <span className="font-bold text-3xl">
                    Firewall and Intrusion Detection/Prevention Systems
                    (IDS/IPS):
                  </span>{" "}
                  <br />
                  <p className="py-5 md:text-sm">
                    {" "}
                    We deploy and manage state-of-the-art firewall and IDS/IPS
                    solutions to protect your network perimeter from
                    unauthorized access and malicious activities. Our solutions
                    monitor network traffic, detect potential threats, and
                    proactively defend against intrusions to maintain the
                    integrity of your network.
                  </p>
                </div>

                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                  <span className="font-bold text-3xl">2.</span>{" "}
                  <span className="font-bold text-3xl">
                    {" "}
                    Secure Remote Access:
                  </span>
                  <br />
                  <p className="py-5 md:text-sm">
                    We implement secure remote access solutions, such as virtual
                    private networks (VPNs) and multi-factor authentication
                    (MFA), to ensure secure connectivity for remote employees
                    and protect sensitive data during remote work scenarios.
                  </p>
                </div>

                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                  <span className="font-bold text-3xl">3.</span>{" "}
                  <span className="font-bold text-3xl">
                    Secure Wi-Fi and Network Segmentation:
                  </span>
                  <br />
                  <p className="py-5 md:text-sm">
                    Our experts design and configure secure Wi-Fi networks and
                    implement network segmentation strategies to isolate
                    critical systems and protect sensitive data. By segregating
                    network segments, we reduce the attack surface and limit the
                    impact of potential breaches.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl md:text-3xl font-bold py-16" data-aos="fade-up">
              Application Security:
            </h1>
            <div className=" py-5 md:px-16 w-full flex flex-col md:flex-row gap-8">
              <div className=" w-full md:w-[40%] h-full my-auto">
                <img
                  className="aspect-[14/13] w-full lg:h-[80vh] object-cover rounded-2xl"
                  src="https://img.freepik.com/premium-photo/hacking-attack-internet-security-concept-with-faceless-hackers-hoody-using-laptop-touching-virtual-screen-with-identification-button-blue-background_670147-208.jpg"
                  alt="" data-aos="fade-up"
                />
              </div>
              <div className="  w-full md:w-[60%]">
                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                  <span className="font-bold text-3xl">1.</span>{" "}
                  <span className="font-bold text-3xl">
                    Web Application Security:
                  </span>{" "}
                  <br />
                  <p className="py-5 md:text-sm">
                    {" "}
                    We conduct comprehensive security assessments and implement
                    robust controls to protect your web applications from common
                    vulnerabilities, such as cross-site scripting (XSS) and SQL
                    injection. Our solutions include code review, web
                    application firewalls (WAFs), and secure coding practices.
                  </p>
                </div>

                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                  <span className="font-bold text-3xl">2.</span>{" "}
                  <span className="font-bold text-3xl">
                    {" "}
                    Secure Software Development Lifecycle (SDLC):
                  </span>
                  <br />
                  <p className="py-5 md:text-sm">
                    We integrate security into the software development process
                    by following secure SDLC practices. From requirements
                    gathering to deployment, we ensure that security measures,
                    such as threat modeling, code review, and penetration
                    testing, are incorporated at each stage, minimizing
                    vulnerabilities in your applications.
                  </p>
                </div>

                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                  <span className="font-bold text-3xl">3.</span>{" "}
                  <span className="font-bold text-3xl">
                    Security Testing and Code Review:
                  </span>
                  <br />
                  <p className="py-5 md:text-sm">
                    Our experts perform thorough security testing and code
                    reviews to identify potential vulnerabilities and weaknesses
                    in your applications. We utilize tools and techniques, such
                    as penetration testing, static code analysis, and dynamic
                    application scanning, to ensure the robustness and
                    resilience of your software.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl md:text-3xl font-bold py-16" data-aos="fade-up">
              Data Protection and Privacy:
            </h1>
            <div>
              <div className=" py-5 md:px-16 w-full flex flex-col md:flex-row-reverse gap-8">
                <div className=" w-full md:w-[40%] h-full my-auto">
                  <img
                    className="aspect-[14/13] w-full lg:h-[80vh] object-cover rounded-2xl"
                    src="https://www.cloud-awards.com/wp-content/uploads/2022/11/cybersecurity-scaled.jpeg"
                    alt=""  data-aos="fade-up"
                  />
                </div>
                <div className=" w-full md:w-[60%]">
                  <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                    <span className="font-bold text-3xl">1.</span>{" "}
                    <span className="font-bold text-3xl">Data Encryption:</span>{" "}
                    <br />
                    <p className="py-5 md:text-sm">
                      {" "}
                      We implement strong encryption mechanisms to protect your
                      sensitive data at rest and in transit. By employing
                      industry-standard encryption algorithms, we ensure that
                      your data remains confidential and secure, even if it
                      falls into unauthorized hands.
                    </p>
                  </div>

                  <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                    <span className="font-bold text-3xl">2.</span>{" "}
                    <span className="font-bold text-3xl">
                      {" "}
                      Data Loss Prevention (DLP):
                    </span>
                    <br />
                    <p className="py-5 md:text-sm">
                      We deploy DLP solutions to monitor and control the
                      movement of sensitive data within your organization. Our
                      solutions prevent data leakage, whether intentional or
                      accidental, by identifying and blocking unauthorized data
                      transfers or inappropriate data usage.
                    </p>
                  </div>

                  <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                    <span className="font-bold text-3xl">3.</span>{" "}
                    <span className="font-bold text-3xl">
                      Identity and Access Management (IAM):
                    </span>
                    <br />
                    <p className="py-5 md:text-sm">
                      We establish secure IAM solutions that enforce strong user
                      authentication, granular access controls, and identity
                      lifecycle management. By ensuring that only authorized
                      individuals can access your systems and data, we minimize
                      the risk of unauthorized access and data breaches .
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
