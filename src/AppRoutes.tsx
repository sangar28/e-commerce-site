import { Route, Routes } from "react-router-dom";
import App from "./App";
import MainContent from "./components/main content/MainContent";

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
    </Routes>
  );
};
export default AppRoutes;
