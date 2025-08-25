import { useRef } from "react";
import { useInView } from "framer-motion";
import CountUp from "react-countup";

const statsData = [
  {
    endCountNum: 5,
    endCountText: "+",
    text: "Klien Terpercaya",
  },
  {
    endCountNum: 14,
    endCountText: "+",
    text: "Pelayanan Kami",
  },
  {
    endCountNum: 10,
    endCountText: "+",
    text: "Tahun Pengalaman",
  },
];

const StatsAbout = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { treshold: 0.2 });

  return (
    <div ref={ref} className=" py-10 w-full">
      <div className="container mx-auto h-full">
        <div
          className="text-[#D4AF37] flex flex-col items-center justify-between 
          xl:flex-row h-full gap-10 text-center xl:text-center"
        >
          {statsData.map((item, index) => {
            return (
              <div className="w-full" key={index}>
                <div className="text-5xl font-semibold">
                  {inView && (
                    <CountUp
                      start={0}
                      end={item.endCountNum}
                      delay={0.5}
                      duration={3}
                    />
                  )}
                  <span>{item.endCountText}</span>
                </div>
                <p className="mt-5">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatsAbout;
