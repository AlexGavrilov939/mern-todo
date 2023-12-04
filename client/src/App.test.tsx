import { screen } from "@testing-library/react";

test("renders learn react link", () => {
  expect(screen.queryByTestId("does-not-exist")).not.toBeInTheDocument();
});
