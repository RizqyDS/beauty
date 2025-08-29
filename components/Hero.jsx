"use client";

import Image from "next/image";
import CompanyLogo from "./CompanyLogo";
import { FaCrown, FaWhatsapp } from "react-icons/fa";
const Hero = () => {
  return (
    <section
      className="w-full h-[695px] pb-[30px] relative bg-gray-100 xl:white"
      id="home"
    >
      <div className="container mx-auto h-full">
        <div
          className="relative z-20 h-full w-full xl:max-w-[600px] flex flex-col
          items-center xl:items-start justify-center text-center xl:text-left top-0"
        >
          <p className="hidden xl:flex mb-8 rounded-[25px] bg-accent w-[450px] h-[50px] gap-2 text-white font-semibold items-center justify-center">
            <FaCrown className="text-yellow-400" />
            Tampil Percaya diri oleh Perawatan Terpercaya
          </p>
          <h1 className="h1 tracking-[1.5px] uppercase font-bold mb-1 max-w-[320px] xl:max-w-none">
            <span className="text-accent">Bukan Sekedar Operasi Plastik</span>
          </h1>
          <p className="text-accent uppercase lead max-w-[476px] mb-7">
            Ini Tentang Perjalanan Menjadi Versi Terbaik dari Diri Sendiri
          </p>
          <p className="mb-7">
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
        <div className="xl:flex w-[56vw] h-[900px] absolute top-0 right-0">
          <div className="absolute w-[300px] h-[300px] xl:w-[758px] xl:h-[625px] top-10 z-40 right-[22vw] xl:right-[11.5vw]">
            <Image
              src="/assets/hero/hero.png"
              fill
              quality="100"
              priority
              className="object-fit"
              alt=""
            />
          </div>
        </div>
      </div>
      <CompanyLogo />
    </section>
  );
};

export default Hero;
