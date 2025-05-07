import React from "react";
import { NavLink } from "react-router";

const EmptyCart = () => {
  return (
    <div className="h-[80vh]  flex flex-col items-center justify-center uppercase ">
      <h1 className="text-5xl text-center prata mb-3">Your Bag is Empty.</h1>
      <NavLink
        to="/collection"
        className="tracking-widest border-2 px-5 py-2 cursor-pointer rounded-[7px] bg-black text-white"
      >
        Go To Collection
      </NavLink>
    </div>
  );
};

export default EmptyCart;
