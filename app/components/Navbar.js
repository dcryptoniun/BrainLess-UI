import { Bruno_Ace_SC } from "next/font/google";
import Link from "next/link";
import github from "../assets/github.svg";
import Image from "next/image";

const bruno = Bruno_Ace_SC({
  subsets: ["latin"],
  variable: "--font-bruno",
  weight: "400",
  fallback: ["sans"],
});

export default function Navbar() {
  return (
    <div className="sticky w-full h-auto shadow-lg backdrop-blur">
      <div className="flex items-center justify-between p-2 px-3">
        <div
          className={`${bruno.variable} font-bruno text-2xl bg-gradient-to-r from-teal-500 to-fuchsia-500 text-transparent bg-clip-text hover:bg-gradient-to-l`}
        >
          <Link href="/" alt="logo">
            Wind Tails
          </Link>
        </div>
        <div className="flex items-center justify-center gap-8 p-2 ">
          <Link href="/" alt="home button" className="hover:text-fuchsia-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokewidth="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </Link>
          <Link href="https://github.com/dcryptoniun/Wind-Tails" target="blank">
            <Image width={25} height={25} src={github} alt="github link" />
          </Link>
        </div>
      </div>
    </div>
  );
}
