import Navbar from "@/app/components/Navbar";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Sidebar from "./components/Sidebar";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Wind-Tails",
  description: "Open Source Prebuild Tailwind CSS components",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-mons flex   text-slate-200`}
      >
        <div className="w-full">
          <div className="sticky top-0 z-20 w-full">
            <Navbar />
          </div>
          <div className="flex">
            <div className="fixed overflow-y-auto top-24">
              <Sidebar />
            </div>
            <div className="w-full h-screen p-5 ">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
