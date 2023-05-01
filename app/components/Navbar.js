import { Bruno_Ace_SC } from "next/font/google";
import Link from "next/link";
import github from "../assets/github.svg";
import Image from "next/image";

const bruno = Bruno_Ace_SC({
  subsets: ["latin"],
  variable: "--font-bruno",
  weight: "400",
  fallback: ["Montserrat", "sans"],
});

export default function Navbar() {
  return (
    <div className="fixed w-full">
      <div className="flex items-center justify-between p-2 px-3">
        <div
          className={`${bruno.variable} font-bruno text-2xl bg-gradient-to-r from-teal-500 to-fuchsia-500 text-transparent bg-clip-text hover:bg-gradient-to-l`}
        >
          <Link href="/">Wind Tails</Link>
        </div>
        <div>
          <Link href="https://github.com/dcryptoniun/Wind-Tails" target="blank">
            <Image
              width={25}
              height={25}
              src={github}
              alt="github link"
              className="invert dark:invert-0"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
