import { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";

const Keywords = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error("keywords must be used within a FilterProvider");
  }
  const { keyword, keywords, setKeyword } = context;

  const handleSelectKeyword = (kw: string) => {
    setKeyword(keyword === kw ? "" : kw)
  }

  return (
    <div>
      {keywords.map((kw, index) => (
        <button
          key={index}
          className={`block mb-2 px-4 py-2 w-full text-left border border-gray-200 rounded hover:bg-gray-200 ${keyword === kw ? "bg-gray-200" : "bg-white"}`}
         onClick={() => handleSelectKeyword(kw)}
          
        >
          {kw.toUpperCase()}
        </button>
      ))}
    </div>
  );
};
export default Keywords;
