import React, { useEffect, useState } from "react";
import { Star, Layers } from "lucide-react";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);

  const API = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 leading-relaxed tracking-wider my-10">
      {allProducts.map((product) => {
        return (
          <div
            key={product.id}
            className="relative rounded-[10px] overflow-hidden group py-5 border-2 border-gray-400 px-2"
          >
            <img
              src={product.image}
              alt={product.title + product.id}
              className="w-full h-[300px]  mix-blend-multiply"
            />
            <div className="mt-3">
              <h1 className="line-clamp-1">{product.title}</h1>
              <p className="mt-2 bg-pink-200 p-2 rounded-[5px] flex justify-between items-center">
                <span className="uppercase">Price</span>
                <span>${product.price}</span>
                
              </p>
              <div className="mt-3 flex items-center gap-2 justify-between">
                <div className="flex gap-1 items-center justify-center bg-pink-200 p-2 w-full rounded-[5px]">
                  <Layers size={16} />
                  {product.rating.count}
                </div>
                <div className="flex gap-1 items-center justify-center bg-pink-200 p-2 w-full rounded-[5px]">
                  <Star size={16} />
                  {product.rating.rate}
                </div>
              </div>
              <div className="flex flex-col gap-2 mt-3">
                <button className="bg-pink-200 cursor-pointer rounded-[5px] py-2 px-1 uppercase font-semibold">Add to Cart</button>
                <button className="bg-pink-200 cursor-pointer rounded-[5px] py-2 px-1 uppercase font-semibold">Buy Now</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllProducts;
