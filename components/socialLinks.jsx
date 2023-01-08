import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";

function SocialLinks({ style, search }) {
  return (
    <div className=" relative py-3  flex flex-row space-x-5 items-center">
      <FaInstagram
        className={`cursor-pointer ${style} hover:text-teal-500 duration-500 transition-colors ease-in-out`}
      />
      <FaFacebookF
        className={`cursor-pointer ${style} hover:text-teal-500 duration-500 transition-colors ease-in-out`}
      />
      <FaLinkedinIn
        className={`cursor-pointer ${style}  hover:text-teal-500 duration-500 transition-colors ease-in-out`}
      />
      <FaTwitter
        className={`cursor-pointer ${style} hover:text-teal-500 duration-500 transition-colors ease-in-out`}
      />
      <MagnifyingGlassCircleIcon
        className="h-8 text-gray-300  text-sm border-none col-span-1
       hover:text-teal-400 transition-colors ease-in-out duration-200 cursor-pointer"
        onClick={search}
      />
    </div>
  );
}

export default SocialLinks;
