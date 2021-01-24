declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    _name: string;
    colors: {
      background: string;
      text: string;
      primary: string;
      secondary: string;
      accent: string;
      highlight: string;
      // muted: string;
      gray: string; // Consider removing. Refer to theme spec
      lightgray: string; // Consider removing
      midgray: string; // Consider removing
      darkgray: string;
      deeppurple: string;
    };
    fonts: {
      body: string;
      header: string;
      mono: string;
    };
    fontSizes: number[];
    lineHeights: {
      body: number;
      heading: number;
    };
    mediaQueries: {
      small: string;
      medium: string;
      large: string;
    };
    sizes: {
      avatar: string;
      maxWidth: string;
    };
    space: number[];
    zIndices: number[];
    toggleDirection: string;
    breakpoints: string[];
    boxShadow: string;
  }
}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ThemeType>;

type ThemedStyledProps<P> = styledComponents.ThemedStyledProps<P, ThemeType>;

export { css, createGlobalStyle, keyframes, ThemeProvider, ThemedStyledProps };
export default styled;
