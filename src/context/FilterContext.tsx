import React, { createContext, useState, useEffect } from "react";

export interface FilterContextType {
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
  products: Product[];
  setProducts: (products: Product[]) => void;
  filter: string;
  setFilter: (filter: string) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  dropdownOpen: boolean;
  setDropdownOpen: (open: boolean) => void;
  itemsPerPage: number;
  productDetails: Product | null;
  setProductDetails: (product: Product | null) => void;
}

interface childrenType {
  children: React.ReactNode;
}

export interface Product {
  thumbnail: string;
  id: number;
  title: string;
  category: string;
  price: number;
  rating: number;
  images: string;
  description: string;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

const FilterProvider = ({ children }: childrenType) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
  const [keyword, setKeyword] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [productDetails, setProductDetails] = useState<Product | null>(null);
  const [keywords] = useState<string[]>([
    "apple",
    "watch",
    "Fashion",
    "trend",
    "shoes",
    "shirt",
  ]);
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
        setCurrentPage,
        dropdownOpen,
        setDropdownOpen,
        itemsPerPage,
        productDetails,
        setProductDetails,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
export default FilterProvider;
export { FilterContext };
