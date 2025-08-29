import React from "react";
import { FaNotesMedical } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { MdOutlineSupportAgent } from "react-icons/md";
import { IoIosChatboxes } from "react-icons/io";

const AboutUs = () => {
  return (
    <section
      className="xl:mt-[100px] w-full h-[1500px] xl:h-[995px] md:flex-row  bg-accent items-center gap-12"
      id="about"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          <p className="text-yellow-300 text-[20px] font-bold pt-[75px]">
            Kenapa harus kami?
          </p>
          <h2 className="h2 pt-3 text-white">
            Keunggulan yang membuat kami berbeda
          </h2>
        </div>
        <div class="flex flex-col xl:flex-row items-center xl:gap-[150px]">
          <img
            class="mt-9 max-w-2xl w-full"
            src="/assets/features/features-1.png"
            alt="feature"
          />
          <div class="space-y-10 mt-10 px-4 md:px-0">
            <div class="flex items-center justify-center gap-6 max-w-md">
               <div className="hidden xl:flexbg-yellow-400 w-[200px] h-[100px] rounded-full items-center justify-center">
                <PiCertificateFill className="w-[50px] h-[50px] text-white" />
              </div>
              <div class="space-y-2">
                <h3 class="text-[20px] font-bold uppercase text-yellow-200">
                  Tim Dokter Bersertifikat Internasional
                </h3>
                <p class=" text-white">
                  Semua prosedur dilakukan oleh dokter spesialis bedah plastik
                  yang memiliki pengalaman lebih dari 10 tahun di bidangnya.
                </p>
              </div>
            </div>
            <div class="flex items-center justify-center gap-6 max-w-md">
              <div className="hidden xl:flex bg-yellow-400 w-[200px] h-[100px] rounded-full items-center justify-center">
                <FaNotesMedical className="w-[50px] h-[50px] text-white" />
              </div>
              <div class="space-y-2">
                <h3 class="text-[20px] font-bold uppercase text-yellow-200">
                  Teknologi Medis Terkini
                </h3>
                <p class="text-white">
                  Menggunakan peralatan medis modern setara rumah sakit
                  internasional, termasuk ruang operasi steril dengan standar
                  WHO.
                </p>
              </div>
            </div>
            <div class="flex items-center justify-center gap-6 max-w-md">
              <div className="hidden xl:flex bg-yellow-400 w-[400px] h-[100px] rounded-full items-center justify-center">
                <IoIosChatboxes className="w-[50px] h-[50px] text-white" />
              </div>
              <div class="space-y-2">
                <h3 class="text-[20px] font-bold uppercase text-yellow-200">
                  Pendekatan Personal
                </h3>
                <p class="text-white">
                  Setiap pasien memiliki anatomi, kebutuhan, dan ekspektasi
                  berbeda. Karena itu, semua tindakan didahului dengan
                  konsultasi detail dan medical check up untuk memastikan hasil
                  yang sesuai keinginan dan keselamatan dari para klien kami.
                </p>
              </div>
            </div>
            <div class="flex items-center justify-center gap-6 max-w-md">
              <div className="hidden xl:flex bg-yellow-400 w-[280px] h-[100px] rounded-full items-center justify-center">
                <MdOutlineSupportAgent className="w-[50px] h-[50px] text-white" />
              </div>
              <div class="space-y-2">
                <h3 class="text-[20px] font-bold uppercase text-yellow-200">
                  Pendampingan dari Indonesia
                </h3>
                <p class="text-white">
                  Kami sebagai agen resmi mengatur seluruh perjalanan:
                  konsultasi awal di Indonesia, pengurusan jadwal operasi,
                  akomodasi di Vietnam, hingga penerjemah selama proses medis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
