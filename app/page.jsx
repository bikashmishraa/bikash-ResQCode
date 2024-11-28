'use client'
import React, { useEffect } from "react";
import Navbar from "./component/Navbar";
import Composition from "./component/Composition";
import TemporalBehaviour from "./component/TemporalBeh";
import SpatialDis from "./component/SpatialDis";
import {generateToken} from '@/lib/configure/firebase.config'
import Team from "./component/About";
// import ContactUs from "./component/ContactUs";
import About from "./about/page";
import Contactme from "./component/contactme";

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
      </div>
      <Composition />
      <TemporalBehaviour/>
        <SpatialDis/>
        <About />
        <div className="border bg-red-500 w-full flex items-center justify-center">
        {/* <ContactUs/> */}
        <Contactme />
        </div>
    </div>
  );
}
