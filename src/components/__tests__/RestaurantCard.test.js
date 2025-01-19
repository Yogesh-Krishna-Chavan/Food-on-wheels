import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../../MOCK_DATA.json";
import "@testing-library/jest-dom";

test("should render restaurant card with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("Pizza Hut");
  expect(name).toBeInTheDocument();
});
