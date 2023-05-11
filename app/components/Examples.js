import Link from "next/link";
import React from "react";

export default function Examples() {
  return (
    <div className="hidden w-full gap-4 p-5 md:flex rounded-xl bg-white/10">
      <div className="flex flex-col w-full h-full gap-4">
        <div className="flex justify-between ">
          <button className="w-32 p-1 transition-all bg-teal-500 border rounded-lg hover:duration-100 hover:scale-150 hover:bg-teal-800 ">
            Button
          </button>
          <div className="relative inline-block text-left group">
            <div>
              <button
                type="button"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                id="options-menu"
                aria-expanded="true"
                aria-haspopup="true"
              >
                Options
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div
              className="absolute right-0 z-10 hidden w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg group-active:block group-hover:block"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <div className="py-1" role="none">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Duplicate
                </a>
              </div>
              <div className="py-1" role="none">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Archive
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Move
                </a>
              </div>
              <div className="py-1" role="none">
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            className="p-1 text-center text-teal-500 underline transition duration-100 w-fit hover:text-fuchsia-500 hover:scale-110"
            href="#"
            alt="example link"
          >
            Link
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <span className="relative inline-flex w-fit">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 text-sm font-semibold leading-6 transition duration-150 ease-in-out bg-white rounded-md shadow cursor-not-allowed text-sky-500 dark:bg-slate-800 ring-1 ring-slate-900/10 dark:ring-slate-200/20"
              disabled=""
            >
              Notification
            </button>
            <span className="absolute top-0 right-0 flex w-3 h-3 -mt-1 -mr-1">
              <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-sky-400"></span>
              <span className="relative inline-flex w-3 h-3 rounded-full bg-sky-500"></span>
            </span>
          </span>
          <div className="w-10 h-10 bg-transparent border-4 rounded-full cursor-wait border-fuchsia-500 border-t-fuchsia-300 animate-spin"></div>
        </div>
        <div className="flex justify-between w-full p-1 px-4 border rounded-xl">
          <div>
            <h1 className="p-1 font-mono font-extrabold text-center text-transparent md:text-start bg-gradient-to-r from-teal-400 to-fuchsia-600 bg-clip-text hover:bg-gradient-to-l ">
              Windy
            </h1>
          </div>
          <ul className="flex gap-4">
            <li className="underline ">link1</li>
            <li className="underline ">Link2</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-around h-full gap-1 p-2 border w-fit rounded-xl border-amber-600 bg-gradient-to-b from-teal-900 to-slate-900 hover:bg-gradient-to-t ">
        <h1 className="font-mono text-sm font-extrabold text-transparent bg-gradient-to-r from-teal-400 to-fuchsia-600 bg-clip-text hover:bg-gradient-to-l ">
          Windy
        </h1>
        <div className="flex flex-col h-full justify-evenly">
          <span className="underline hover:text-fuchsia-400 hover:scale-110">
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
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
              />
            </svg>
          </span>
          <span className="underline hover:text-fuchsia-400 hover:scale-110 animate-pulse">
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
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
              />
            </svg>
          </span>
          <span className="underline hover:text-fuchsia-400 hover:scale-110">
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
                d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9"
              />
            </svg>
          </span>
          <span className="underline hover:text-fuchsia-400 hover:scale-110">
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
                d="M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
