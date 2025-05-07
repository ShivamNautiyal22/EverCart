import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../api/Products";

const Products = () => {
  const { products } = useContext(ProductContext);

  const [limitedProducts, setLimitedProducts] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      const slicedProducts = products.slice(0, 8);
      setLimitedProducts(slicedProducts);
    }
  }, [products]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 leading-relaxed tracking-wider my-10">
      {limitedProducts.map((product,index) => {
        const duration = 500 + index * 50; // 500ms + 200ms * index
        const delay = index * 50;
        return (
          <div
            key={product.id}
            data-aos="fade-down-right"
            data-aos-duration={duration}
            data-aos-delay={delay}
            className="relative rounded-[10px] overflow-hidden cursor-pointer group bg-pink-100"
          >
            <img
              src={product.image}
              alt={product.title + product.id}
              className="w-full h-[330px] mix-blend-multiply p-3 transition-transform duration-300 ease-in-out group-hover:scale-106"
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
