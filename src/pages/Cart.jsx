// Cart.js
import React, { useState } from "react";
import EmptyCart from "../components/EmptyCart";
import CartProducts from "../components/CartProducts";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const storedProducts = JSON.parse(localStorage.getItem("CartProducts")) || [];

  const [cartProducts, setCartProducts] = useState(
    storedProducts.length > 0
      ? storedProducts.map((item) => ({ ...item, count: 1 }))
      : []
  );

  const increaseCount = (id) => {
    setCartProducts((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, count: item.count < item.stock ? item.count + 1 : item.count }
          : item
      )
    );
  };

  const decreaseCount = (id) => {
    setCartProducts((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, count: Math.max(1, item.count - 1) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartProducts((prev) => {
      const updatedCart = prev.filter((item) => item.id !== id);
      localStorage.setItem("CartProducts", JSON.stringify(updatedCart)); // update localStorage also
      return updatedCart;
      
    });
    };

    if (cartProducts.length === 0) {
    return <EmptyCart />;
  }

  return (
    <section className="my-10 leading-relaxed tracking-wider">
      <div className="flex items-center justify-center gap-2 cursor-pointer mb-15">
        <p className="font-semibold text-xl md:text-3xl">
          SHOPPING <span className="text-gray-500">BAG</span>
        </p>
        <p className="w-8 md:w-11 h-[2px] bg-[#414141] "></p>
      </div>

      <div className="flex gap-4 justify-between">
        <div className="basis-2/3 space-y-4">
          {cartProducts.map((item) => (
            <CartProducts
              key={item.id}
              item={item}
              increaseCount={() => increaseCount(item.id)}
              decreaseCount={() => decreaseCount(item.id)}
              removeItem={() => removeItem(item.id)}
            />
          ))}
        </div>

        <CartTotal cartProducts={cartProducts} />

      </div>
    </section>
  );
};

export default Cart;
