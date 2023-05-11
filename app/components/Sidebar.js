import Link from "next/link";

const links = [
  { text: "Home", href: "/" },
  { text: "Playground", href: "/playground" },
  { text: "Button", href: "/blocks/button" },
  { text: "Link", href: "/blocks/link" },
];

export default function Sidebar() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen mt-16 overflow-y-auto bg-white/5 ">
      <div className="p-auto">
        <div className="flex flex-col w-24 gap-4 md:w-52 ">
          {links.map((link, index) => (
            <Link
              className="w-full p-2 font-semibold text-center bg-gradient-to-r from-teal-500 hover:bg-gradient-to-l to-fuchsia-500"
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
