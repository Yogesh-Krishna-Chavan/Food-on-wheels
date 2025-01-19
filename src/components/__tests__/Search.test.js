import { fireEvent, render } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("Should render Body component with search button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getById("searchInput");
  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(searchBtn);
  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(2);
});
