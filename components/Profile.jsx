import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Profile = () => {
  return (
    <section class="pt-[150px] pb-[100px] flex flex-col md:flex-row items-center justify-center gap-[100px] max-md:px-4">
      <div class="relative shadow-2xl shadow-yellow-600/40 rounded-2xl overflow-hidden shrink-0">
        <img
          class="max-w-md w-full object-cover rounded-2xl"
          src="/assets/features/profile.png"
          alt=""
        />
        <div class="flex items-center gap-1 max-w-72 absolute bottom-8 left-8 bg-white p-4 rounded-xl">
          <div class="flex -space-x-4 shrink-0">
            <img
              src="/assets/testimonial/img-2.png"
              alt="image"
              class="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-1"
            />
            <img
              src="/assets/testimonial/img-3.png"
              alt="image"
              class="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[2]"
            />
            <img
              src="/assets/testimonial/img-4.png"
              alt="image"
              class="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[3]"
            />
            <div class="flex items-center justify-center text-xs  text-white size-9 rounded-full border-[3px] border-white bg-accent hover:-translate-y-1 transition z-[4]">
              50+
            </div>
          </div>
          <p class="text-sm font-medium text-slate-800">
            Join our developer community
          </p>
        </div>
      </div>
      <div class=" text-slate-600 max-w-lg">
        <h1 class="text-xl uppercase font-semibold text-accent">Bayangkan…</h1>
        <div class="w-24 h-[3px] rounded-full bg-gradient-to-r from-accent to-[#DDD9FF]"></div>
        <p class="mt-8">
          Bangun di pagi hari, melihat bayangan di cermin, dan tersenyum puas.
          Bukan karena ingin menjadi orang lain, tetapi karena akhirnya melihat
          versi diri yang selama ini diimpikan.
        </p>
        <p class="mt-4">
          Di Phong Kham Saigon Beauty, keindahan bukanlah hasil instan
          semata—tetapi perpaduan seni, ilmu kedokteran, dan teknologi modern.
          Kami mengerti, setiap klien memiliki alasan berbeda:
        </p>
        <p class="mt-4">
          Sebagai agen resmi dari Indonesia, kami memastikan perjalanan ini
          bebas dari rasa khawatir: mulai dari konsultasi awal, perjalanan ke
          Vietnam, hingga masa pemulihan pasca operasi.
        </p>
        <h2 className="text-[20px] font-semibold text-accent mt-4">
          Visi Kami:
        </h2>
        <p class="mt-2">
          Memberikan akses mudah bagi masyarakat Indonesia untuk mendapatkan
          layanan operasi plastik berkualitas internasional, dengan pengalaman
          yang aman, nyaman, transparan dan dengan biaya yang terjangkau.
        </p>
        <button className="btn flex gap-2 btn-accent mt-8 rounded-[25px] hover:scale-110 font-semibold transition duration-300">
          <FaWhatsapp className="text-2xl" />
          Konsultasi Gratis
        </button>
      </div>
    </section>
  );
};

export default Profile;
