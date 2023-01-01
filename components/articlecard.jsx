import Image from "next/image";
import Photo from "../images/cardImage.jpg";
import React from "react";
import { ForwardIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function ArticleCard({ category, date, image, title, content, href }) {
  return (
    <div className="flex-nowrap flex flex-col   px-5 bg-white hover:shadow-md  duration-200 ease-in-out transition-all py-2  ">
      {image ? (
        <div className=" relative overflow-hidden h-48">
          <h3 className="font-semibold py-1 absolute bottom-5 left-5 z-30 bg-teal-400 rounded-sm px-2 text-xs text-white">
            {category}
          </h3>
          <Link href={href}>
            <Image src={image} fill className="w-fit" alt="na" />
          </Link>
        </div>
      ) : null}
      <div className=" py-2">
        <p className="text-xs text-gray-500">{date}</p>
        <Link href={href}>
          <h2 className="font-semibold text  hover:text-teal-400 transition-all duration-500 ease-in-out">
            {title}
          </h2>
        </Link>
        <p className="text-xs text-gray-700 ">{content}</p>

        <div className="flex flex-row space-x-2 items-center text-xs font-bold mt-4 pb-4  ">
          <p>Read more</p>
          <ForwardIcon className="h-4 text-gray-900 " />
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
