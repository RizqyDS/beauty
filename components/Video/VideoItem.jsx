import { useState } from "react";

const VideoItem = ({ img, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (  
    <div className="rounded-[30px] mt-5 p-3 shadow-custom">
      <div className="relative group flex-grow transition-all w-full h-[300px] duration-500 cursor-pointer">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="bg-black bg-opacity-60 rounded-full p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M6 4.5v7l6-3.5-6-3.5z" />
            </svg>
          </div>
        </div>
        <video
          src={img}
          alt="Video thumbnail"
          className="h-full w-full object-cover object-center rounded-[20px]"
          onClick={() => setIsOpen(true)}
        />
      </div>
      <h3 className="mt-5 text-center text-black font-semibold uppercase">{title}</h3>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <video
            src={img}
            controls
            autoPlay
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default VideoItem;
