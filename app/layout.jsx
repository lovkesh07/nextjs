"use client";
import React, {useEffect} from "react";
import Footer from "@components/Footer";
import Navigation from "@components/Navigation";
import "@styles/global.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Montserrat,Poppins} from "@next/font/google";

const monts = Montserrat({
  subsets: ["latin"],
  weight : ["400","500","700"]
})

const pop = Poppins({
  subsets:["latin"],
  weight:["400","700"]
})


const RootLayout = ({ children }) => {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[]);

  return (
    <>
      <html lang="en">
        <body className="">
        <main className={pop.className} >
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
