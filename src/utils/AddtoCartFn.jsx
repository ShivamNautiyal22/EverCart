// src/utils/cart.js

import { toast } from "react-toastify";

export const handleAddToCartButton = (AddCartProduct) => {
    const existingCart = JSON.parse(localStorage.getItem("CartProducts")) || [];
  
    const productExists = existingCart.some((product) => product.id === AddCartProduct.id);
  
    if (!productExists) {
      const cartProduct = {
        image: AddCartProduct.image,
        title: AddCartProduct.title,
        id: AddCartProduct.id,
        stock: AddCartProduct.rating.count,
        price: AddCartProduct.price,
      };
  
      existingCart.push(cartProduct);
      localStorage.setItem("CartProducts", JSON.stringify(existingCart));
      toast.success(`Product added to cart!`);
    } else {
      // alert("Product is already in the cart!");
      toast.warning("Product is already added")
    }
  };
  