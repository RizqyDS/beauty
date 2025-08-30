"use client";

import CompanyLogo from "./CompanyLogo";
import { FaCrown, FaWhatsapp } from "react-icons/fa";
const Hero = () => {
  return (
    <section
      className="w-full h-[900px] md:h-[550px] xl:h-[695px] pb-[100px] md:pt-[10px] xl:pb-[30px] relative bg-gray-100"
      id="beranda"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col md:flex-row h-full">
          <div
            className="h-full w-full xl:max-w-[600px] flex flex-col
          items-center xl:items-start justify-center text-center xl:text-left top-0"
          >
            <p className="hidden xl:flex mb-8 rounded-[25px] bg-accent w-[450px] h-[50px] gap-2 text-white font-semibold items-center justify-center">
              <FaCrown className="text-yellow-400" />
              Tampil Percaya diri oleh Perawatan Terpercaya
            </p>
            <h1 className="h1 tracking-[1.5px] mt-8 xl:mt-1 uppercase font-bold mb-1 max-w-[420px] xl:max-w-none">
              <span className="text-accent">Bukan Sekedar Operasi Plastik</span>
            </h1>
            <p className="text-accent uppercase lead max-w-[376px] xl:max-w-none mb-7">
              Ini Tentang Perjalanan Menjadi Versi Terbaik dari Diri Sendiri
            </p>
            <p className="mb-7 max-w-[376px] xl:max-w-none">
              Dari Indonesia ke Ho Chi Minh City, Vietnam – kami hadir untuk
              membuka pintu menuju transformasi yang aman, profesional, dan
              berkelas internasional.
            </p>
            <div className="flex gap-5">
              <button className="btn flex gap-2 btn-accent mb-8 rounded-[25px] hover:scale-110 font-semibold transition duration-300">
                <FaWhatsapp className="text-2xl" />
                Konsultasi Gratis
              </button>
            </div>
          </div>
          {/* image */}
          <img
            src="/assets/hero/hero.png"
            quality="100"
            className="mt-8 h-[400px] xl:h-[650px] object-fit mx-auto"
            alt="hero"
          />
        </div>
      </div>
      
        <CompanyLogo />
     
    </section>
  );
};

export default Hero;
