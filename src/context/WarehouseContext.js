import { createContext, useState, useEffect } from "react";
import axios from "../services/AxiosServices";

export const WarehouseContext = createContext();

export const WarehouseProvider = ({ children }) => {
  const [warehouseData, setWarehouseData] = useState([]);

  const fetchWarehouseData = () => {
    axios.get("warehouses").then(response => {
      try {
        if (response.data) {
          setWarehouseData(response.data);
        }
      } catch (error) {
        console.log(error.message);
      }
    });
  };

  const updateWarehouse = async warehouseToUpdate => {
    const { _id } = warehouseToUpdate;

    warehouseToUpdate.fullCapacity = Number(warehouseToUpdate.fullCapacity);

    try {
      const response = await axios.put(`/warehouses/${_id}`, warehouseToUpdate);
      setWarehouseData(
        warehouseData.map(warehouse =>
          warehouse._id === _id ? { ...response.data } : warehouse
        )
      );
      console.log(response.data);
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchWarehouseData();
  }, []);

  return (
    <WarehouseContext.Provider
      value={{
        warehouseData,
        updateWarehouse,
      }}
    >
      {children}
    </WarehouseContext.Provider>
  );
};
