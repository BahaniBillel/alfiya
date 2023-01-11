import Image from "next/image";
import React, { useState } from "react";
import logo from "../images/ALIFYA-Logo.png";
import logo2 from "../images/ALIFYA-Logo.jpg";

import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { XMarkIcon } from "@heroicons/react/24/solid";
import SocialLinks from "./socialLinks";

const Navigation = ({ search }) => {
  const [displaymobile, setDisplaymobile] = useState(false);

  const MobilemeniHandler = () => {
    setDisplaymobile(!displaymobile);
  };

  const LinkItemClicked = () => {
    setDisplaymobile(false);
  };

  const Closemobilemenu = () => {
    setDisplaymobile(false);
  };

  // search toggle

  const [open, setOpen] = useState();
  const openSearchField = () => {
    alert("hello from navigation component");
  };

  return (
    <div className=" px-5 lg:px-44 py-4 grid grid-cols-12 h-24 items-center   ">
      <div className="col-span-11 md:col-span-3 relative">
        <Link href="/">
          <Image src={logo} contain="true" width={100} alt="na" />
        </Link>
      </div>

      <nav className="col-span-1 md:col-span-9 lg:col-span-6 ">
        <ul className=" hidden md:flex flex-row space-x-14 justify-center font-sans">
          <Link href="/">
            <li className="nav">Home</li>
          </Link>
          <Link href="/about">
            <li className="nav">About me</li>
          </Link>
          <Link href="/blogs">
            <li className="nav">Blogs</li>
          </Link>
          <Link href="/services" className="group relative ">
            <li className="nav">
              Services
              <ul className="hidden group-hover:flex flex-col absolute top-5 left-0 z-30 bg-white w-40 h-96 py-5 px-3 rounded-sm shadow-md  space-y-3">
                <Link href="blogs ">
                  <li className=" sublink">Developpment siteweb</li>
                </Link>
                <Link href="blogs ">
                  <li className=" sublink">Application mobile</li>
                </Link>
                <Link href="blogs ">
                  <li className=" sublink">Whiteboard anaimation</li>
                </Link>

                <div className="bg-gray-100 rounded-sm py-3  absolute left-0 bottom-0 w-fit px-10">
                  <Link href="/">
                    <Image src={logo} alt="na" />
                  </Link>
                </div>
              </ul>
            </li>
          </Link>
          <Link href="/contact">
            <li className="nav">Contact</li>
          </Link>
        </ul>

        {/* mobile */}
        <FaBars
          className="block md:hidden text-xl cursor-pointer "
          onClick={MobilemeniHandler}
        />
        <div
          className={`flex flex-col items-center justify-center ${
            displaymobile ? null : "hidden"
          } md:hidden fixed right-0 top-0 bg-black  text-white  w-full h-full z-50 p-10`}
        >
          <span
            className="text-white absolute right-5 top-5 text-2xl cursor-pointer hover:text-teal-500"
            onClick={Closemobilemenu}
          >
            <XMarkIcon className="h-8 text-gray-300  text-sm border-none absolute top-5 right-5" />
          </span>
          <h3 className="text-gray-200">Menu</h3>
          <ul className="flex flex-col items-center justify-center">
            <Link href="/" onClick={LinkItemClicked}>
              <li className="navmobile">Home</li>
            </Link>
            <Link href="/about" onClick={LinkItemClicked}>
              <li className="navmobile">About me</li>
            </Link>
            <Link href="/blogs" onClick={LinkItemClicked}>
              <li className="navmobile">Blogs</li>
            </Link>
            <Link href="/services" onClick={LinkItemClicked}>
              <li className="navmobile">Services</li>
            </Link>
            <Link href="/contact" onClick={LinkItemClicked}>
              <li className="navmobile">Contact</li>
            </Link>

            <SocialLinks style={"text-teal-200 "} search={openSearchField} />
            <div className="col-span-11 md:col-span-2 absolute  bottom-5  ">
              <Link href="/">
                <Image
                  src={logo}
                  contain="true"
                  width={120}
                  alt="na"
                  className="bg-white rounded-md px-5"
                />
              </Link>
            </div>
          </ul>
        </div>
      </nav>

      {/* social linls */}
      <div className="lg:col-span-3 hidden lg:flex  ">
        <div className="flex flex-grow"></div>
        <SocialLinks search={search} />
      </div>
    </div>
  );
};

export default Navigation;
