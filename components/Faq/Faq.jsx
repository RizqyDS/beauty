import React from "react";
import Pretitle from "../Pretitle";
import FaqItem from "./FaqItem";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const faqItemsData = [
  {
    title: "Perawatan apa saja yang tersedia di klinik kecantikan ini?",
    description: "Kami menyediakan berbagai layanan seperti facelift,linoplasi dll.",
  },
  {
    title: "Apakah perawatan di klinik ini aman?",
    description: "Ya, seluruh perawatan dilakukan oleh dokter yang sudah berpengalaman di bidangnya dan sudah lebih dari 10 tahun.",
  },
  {
    title: "Berapa lama perawatan akan terlihat?",
    description: "Setiap orang memiliki kondisi kulit dan tubuh yang berbeda, beberapa perawatan dan Tindakan bisa menunjukan hasil langsung setelah 1 hingga 3 bulan pertama Sementara dalam beberapa case mungkin membutuhkan waktu lebih.",
  },
  {
    title: "Apakah perlu konsultasi sebelum melakukan perawatan?",
    description: "Tentu, konsultasi awal sangat penting agar dokter dapat menganalisis kondisi kulit dan bentuk tubuh anda , serta dapat merekomendasikan Tindakan yang sesuai dengan kebutuhan.",
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
