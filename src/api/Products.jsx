import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
      const fetchProducts = async () => {
          try {
              const response = await fetch("https://fakestoreapi.com/products");
              const data = await response.json();
              setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        
        fetchProducts();
    }, []);

    return (
        <ProductContext.Provider value={{ products }}>
          {children}
        </ProductContext.Provider>
      );
    
};
