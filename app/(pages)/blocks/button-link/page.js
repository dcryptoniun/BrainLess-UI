"use client";
import CopyButton from "@/app/components/CopyButton";
import cssjson from "@/app/data/Buttons";
import { useState } from "react";

export default function Buttons() {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = (css) => {
    navigator.clipboard.writeText(css);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="w-full h-screen ">
      <div className="grid h-auto gap-8 p-5 ml-24 md:ml-52">
        {cssjson.categories.map((category) => (
          <div key={category.id}>
            <h2 className="mb-2 text-2xl font-bold">{category.title}</h2>
            <p className="mb-4">{category.description}</p>
            <div className="grid items-center justify-center h-auto max-w-full gap-4 p-5 ">
              {category.elements.map((element) => (
                <div
                  key={element.id}
                  className="grid items-center justify-center h-auto grid-cols-2 gap-4 p-5 border-2 bg-white/10 border-r-teal-500 border-t-fuchsia-500 md:flex-row rounded-2xl border-b-teal-500 border-l-fuchsia-500 hover:border-l-teal-500 hover:border-b-fuchsia-500 hover:border-r-fuchsia-500 hover:border-t-teal-500"
                >
                  <div className="relative flex items-center justify-center p-2 w-fit bg-white/10">
                    <button className={element.css}>
                      <div className={element.icon}></div> Wind Tails
                    </button>
                  </div>
                  <div className="relative w-full">
                    <textarea
                      value={element.css}
                      className="w-full p-2 text-white bg-gray-900 rounded"
                      readOnly
                    />
                    {element.icon && (
                      <>
                        <span>icon:</span>
                        <textarea
                          value={`<div className="${element.icon}"></div>`}
                          className="w-full p-2 text-white bg-gray-900 rounded"
                          readOnly
                        />
                      </>
                    )}
                    <CopyButton elementCSS={element.css}/>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
