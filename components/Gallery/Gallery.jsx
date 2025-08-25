import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedText from "../AnimatedText";
import GalleryItem from "./GalleryItem";
import Pretitle from "../Pretitle";

// sample data for projects with various categories
const data = [
  {
    category: "Foto Klinik",
    img: "/assets/gallery/klinik/picture-1.jpg",
  },
  {
    category: "Foto Klinik",
    img: "/assets/gallery/klinik/picture-2.jpg",
  },
  {
    category: "Foto Klinik",
    img: "/assets/gallery/klinik/picture-3.jpg",
  },
  {
    category: "Foto Klinik",
    img: "/assets/gallery/klinik/picture-4.jpg",
  },
  {
    category: "Foto Klinik",
    img: "/assets/gallery/klinik/picture-5.jpg",
  },
  {
    category: "Foto Pasien",
    img: "/assets/gallery/pasien/picture-1.jpg",
  },
  {
    category: "Foto Ruangan",
    img: "/assets/gallery/ruangan/picture-1.jpg",
  },
  {
    category: "Foto Ruangan",
    img: "/assets/gallery/ruangan/picture-2.jpg",
  },
  {
    category: "Foto Ruangan",
    img: "/assets/gallery/ruangan/picture-3.jpg",
  },
  {
    category: "Foto Ruangan",
    img: "/assets/gallery/ruangan/picture-4.jpg",
  },
  {
    category: "Foto Ruangan",
    img: "/assets/gallery/ruangan/picture-5.jpg",
  },
  {
    category: "Foto Ruangan",
    img: "/assets/gallery/ruangan/picture-6.jpg",
  },
  {
    category: "Video",
    img: "/assets/gallery/video/video-1.mp4",
  },
  {
    category: "Video",
    img: "/assets/gallery/video/video-2.mp4",
  },
  {
    category: "Video",
    img: "/assets/gallery/video/video-3.mp4",
  },
  {
    category: "Video",
    img: "/assets/gallery/video/video-4.mp4",
  },
  {
    category: "Video",
    img: "/assets/gallery/video/video-5.mp4",
  },
];

const Gallery = () => {
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

  //filter Gallery items based on the selected tab
  const filterGallery =
    tabValue === "semua foto"
      ? data.filter((item) => item.category !== "semua foto")
      : data.filter((item) => item.category === tabValue);

  // handle loading more items
  const loadMoreItems = () => {
    //adjust the number to control how many items are loaded at a time
    setVisibleItems((prev) => prev + 2);
  };

  return (
    <section className="pt-24 min-h-[1000px] " id="gallery">
      <div className="container mx-auto">
        <Pretitle text="Galeri" center />
        <AnimatedText
          text="Jelajahi Koleksi Pelayanan keunggulan"
          textStyles="h2 mb-[30px] text-center xl:mb-0"
        />
        <Tabs
          defaultValue="semua foto"
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
            <div className="grid md:grid-cols-1 lg:grid-cols-5 gap-[10px]">
              <AnimatePresence>
                {filterGallery.slice(0, visibleItems).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <GalleryItem {...item} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            {/* load more button */}
            {visibleItems < filterGallery.length && (
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

export default Gallery;
