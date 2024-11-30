// 'use client';
// import React, { useEffect } from "react";
import Navbar from "./component/Navbar";
import Composition from "./component/Composition";
import TemporalBehaviour from "./component/TemporalBeh";
import SpatialDis from "./component/SpatialDis";
import Team from "./component/About";
import Contactus from "./contact/page";
import About from "./about/page";
import FeatureButton from "./component/FeatureButton";
import Doccur from "./component/Doccur";
import Dremedy from "./component/Dremedy";
import Footer from "./component/Footer";
import { messaging } from "../lib/configure/firebase.config";
import { getToken } from "firebase/messaging";
import { generateToken } from "../lib/configure/firebase.config";


export default function Home() {
  // Function to request notification permission
 // Example of proper push notification permission request

  // useEffect to request permission on component mount
  // useEffect(() => {
  //   generateToken();
  // }, []);
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  
  const msg = {
    to: 'sowohi1451@bflcafe.com',
    from: 'bikash.mishra2079', // Use the email address or domain you verified above
    subject: 'Alert Notification',
    text: 'This is to notify you that there is an alert in your area',
    html: '<strong>Notified!</strong>',
  };
  
  (async () => {
    try {
      await sgMail.send(msg);
    } catch (error) {
      console.error(error);
  
      if (error.response) {
        console.error(error.response.body)
      }
    }
  })();

  return (
    <div>
      <div className="min-h-screen bg-[url('/bg_main.png')] bg-center bg-cover">
        <div className="w-full flex items-center justify-center absolute bottom-20 mb-20">
          <FeatureButton />
        </div>
      </div>
      <Doccur />
      <Dremedy />
      <Composition />
      <TemporalBehaviour />
      <SpatialDis />
      <About />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-600 p-1/2 mt-[10%]" />
      <div className="w-full flex items-center justify-center mt-[-2%]">
        <Contactus />
      </div>
      <Footer />
    </div>
  );
}
