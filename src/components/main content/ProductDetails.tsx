import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FilterContext } from "../../context/FilterContext";
import { type Product } from "../../context/FilterContext";

const ProductDetails = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("FilterProducts must be used within a FilterProvider");
  }
  const { productDetails, setProductDetails } = context;

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const FetchProductDetails = async () => {
      if (id) {
        try {
          const response = await fetch(`https://dummyjson.com/products/${id}`);
          const data: Product = await response.json();
          setProductDetails(data);
          // console.log(data);
        } catch (error) {
          console.error(`Error fetching product data: ${error}`);
        }
      }
    };
    FetchProductDetails();
  }, [id, setProductDetails]);

  if (!productDetails) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="p-5 w-[60%]">
      <button
        onClick={() => navigate(-1)}
        className="mb-5 p-2 w-20  bg-black text-white rounded"
      >
        Back
      </button>

      <img
        src={productDetails.images[0]}
        alt={productDetails.title}
        className="w-[50%] h-auto mb-5"
      />
      <h1 className="text-2xl mb-4 font-bold">{productDetails.title}</h1>
      <p className="mb-4 text-gray-700 w-[50%] font-semibold">{productDetails.description}</p>
      <div className="flex gap-10 font-semibold">
        <p><span className="font-bold">Price:</span>   $ { productDetails.price }</p>
        <p><span className="font-bold">Rating:</span>   $ { productDetails.rating }</p>
      </div>
    </div>
  );
};
export default ProductDetails;
