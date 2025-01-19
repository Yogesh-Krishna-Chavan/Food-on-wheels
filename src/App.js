import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantManu from "./components/RestaurantManu";
// import Grocery from "./components/Grocery";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStrore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));
/*
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🏆"
);
 
//JSX
const elem = <div>React Element</div>;

const title = (
  <h1 id="heading" className="head" tabIndex="5">
    {elem}
    Namaste React using JSX 🏆
  </h1>
);

// React Functional component
const Jsxheading2 = () => (
  <h1 id="heading" className="head" tabIndex="5">
    Namaste React using JSX 🏆
  </h1>
);

const HeadingComponent = function () {
  return (
    <div>
      <h1>Namaste React Functional component</h1>
    </div>
  );
};

const number = 1000;

const HeadingComponent2 = () => (
  <div id="component">
    <h1>Namaste React Functional component</h1>
  </div>
);

const HeadingComponent3 = () => (
  <div>
    {title}
    <h1 id="container">Namaste React Functional Component</h1>
);
*/
//authentication

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Yogesh Chavan",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStrore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantManu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
