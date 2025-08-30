import Link from "next/link"
import { FaLocationDot } from "react-icons/fa6";
import {RiInstagramFill, RiWhatsappFill} from "react-icons/ri";

const socials = [
    {
        icon: <RiInstagramFill />,
        path: "https://www.instagram.com/phongkham.saigonbeauty/"
    },
    {
        icon: <FaLocationDot />,
        path: "https://maps.app.goo.gl/pbipY4UyvA5dwiEa6"
    },
    {
        icon: <RiWhatsappFill />,
        path: ""
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