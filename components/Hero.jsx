import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="relative flex items-center justify-center w-full h-full ">
      <div className="flex flex-col items-center justify-center w-full max-w-xl gap-4 p-5 pt-0 m-5 mt-0 ">
        <h1 className="w-auto text-3xl font-semibold text-center md:text-4xl lg:text-5xl">
          No Brainer Open-Source UI component library for Tailwind CSS
        </h1>
        <p>Just Copy & paste No Brain needed..😎</p>
        <div className="flex gap-8 p-5 ">
          <Link
            className="p-2 text-xl font-semibold rounded-lg bg-primary hover:bg-fuchsia-600"
            href="/docs/getting-started"
            alt="Getting Started"
          >
            Getting Started
          </Link>
          <Link
            className="p-2 text-xl font-semibold border-2 rounded-lg border-primary outline text-primary hover:text-fuchsia-600"
            href="/docs/components"
            alt="components"
          >
            Components
          </Link>
        </div>
      </div>
      <div className="absolute w-full h-full -z-50 ">
        <div className="sticky top-0 w-40 h-40 rounded-full opacity-20 left-16 bg-primary -z-50 blur-xl"></div>
        <div className="fixed h-40 bg-teal-500 rounded-full opacity-20 w-36 right-16 bottom-16 -z-50 blur-xl "></div>
      </div>
    </div>
  );
}
