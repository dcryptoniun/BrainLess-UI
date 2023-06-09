import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="flex items-start justify-between w-full h-auto p-2 px-3 ">
      <div>
        <h1 className="font-mono font-semibold text-primary">BrainLess UI</h1>
        <h2 className="text-xs opacity-60 ">
          {" "}
          © MIT {new Date().getFullYear()}
        </h2>
      </div>
      <div>
        <Link
          href="#"
          alt="github"
          className="flex items-center justify-center h-full"
        >
          <Image
            src="/github.svg"
            width={24}
            height={24}
            alt="github"
            className=" invert dark:invert-0"
          />
        </Link>
      </div>
      <div className="flex flex-col ">
        <h1 className="font-semibold">Links</h1>
        <div className="gap-4 ">
          <div>
            <Link className="text-xs font-semibold" href="/docs" alt="docs">
              Getting Started
            </Link>
          </div>
          <div>
            <Link className="text-xs font-semibold" href="/docs" alt="docs">
              Components
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
