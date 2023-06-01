import Image from "next/image";
import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";

export default function Nav() {
  return (
    <div className="sticky top-0 z-20 flex flex-wrap items-center justify-between w-full p-2 shadow backdrop-blur">
      <div className="w-full mb-4 text-center md:w-auto md:mb-0">
        <Link href="/" className="font-mono text-2xl font-bold drop-shadow">
          <span>
            Brain
            <span className="text-primary animate-pulse">Less UI</span>
          </span>
        </Link>
      </div>
      <div className="flex items-center justify-center w-full gap-8 md:w-auto">
        <div className="flex gap-8">
          <div>
            <Link
              className=""
              href="/docs/getting-started"
              alt="Getting Started"
            >
              Getting Started
            </Link>
          </div>
          <div>
            <Link className="" href="/docs/components" alt="Components">
              Components
            </Link>
          </div>
          <div>
            <Link href="#" alt="github">
              <Image
                src="/github.svg"
                width={25}
                height={25}
                alt="github"
                className="invert dark:invert-0"
              />
            </Link>
          </div>
        </div>
        <div>
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
}
