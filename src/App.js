import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { ProductProvider } from "./context/ProductContext";
import { WarehouseProvider } from "./context/WarehouseContext";
import WarehouseList from "./components/WarehouseList";

function App() {
  return (
    <ProductProvider>
      <WarehouseProvider>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<ProductList />} />
            <Route path="warehouse" element={<WarehouseList />} />
          </Route>
        </Routes>
      </WarehouseProvider>
    </ProductProvider>
  );
}

export default App;
