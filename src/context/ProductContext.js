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

  const updateProduct = async productToUpdate => {
    const { _id } = productToUpdate;

    productToUpdate.price = Number(productToUpdate.price);
    productToUpdate.spaceRequired = Number(productToUpdate.spaceRequired);

    try {
      //console.log(productToUpdate);
      //console.log(productToUpdate.warehouse);

      const response = await axios.put(`/products/${_id}`, productToUpdate);
      setProductsData(
        productData.map(product =>
          product._id === _id ? { ...response.data } : product
        )
      );
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        productData,
        updateProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
