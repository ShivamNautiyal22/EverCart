// CartProducts.js
import React from "react";
import { Minus, Plus, X } from "lucide-react";
import { DollarSign } from "lucide-react";

const CartProducts = ({ item, increaseCount, decreaseCount, removeItem }) => {
  return (
    <div className="flex sm:flex-row flex-col sm:items-center p-2 leading-relaxed tracking-wider border-2  rounded-xl">
      <div className="bg-pink-200 rounded-xl overflow-hidden h-35 flex justify-center w-35">
        <img src={item.image} alt="product-image" className="mix-blend-multiply p-3" />
      </div>
      <div className="flex sm:flex-row flex-col  sm:items-center justify-between w-full px-2 py-2 sm:py-0 sm:px-5">
        <div>
          <h1 className="flex items-center text-[21px]">
            <p className="flex items-center">
              <span><DollarSign size={21} /></span>
              {item.price}
            </p>
            <X size={17} />
            <p className="text-xl">{item.count}</p>
          </h1>
          <p className="line-clamp-2 sm:line-clamp-1 pr-4">{item.title}</p>
          <div className="flex items-center gap-2 my-3">
            <button onClick={decreaseCount} className="bg-black text-white p-1 rounded-sm cursor-pointer"><Minus size={20} /></button>
            <p className="p-1 text-center w-15 border-2 rounded-sm text-xl">{item.count}</p>
            <button onClick={increaseCount} className="bg-black text-white p-1 rounded-sm cursor-pointer"><Plus size={20} /></button>
          </div>
        </div>
        <button onClick={removeItem} className="bg-black text-white py-1 px-3 rounded-lg sm:rounded-sm cursor-pointer">Remove</button>
      </div>
    </div>
  );
};

export default CartProducts;
