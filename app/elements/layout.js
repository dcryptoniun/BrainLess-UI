import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import { Montserrat } from "next/font/google";

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
          <div className="fixed z-20 w-full">
            <Navbar />
          </div>
          <div className="fixed ">
            <Sidebar />
          </div>

          <div className="pt-16">{children}</div>
        </div>
      </body>
    </html>
  );
}
