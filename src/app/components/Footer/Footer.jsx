import React from "react";
import { IoMdPin } from "react-icons/io";
import { FaMobileScreen } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={`h-[300px] grid md:grid-cols-3 grid-cols-1 grid-rows-1 items-center text-[#5f4633] md:text-xl text-md`}>
      <div className="flex items-center justify-center h-full">
      <Image className='ml-5 w-auto h-auto' src={'/images/titulo.png'} width={150} height={50} alt='title' />
      </div>
      <div className="flex flex-col gap-6 items-center justify-center h-full pb-10">
        <span className="flex"><IoMdPin />Moreno, Buenos Aires, Argentina</span>
        <span className="flex"><FaMobileScreen /> (+549) 11 12 34 56 78</span>
        <span className="flex"><MdEmail />komorebi.gin@gmail.com</span>
      </div>
      <div className="flex flex-col items-center pb-6">
        <span>Contactanos</span>
        <div className=" space-x-2 flex">
          <span><RiInstagramFill /></span>
          <span><FaFacebook /></span>
          <span><FaLinkedin /></span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
