import Footer from "./components/Footer";
import ThemeSwitch from "./components/ThemeSwitch";

/* eslint-disable import/no-anonymous-default-export */
export default {
  docsRepositoryBase: "https://github.com/dcryptoniun/BrainLess-UI/",
  logo: (
    <span className="inline-flex items-center text-xl font-bold no-underline ">
      BrainLess UI
    </span>
  ),
  onBrokenLinks: "ignore",
  gitTimestamp: "",
  editLink: {
    text: null,
  },
  extraContent: () => {
    <>
      <ThemeSwitch />
    </>;
  },
  project: {
    link: "https://github.com/dcryptoniun/BrainLess-UI",
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
