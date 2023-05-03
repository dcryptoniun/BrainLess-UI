import React from "react";
import cssjson from "./cssValues.json";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="h-full gap-4 ml-24 md:ml-52 ">
        {cssjson.elements.map((element) => (
          <div
            key={element.id}
            className={
              "flex flex-col gap-4 p-2 border-2 border-r-teal-500 border-t-fuchsia-500 md:flex-row rounded-2xl border-b-teal-500 border-l-fuchsia-500 hover:border-l-teal-500 hover:border-b-fuchsia-500 hover:border-r-fuchsia-500 hover:border-t-teal-500"
            }
          >
            <div className="flex items-center justify-center p-2">
              <div className={`${element.css} `}>Wind Tails</div>
            </div>
            <textarea
              value={element.css}
              className="w-full p-2 text-white bg-gray-900 rounded"
              readOnly
            />
          </div>
        ))}
      </div>
    </div>
  );
}
