import Search from "./Search";
import Category from "./Category";
import Keywords from "./Keywords";
import { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";

const Sidebar = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("ResetFilter must be within the FilterProvider");
  }
  const {
    setSearchQuery,
    setSelectedCategory,
    setMinPrice,
    setMaxPrice,
    setKeyword,
  } = context;
  const handleResetFilter = () => {
    setKeyword("");
    setMaxPrice(undefined);
    setMinPrice(undefined);
    setSearchQuery("");
    setSelectedCategory("");
  };
  return (
    <div>
      <div className="w-72 min-h-screen">
        <h1 className="text-2xl font-bold mb-10 mt-4">React Store</h1>
        <section>
          {/* search bar */}
          <section className="mb-4">
            <Search />
          </section>
          {/* Categories */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <Category />
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-4">Keywords</h2>
            <Keywords />
          </section>
        </section>
        <button
          onClick={handleResetFilter}
          className="w-full py-2 bg-black text-white rounded mt-5 mb-16"
        >
          Reset Fillters
        </button>
      </div>
    </div>
  );
};
export default Sidebar;
