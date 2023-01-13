import Image from "next/image";
import React, { useState } from "react";
import logo from "../images/ALIFYA-Logo.png";
import logo2 from "../images/ALIFYA-Logo.jpg";

import Link from "next/link";
import { FaBars, FaAngleUp, FaAngleDown } from "react-icons/fa";
import { XMarkIcon } from "@heroicons/react/24/solid";
import SocialLinks from "./socialLinks";
import Nestedlinks from "./nestedlinks";

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

  const links = [
    { id: 1, name: "Home", url: "/", subs: [] },
    { id: 2, name: "About", url: "/about", subs: [] },
    {
      id: 3,
      name: "Services",
      url: "/services",
      subs: [
        {
          subId: 1,
          subname: "Developpement sitewebs",
          subUrl: "/services/websites",
        },
        { subId: 2, subname: "Flutter", subUrl: "/services/flutter" },
        {
          subId: 3,
          subname: "whiteboard animation",
          subUrl: "/services/whiteboard",
        },
        { subId: 4, subname: "SEO Optimisation", subUrl: "/services/seo" },
        { subId: 5, subname: "SSL Certification", subUrl: "/services/ssl" },
      ],
    },
    {
      id: 4,
      name: "Blog",
      url: "/blogs",
      subs: [
        { subId: 1, subname: "UX/UI Design", subUrl: "/blogs/uiuxdesign" },
        {
          subId: 1,
          subname: "Content Marketing",
          subUrl: "/blogs/contentmarketing",
        },
      ],
    },
    { id: 5, name: "Contact", url: "/contact", subs: [] },
  ];

  const [carret, setCarret] = React.useState(false);

  const ToggleCarret = () => {
    setCarret(!carret);
  };
  return (
    <div className=" px-5 lg:px-44 py-4 grid grid-cols-12 h-24 items-center   ">
      <div className="col-span-11 md:col-span-3 relative">
        <Link href="/">
          <Image src={logo} contain="true" width={100} alt="na" />
        </Link>
      </div>

      <nav className="col-span-1 md:col-span-9 lg:col-span-6 ">
        {/* desktop view */}
        <ul className=" hidden md:flex flex-row space-x-14 justify-center font-sans">
          {links.map(({ id, name, url, subs }) => (
            <li
              className="nav group relative "
              key={id}
              onMouseOver={ToggleCarret}
            >
              <div className="flex flex-row space-x-2 justify-center items-center flex-nowrap group ">
                <Link href={url}>{name}</Link>
                {subs.length ? (
                  <ul
                    key={id}
                    className="hidden group-hover:flex flex-col absolute top-5 left-0 z-30 bg-white opacity-90 w-40 h-96 py-5 px-3 rounded-sm   space-y-4"
                  >
                    {subs.map(({ subId, subname, subUrl }) => (
                      <li key={subId} className="sublink">
                        <Link href={subUrl}>{subname}</Link>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {subs.length ? (
                  <FaAngleUp className="text-sm text-gray-900 group-hover:rotate-180 " />
                ) : null}
              </div>
            </li>
          ))}
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
            {links.map((link) => (
              <li className="navmobile" key={link.id}>
                <Link href={link.url} onClick={LinkItemClicked}>
                  {link.name}
                </Link>
              </li>
            ))}

            <SocialLinks style={"text-teal-200 "} />
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
