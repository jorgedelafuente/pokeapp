// import "@testing-library/jest-dom/extend-expect";
// import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
// import App from "../App";

// getPageMocks

// import PokelistContainer from "../container/PokelistContainer";
// import { renderWithProviders } from "@/__tests__/testUtils";
// import { getPageMocks } from "@/__tests__/__mocks__/getPage";
// import apiSlice from "@/services/apiSlice";
// import { getPageMocks } from "./__mocks__/getPage";
// import { PokelistContainer } from "@/views/pokelist";

describe("something truthy and falsy", () => {
  it("true to be true", () => {
    expect(true).toBe(true);
  });

  it("false to be false", () => {
    expect(false).toBe(false);
  });
});

// describe("App", () => {
//   it("renders headline", () => {
//     const screen = renderWithProviders(<PokelistContainer />);
//     // console.log("TCL: screen", screen);
//     screen.debug();
//     const headline = screen.getByText(/Current/i);
//     expect(headline).toBeInTheDocument();
//   });
// });

// We use msw to intercept the network request during the test,
// and return the response 'John Smith' after 150ms
// when receiving a get request to the `/api/user` endpoint

// console.log("TCL: initialTodos", initialTodos);

// test("Uses preloaded state to render", () => {
//   const initialTodos = getPageMocks;

//   const { getByText } = renderWithProviders(<PokelistContainer />, {
//     preloadedState: {
//       pokemon: initialTodos,
//     },
//   });
// });

// describe("tests for ListSlice", () => {
//   test("initialize slice with initialValue", () => {
//     // const listSliceInit = apiSlice(initialState, { type: "unknown" });
//     // expect(listSliceInit).toBe(initialState);

//     const screen = renderWithProviders(<PokelistContainer />);
//     // screen.debug();
//     const linkElement = screen.getByText(/Current/i);
//     expect(linkElement).toBeInTheDocument();
//   });
// });
