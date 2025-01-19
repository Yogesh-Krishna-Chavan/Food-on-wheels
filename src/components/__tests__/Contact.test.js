import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Component Page Test Cases", () => {
  test("Should render Contact component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should render button inside Contact component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    //Assertion
    expect(button).toBeInTheDocument();
  });

  test("Should render button inside Contact component", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");
    //Assertion
    expect(button).toBeInTheDocument();
  });

  test("Should render button inside Contact component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("Name");
    //Assertion
    expect(inputName).toBeInTheDocument();
  });

  test("Should render 2 input boxes inside Contact component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    //Assertion
    console.log(inputBoxes.length);
    expect(inputBoxes.length).toBe(3);
  });
});
