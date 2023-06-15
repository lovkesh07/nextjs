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
          <Longcard/>
          <Sponser/>
          <Testimonialpg/>
          {/* <InsightSection/> */}
    </main>
  )
}

export default home