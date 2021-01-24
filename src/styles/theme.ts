import Theme from "./theme.d";

const breakpoints = ["578px", "768px", "1024px"];

const defaults = {
  fonts: {
    body: "Merriweather, serif",
    header: "Open Sans, sans-serif",
    mono: "Meno, monospace",
  },
  fontSizes: [12, 14, 16, 18, 24, 32, 48, 64, 72],
  lineHeights: {
    body: 1.75,
    heading: 1.25,
  },
  mediaQueries: {
    small: `@media (min-width: ${breakpoints[0]})`,
    medium: `@media (min-width: ${breakpoints[1]})`,
    large: `@media (min-width: ${breakpoints[2]})`,
  },
  sizes: {
    avatar: "128px",
    maxWidth: "768px",
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  zIndices: [-1, 0, 1, 2],
  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
  breakpoints,
};

const theme: Theme = {
  light: {
    ...defaults,
    _name: "light",
    colors: {
      text: "#212529",
      background: "#fff",
      primary: "#00f",
      secondary: "#00a",
      highlight: "#ededff",
      accent: "#c0f",
      gray: "#eee",
      lightgray: "lightgray",
      midgray: "#777",
      darkgray: "#21212a",
      deeppurple: "#7f5af0",
    },
    toggleDirection: "flex-start",
  },
  dark: {
    ...defaults,
    _name: "dark",
    colors: {
      text: "#f0f4f6",
      background: "rgb(22, 22, 26)",
      primary: "#2FBEFF",
      secondary: "#f0e",
      gray: "#333",
      midgray: "#aaa",
      lightgray: "#303030",
      darkgray: "#ddd",
      highlight: "#001119",
      accent: "#c0f",
      deeppurple: "#7f5af0",
    },
    toggleDirection: "flex-end",
  },
};

export default theme;
