import React from "react";

function Indicator({ subtitles }) {
  return (
    <ul className="flex flex-col flex-nowrap ">
      {subtitles.find((i) => i.title)}
    </ul>
  );
}

export default Indicator;
