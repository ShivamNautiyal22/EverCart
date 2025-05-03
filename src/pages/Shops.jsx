import React from "react";
import Products from "../components/Products";
import { Link } from "react-router";

const Shop = () => {
  return (
    <section className="my-20 leading-relaxed tracking-wider">
      <div>
        <div>
          <div className="flex items-center gap-2  pt-4 cursor-pointer  justify-center mb-3">
            <p className="prata text-3xl md:text-4xl ">Shop Our Top Deals</p>
            <p className="w-8 md:w-11 h-[2px] bg-[#414141] duration-300"></p>
          </div>
          <p className="text-center text-base">Discover deals that stretch your budget and deliver more value, style, and satisfaction.</p>
        </div>
      <div className="flex justify-end mt-10">
        <Link to="/collection" className="text-violet-500 underline ">View all Products</Link>
      </div>
        <Products/>
      </div>
    </section>
  );
};

export default Shop;
