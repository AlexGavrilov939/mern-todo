import React from "react";
import { render, screen } from "@testing-library/react";
import Minimal from "./index";

test("renders Index component", () => {
  render(<Minimal />);

  // Test if the component renders the Logo component.
  const logoElement = screen.getAllByTestId("logo");
  expect(logoElement).toHaveLength(1);
});
