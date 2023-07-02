import React from "react";

const Maincontent = () => {
  const people = [
    // {
    //   imageUrl:
    //     "https://kit.baliniz.com/virtty/wp-content/uploads/sites/55/2023/05/woman-in-vr-headset-e1686030555215.jpg",
    // },
    {
      imageUrl:
        "https://kit.baliniz.com/virtty/wp-content/uploads/sites/55/2023/05/african-girl-adjusting-the-vr-headset--e1686030544477.jpg",
    },
    {
      imageUrl:
        "https://kit.baliniz.com/virtty/wp-content/uploads/sites/55/2023/06/virtual-reality-headset-e1685721816288.jpg",
    },
    {
      imageUrl:
        "https://kit.baliniz.com/virtty/wp-content/uploads/sites/55/2023/06/man-in-virtual-reality-e1685722595998.jpg",
    },
  ];

  return (
    <>
      <div>
        <div className="w-full p-8 lg:px-24 sm:p-12 md:p-20">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold py-5">
            Augmented Reality (AR) and Virtual Reality (VR) Solutions
          </h1>

          <p className="">
            At Dotclu, we specialize in providing cutting-edge Augmented Reality
            (AR) and Virtual Reality (VR) solutions that unlock new
            possibilities for businesses across industries. Our team of experts
            combines creativity, technical expertise, and industry knowledge to
            create immersive and interactive AR/VR experiences that captivate
            users and drive engagement. Whether you are looking to enhance
            customer experiences, improve training programs, or revolutionize
            product visualization, our AR/VR services have you covered.
          </p>

          {/* <div className=" my-16 mt-4 lg:mt-6">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">
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
              AR Solutions:
            </h1>

            <div className=" py-5 md:px-16 w-full flex flex-col md:flex-row gap-8">
              <div className=" w-full md:w-[40%] h-full my-auto">
                <img
                  className="aspect-[14/13] w-full lg:h-[80vh] object-cover rounded-2xl"
                  src="https://kit.baliniz.com/virtty/wp-content/uploads/sites/55/2023/05/woman-in-vr-headset-e1686030555215.jpg"
                  alt=""
                />
              </div>
              <div className=" w-full md:w-[60%]">
                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10">
                  <span className="font-bold text-3xl">1.</span>{" "}
                  <span className="font-bold text-3xl">
                    Product Visualization:
                  </span>{" "}
                  <br />
                  <p className="py-5 md:text-sm">
                    {" "}
                    We leverage AR technology to transform the way your products
                    are showcased and experienced. Through AR applications,
                    customers can view virtual product models in their real
                    environment, enabling them to visualize and interact with
                    products before making a purchase. This immersive experience
                    enhances customer engagement, boosts confidence in
                    purchasing decisions, and reduces product returns.
                  </p>
                </div>

                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10">
                  <span className="font-bold text-3xl">2.</span>{" "}
                  <span className="font-bold text-3xl">Virtual Try-On:</span>
                  <br />
                  <p className="py-5 md:text-sm">
                    With AR, customers can try on virtual versions of products,
                    such as apparel, accessories, or cosmetics, in real-time.
                    This enables them to see how products look and fit on
                    themselves, enhancing the online shopping experience and
                    increasing conversion rates. Virtual try-on eliminates the
                    need for physical samples and enables personalized product
                    recommendations based on customer preferences.
                  </p>
                </div>

                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10">
                  <span className="font-bold text-3xl">3.</span>{" "}
                  <span className="font-bold text-3xl">
                    Interactive Branding and Advertising:
                  </span>
                  <br />
                  <p className="py-5 md:text-sm">
                    We create interactive AR experiences that bring your brand
                    and advertising campaigns to life. Through AR-enabled mobile
                    apps or web applications, users can scan images or objects
                    to access interactive content, such as 3D models, videos, or
                    gamified experiences. This innovative approach engages
                    users, strengthens brand awareness, and creates memorable
                    marketing experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-3xl font-bold py-16">
              VR Solutions:
            </h1>

            <div className=" py-5 md:px-16 w-full flex flex-col md:flex-row-reverse gap-8">
              <div className=" w-full md:w-[40%] h-full my-auto">
                <img
                  className="aspect-[14/13] w-full lg:h-[90vh] object-cover rounded-2xl"
                  src="https://kit.baliniz.com/virtty/wp-content/uploads/sites/55/2023/05/african-girl-adjusting-the-vr-headset--e1686030544477.jpg"
                  alt=""
                />
              </div>
              <div className=" w-full md:w-[60%]">
                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10">
                  <span className="font-bold text-3xl">1.</span>{" "}
                  <span className="font-bold text-3xl">
                    Immersive Training and Simulations:
                  </span>{" "}
                  <br />
                  <p className="py-5 md:text-sm">
                    {" "}
                    VR enables realistic, immersive training experiences for
                    various industries, such as manufacturing, healthcare, and
                    aviation. We develop VR simulations that replicate
                    real-world scenarios, allowing trainees to practice skills
                    and procedures in a safe and controlled environment. VR
                    training enhances knowledge retention, accelerates learning,
                    and reduces training costs.
                  </p>
                </div>

                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10">
                  <span className="font-bold text-3xl">2.</span>{" "}
                  <span className="font-bold text-3xl">
                    {" "}
                    Virtual Tours and Showrooms:
                  </span>
                  <br />
                  <p className="py-5 md:text-sm">
                    We create virtual tours and showrooms that enable customers
                    to explore spaces and products remotely. VR technology
                    provides a fully immersive experience, allowing users to
                    virtually walk through properties, visit destinations, or
                    interact with virtual product showcases. Virtual tours and
                    showrooms are particularly beneficial for real estate,
                    hospitality, and retail industries.
                  </p>
                </div>

                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10">
                  <span className="font-bold text-3xl">3.</span>{" "}
                  <span className="font-bold text-3xl">
                    {" "}
                    Collaborative Design and Visualization:
                  </span>
                  <br />
                  <p className="py-5 md:text-sm">
                    VR facilitates collaborative design and visualization
                    processes, enabling teams to collaborate remotely and
                    experience 3D models and prototypes in a shared virtual
                    environment. This enhances communication, speeds up
                    decision-making, and improves the overall design process. VR
                    visualization is especially valuable for architecture,
                    engineering, and product design industries.
                  </p>
                </div>

                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10">
                  <span className="font-bold text-3xl">4.</span>{" "}
                  <span className="font-bold text-3xl">
                    {" "}
                    Virtual Events and Conferences:
                  </span>
                  <br />
                  <p className="py-5 md:text-sm">
                    We transform traditional events and conferences into virtual
                    experiences through VR technology. Virtual events enable
                    attendees to participate from anywhere, eliminating travel
                    costs and logistical challenges. VR platforms provide
                    interactive booths, networking opportunities, and immersive
                    presentations, creating engaging and memorable event
                    experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="py-5">
            we are passionate about harnessing the power of AR and VR to
            revolutionize how businesses engage with their customers, train
            their employees, and showcase their products and services. Our AR/VR
            solutions are tailored to your specific needs and designed to
            deliver compelling experiences that drive results. Contact us today
            to explore the endless possibilities of AR and VR for your business.
          </p>
        </div>
      </div>
    </>
  );
};

export default Maincontent;
