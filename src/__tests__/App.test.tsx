import { describe, it, expect } from "vitest";
import { renderWithProviders } from "./testUtils";
import PokeList from "@/views/pokelist/components/PokeList";
import { getPageMocks } from "./__mocks__/getPage";
import { store } from "@/store/store";
import { PokelistContainer } from "@/views/pokelist";

describe("PokeApp List", () => {
  it("Renders Pokemon list correctly", () => {
    const screen = renderWithProviders(
      <PokeList data={getPageMocks as any} />,
      {}
    );
    const list = screen.getAllByTestId("list-item");
    expect(list.length).toEqual(20);
  });

  it("Bulbasaur Text and Image are on the screen", () => {
    const screen = renderWithProviders(<PokeList data={getPageMocks as any} />);
    const Bulbasaur = screen.getByText(/Bulbasaur/i);
    const BulbasaurImg = screen.getAllByAltText("pokemon-image");
    expect(Bulbasaur).toBeInTheDocument();
    expect(BulbasaurImg[0]).toBeInTheDocument();
  });
});
