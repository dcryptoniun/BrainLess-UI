"use client";
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
                  className="grid items-center justify-center h-auto grid-cols-2 gap-4 p-5 border-2 border-r-teal-500 border-t-fuchsia-500 md:flex-row rounded-2xl border-b-teal-500 border-l-fuchsia-500 hover:border-l-teal-500 hover:border-b-fuchsia-500 hover:border-r-fuchsia-500 hover:border-t-teal-500"
                >
                  <div className="relative flex items-center justify-center w-auto p-2">
                    <button className={element.css}>Wind Tails</button>
                  </div>
                  <div className="relative w-full">
                    <textarea
                      value={element.css}
                      className="w-full p-2 text-white bg-gray-900 rounded"
                      readOnly
                    />
                    <button
                      className="absolute p-1 text-white rounded -top-5 -right-5 hover:text-teal-600"
                      onClick={() => handleCopyClick(element.css)}
                    >
                      {copied ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 text-green-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                          />
                        </svg>
                      )}
                    </button>
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
