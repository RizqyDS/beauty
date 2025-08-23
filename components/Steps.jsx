import { LucideClipboardList } from "lucide-react";
import { AiOutlineMail } from "react-icons/ai";
import { VscTools } from "react-icons/vsc";
import React from "react";
import { TbTruckDelivery } from "react-icons/tb";

const Steps = () => {
  return (
    <section className="mt-[100px]">
      <div className="container mx-auto">
        <div className="flex flex-col h-full items-center justify-center">
          <h2 className="h2 mb-4">Customer Journey</h2>
          <p className="mb-10 text-center">
            Perjalanan Klien dari Indonesia ke Vietnam
          </p>
          {/* steps */}
          <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-[50px] text-center">
            <div className="flex flex-col items-center justify-center">
              <p className="relative bg-yellow-400 w-8 h-8 rounded-full text-white flex items-center justify-center mr-[150px]">
                1
              </p>
              <div className="bg-accent w-[100px] h-[100px] rounded-full flex items-center justify-center">
                <LucideClipboardList className="w-[50px] h-[50px] text-white" />
              </div>
              <h2 className="text-[20px] font-semibold mt-10">
                Konsultasi Gratis 
              </h2>
              <p className="mt-5">
                Kami akan membahas keinginan, kondisi, dan memberikan estimasi biaya.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="relative bg-yellow-400 w-8 h-8 rounded-full text-white flex items-center justify-center mr-[150px]">
                2
              </p>
              <div className="bg-accent w-[100px] h-[100px] rounded-full flex items-center justify-center">
                <AiOutlineMail className="w-[50px] h-[50px] text-white" />
              </div>
              <h2 className="text-[20px] font-semibold mt-10">
                Perencanaan Perjalanan 
              </h2>
              <p className="mt-5">
                Tiket, hotel, dan jadwal operasi kami atur sesuai preferensi.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="relative bg-yellow-400 w-8 h-8 rounded-full text-white flex items-center justify-center mr-[150px]">
                3
              </p>
              <div className="bg-accent w-[100px] h-[100px] rounded-full flex items-center justify-center">
                <VscTools className="w-[50px] h-[50px] text-white" />
              </div>
              <h2 className="text-[20px] font-semibold mt-10">
                Pendampingan di Vietnam 
              </h2>
              <p className="mt-5">Penjemputan di bandara, pengantaran ke klinik, penerjemah bahasa Indonesia.</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="relative bg-yellow-400 w-8 h-8 rounded-full text-white flex items-center justify-center mr-[150px]">
                4
              </p>
              <div className="bg-accent w-[100px] h-[100px] rounded-full flex items-center justify-center">
                <TbTruckDelivery className="w-[50px] h-[50px] text-white" />
              </div>
              <h2 className="text-[20px] font-semibold mt-10">
                Proses Operasi 
              </h2>
              <p className="mt-5">
                Dilakukan oleh dokter spesialis dengan teknologi terkini.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="relative bg-yellow-400 w-8 h-8 rounded-full text-white flex items-center justify-center mr-[150px]">
                5
              </p>
              <div className="bg-accent w-[100px] h-[100px] rounded-full flex items-center justify-center">
                <TbTruckDelivery className="w-[50px] h-[50px] text-white" />
              </div>
              <h2 className="text-[20px] font-semibold mt-10">
                Pemulihan & Perawatan Pasca Operasi 
              </h2>
              <p className="mt-5">
                Klinik menyediakan perawatan lanjutan untuk mempercepat penyembuhan.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="relative bg-yellow-400 w-8 h-8 rounded-full text-white flex items-center justify-center mr-[150px]">
                6
              </p>
              <div className="bg-accent w-[100px] h-[100px] rounded-full flex items-center justify-center">
                <TbTruckDelivery className="w-[50px] h-[50px] text-white" />
              </div>
              <h2 className="text-[20px] font-semibold mt-10">
                Follow-Up Online 
              </h2>
              <p className="mt-5">
                Setelah pulang ke Indonesia, kami tetap memantau perkembangan Anda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
