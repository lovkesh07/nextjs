import React from 'react'
import Cards from "@components/Card";
import Longcard from "@components/Longcard";
import Sponser from "@components/Sponsor";
import ImgSlider from "@components/ImgSlider";
import Ourmission from "@components/Ourmission";
import InsightSection from "@components/InsightSection";
import Testimonialpg from '@components/Testimonialpg';
import Newslider from '@components/Newslider';


const home = () => {
  return (
    <main>
          <ImgSlider/>
          {/* <Newslider/> */}
          
         <Cards />
          <Ourmission/>
          <Longcard a={"200+"} b={"Customers including startups and Fortune 500 companies"} c={"1800+"} d={"Digital & Tech Experts with experience across industries"} e={"7+"} f={"Countries where we drive our technology"}/>
          <Sponser/>
          <Testimonialpg/>
          {/* <InsightSection/> */}
    </main>
  )
}

export default home