import React from "react";
import Link from "next/link";
import Image from "next/image";

function Nestedlinks({ sublinks, logo }) {
  return (
    <ul className="hidden group-hover:flex flex-col absolute top-5 left-0 z-30 bg-white w-40 h-96 py-5 px-3 rounded-sm shadow-md  space-y-4">
      {sublinks.map((sub, i) => (
        <Link href="/blogs " key={i}>
          <div className=" sublink">{sub}</div>
        </Link>
      ))}

      <Link href="/">
        <div className="bg-gray-100 rounded-sm py-3  absolute left-0 bottom-0 w-fit px-10">
          <Image src={logo} alt="na" />
        </div>
      </Link>
    </ul>
  );
}

export default Nestedlinks;
