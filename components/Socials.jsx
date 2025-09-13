import Link from "next/link"
import { FaTiktok } from "react-icons/fa";
import {RiInstagramFill, RiWhatsappFill} from "react-icons/ri";

const socials = [
    {
        icon: <RiInstagramFill />,
        path: "https://www.instagram.com/cece_hochiminh/"
    },
    {
        icon: <FaTiktok />,
        path: "https://www.tiktok.com/@yelly.suwardi?lang=en"
    },
    {
        icon: <RiWhatsappFill />,
        path: "https://api.whatsapp.com/send/?phone=628111780091&text&type=phone_number&app_absent=0"
    },
];

const Socials = ({containerStyles, iconStyles}) => {
  return <div className={containerStyles}>
    {socials.map((item, index) => {
        return <Link href={item.path} key={index} className={`text-white hover:scale-125 transition duration-200 ${iconStyles}`} target="_blank" ><span>{item.icon}</span></Link>
    })}
  </div>
}

export default Socials