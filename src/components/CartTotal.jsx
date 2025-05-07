// CartTotal.js
import React from "react";
import { NavLink } from "react-router";

export const CartTotal = ({ cartProducts }) => {
  const totalItems = cartProducts.reduce((sum, item) => sum + item.count, 0);
  const subtotalPrice = cartProducts.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );
  const totalPrice = subtotalPrice + 30;

  return (
    <div className="border-2 rounded-xl h-max basis-1/3 p-4 space-y-2 tracking-wider leading-relaxed">
      <h2 className="text-[18px]  font-semibold uppercase mb-5 ">
        Order Summary
      </h2>
      <h1 className="flex items-center justify-between uppercase">
        Total Items <span>{totalItems}</span>
      </h1>
      <h1 className="flex items-center justify-between uppercase">
        SubTotal <span>${subtotalPrice.toFixed(2)}</span>
      </h1>
      <h1 className="flex items-center justify-between uppercase">
        Shipping <span>$30</span>
      </h1>
      <h1 className="flex font-semibold border-t pt-3 mt-3 items-center justify-between uppercase">
        Total Price <span>${totalPrice.toFixed(2)}</span>
      </h1>
      <NavLink to="/cart/checkout" state = {{totalItems, totalPrice}}>
        <button className="w-full bg-black cursor-pointer text-white rounded-md py-2 mt-3">
          Checkout
        </button>
      </NavLink>
    </div>
  );
};

export default CartTotal;
