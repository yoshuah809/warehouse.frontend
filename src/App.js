import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { ProductProvider } from "./context/ProductContext";

function App() {
  return (
    <ProductProvider>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<ProductList />} />
        </Route>
      </Routes>
    </ProductProvider>
  );
}

export default App;
