import { fireEvent, render,screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStrore from "../../utils/appStore";
import "@testing-library/dom";

test("Should render the Header component with Login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStrore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button");

  expect(loginButton).toBeInTheDocument();
});

test("Should render the Header component with Cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStrore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart - (0 items)");

  expect(cartItems).toBeInTheDocument();
});

test("Should render the Header component with Cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStrore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText(/Cart/);

  expect(cartItems).toBeInTheDocument();
});

test("Should change Login Button to Logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStrore}>
        <Header />
      </Provider>
    </BrowserRouter>
    );
    
  const loginButton = screen.getByRole("button", { name: "Login" });

    fireEvent.click(loginButton);
    
  const logoutButton = screen.getByRole("button", { name: "Logout" });

  expect(loginButton).toBeInTheDocument();
});