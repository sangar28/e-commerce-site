import { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";
import { Tally3 } from "lucide-react";

const Filter = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error("Search must be used within a FilterProvider");
  }
  const { filter, setFilter, dropdownOpen, setDropdownOpen } = context;

  const handleDropDown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center">
      <div className="relative mb-5 mt-5">
        <button
          className="border border-gray-200 font-semibold shadow-sm px-4 py-2  rounded-full flex items-center "
          onClick={() => handleDropDown()}
        >
          <Tally3 className="mr-2" />
          {filter === "all"
            ? "Filter"
            : filter.charAt(0).toLowerCase() + filter.slice(1)}
        </button>
        {dropdownOpen && (
          <div className="absolute  bg-white border border-gray-200 rounded mt-2 w-full sm:w-[140px] shadow-sm font-semibold ">
            <button
              className="block px-2 w-full text-left hover:bg-gray-200 py-2"
              onClick={() => (setFilter("Cheap"), setDropdownOpen(false))}
            >
              Cheap
            </button>
            <button
              className="block px-2 w-full text-left hover:bg-gray-200 py-2"
              onClick={() => (setFilter("Expensive"), setDropdownOpen(false))}
            >
              Expensive
            </button>
            <button
              className="block px-2 w-full text-left hover:bg-gray-200 py-2"
              onClick={() => (setFilter("Popular"), setDropdownOpen(false))}
            >
              Popular
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Filter;
