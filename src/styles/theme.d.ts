import { DefaultTheme } from "styled-components";

interface Theme {
  [key: string]: DefaultTheme;
  light: DefaultTheme;
  dark: DefaultTheme;
}

export default Theme;
