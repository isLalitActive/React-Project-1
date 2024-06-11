import React, { Suspense, lazy, useContext, useEffect, useState } from "react";
import reactDom from "react-dom/client";
import Header from "././src/component/Header";
import Body from "./src/component/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./src/component/Contact";
import Error from "./src/component/Error";
import RestaurantMenu from "./src/component/RestaurantMenu";
import UserContext from "./src/utilities/UserContext";
import { Provider } from "react-redux";
import appStore from "./src/utilities/appStore";

const LazyAbout = lazy(() => import("./src/component/About"));

const AppContainer = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    //make an API cal
    const data = {
      name: "Lalit Kumar",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}> 
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app-container">
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
    element: <AppContainer />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<div>Loading......</div>}>
            <LazyAbout />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant-menu/:id",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },

]);

const root = reactDom.createRoot(document.getElementById("root-container"));
root.render(<RouterProvider router={appRouter} />);
