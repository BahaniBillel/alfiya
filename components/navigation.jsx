import Image from "next/image";
import React from "react";
import logo from "../images/ALIFYA-Logo.png";
import {
  ShoppingBagIcon,
  HeartIcon,
  MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className=" px-20 md:px-44 py-4 md:grid grid-cols-12 h-24 items-center  ">
      <div className="col-span-2 relative">
        <Link href="/">
          <Image src={logo} contain="true" width={100} alt="na" />
        </Link>
      </div>

      <nav className="col-span-7">
        <ul className=" hidden md:flex flex-row space-x-14 justify-center ">
          <Link href="/">
            <li className="nav">Home</li>
          </Link>
          <Link href="/about">
            <li className="nav">About us</li>
          </Link>
          <Link href="/blogs">
            <li className="nav">Blogs</li>
          </Link>
          <Link href="/contact">
            <li className="nav">Contact</li>
          </Link>
        </ul>
      </nav>

      <div className="col-span-3 relative py-3 grid grid-cols-7 items-center justify-center border-b-[1px] border-gray-300  ">
        <input
          className="  px-4  outline-none col-span-6  "
          placeholder="Search Article"
        />
        <MagnifyingGlassCircleIcon className="h-8 text-gray-300  text-sm border-none col-span-1" />
      </div>
    </div>
  );
};

export default Navigation;
