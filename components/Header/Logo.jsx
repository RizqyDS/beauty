import Image from "next/image";
import Link from "next/link";

const Logo = ({ light = false }) => {
  // determine the text color based on the light prop\
  const colorClass = light ? "text-white" : "text-secondary"; // default to black
  return (
    <Link href="/" className="flex items-center font-secondary text-3xl tracking-[1px] gap-[15px]">
      <Image src="/assets/logo.png" width={35} height={35} alt="logo" />
      <span className={colorClass}>BeautyClinic</span>
    </Link>

  );
};

export default Logo;