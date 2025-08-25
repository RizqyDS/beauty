import Image from "next/image";
import { useState } from "react";

const GalleryItem = ({ img }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="rounded-[30px] p-2">
      <div
        className="xl:w-[250px] xl:h-[250px] p-5 rounded-[10px] flex items-center
      justify-center mb-5 relative overflow-hidden bg-[#f4f4f4] cursor-pointer"
      >
        <Image
          src={img}
          fill
          priority
          quality={100}
          className="object-fit"
          alt=""
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <img 
            src={img}
            alt="Full preview" 
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default GalleryItem;
