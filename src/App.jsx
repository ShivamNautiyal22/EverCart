import React, { useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Collection from "./pages/Collection";
import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./UI/AppLayout";
import ErrorPage from "./pages/ErrorPage";
import SignUp from "./components/SignUp";
import Cart from "./pages/Cart";
import { ProductProvider } from "./api/Products";
import IndividualProduct from "./pages/IndividualProduct";
import Checkout from "./pages/Checkout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from 'aos';
import 'aos/dist/aos.css';


const App = () => {

    useEffect(() => {
      AOS.init({
        duration: 500,
        once: false,
      });
    }, []);
  

  let router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
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
          path: "/collection/:productName",
          element: <IndividualProduct />,
        },
        {
          path: "/sign-up",
          element: <SignUp />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/cart/checkout",
          element: <Checkout />,
        },
      ],
    },
  ]);

  return (
    <ProductProvider>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
      <div className="px-4 sm:px-[4vw] md:px-[6vw] lg:px-[7vw]">
        <RouterProvider router={router} />
      </div>
    </ProductProvider>
  );
};

export default App;
