import Image from "next/image";

const CompanyLogo = () => {
  return (
    <div className="bg-accent relative w-full py-9 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="whitespace-nowrap animate-scroll">
            {[...Array(2)].map((_, containerIndex) => (
              <div
                key={containerIndex}
                className="inline-flex items-center gap-[10px] mr-[50px]"
              >
                {Array.from({ length: 11 }).map((_, index) => (
                  <div className="inline-block" key={index}>
                    <Image
                      src={`/assets/company/com-${index + 1}.png`}
                      alt="company"
                      height={350}
                      width={400}
                      className="min-w-[350px] w-[200px] h-[50px] object-none"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyLogo;
