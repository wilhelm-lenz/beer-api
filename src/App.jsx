import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/product-detail/:id" element={<ProductDetails />} />
          <Route
            path="/product-detail/random-product/:id"
            element={<ProductDetails />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
