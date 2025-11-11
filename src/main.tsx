import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes.tsx";
import FilterProvider from "./context/FilterContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <FilterProvider>
        <AppRoutes />
      </FilterProvider>
    </Router>
  </StrictMode>
);
