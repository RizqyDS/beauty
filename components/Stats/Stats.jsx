import { useRef } from "react";
import { useInView } from "framer-motion";
import CountUp from "react-countup";

const statsData = [
  {
    endCountNum: 9,
    endCountText: "/10",
    text: "Rating dari Klien",
  },
  {
    endCountNum: 99,
    endCountText: "%",
    text: "Kepuasan Klien",
  },
  {
    endCountNum: 250,
    endCountText: "/year",
    text: "Permintaan Operasi",
  },
  {
    endCountNum: 50,
    endCountText: "+",
    text: "Klien Berlangganan",
  },
];

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { treshold: 0.2 });

  return (
    <div ref={ref} className="bg-accent mt-[70px] py-10 w-full">
      <div className="container mx-auto h-full">
        <div
          className="text-[#fddd72] flex flex-col items-center justify-between 
          xl:flex-row h-full gap-14 text-center xl:text-center"
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

export default Stats;
