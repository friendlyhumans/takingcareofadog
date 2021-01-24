import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import { Form } from ".";

describe("Components/Form", () => {
  test("should contain div", () => {
    expect(
      render(
        <ThemeProvider theme={theme["light"]}>
          <Form />
        </ThemeProvider>,
      ),
    ).toBeTruthy();
  });
});
