/* eslint-disable import/no-anonymous-default-export */
export default {
  logo: (
    <span className="inline-flex items-center text-xl font-bold text-current no-underline">
      BrainLess UI
    </span>
  ),
  project: {
    link: "https://github.com/dcryptoniun/BrainLess-UI",
  },
  primaryHue: {
    dark: 300,
    light: 173,
  },
  footer: {
    text: () => (
      <a
        href="https://github.com/dcryptoniun/BrainLess-UI"
        target="_blank"
        rel="noopener"
        className="inline-flex items-center font-semibold text-current no-underline"
      >
        <span>BrainLess-UI</span>
      </a>
    ),
  },
};
