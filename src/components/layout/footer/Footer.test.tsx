import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "./Footer";

it("Renders Pokeball Icon image from Footer", () => {
  render(<Footer />);
  const footerImage = screen.getByAltText("icon-footer");
  expect(footerImage).toBeInTheDocument();
});
