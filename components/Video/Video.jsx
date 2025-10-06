import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedText from "../AnimatedText";
import VideoItem from "./VideoItem";
import Pretitle from "../Pretitle";

// sample data for projects with various categories
const data = [
  {
    title: "Lipo Tangan",
    category: "Operasi Lipo",
    img: "/assets/videos/videoPasien/video-1.mp4",
  },
  {
    title: "Lipo Tangan",
    category: "Operasi Lipo",
    img: "/assets/videos/videoPasien/video-2.mp4",
  },
  {
    title: "Lipo Tangan",
    category: "Operasi Lipo",
    img: "/assets/videos/videoPasien/video-3.mp4",
  },
  {
    title: "Lipo Tangan",
    category: "Operasi Lipo",
    img: "/assets/videos/videoPasien/video-4.mp4",
  },
  {
    title: "Lipo Tangan",
    category: "Operasi Lipo",
    img: "/assets/videos/videoPasien/video-5.mp4",
  },
  {
    title: "Lipo Tangan",
    category: "Operasi Lipo",
    img: "/assets/videos/videoPasien/video-6.mp4",
  },
  {
    title: "Lipo Tangan",
    category: "Operasi Lipo",
    img: "/assets/videos/videoPasien/video-7.mp4",
  },
  {
    title: "Lipo Tangan",
    category: "Operasi Lipo",
    img: "/assets/videos/videoPasien/video-8.mp4",
  },
  {
    title: "Lipo Perut",
    category: "Operasi Lipo",
    img: "/assets/videos/videoPasien/video-9.mp4",
  },
  {
    title: "Lipo Perut",
    category: "Operasi Lipo",
    img: "/assets/videos/videoPasien/video-10.mp4",
  },
  {
    title: "Lipo Tangan",
    category: "Operasi Lipo",
    img: "/assets/videos/videoPasien/video-1.mp4",
  },
  {
    title: "Lipo Tangan",
    category: "Operasi Lipo",
    img: "/assets/videos/videoPasien/video-2.mp4",
  },
  {
    title: "Lipo Tangan",
    category: "Operasi Lipo",
    img: "/assets/videos/videoPasien/video-3.mp4",
  },
  {
    title: "Lipo Tangan",
    category: "Operasi Lipo",
    img: "/assets/videos/videoPasien/video-4.mp4",
  },
  {
    title: "Lipo Tangan",
    category: "Operasi Lipo",
    img: "/assets/videos/videoPasien/video-5.mp4",
  },
  {
    title: "Lipo Tangan",
    category: "Operasi Lipo",
    img: "/assets/videos/videoPasien/video-6.mp4",
  },
  {
    title: "Lipo Tangan",
    category: "Operasi Lipo",
    img: "/assets/videos/videoPasien/video-7.mp4",
  },
  {
    title: "Lipo Tangan",
    category: "Operasi Lipo",
    img: "/assets/videos/videoPasien/video-8.mp4",
  },
  {
    title: "Lipo Perut",
    category: "Operasi Lipo",
    img: "/assets/videos/videoPasien/video-9.mp4",
  },
  {
    title: "Tummy Tuck",
    category: "Operasi Lipo",
    img: "/assets/videos/videoPasien/video-10.mp4",
  },
  {
    title: "Tummy Tuck",
    category: "Operasi Lipo",
    img: "/assets/videos/videoPasien/video-11.mp4",
  },
  {
    title: "Tummy Tuck",
    category: "Operasi Lipo",
    img: "/assets/videos/videoPasien/video-12.mp4",
  },
  {
    title: "Double Chin",
    category: "Operasi Wajah",
    img: "/assets/videos/videoPasien/video-13.mp4",
  },
  {
    title: "Lipo Perut",
    category: "Operasi Lipo",
    img: "/assets/videos/videoPasien/video-14.mp4",
  },
  {
    title: "Isi Lemak Wajah",
    category: "Operasi Wajah",
    img: "/assets/videos/videoPasien/video-15.mp4",
  },
  {
    title: "Operasi Paha",
    category: "Operasi Lipo",
    img: "/assets/videos/videoPasien/video-16.mp4",
  },
  {
    title: "Operasi Paha",
    category: "Operasi Lipo",
    img: "/assets/videos/videoPasien/video-17.mp4",
  },
  {
    title: "Operasi Paha",
    category: "Operasi Lipo",
    img: "/assets/videos/videoPasien/video-18.mp4",
  },
  {
    title: "Operasi Paha",
    category: "Operasi Lipo",
    img: "/assets/videos/videoPasien/video-19.mp4",
  },
  {
    title: "Lipo Perut",
    category: "Operasi Lipo",
    img: "/assets/videos/videoPasien/video-20.mp4",
  },
  {
    title: "Lipo Perut",
    category: "Operasi Lipo",
    img: "/assets/videos/videoPasien/video-21.mp4",
  },
  {
    title: "Lipo Perut",
    category: "Operasi Lipo",
    img: "/assets/videos/videoPasien/video-22.mp4",
  },
  {
    title: "Rhinoplasty",
    category: "Operasi Wajah",
    img: "/assets/videos/videoPasien/video-23.mp4",
  },
  {
    title: "Rhinoplasty",
    category: "Operasi Wajah",
    img: "/assets/videos/videoPasien/video-24.mp4",
  },
  {
    title: "Lipo Paha",
    category: "Operasi Lipo",
    img: "/assets/videos/videoPasien/video-25.mp4",
  },
  {
    title: "Lipo Paha",
    category: "Operasi Lipo",
    img: "/assets/videos/videoPasien/video-26.mp4",
  },
  {
    title: "Lipo Paha",
    category: "Operasi Lipo",
    img: "/assets/videos/videoPasien/video-27.mp4",
  },
  {
    title: "Lipo Paha",
    category: "Operasi Lipo",
    img: "/assets/videos/videoPasien/video-28.mp4",
  },
  {
    title: "Lipo Paha",
    category: "Operasi Lipo",
    img: "/assets/videos/videoPasien/video-29.mp4",
  },
  {
    title: "Lipo Paha",
    category: "Operasi Lipo",
    img: "/assets/videos/videoPasien/video-30.mp4",
  },
  {
    title: "Cut Belly",
    category: "Operasi Lipo",
    img: "/assets/videos/videoPasien/video-31.mp4",
  },
  {
    title: "Lipo Tangan",
    category: "Operasi Lipo",
    img: "/assets/videos/videoPasien/video-32.mp4",
  },
  {
    title: "Lipo Tangan",
    category: "Operasi Lipo",
    img: "/assets/videos/videoPasien/video-33.mp4",
  },
  {
    title: "Lipo Tangan",
    category: "Operasi Lipo",
    img: "/assets/videos/videoPasien/video-34.mp4",
  },
  {
    title: "Lipo Tangan",
    category: "Operasi Lipo",
    img: "/assets/videos/videoPasien/video-35.mp4",
  },
  {
    title: "Breast Lifting",
    category: "Operasi Payudara",
    img: "/assets/videos/videoPasien/video-36.mp4",
  },
  {
    title: "Breast Lifting",
    category: "Operasi Payudara",
    img: "/assets/videos/videoPasien/video-37.mp4",
  },
  {
    title: "Breast Lifting",
    category: "Operasi Payudara",
    img: "/assets/videos/videoPasien/video-38.mp4",
  },
  {
    title: "Breast Lifting",
    category: "Operasi Payudara",
    img: "/assets/videos/videoPasien/video-39.mp4",
  },
  {
    title: "Rhinoplasty",
    category: "Operasi Wajah",
    img: "/assets/videos/videoPasien/video-40.mp4",
  },
  {
    title: "Rhinoplasty",
    category: "Operasi Wajah",
    img: "/assets/videos/videoPasien/video-41.mp4",
  },
  {
    title: "Halaman Depan",
    category: "Klinik - Operasi",
    img: "/assets/videos/videoKlinik/video-1.mp4",
  },
  {
    title: "Lobby Klinik",
    category: "Klinik - Operasi",
    img: "/assets/videos/videoKlinik/video-2.mp4",
  },
  {
    title: "Ruang Operasi",
    category: "Klinik - Operasi",
    img: "/assets/videos/videoRuangan/video-1.mp4",
  },
  {
    title: "Pasien di Ruang Operasi",
    category: "Klinik - Operasi",
    img: "/assets/videos/videoRuangan/video-2.mp4",
  },
  {
    title: "Pasien di Ruang Operasi",
    category: "Klinik - Operasi",
    img: "/assets/videos/videoRuangan/video-3.mp4",
  },
  {
    title: "Ruangan Tindakan",
    category: "Klinik - Operasi",
    img: "/assets/videos/videoRuangan/video-4.mp4",
  },
];

