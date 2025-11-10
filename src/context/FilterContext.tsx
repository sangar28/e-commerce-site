import React, { createContext, useState, useEffect } from "react";

interface FilterContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  minPrice: number | undefined;
  setMinPrice: (price: number | undefined) => void;
  maxPrice: number | undefined;
  setMaxPrice: (price: number | undefined) => void;
  keyword: string;
  setKeyword: (keyword: string) => void;
  categories: string[];
  keywords: string[];
  products: products[];
  setProducts: (products: products[]) => void;
  filter: string;
  setFilter: (filter: string) => void;
  currentPage: number;
  setCurrenPage: (page: number) => void;
  dropdownOpen: boolean;
  setDropdownOpen: (open: boolean) => void;
  itemsPerPage: number;
}

interface childrenType {
  children: React.ReactNode;
}

interface productType {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
}

interface products {
  products: productType[];
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

const FilterProvider = ({ children }: childrenType) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
  const [keyword, setKeyword] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);
  const [keywords] = useState<string[]>([
    "apple",
    "watch",
    "Fashion",
    "trend",
    "shoes",
    "shirt",
  ]);
  const [products, setProducts] = useState<products[]>([]);
  const [filter, setFilter] = useState<string>("all");
  const [currentPage, setCurrenPage] = useState<number>(1);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(true);
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data: { products: { category: string }[] } =
          await response.json();
        const uniqueCategories = Array.from(
          new Set(data.products.map((product) => product.category))
        );
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error Fetching Categories", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <FilterContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        keyword,
        setKeyword,
        categories,
        keywords,
        products,
        setProducts,
        filter,
        setFilter,
        currentPage,
        setCurrenPage,
        dropdownOpen,
        setDropdownOpen,
        itemsPerPage,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
export default FilterProvider;
export { FilterContext };
