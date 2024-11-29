'use client'
import React, { useEffect } from "react";
import Navbar from "./component/Navbar";
import Composition from "./component/Composition";
import TemporalBehaviour from "./component/TemporalBeh";
import SpatialDis from "./component/SpatialDis";
import {generateToken} from '@/lib/configure/firebase.config'
import Team from "./component/About";
import Contactus from "./contact/page";
import About from "./about/page";
// import Contactme from "./component/contactme";
import  FeatureButton  from "./component/FeatureButton";
import Footer from "./component/Footer"

export default function Home() {

 
  return (
    <div>
      <div className="min-h-screen bg-[url('/bg_main.png')] bg-center bg-cover ">
        {/* <Navbar /> */}
        {/* <h1 className="text-5xl font-bold ">Just click on the button you prefer!</h1> */}
        <div className="w-full flex items-center justify-center absolute bottom-20 mb-20 ">
        <FeatureButton />
        </div>
      </div>
      <Composition />
      <TemporalBehaviour/>
        <SpatialDis/>
        <About />
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-600 p-1/2 mt-[10%]"></hr>
        <div className="w-full flex items-center justify-center mt-[-2%]">
        <Contactus/>
        {/* <Contactme /> */}
        </div>
        <Footer />
    </div>
  );
}
