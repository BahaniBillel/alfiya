import React from "react";
import {
  MagnifyingGlassCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

function SearchInput({ toggle, xmark }) {
  return (
    <div
      className={`fixed ${toggle} transition-all duration-150 ease-in-out delay-150   top-0 left-0 h-screen w-screen bg-gray-700 opacity-95 flex flex-col justify-center px-40 z-[80]`}
    >
      {/* search field */}
      <div className="  flex flex-row flex-nowrap items-center justify-center relative overflow-hidden  ">
        <input
          className="  px-4  outline-none w-full py-3 rounded-full  "
          placeholder="Search Article"
        />
      </div>
      <XMarkIcon
        className="h-8 text-gray-300  text-sm border-none absolute top-5 right-5 cursor-pointer"
        onClick={xmark}
      />
    </div>
  );
}

export default SearchInput;
