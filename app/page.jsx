import React from "react";
import Cards from "@components/Card";
import Longcard from "@components/Longcard";
<<<<<<< HEAD
// import Sponser from "@components/Sponsor";
// import ImgSlider from "@components/ImgSlider";
=======
import Sponser from "@components/Sponsor";
import ImgSlider from "@components/ImgSlider";
>>>>>>> 25fa52696092898cebacade8f4f60b94daea4e1b
import Ourmission from "@components/Ourmission";
// import Testimonialpg from "@components/Testimonialpg";
import AnimationSlider from "@components/AnimationSlider";


const home = () => {
  return (
    <main>
      <ImgSlider />
      {/* <AnimationSlider/> */}
      <Cards />
      <Ourmission />
      
      <Longcard
        a={"200+"}
        b={"Customers including startups and Fortune 500 companies"}
        c={"1800+"}
        d={"Digital & Tech Experts with experience across industries"}
        e={"7+"}
        f={"Countries where we drive our technology"}
      />
      {/* <Sponser /> */}
      
      {/* <Testimonialpg /> */}
      {/* <InsightSection/> */}
    </main>
  );
};

export default home;
