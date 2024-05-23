import React, { Suspense, lazy } from "react";
import reactDom from "react-dom/client";
import Header from "././src/component/Header";
import Body from "./src/component/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./src/component/Contact";
import Error from "./src/component/Error";
import RestaurantMenu from "./src/component/RestaurantMenu";

const LazyAbout = lazy(() => import('./src/component/About'));

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
        element: <Suspense fallback={<div>Loading......</div>}><LazyAbout /></Suspense>,
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
