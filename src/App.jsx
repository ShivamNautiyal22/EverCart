import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import Footer from "./pages/Footer";
import { BrowserRouter, Routes, Route } from "react-router";
import About from "./pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <div className="px-4 sm:px-[4vw] md:px-[6vw] lg:px-[7vw]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
