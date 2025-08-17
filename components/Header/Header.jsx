"use client";
import Logo from "./Logo";
import Nav from "./Navbar";

const Header = () => {
  return (
    <header className="bg-white py-4 sticky top-0">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />
          <div className="flex items-center gap-12">
            {/* navbar */}
            <Nav
              containerStyles="hidden xl:flex"
              listStyles="flex gap-6"
              linkStyles="text-secondary font-secondary text-lg tracking-[1.4px] 
              transition-all duration-300 cursor-pointer"
            />
            {/* btn */}
              <button className="hidden btn btn-accent xl:flex rounded-[25px] hover:scale-110 font-semibold transition duration-300">
                Book An Appointment
              </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;