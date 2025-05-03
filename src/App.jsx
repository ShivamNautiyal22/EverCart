import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Collection from "./pages/Collection";
import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./UI/AppLayout";
import ErrorPage from "./pages/ErrorPage";
import SignUp from "./components/SignUp";
import Cart from "./pages/Cart";

const App = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement : <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
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
          path: "/collection",
          element: <Collection />,
        },
        {
          path: "/sign-up",
          element: <SignUp />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);

  return (
   
    <div className="px-4 sm:px-[4vw] md:px-[6vw] lg:px-[7vw]">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
