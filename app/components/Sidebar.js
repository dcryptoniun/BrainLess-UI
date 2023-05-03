import Link from "next/link";

const links = [
  { text: "Button", href: "#" },
  { text: "Link", href: "#" },
];

export default function Sidebar() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen backdrop-blur">
      <div className="">
        <div className="flex flex-col w-24 gap-4 md:w-52 ">
          {links.map((link, index) => (
            <Link
              className="w-full p-2 text-center bg-gradient-to-r from-teal-500 hover:bg-gradient-to-l to-fuchsia-500"
              key={index}
              href={link.href}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
