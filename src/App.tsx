import Sidebar from "./components/sidebar/Sidebar";
import FilterProvider from "./context/FilterContext";

interface childrenType {
  children: React.ReactNode;
}

const App = ({ children }: childrenType) => {
  return (
    <div className="flex min-h-screen">
      <FilterProvider>
        <Sidebar />
        <div>{children}</div>
      </FilterProvider>
    </div>
  );
};
export default App;
