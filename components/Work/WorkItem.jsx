import Image from "next/image";

const WorkItem = ({ img, title, description }) => {
  return (
    <div className="rounded-[30px] p-10 shadow-custom">
      <div
        className="xl:w-[600px] xl:h-[550px] p-10 rounded-[30px] flex items-center
      justify-center mb-10 relative overflow-hidden  bg-[#f4f4f4] "
      >
        <Image
          src={img}
          fill
          priority
          quality={100}
          className="object-fit"
          alt=""
        />
      </div>
      <div className="flex items-center justify-center">
        <div className="flex-1">
          <h3 className="h3">{title}</h3>
          <p className="mt-4">{description}</p>
        </div>
        
      </div>
    </div>
  );
};

export default WorkItem;
