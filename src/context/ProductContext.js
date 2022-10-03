import { createContext, useState, useEffect } from "react";
import { getProducts } from "../services/ProductServices";
import axios from "../services/AxiosServices";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productData, setProductsData] = useState([]);

  const fetchProductData = () => {
    axios.get("products").then(response => {
      try {
        if (response.data) {
          setProductsData(response.data);
        }
      } catch (error) {
        console.log(error.message);
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        productData,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
