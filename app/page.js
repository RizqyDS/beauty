"use client";

import Header from "@/components/Header/Header";
import Hero from "@/components/Header/Hero";
import Topbar from "@/components/Header/Topbar";
import { useEffect, useState } from "react";
  const Home = () => {
    const [headerActive, setHeaderActive] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setHeaderActive(window.scrollY > 200);
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);


  return (
    <div>
      <Topbar />
      {/* static header */}
      <div className="relative z-10">
        <Header />
      </div>
      <div
        className={`w-full transition-transform duration-200 fixed top-0 left-0 z-50 
          ${headerActive ? "translate-y-0" : "-translate-y-full"}`}
      >
        <Header />
      </div>
      <Hero />
    </div>
  );
}

export default Home
