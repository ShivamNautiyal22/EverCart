import React from "react";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Footer from "../pages/Footer";
import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
