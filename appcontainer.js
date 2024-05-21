import React from "react";
import reactDom from "react-dom/client";
import Header from "././src/component/Header";
import Body from "./src/component/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/component/About";
import Contact from "./src/component/Contact";
import Error from "./src/component/Error";
import RestaurantMenu from "./src/component/RestaurantMenu";

const AppContainer = () => {
  return (
    <div className="app-conntainer">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppContainer />,
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
    ],
    errorElement: <Error />
  },
  {
    path: "/restaurant-menu/:id",
    element: <RestaurantMenu />
  }
]);

const root = reactDom.createRoot(document.getElementById("root-container"));
root.render(<RouterProvider router={appRouter} />);
