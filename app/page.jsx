'use client'
import React, { useEffect } from "react";
import Navbar from "./component/Navbar";
import Composition from "./component/Composition";
import TemporalBehaviour from "./component/TemporalBeh";
import SpatialDis from "./component/SpatialDis";
import {generateToken} from '@/lib/configure/firebase.config'
import Team from "./component/About";
import ContactUs from "./component/Contactus";
import About from "./about/page";
// import Contactme from "./component/contactme";
import  FeatureButton  from "./component/FeatureButton";
import Footer from "./component/Footer";

export default function Home() {

  useEffect(() => {
    generateToken();
  },[])

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/674604714304e3196ae90ea0/1idko2na4";
    // script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div className="min-h-screen bg-[url('/bg_main.png')] bg-center bg-cover">
        <Navbar />
        <h1 className="text-5xl text-blue-600 font-bold flex items-center justify-center mt-40">Just click on the button you prefer!</h1>
        <div className="w-full flex items-center justify-center  absolute bottom-20 mb-20 ">
        <FeatureButton />
        </div>
      </div>
      <Composition />
      <TemporalBehaviour/>
        <SpatialDis/>
        <About />
        <div className="w-full flex items-center justify-center">
        <ContactUs/>
        {/* <Contactme /> */}
        </div>
        <Footer />
    </div>
  );
}
