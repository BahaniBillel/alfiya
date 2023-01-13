import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

function Feature() {
  return (
    <div className="p-4 border rounded-md bg-white hover:bg-teal-50 transition-all duration-150 ease-in-out ">
      <p className="text-sm pb-5 ">SEO Implementation</p>
      <div className="flex flex-row space-x-3 items-end">
        <p className="text-base font-semibold">
          The latest of SEO technlogie implemented in every webpage
        </p>
        <FaArrowCircleRight className="h-5" />
      </div>
    </div>
  );
}

export default Feature;
