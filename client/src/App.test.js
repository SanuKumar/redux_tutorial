import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders Main component", () => {
    render(<App />);
    const mainElement = screen.getByTestId("main-component");
    expect(mainElement).toBeInTheDocument();
  });

  test("renders Loader component when Suspense is loading", () => {
    render(<App />);
    const loaderElement = screen.getByTestId("loader-component");
    expect(loaderElement).toBeInTheDocument();
  });
});
