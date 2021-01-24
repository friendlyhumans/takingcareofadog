import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
}

a {
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.5rem;
}

a:hover {
  text-decoration: underline;
}

div[id^=__lpform_] {
	display: none;
}

.banner {
  background: #3f0791;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.banner-text {
  line-height: 0;
  color: #fff;
}

.close {
  padding: 0 20px;
  font-family: cursive;
  font-size: 1.2rem;
  line-height: 0;
  cursor: pointer;
  color: #fff;
}
`;
