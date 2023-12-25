import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("root App", () => {
  render(<App />);
  const AppElement = screen.getByTestId("root-element");
  expect(AppElement).toBeInTheDocument();
});