const Video = () => {
  // extract unique categories from the data
  const uniqueCategories = Array.from(
    new Set(data.map((item) => item.category))
  );

  // create tab data with "all" category and unique categories from data
  const tabData = [
    { category: "semua video" },
    ...uniqueCategories.map((category) => ({ category })),
  ];

  // state to manage the currently selected tab
  const [tabValue, setTabValue] = useState("semua video");
  // number of items to show initially
  const [visibleItems, setVisibleItems] = useState(6);

  //filter Video items based on the selected tab
  const filterVideo =
    tabValue === "semua video"
      ? data.filter((item) => item.category !== "semua video")
      : data.filter((item) => item.category === tabValue);

  // handle loading more items
  const loadMoreItems = () => {
    //adjust the number to control how many items are loaded at a time
    setVisibleItems((prev) => prev + 3);
  };

  return (
    <section className="pt-24 min-h-[500px]">
      <div className="container mx-auto">
        <Pretitle text="Video" center />
        <AnimatedText
          text="Dokumentasi kami melalui video untuk menambah wawasan"
          textStyles="h2 mb-[30px] text-center xl:mb-0"
        />
        <Tabs
          defaultValue="semua video"
          className="w-full  flex flex-col mt-12 items-center"
        >
          <div
            className="flex flex-col xl:flex-row items-center xl:items-start
            xl:justify-between mb-[30px]"
          >
            {/* render tab triggers */}
            <TabsList
              className="max-w-auto border-none h-full mb-[30px] flex flex-col xl:flex-row
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
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-[10px]">
              <AnimatePresence>
                {filterVideo.slice(0, visibleItems).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <VideoItem {...item} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            {/* load more button */}
            {visibleItems < filterVideo.length && (
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

export default Video;
