import React from "react";
import { FaNotesMedical } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { MdOutlineSupportAgent } from "react-icons/md";
import { IoIosChatboxes } from "react-icons/io";

const AboutUs = () => {
  return (
    <section
      className="mt-[100px] w-full h-[995px] md:flex-row relative bg-accent items-center gap-12"
      id="about"
    >
      <div className="container mx-auto">
        <p className="text-yellow-300 text-[20px] font-bold pt-[75px]">Kenapa harus kami?</p>
        <h2 className="h2 pt-3 text-white">
          Keunggulan yang membuat kami berbeda
        </h2>
        <div className="mt-[50px] flex flex-col xl:flex-row h-full gap-[40px] xl:gap-[90px]">
          <img
            className="h-[640px] object-contain mx-auto rounded-full"
            src="/assets/features/features-1.png"
            alt="feature image"
          />
          <div className="grid grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-[50px] items-start">
            <div className="flex flex-col items-center justify-center">
              <div className="bg-yellow-400 w-[100px] h-[100px] rounded-full flex items-center justify-center">
                <PiCertificateFill className="w-[50px] h-[50px] text-white" />
              </div>
              <h2 className="text-[20px] font-bold mt-10 text-center uppercase text-yellow-300">
                Tim Dokter Bersertifikat Internasional
              </h2>
              <p className="mt-5 text-white">
                Semua prosedur dilakukan oleh dokter spesialis bedah plastik
                yang memiliki pengalaman lebih dari 10 tahun di bidangnya.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="bg-yellow-400 w-[100px] h-[100px] rounded-full flex items-center justify-center">
                <FaNotesMedical className="w-[50px] h-[50px] text-white" />
              </div>
              <h2 className="text-[20px] font-bold mt-10 text-center uppercase text-yellow-300">
                Teknologi Medis Terkini
              </h2>
              <p className="mt-11 text-white">
                Menggunakan peralatan medis modern setara rumah sakit
                internasional, termasuk ruang operasi steril dengan standar WHO.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="bg-yellow-400 w-[100px] h-[100px] rounded-full flex items-center justify-center">
                <IoIosChatboxes className="w-[50px] h-[50px] text-white" />
              </div>
              <h2 className="text-[20px] text-center font-bold mt-10 uppercase text-yellow-300">
                Pendekatan Personal
              </h2>
              <p className="mt-10 text-white">
                Setiap pasien memiliki anatomi, kebutuhan, dan ekspektasi
                berbeda. Karena itu, semua tindakan didahului dengan konsultasi
                detail dan medical check up untuk memastikan hasil yang sesuai
                keinginan dan keselamatan dari para klien kami.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="bg-yellow-400 w-[100px] h-[100px] rounded-full flex items-center justify-center">
                <MdOutlineSupportAgent className="w-[50px] h-[50px] text-white" />
              </div>
              <h2 className="text-[20px] text-center font-bold mt-10 uppercase text-yellow-300">
                Pendampingan dari Indonesia
              </h2>
              <p className="mt-5 text-white">
                Kami sebagai agen resmi mengatur seluruh perjalanan: konsultasi
                awal di Indonesia, pengurusan jadwal operasi, akomodasi di
                Vietnam, hingga penerjemah selama proses medis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
