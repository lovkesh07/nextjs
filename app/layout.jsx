
// import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Navigation from "@components/Navigation";
// import Testimonialpg from "@components/Testimonialpg";

import "@styles/global.css";

const RootLayout = ({ children }) => {
  return (
    <>
      <html lang="en">
        <body>
        <main className="app">
          <Navigation />
          {children}
          <Footer />
        </main>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
