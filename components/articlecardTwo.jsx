import Image from "next/image";
import Photo from "../images/cardImage.jpg";
import React from "react";
import { ForwardIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function ArticleCardTwo({
  category,
  date,
  image,
  title,
  content,
  href,
  hrefcat,
  catcolor,
  daysago,
}) {
  return (
    <div
      className="flex-nowrap flex flex-col space-y-3 items-start  px-5 md:px-20 lg:px-5
     bg-white border-b  hover:shadow-md  duration-200 ease-in-out transition-all py-5 font-sans "
    >
      {/* upper row */}
      <div className="flex flex-row justify-center items-center flex-nowrap space-x-3">
        <div className="relative h-5 w-5">
          <Link href={href}>
            <Image src={image} fill className="w-fit rounded-full" alt="na" />
          </Link>
        </div>
        <div className="flex flex-row space-x-2 justify-center text-[10px] items-center  nowrap text-gray-600">
          <p className="text-black font-semibold">Bahani Billel</p>
          <p>{date}</p>
          <p>{daysago}</p>
        </div>
      </div>

      {/* middle row : content */}
      <div className="flex flex-row space-x-3">
        <div className="pr-5 ltr:ml-3 rtl:mr-3  ">
          <Link href={href}>
            <h2 className="font-semibold  text-lg md:text-xl ">{title}</h2>
          </Link>
          <p className=" hidden md:block text-sm text-gray-600 line-clamp-2 md:line-clamp-3   ">
            {content}
          </p>
        </div>
        <div className="relative h-10 w-28 md:h-24 md:w-auto md:min-w-[120px] md:min-h-[60px] ">
          <Link href={href}>
            <Image src={image} fill className="w-fit " alt="na" />
          </Link>
        </div>
      </div>
      {/* bottom row */}

      <div className="flex flex-row justify-center items-center flex-nowrap space-x-3">
        <div className="flex flex-row space-x-2 justify-center text-[10px] items-center  nowrap text-gray-600">
          <Link href={hrefcat} className="cursor-pointer">
            <p className={`px-2 py-1 ${catcolor} rounded-xl`}>{category}</p>
          </Link>
          <p>5 min read</p>
        </div>
      </div>
    </div>
  );
}

export default ArticleCardTwo;
