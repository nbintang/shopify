import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const API_URL = "https://fakestoreapi.com/products";
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(API_URL);
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
