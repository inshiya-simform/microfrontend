import { Route, Routes } from "react-router-dom";
import ProductCatalog from "./components/product/ProductCatalog";
import ProductDetail from "./components/product/ProductDetail";

function App() {
  return (
    <Routes>
      <Route index element={<ProductCatalog />} />
      <Route path=":productId" element={<ProductDetail />} />
    </Routes>
  );
}

export default App;
