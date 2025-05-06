import React, { useContext } from "react";
import { Star, Layers } from "lucide-react";
import { ProductContext } from "../api/Products";
import { NavLink } from "react-router";
import { handleAddToCartButton } from "../utils/AddtoCartFn";

const AllProducts = ({ searchQuery }) => {
  const { products } = useContext(ProductContext);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // const handleAddToCartButton = (AddCartProduct) => {
  //   const existingCart = JSON.parse(localStorage.getItem("CartProducts")) || [];

  //   const productExists = existingCart.some((product) => product.id === AddCartProduct.id);

  //   if (!productExists) {
  //     const cartProduct = {
  //       image : AddCartProduct.image,
  //       title : AddCartProduct.title,
  //       id: AddCartProduct.id,
  //       stock: AddCartProduct.rating.count,
  //       price: AddCartProduct.price,
  //     };

  //     existingCart.push(cartProduct);
  //     localStorage.setItem("CartProducts", JSON.stringify(existingCart));
  //     console.log("Added to cart:", existingCart);
  //   } else {
  //     alert("Product is already in the cart!");
  //   }
  // };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 leading-relaxed tracking-wider my-10">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="relative rounded-[10px] overflow-hidden group py-5 border-2 border-gray-400 px-2"
        >
          <img
            src={product.image}
            alt={product.title + product.id}
            className="w-full h-[300px] mix-blend-multiply"
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
              <button
                onClick={() => handleAddToCartButton(product)}
                className="bg-pink-200 cursor-pointer rounded-[5px] py-2 px-1 uppercase font-semibold"
              >
                Add to Cart
              </button>
              <NavLink
                to={`/collection/${product.title}`}
                className="bg-pink-200 text-center cursor-pointer rounded-[5px] py-2 px-1 uppercase font-semibold"
              >
                Buy Now
              </NavLink>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
