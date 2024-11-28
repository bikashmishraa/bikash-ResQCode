'use client'
import React, { useEffect } from "react";
import Navbar from "./component/Navbar";
import Composition from "./component/Composition";

export default function Home() {
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
    </div>
  );
}
