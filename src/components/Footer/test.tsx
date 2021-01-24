import { render } from "@testing-library/react";

import { Footer } from ".";

describe("Components/Footer", () => {
  test("should contain div", () => {
    expect(render(<Footer />)).toBeTruthy();
  });
});
