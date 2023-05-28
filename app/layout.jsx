import Cards from "@components/Card";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
// import Testimonials from "@components/Testimonials";

import "@styles/global.css";
// import Longcard from "@components/Longcard";


const RootLayout = ({ children }) => {
  return (
    <>
      <html lang="en">
        <body>{/* <div>layout</div> */}</body>

        <main className="app">
          <Navbar />
          {children}
          <Cards />
          {/* <Longcard/> */}
          {/* <Testimonials/> */}
          <Footer />
        </main>
      </html>
    </>
  );
};

export default RootLayout;
