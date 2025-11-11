import { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";

const Category = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error("Category must be used within a FiterProvider");
  }
  const { categories, selectedCategory, setSelectedCategory } = context;
  return (
    <div>
      {categories.map((category, index) => (
        <label key={index} className="block mb-2">
          <input
            type="radio"
            name="category"
            value={category}
            checked={selectedCategory === category}
            onChange={() => setSelectedCategory(category)}
            className="mr-2 w-4 h-4 accent-indigo-400"
          />
          {category}
        </label>
      ))}
      <button onClick={() => setSelectedCategory("")} className="w-[80%] mt-2 font-semibold p-2 border rounded border-gray-200 shadow-sm" >clear</button>
    </div>
  );
};
export default Category;
