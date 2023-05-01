import { Bruno_Ace_SC } from "next/font/google";
import Link from "next/link";

const bruno = Bruno_Ace_SC({
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
        <div>links</div>
      </div>
    </div>
  );
}
