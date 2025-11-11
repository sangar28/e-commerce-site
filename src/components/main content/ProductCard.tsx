import { Link } from "react-router-dom";
import type { Product } from "../../context/FilterContext";
type ProductCardType = Product & {
  thumbnail: string;
};

const ProductCard = ({ id, thumbnail, price, title }: ProductCardType) => {
  // Use imported Product
  return (
    <div className="border border-gray-200 shadow-lg transition-transform ease-linear transform hover:scale-105 rounded">
      <Link to={`/products/${id}`}>
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-32 object-cover mb-2"
        />
        <h2 className="font-bold text-center min-h-10 flex justify-center items-cente">
          {title}
        </h2>
        <p className="font-semibold text-center min-h-8 flex justify-center items-center">
          ${price}
        </p>{" "}
        {/* Added $ for currency */}
      </Link>
    </div>
  );
};

export default ProductCard;
