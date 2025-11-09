import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import FilterProvider from "./context/FilterContext";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <FilterProvider>
          <Sidebar />
        </FilterProvider>
      </div>
    </Router>
  );
};
export default App;
