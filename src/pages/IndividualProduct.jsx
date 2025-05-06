import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { ProductContext } from "../api/Products";
import { handleAddToCartButton } from "../utils/AddtoCartFn";

const IndividualProduct = () => {
  
  const { productName } = useParams(); 
  const { products } = useContext(ProductContext);

  const product = products.find((p) => p.title.toString() === productName);
  
  const Navigate = useNavigate();

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="grid grid-cols-2 my-20 leading-relaxed tracking-wider relative">
      <div>
        <img
          src={product.image}
          alt={product.title}
          width="300"
          className="mx-auto mb-4 mix-blend-multiply sticky top-4"
        />
      </div>
      <div>
        <h1 className="text-2xl font-semibold mb-4">{product.title}</h1>
        <p className="mb-4">{product.description}</p>
        <h1 className="text-xl uppercase font-semibold mb-2">
          <span>Price :</span> ${product.price}
        </h1>
        <p className="capitalize mb-3">
          <strong>Category :</strong> {product.category}
        </p>
        <p className="mb-3">
          <strong>Rating :</strong> {product.rating.rate}
        </p>
        <p>
          <strong>Stock :</strong> {product.rating.count}
        </p>

        <div className="flex gap-3 items-center">
          <button onClick={() => handleAddToCartButton(product)} className="bg-black text-white py-3 px-5 uppercase rounded-[5px] my-5 cursor-pointer">
            Add To Cart
          </button>
          <button
            onClick={() => {
              Navigate(-1);
            }}
            className="bg-black text-white py-3 px-5 uppercase rounded-[5px] my-5 cursor-pointer"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndividualProduct;
