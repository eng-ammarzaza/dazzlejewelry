import { formatCurrency } from "../utils/helpers";
import AddBtn from "../ui/Buttons/addBtn/AddBtn";
import BestSellerMark from "./BestSellerMark";
import OutStockMark from "./OutStockMark";
import { useNavigate } from "react-router-dom";
function ProductDetails({ product }) {
  const navigate = useNavigate();
  return (
    <div className="bm flex flex-col md:flex-row md:gap-8 gap-4 py-20">
      <img
        className=" md:w-[500px] md:h-[490px] w-80 h-80 rounded-tl-3xl rounded-br-3xl self-center"
        src={product.image}
        alt={product.name}
      />
      <div className="flex flex-col justify-between text-[#fff] ">
        <div>
          <p className="font-cinzel md:text-3xl font-semibold text-center">
            {product.name}
          </p>
          <hr className="w-full h-1 bg-brand-200 border-none my-4" />
          <div className="flex justify-between">
            <span className=" font-cinzel font-semibold md:text-2xl capitalize">
              <span>category: </span>
              <button
                onClick={() =>
                  navigate(`/products?category=${product.category}`)
                }
                className="underline"
              >
                {product.category}
              </button>
            </span>
            {product.bestSeller ? <BestSellerMark /> : null}
          </div>
        </div>
        <p className="font-heroDesc md:text-2xl text-sm text-[#000] font-semibold my-6 md:mb-0">
          {product.description}
        </p>
        <div className="flex justify-between">
          <p className=" font-cinzel font-semibold md:text-3xl text-xl text-[#000]">
            {formatCurrency(product.price)}
          </p>
          {product.collection === "oneandonly" ? (
            ""
          ) : product.inStock === false ? (
            <OutStockMark />
          ) : (
            <AddBtn product={product} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
