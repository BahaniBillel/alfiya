import Image from "next/image";
import React from "react";
import logo from "../images/ALIFYA-Logo.png";
import {
  ShoppingBagIcon,
  HeartIcon,
  MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/solid";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaBars,
} from "react-icons/fa";
import Link from "next/link";

const NavigationBlog = () => {
  return (
    <div className=" px-5 md:px-32 py-4 grid  md:grid-cols-12 grid-rows-2 md:grid-rows-1  items-center md:justify-center font-sans bg-slate-50 ">
      <div className="col-span-12 md:col-span-2 relative flex flex-row justify-center items-center">
        <Link href="/">
          <Image src={logo} contain="true" width={100} alt="na" />
        </Link>
      </div>

      <nav className="col-span-6 md:col-span-7">
        <ul className=" hidden md:flex flex-row space-x-14 justify-center  ">
          <li className="nav ">Home</li>
          <li className="nav">Blogs</li>
          <li className="nav">Community</li>
          <li className="nav">Contact</li>
        </ul>
        <FaBars className="block md:hidden text-xl" />
      </nav>

      <div className="col-span-6 md:col-span-3 relative py-3  flex flex-row space-x-5 items-center">
        <div className="flex flex-grow"></div>
        <FaInstagram className="cursor-pointer hover:text-teal-500 duration-500 transition-colors ease-in-out" />
        <FaFacebookF className="cursor-pointer hover:text-teal-500 duration-500 transition-colors ease-in-out" />
        <FaLinkedinIn className="cursor-pointer hover:text-teal-500 duration-500 transition-colors ease-in-out" />
        <FaTwitter className="cursor-pointer hover:text-teal-500 duration-500 transition-colors ease-in-out" />
      </div>
    </div>
  );
};

export default NavigationBlog;
