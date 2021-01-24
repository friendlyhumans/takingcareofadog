import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import { Section } from ".";

describe("Components/Section", () => {
  test("should contain div", () => {
    expect(
      render(
        <ThemeProvider theme={theme["light"]}>
          <Section />
        </ThemeProvider>,
      ),
    ).toBeTruthy();
  });
});
