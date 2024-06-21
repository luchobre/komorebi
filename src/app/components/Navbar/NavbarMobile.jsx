'use client'
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { MdContactPhone } from "react-icons/md";
import { BiSolidDrink } from "react-icons/bi";
import { PiPlantDuotone } from "react-icons/pi";
import { FaPeopleGroup } from "react-icons/fa6";

const NavbarMobile = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scroll down
        setIsVisible(false);
      } else {
        // Scroll up
        setIsVisible(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`mt-44 fixed inset-0 z-50 bg-[rgb(171,150,128)] bg-opacity-80 md:hidden transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'hidden'}`}>
      <div className="w-[70%] h-screen bg-navbar-bg md:hidden justify-between flex flex-col z-50">
        <ul className="text-amber-950 pt-10 pl-10 text-xl ">
          <div className="flex items-center">
            <BiSolidDrink />
            <Link
              href="#about"
              className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-[#5f4633]"
            >
              <span>Nuestro Gin</span>
            </Link>
          </div>

          <div className="flex items-center">
          <PiPlantDuotone />
            <Link
              href="#botanicos"
              className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-[#5f4633]"
            >
              <span>Botánicos</span>
            </Link>
          </div>

          <div className="flex items-center">
          <FaPeopleGroup />
            <Link
              href="#skills"
              className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-[#5f4633]"
            >
              <span>Nosotros</span>
            </Link>
          </div>

          <div className="flex items-center">
            <MdContactPhone />
            <Link
              href="#contact"
              className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-[#5f4633]"
            >
              <span>Contacto</span>
            </Link>
          </div>
        </ul>
        <div className="text-sm text-[#5f4633] p-10 mb-20">
          Made by Luciano Bregoli
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;
