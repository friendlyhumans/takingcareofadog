import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import { Nav } from ".";

describe("Components/Nav", () => {
  test("should contain div", () => {
    expect(
      render(
        <ThemeProvider theme={theme["light"]}>
          <Nav />
        </ThemeProvider>,
      ),
    ).toBeTruthy();
  });
});
