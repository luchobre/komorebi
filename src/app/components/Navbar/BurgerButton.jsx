'use client'
import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import NavbarMobile from './NavbarMobile';
import Image from "next/image";

const BurgerButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <>
      <div className="w-full h-44 z-50 bg-navbar-bg bg-opacity-50 text-black items-center justify-between flex md:hidden text-xl">
        <div className="gap-4 items-center">
          <Button 
            isIconOnly 
            color="[#ab9680]" 
            variant="ghost" 
            aria-label="Toggle Menu" 
            className='ml-4' 
            onClick={handleOpenMenu}
          >
            {isOpen ? <IoClose /> : <RxHamburgerMenu />}
          </Button>
        </div>
        <div className="ml-5 w-auto h-auto">
          <Image
            src={'/images/titulo.png'}
            width={200}
            height={50}
            alt="titulo"
          />
        </div>
        <Image className="mr-5 w-auto h-auto" src={'/images/logo.png'} width={100} height={100} alt="logo" />
      </div>

      {/* Burger Menu */}
      {isOpen && (
        <NavbarMobile />
      )}
    </>
  );
};

export default BurgerButton;
