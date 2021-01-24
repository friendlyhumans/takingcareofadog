import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import { Button } from ".";

describe("Components/Button", () => {
  test("should contain div", () => {
    expect(
      render(
        <ThemeProvider theme={theme["light"]}>
          <Button />
        </ThemeProvider>,
      ),
    ).toBeTruthy();
  });
});
