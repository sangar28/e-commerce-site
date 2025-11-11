import { Route, Routes } from "react-router-dom";
import App from "./App";
import MainContent from "./components/main content/MainContent";
import ProductDetails from "./components/main content/ProductDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <App>
            <MainContent />
          </App>
        }
      />
      <Route path="/products/:id" element={<ProductDetails />} />{" "}
      {/* Fixed: Changed to plural "products" */}
    </Routes>
  );
};

export default AppRoutes;
