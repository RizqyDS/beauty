import React from "react";
import Pretitle from "../Pretitle";
import FaqItem from "./FaqItem";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const faqItemsData = [
  {
    title: "Perawatan apa saja yang tersedia di klinik kecantikan ini?",
    description: "Kami menyediakan berbagai layanan seperti facial, perawatan kulit berjerawat, anti-aging, filler & botox, treatment laser, hingga body contouring. Semua ditangani oleh tenaga medis profesional.",
  },
  {
    title: "Apakah perawatan di klinik ini aman?",
    description: "Ya, seluruh perawatan dilakukan oleh dokter berpengalaman dengan peralatan berstandar medis, serta menggunakan produk yang sudah terdaftar BPOM dan aman digunakan.",
  },
  {
    title: "Berapa lama hasil perawatan akan terlihat?",
    description: "Setiap orang memiliki kondisi kulit berbeda. Beberapa perawatan bisa menunjukkan hasil langsung setelah sesi pertama, sementara lainnya membutuhkan beberapa kali treatment untuk hasil optimal.",
  },
  {
    title: "Apakah perlu konsultasi sebelum melakukan perawatan?",
    description: "Tentu. Konsultasi awal sangat penting agar dokter dapat menganalisis kondisi kulit Anda dan merekomendasikan perawatan yang paling sesuai dengan kebutuhan.",
  },
  {
    title: "Bagaimana cara membuat janji atau booking perawatan?",
    description: "Anda bisa langsung menghubungi kami melalui WhatsApp, telepon, atau melakukan booking online melalui website kami. Tim kami siap membantu mengatur jadwal terbaik untuk Anda.",
  },
];

// animation variants for FAQ items
const faqItemVariants = {
  hidden: { opacity: 0, y: 30 },

  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.3 }, // staggered animation
  }),
};

const Faq = () => {
  return (
    <section className="pt-16 xl:pt-32 pb-[100px]">
      <div className="container mx-auto">
        {/* text */}
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-[540px] mx-auto xl:mb-20"
        >
          <Pretitle text="Faq" center />
          <h2 className="h2 mb-3">Ada Pertanyaan? Kami Bisa Membantu</h2>
          <p className="mb-11 max-w-[520px] mx-auto">
            Berikut Pertanyaan yang sering ditanyakan oleh pelanggan kami.
          </p>
        </motion.div>
        {/* faq items */}
        <ul className="w-full flex flex-col">
          {faqItemsData.map((item, index) => {
            return (
              <motion.li
                variants={faqItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.8 }}
                custom={index}
                key={index}
              >
                <FaqItem title={item.title} description={item.description} />
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Faq;
