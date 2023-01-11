import React from "react";

function Paragraph({ subtitle, subcontent, quotation, owner }) {
  return (
    <div className="font-sans">
      <h1 className="text-4xl my-5">{subcontent ? subtitle : null}</h1>
      <p className="text-gray-700 text-lg font-light tracking-wide leading-8">
        {" "}
        {subcontent ? subcontent : null}
      </p>

      {quotation ? (
        <div className="pl-20 flex flex-row items-center w-full border-l-2 border-black border-solid my-5 ">
          <p className="text-4xl font-extralight italic">
            {quotation}
            <span>-</span> <span className="text-2xl font-bold">{owner}</span>
          </p>
        </div>
      ) : null}
    </div>
  );
}

export default Paragraph;
