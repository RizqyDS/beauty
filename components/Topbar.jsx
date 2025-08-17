import { RiMailFill, RiWhatsappFill } from "react-icons/ri";
import Socials from "./Socials";
import { FaLocationDot } from "react-icons/fa6";

const Topbar = () => {
  return (
    <section
      className="py-4 xl:h-16 xl:py-0 bg-gradient-to-t from-[#009B97] to-[#1091849a] flex items-center"
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
              <a className="font-medium text-white hover:scale-105 transition duration-200" href="" target="_blank">+62 XXXX XXXX XXXX</a>
            </div>
            {/* mail */}
            <div className="flex items-center">
              <div
                className="w-8 h-8 text-white flex items-center 
              justify-center"
              >
                <RiMailFill />
              </div>
              <a className="font-medium text-white hover:scale-105 transition duration-200" href="mailto:info@tri-artha.com?subject=Feedback&body=Message">info@saigonbeauty-id.com</a>
            </div>
            {/* location */}
            <div className="flex items-center">
              <div
                className="w-8 h-8 text-white flex items-center 
              justify-center"
              >
                <FaLocationDot />
              </div>
              <a className="font-medium text-white hover:scale-105 transition duration-200" target="_blank" href="https://maps.app.goo.gl/pbipY4UyvA5dwiEa6">Phong Kham Saigon Beauty, Ho Chi Minh City, Vietnam</a>
            </div>
          </div>
          {/* socials */}
          <Socials
            containerStyles="flex items-center gap-8 mx-auto xl:mx-3"
            iconStyles="text-primary"
          />
        </div>
      </div>
    </section>
  );
};

export default Topbar;
