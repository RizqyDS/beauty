import React from "react";
import Pretitle from "./Pretitle";
import StatsAbout from "./Stats/StatsAbout";

const Features = () => {
  return (
    <section className="pt-[160px] md:flex-row items-center gap-12" id="about">
      <div className="container mx-auto">
        <Pretitle text="Tentang Kami" center />
        <h2 className="h2 mb-8 text-center">
          <span className="text-accent">10 Tahun pengalaman</span> tingkat
          Profesional
        </h2>
        <div className="mt-20 flex flex-col xl:flex-row h-full gap-[40px] xl:gap-[90px]">
          <img
            className="h-[640px] object-contain mx-auto rounded-[20px]"
            src="/assets/features/features.png"
            alt="feature image"
          />
          <div className="flex-1 space-y-5 mt-[100px]">
            <h2 className="text-primary text-3xl font-bold leading-tight text-justify">
              <span className="text-accent">Perjalanan kami dimulai dari</span>{" "}
              Satu misi sederhana
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Menghubungkan masyarakat Indonesia dengan layanan bedah estetika
              terbaik di Asia Tenggara.
            </p>
            <p className="text-gray-500 leading-relaxed flex text-justify">
              Phong Kham Saigon Beauty adalah klinik bedah plastik premium di
              pusat Ho Chi Minh City, Vietnam. Dikenal karena hasilnya yang
              natural, elegan, dan aman, klinik ini menjadi pilihan banyak klien
              dari Korea, Jepang, Eropa, hingga Asia Tenggara.
            </p>
            <StatsAbout />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
