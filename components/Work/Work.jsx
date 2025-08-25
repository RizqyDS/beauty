import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedText from "../AnimatedText";
import WorkItem from "./WorkItem";
import Pretitle from "../Pretitle";

// sample data for projects with various categories
const data = [
  {
    category: "Bedah Wajah",
    img: "/assets/work/bedahWajah/work-1.png",
    title: "Rhinoplasty (Operasi Hidung)",
    description: "Hidung mancung natural, sesuai proporsi wajah.",
  },
  {
    category: "Bedah Wajah",
    img: "/assets/work/bedahWajah/work-2.png",
    title: "Blepharoplasty",
    description: "Hidung mancung natural, sesuai proporsi wajah.",
  },
  {
    category: "Bedah Wajah",
    img: "/assets/work/bedahWajah/work-3.png",
    title: "Operasi Rahang & Dagu ",
    description: "Menyempurnakan kontur wajah.",
  },
  {
    category: "Bedah Wajah",
    img: "/assets/work/bedahWajah/work-4.png",
    title: "Face Lift",
    description: "Mengencangkan kulit wajah untuk tampilan awet muda.",
  },
  {
    category: "Bedah Payudara",
    img: "/assets/work/bedahPayudara/work-1.png",
    title: "Breast Augmentation",
    description:
      "Membesarkan ukuran payudara dengan implan berkualitas medis tinggi.",
  },
  {
    category: "Bedah Payudara",
    img: "/assets/work/bedahPayudara/work-2.png",
    title: "Breast Lift",
    description: "Mengencangkan bentuk payudara.",
  },
  {
    category: "Bedah Payudara",
    img: "/assets/work/bedahPayudara/work-3.png",
    title: "Breast Reduction",
    description: "Mengurangi ukuran payudara yang terlalu besar.",
  },
  {
    category: "Pembentukan Tubuh",
    img: "/assets/work/pembentukan/work-1.png",
    title: "Liposuction",
    description: "Menghilangkan lemak membandel.",
  },
  {
    category: "Pembentukan Tubuh",
    img: "/assets/work/pembentukan/work-2.png",
    title: "Tummy Tuck ",
    description: "Mengencangkan perut pasca melahirkan.",
  },
  {
    category: "Pembentukan Tubuh",
    img: "/assets/work/pembentukan/work-3.png",
    title: "Brazilian Butt Lift",
    description: "Membentuk bokong ideal.",
  },
  {
    category: "Perawatan Non-Bedah",
    img: "/assets/work/perawatan/work-1.png",
    title: "Filler & Botox ",
    description: "Peremajaan wajah instan.",
  },
  {
    category: "Perawatan Non-Bedah",
    img: "/assets/work/perawatan/work-2.png",
    title: "Thread Lift",
    description: "Mengencangkan kulit tanpa operasi.",
  },
  {
    category: "Perawatan Non-Bedah",
    img: "/assets/work/industrial/industrial-4.png",
    title: "Laser Kulit ",
    description:
      "Menghilangkan flek, bekas jerawat, dan meratakan warna kulit.",
  },
];

const Work = () => {
  // extract unique categories from the data
  const uniqueCategories = Array.from(
    new Set(data.map((item) => item.category))
  );

  // create tab data with "all" category and unique categories from data
  const tabData = [
    { category: "all services" },
    ...uniqueCategories.map((category) => ({ category })),
  ];

  // state to manage the currently selected tab
  const [tabValue, setTabValue] = useState("all services");
  // number of items to show initially
  const [visibleItems, setVisibleItems] = useState(6);

  //filter work items based on the selected tab
  const filterWork =
    tabValue === "all services"
      ? data.filter((item) => item.category !== "all services")
      : data.filter((item) => item.category === tabValue);

  // handle loading more items
  const loadMoreItems = () => {
    //adjust the number to control how many items are loaded at a time
    setVisibleItems((prev) => prev + 2);
  };

  return (
    <section className="pt-24 min-h-[1000px] " id="services">
      <div className="container mx-auto">
        <Pretitle text="Pelayanan Kami" center />
        <AnimatedText
          text="Jelajahi Koleksi Pelayanan keunggulan"
          textStyles="h2 mb-[30px] text-center xl:mb-0"
        />
        <Tabs
          defaultValue="all services"
          className="w-full  flex flex-col mt-12 items-center"
        >
          <div
            className="flex flex-col xl:flex-row items-center xl:items-start
            xl:justify-between mb-[30px]"
          >
            {/* render tab triggers */}
            <TabsList
              className="max-w-auto border-none h-full mb-[30px] flex flex-col md:flex-row
            gap-[30px] md:gap-[50px]"
            >
              {tabData.map((item, index) => {
                return (
                  <TabsTrigger
                    value={item.category}
                    key={index}
                    className={`uppercase w-[200px] h-[50px] ${
                      setTabValue === item.category
                        ? "text-white"
                        : "text-primary"
                    }`}
                    onClick={() => setTabValue(item.category)}
                  >
                    {item.category}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>

          {/* render content for the selected tab */}
          <TabsContent value={tabValue} className="w-full">
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-[20px]">
              <AnimatePresence>
                {filterWork.slice(0, visibleItems).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <WorkItem {...item} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            {/* load more button */}
            {visibleItems < filterWork.length && (
              <div className="flex justify-center mt-12">
                <button onClick={loadMoreItems} className="btn btn-accent">
                  Load more
                </button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Work;
