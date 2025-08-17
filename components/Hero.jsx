"use client";

import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import CompanyLogo from "./CompanyLogo";
import { FaCrown, FaStar } from "react-icons/fa";
import { IoChatbubbleEllipsesSharp, IoPeople } from "react-icons/io5";

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
          <p className="mb-8 rounded-[25px] bg-accent w-[450px] h-[50px] gap-2 text-white flex font-semibold items-center justify-center">
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
            <ScrollLink to="services" smooth>
              <button className="btn flex gap-2 btn-accent mb-8 rounded-[25px] hover:scale-110 font-semibold transition duration-300">
                Explore Our Services
              </button>
            </ScrollLink>
            <button className="btn flex gap-2 btn-accent mb-8 rounded-[25px] hover:scale-110 font-semibold transition duration-300">
              <IoChatbubbleEllipsesSharp className="text-2xl" />
              Konsultasi Gratis
            </button>
          </div>
        </div>
        
        {/* image */}
        <div className="hidden xl:flex w-[56vw] h-[900px] absolute top-0 right-0">
          <div className="absolute w-[588px] h-[625px] top-10 z-40 right-[15.5vw] rounded-full bg-accent">
            <Image
              src="/assets/hero/hero.png"
              fill
              quality="100"
              priority
              className="object-contain"
              alt=""
            />
          </div>
          {/* overlay */}
          <div>
            <div className="absolute w-[588px] h-[580px] bottom-1 z-40 left-[29.5vw]">
              <p className="mb-8 rounded-[25px] bg-white w-[250px] h-[40px] gap-2 text-primary flex font-semibold items-center justify-center shadow-custom border-2 border-accent">
                <FaStar className="text-yellow-500" />
                Akses Klinik Kelas Dunia
              </p>
            </div>
            <div className="absolute w-[588px] h-[380px] bottom-0 z-40 left-[5.5vw]">
              <p className="mb-8 rounded-[25px] bg-white w-[390px] h-[40px] gap-2 text-primary flex font-semibold items-center justify-center shadow-custom border-2 border-accent">
                <IoPeople className="text-yellow-400" />
                Pendampingan Penuh & Bahasa Indonesia
              </p>
            </div>
            <div className="absolute w-[588px] h-[380px] top-12 z-40 left-[5.5vw]">
              <p className="mb-8 rounded-[25px] bg-white w-[320px] h-[40px] gap-2 text-primary flex font-semibold items-center justify-center shadow-custom border-2 border-accent">
                <FaCrown className="text-yellow-400" />
                Harga Transparan, Hasil Natural
              </p>
            </div>
          </div>
        </div>
      </div>
      <CompanyLogo />
    </section>
  );
};

export default Hero;
