// src/utils/cart.js

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
      console.log("Added to cart:", existingCart);
    } else {
      alert("Product is already in the cart!");
    }
  };
  