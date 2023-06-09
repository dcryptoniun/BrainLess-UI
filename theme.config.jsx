import Image from "next/image";
import Footer from "./components/Footer";

/* eslint-disable import/no-anonymous-default-export */
export default {
  docsRepositoryBase: "https://github.com/dcryptoniun/BrainLess-UI/tree/main/",
  logo: () => (
    <>
      <Image
        src="/logo.png"
        width={25}
        height={25}
        alt="logo"
        loading="lazy"
        className="w-auto h-auto p-2"
      />
      <span className="inline-flex items-center text-xl font-bold no-underline ">
        BrainLess UI
      </span>
    </>
  ),
  onBrokenLinks: "ignore",
  gitTimestamp: "",
  editLink: {
    text: "Edit this page on GitHub",
  },
  project: {
    link: "https://github.com/dcryptoniun/BrainLess-UI",
  },
  toc: {
    float: true,
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  primaryHue: {
    dark: 300,
    light: 173,
  },
  footer: {
    text: () => <Footer />,
  },
};
