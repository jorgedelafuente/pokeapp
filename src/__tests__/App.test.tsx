import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App";

describe("something truthy and falsy", () => {
  it.skip("true to be true", () => {
    expect(true).toBe(true);
  });

  it.skip("false to be false", () => {
    expect(false).toBe(false);
  });
});

describe("App", () => {
  it.skip("renders headline", () => {
    render(<App />);
    const headline = screen.getByText(/It works and you found me!/i);
    expect(headline).toBeInTheDocument();
  });
});
