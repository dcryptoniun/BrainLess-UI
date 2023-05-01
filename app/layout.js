import Navbar from "./components/Navbar";
import "./globals.css";
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
      <body className={`${montserrat.variable} font-sans`}>
        <div>
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
