import { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";

const Search = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error("Search must be used within a FilterProvider");
  }
  const {
    searchQuery,
    setSearchQuery,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    setKeyword,
  } = context;

  return (
    <div>
      <input
        type="text"
        className="w-full border px-2 py-1 mb-3 outline-none"
        placeholder="Search Product"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          setKeyword(e.target.value);
        }}
      />
      <div className="flex items-center gap-3 ">
        <input
          type="text"
          placeholder="Min $"
          className="border px-2 py-1 outline-none  w-full"
          value={minPrice?.toString() || ""}
          onChange={(e) =>
            setMinPrice(e.target.value ? parseFloat(e.target.value) : undefined)
          }
        />
        <input
          type="text"
          placeholder="Max $"
          className="border px-2 py-1 outline-none  w-full"
          value={maxPrice?.toString() || ""}
          onChange={(e) =>
            setMaxPrice(e.target.value ? parseFloat(e.target.value) : undefined)
          }
        />
      </div>
    </div>
  );
};
export default Search;
