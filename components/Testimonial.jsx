import React, { useCallback, useState } from "react";
import { ImQuotesLeft } from "react-icons/im";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";

import AnimatedText from "./AnimatedText";
import Image from "next/image";
import Pretitle from "./Pretitle";

// sample data for projects with various categories
const slides = [
  {
    img: "/assets/testimonial/img-1.png",
    name: "Ayu - 29 Tahun",
    message:
      "Saya awalnya ragu untuk operasi di luar negeri, tapi agen ini mengurus semuanya. Dari bandara sampai pulang, saya tidak merasa sendiri. Hasil hidung saya sangat natural!",
  },
  {
    img: "/assets/testimonial/img-2.png",
    name: "Diana - 43 Tahun",
    message:
      "Saya melakukan operasi pengencangan wajah. Dokternya profesional, fasilitasnya modern. Semua diatur rapi oleh agen di Indonesia.",
  },
  {
    img: "/assets/testimonial/img-3.png",
    name: "Matilda - 30 Tahun",
    message:
      "Saya melakukan operasi payudara saat berusia 30 tahun. Hasilnya sangat natural dan meningkatkan rasa percaya diri saya. Proses pemulihannya juga lebih cepat dari yang saya bayangkan.",
  },
  {
    img: "/assets/testimonial/img-4.png",
    name: "Maya - 35 Tahun",
    message:
      "Di usia 35 tahun, saya menjalani prosedur facelift. Awalnya saya agak takut, tetapi dokter dan timnya membuat saya merasa nyaman. Kini wajah saya terlihat lebih segar dan awet muda.",
  },
  {
    img: "/assets/testimonial/img-5.png",
    name: "Nadia - 30 Tahun",
    message:
      "Saya melakukan prosedur sedot lemak di usia 30 tahun. Hasilnya membuat bentuk tubuh saya lebih proporsional, dan saya jadi lebih percaya diri saat berpenampilan",
  },
  {
    img: "/assets/testimonial/img-6.png",
    name: "Rini - 32 Tahun",
    message:
      "Saya menjalani operasi kelopak mata ketika berusia 32 tahun. Setelah penyembuhan, mata saya tampak lebih hidup dan ekspresif. Banyak teman bilang saya terlihat lebih bersemangat.",
  },
];

const Testimonial = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  // state to store the active slide index
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  return (
    <div className="mt-28 py-[80px] overflow-hidden shadow-custom" id="testimoni">
      <div className="container mx-auto">
        <Pretitle text="Testimoni" center />
        <AnimatedText
          text="Apa yang klien kami katakan?"
          textStyles="h2 mb-[30px] xl:mb-[60px] text-center"
        />
        <div className="flex flex-col lg:flex-row gap-12">
          {/* slider info */}
          <div
            className="w-max xl:w-[600px] flex flex-col 
          justify-center items-center xl:items-start text-center xl:text-left 
          mx-auto xl:mx-0"
          >
            <ImQuotesLeft className="text-9xl text-accent/20 leading-none mb-4" />
            <h3 className="h3 mb-2">{slides[activeSlide].name}</h3>
            <p className="mb-8 max-w-[360px]">{slides[activeSlide].message}</p>
            {/* slider btns */}
            <div className="flex gap-3">
              <button
                onClick={handlePrevious}
                className="text-2xl bg-accent w-[48px] h-[48px] text-white
                rounded-full flex items-center justify-center hover:bg-accent-hover
                transition-all duration-300"
              >
                <FiArrowLeft />
              </button>
              <button
                onClick={handleNext}
                className="text-2xl bg-accent w-[48px] h-[48px] text-white
                rounded-full flex items-center justify-center hover:bg-accent-hover
                transition-all duration-300"
              >
                <FiArrowRight />
              </button>
            </div>
          </div>
          {/* slider */}
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            onSwiper={setSwiperRef}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
              1400: { slidesPerView: 2 },
            }}
            onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
            //update the active slide index
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="w-full h-[400px] xl:h-[500px]"
          >
            {slides.map((slide, index) => {
              return (
                <SwiperSlide key={index} className="h-full select-none">
                  <div className="w-full h-full flex items-end">
                    <div
                      className={`${
                        activeSlide === index ? "h-full" : "h-[240px]"
                      } flex items-end rounded-2xl overflow-hidden
                      transition-all duration-500 relative w-full`}
                    >
                      <Image
                        src={slide.img}
                        className="object-cover object-center"
                        quality={100}
                        fill
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
