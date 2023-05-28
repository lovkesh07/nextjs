
import Cards from "@components/Card";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
// import Testimonialpg from "@components/Testimonialpg";

import "@styles/global.css";
import Longcard from "@components/Longcard";
import Sponser from "@components/Sponsor";
import ImgSlider from "@components/ImgSlider";
import Ourmission from "@components/Ourmission";
import InsightSection from "@components/InsightSection";


const RootLayout = ({ children }) => {
  return (
    <>
      <html lang="en">
        <body>{/* <div>layout</div> */}</body>

        <main className="app">
          <Navbar />
          <ImgSlider/>
          {children}
          <Cards />
          <Ourmission/>
          <Longcard/>
          <Sponser/>
          {/* <Testimonialpg/> */}
          <InsightSection/>
          <Footer />
        </main>
      </html>
    </>
  );
};

export default RootLayout;
