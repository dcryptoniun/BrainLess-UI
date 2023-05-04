"use client";
import React, { useState } from "react";

export default function Play() {
  const [inputText, setInputText] = useState("");

  return (
    <div className="justify-center w-full h-screen items-center flex flex-col gap-8">
      <h1 className="font-mono text-3xl text-green-500 relative">
        Wind tails Playground{" "}
        <span className="text-xs animate-pulse text-emerald-500 absolute">
          beta
        </span>
      </h1>
      <div className="grid w-1/2 gap-4 h-auto   grid-col-1 md:grid-cols-2  ">
        <div className=" flex justify-center items-center text-center border p-3 rounded-xl">
          <div className={inputText}>
            <h1>Wind Tails</h1>
          </div>
        </div>
        <div>
          {" "}
          <textarea
            className="w-full h-40 border border-gray-300 p-2 bg-transparent rounded-xl "
            value={inputText}
            placeholder="type tailwind classes here..."
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
