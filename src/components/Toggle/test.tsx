import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import { noop } from "../../util/fn";

import { Toggle } from ".";

describe("Components/Toggle", () => {
  test("should contain div", () => {
    expect(
      render(
        <ThemeProvider theme={theme["light"]}>
          <Toggle onClick={noop} />
        </ThemeProvider>,
      ),
    ).toBeTruthy();
  });
});
