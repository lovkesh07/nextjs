import Footer from "@components/Footer";
import Navigation from "@components/Navigation";
import "@styles/global.css";

const RootLayout = ({ children }) => {
  return (
    <>
      <html lang="en">
        <body className="bg-[#F6F2D4]">
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
