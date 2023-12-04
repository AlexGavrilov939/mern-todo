import React from "react";
import { render, screen } from "@testing-library/react";
import Menu from "./index";

test("renders Menu component with Dashboard item", () => {
  render(<Menu />);

  // Assert that the component renders the Dashboard item
  expect(screen.getByText("Dashboard")).toBeInTheDocument();

  // You can add more specific tests based on your component's content
  // For example, you can check if the HomeIcon is present:
  expect(screen.getByTestId("home-icon")).toBeInTheDocument();
});
