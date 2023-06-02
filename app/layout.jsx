"use client";
import React, {useEffect} from "react";
import Footer from "@components/Footer";
import Navigation from "@components/Navigation";
import "@styles/global.css";
import AOS from 'aos';
import 'aos/dist/aos.css';


const RootLayout = ({ children }) => {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[]);

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
