import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import { Input } from ".";

describe("Components/Input", () => {
  test("should contain div", () => {
    expect(
      render(
        <ThemeProvider theme={theme["light"]}>
          <Input />
        </ThemeProvider>,
      ),
    ).toBeTruthy();
  });
});
