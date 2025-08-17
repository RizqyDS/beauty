import { RiMailFill, RiWhatsappFill } from "react-icons/ri";
import Socials from "../Socials";
import { FaLink } from "react-icons/fa";
import { MdFax } from "react-icons/md"

const Topbar = () => {
  return (
    <section
      className="py-4 xl:h-16 xl:py-0 bg-gradient-to-t from-[#347433] to-[#16610E] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        {/* phone, mail & socials */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="hidden xl:flex items-center gap-8">
            {/* phone */}
            <div className="flex items-center">
              <div
                className="w-8 h-8 text-white flex items-center 
              justify-center"
              >
                <RiWhatsappFill />
              </div>
              <a className="font-secondary text-white hover:scale-105 transition duration-200" href="https://api.whatsapp.com/send/?phone=6281770833134&text&type=phone_number&app_absent=0" target="_blank">+62 817-7083-3134</a>
            </div>
            {/* office */}
            <div className="flex items-center">
              <div
                className="w-8 h-8 text-white flex items-center 
              justify-center"
              >
                <MdFax />
              </div>
              <a className="font-secondary text-white">+021 2930-8235</a>
            </div>         
          </div>
          {/* socials */}
          <Socials
            containerStyles="flex items-center gap-8 mx-auto xl:mx-0"
            iconStyles="text-primary"
          />
        </div>
      </div>
    </section>
  );
};

export default Topbar;