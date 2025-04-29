import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  const API = "https://api.escuelajs.co/api/v1/products?offset=10&limit=10";

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // empty array = only run once

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 leading-relaxed tracking-wider my-10">
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className="relative rounded-[10px] overflow-hidden bg-[#fcfafc] cursor-pointer group"
          >
            <img
              src={product.images[0]}
              alt={product.title + product.id}
              className="w-full min-h-[300px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:bg-[#000000a1] transition-opacity duration-300 ease-in-out p-4">
              <div className="text-center">
                <p className="text-sm font-semibold mb-2">{product.title}</p>
                <h1 className="text-lg font-bold">${product.price}</h1>
              </div>
            </div>
           
          </div>
        );
      })}
    </div>
  );
};

export default Products;
