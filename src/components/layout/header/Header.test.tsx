import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Header from "./Header";

it("Renders Pokeball Icon image from Header", () => {
  render(<Header />);
  const pokeIcon = screen.getByAltText("poke-icon");
  expect(pokeIcon).toBeInTheDocument();
});

it("Renders Pokeball Logo image from Header", () => {
  render(<Header />);
  const pokeLogo = screen.getByAltText("poke-logo");
  expect(pokeLogo).toBeInTheDocument();
});
