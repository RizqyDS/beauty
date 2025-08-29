"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import Logo from "./Logo";
import Socials from "./Socials";
import { Link as ScrollLink } from "react-scroll";

const links = [
  {
    name: "beranda",
    path: "beranda",
  },
  {
    name: "tentang",
    path: "tentang",
  },
  {
    name: "pelayanan",
    path: "pelayanan",
  },
  {
    name: "galeri",
    path: "galeri",
  },
  {
    name: "testimoni",
    path: "testimoni",
  },
  {
    name: "kontak",
    path: "kontak",
  },
];

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        className="text-black flex items-center justify-center text-3xl"
        onClick={() => setIsOpen(true)}
      >
        <RiMenu3Fill />
      </SheetTrigger>
      <SheetContent className="border-none text-accent">
        <div className="flex flex-col pt-16 pb-8 items-center justify-between h-full">
          <SheetHeader>
            <SheetTitle>
              <Logo />
            </SheetTitle>
            <SheetDescription className="sr-only">
              Navigation Menu
            </SheetDescription>
          </SheetHeader>
          <ul className="w-full flex flex-col gap-10 justify-center text-center">
            {links.map((link, index) => {
              return (
                <li
                  key={index}
                  className="text-accent uppercase font-primary font-medium tracking-[1.2px]"
                >
                  <ScrollLink
                    to={link.path}
                    smooth
                    spy
                    duration={500}
                    className="cursor-pointer"
                    activeClass="text-accent"
                    onClick={() => setIsOpen(false)} // close menu on click
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              );
            })}
          </ul>
          {/* socials */}
          <Socials containerStyles="bg-accent w-[150px] h-[50px] items-center justify-center rounded-[25px] text-xl flex gap-6" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavMobile;
