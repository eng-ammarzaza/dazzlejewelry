import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

function ProductsHomeCard({ products, type }) {
  const navigate = useNavigate();
  return (
    <div className="bm text-center">
      <div className="flex flex-wrap justify-center">
        {products?.slice(1, 4).map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
      <button
        onClick={() =>
          type === "best-seller"
            ? navigate("/products?filter=best-seller")
            : navigate("/products")
        }
        className="p-3 my-6 uppercase text-[#fff] bg-[#000000] border-2 border-solid border-black items-center hover:bg-[#fff] hover:text-[#000]"
      >
        See full collection
      </button>
    </div>
  );
}

export default ProductsHomeCard;
