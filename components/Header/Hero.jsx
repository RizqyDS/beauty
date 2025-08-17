"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      className="w-full h-[700px] pb-[30px] relative bg-gray-100 xl:white"
      id="home"
    >
      <div className="container mx-auto h-full">
        <div
          className="relative z-20 h-full w-full xl:max-w-[600px] flex flex-col
          items-center xl:items-start justify-center text-center xl:text-left top-0"
        >
          <h1 className="h1 uppercase font-semibold tracking-[1px] mb-1 max-w-[320px] xl:max-w-none">
            <span className="text-secondary">Your Ultimate</span> Beauty & Cosmetic Hub
            <TypeAnimation
              preRenderFirstString={true}
              sequence={["Industrial", 2000, "Medical", 2000]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
              cursor={false}
              className="ml-2 xl:ml-4 text-secondary"
            />
          </h1>
          <p className="lead max-w-[476px] mb-7 text-primary">
            Ensuring Compliance Through Proper Laboratory Calibration Procedures
          </p>
          <div className="flex gap-5">
              <button className="btn flex gap-2 btn-accent mb-8 rounded-[25px] hover:scale-110 font-semibold transition duration-300">
                Explore Our Services
              </button>
          </div>
        </div>
        {/* image */}
        <div className="hidden xl:flex w-[56vw] h-[900px] absolute top-0 right-0">
          <div className="absolute w-[720px] h-[650px] top-12 z-40 left-[11.5vw]">
            <Image
              src="/assets/hero/hero.png"
              fill
              quality="100"
              priority
              className="object-contain"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
