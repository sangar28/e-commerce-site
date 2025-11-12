import { useContext, useEffect } from "react";
import { FilterContext } from "../../context/FilterContext";
import { type Product } from "../../context/FilterContext";
import ProductCard from "./ProductCard";

const FilterProducts = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("FilterProducts must be used within a FilterProvider");
  }

  const {
    currentPage,
    itemsPerPage,
    keyword,
    setProducts,
    products,
    selectedCategory,
    minPrice,
    maxPrice,
    searchQuery,
    filter,
    setCurrentPage,
  } = context;

  useEffect(() => {
    setCurrentPage(1);
  }, [
    selectedCategory,
    minPrice,
    maxPrice,
    searchQuery,
    keyword,
    filter,
    setCurrentPage,
  ]);

  // Fetching procducts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${
          (currentPage - 1) * itemsPerPage
        }`;

        if (keyword) {
          url = `https://dummyjson.com/products/search?q=${keyword}`;
        }

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: { products: Product[] } = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error Fetching Data", error);
      }
    };
    fetchProducts();
  }, [currentPage, keyword, setProducts, itemsPerPage]);

  // get Filtered products

  const getFIlteredProducts = () => {
    let filteredProducts = products;
    // filter category wise
    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }
    //fiter minPrice wise
    if (minPrice !== undefined) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= minPrice
      );
      //   console.log(filteredProducts);
    }

    //   filter maxPrice wise
    if (maxPrice !== undefined) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= maxPrice
      );
      // console.log(filteredProducts)
    }

    //   filter searchQuery wise
    if (searchQuery) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      console.log(filteredProducts);
    }
    //   filter expensive, popular, cheap wise
    switch (filter) {
      case "Expensive":
        return filteredProducts.sort((a, b) => b.price - a.price);
      case "Cheap":
        return filteredProducts.sort((a, b) => a.price - b.price);
      case "Popular":
        return filteredProducts.sort((a, b) => b.rating - a.rating);
      default:
        return filteredProducts;
    }
  };

  const filteredProducts = getFIlteredProducts();
  console.log(filteredProducts);

  return (
    <div className="flex justify-center items-center min-h-[500px] w-full">
      {" "}
      {/* Centering container: flex centers content, min-h ensures height */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-4 gap-5 mb-2 w-full ">
          {" "}
          {/* Grid for products */}
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              thumbnail={product.thumbnail}
              price={product.price}
              description={""}
              category={""}
              rating={0}
              images={""}
            />
          ))}
        </div>
      ) : (
        <p className="font-bold text-center text-lg ">
          {" "}
          {/* Centered message */}
          No products match your filters.
        </p>
      )}
    </div>
  );
};
export default FilterProducts;
