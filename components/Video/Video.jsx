import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedText from "../AnimatedText";
import VideoItem from "./VideoItem";
import Pretitle from "../Pretitle";

// sample data for projects with various categories
const data = [
  {
    category: "Foto Klinik",
    img: "/assets/videos/video-1.mp4",
  },
  {
    category: "Foto Klinik",
    img: "/assets/videos/video-2.mp4",
  },
  {
    category: "Foto Klinik",
    img: "/assets/videos/video-3.mp4",
  },
  {
    category: "Foto Klinik",
    img: "/assets/videos/video-4.mp4",
  },
  {
    category: "Foto Klinik",
    img: "/assets/videos/video-5.mp4",
  },
];

const Video = () => {
  // extract unique categories from the data
  const uniqueCategories = Array.from(
    new Set(data.map((item) => item.category))
  );

  // create tab data with "all" category and unique categories from data
  const tabData = [
    { category: "semua foto" },
    ...uniqueCategories.map((category) => ({ category })),
  ];

  // state to manage the currently selected tab
  const [tabValue, setTabValue] = useState("semua foto");
  // number of items to show initially
  const [visibleItems, setVisibleItems] = useState();

  //filter Video items based on the selected tab
  const filterVideo =
    tabValue === "semua foto"
      ? data.filter((item) => item.category !== "semua foto")
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
          defaultValue="semua foto"
          className="w-full  flex flex-col mt-12 items-center"
        >
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
