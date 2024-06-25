import { formatCurrency } from "../utils/helpers";
import { useNavigate } from "react-router-dom";

function CompleteLookProduct({ product }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/products/${product.id}`)}
      className="flex md:w-56 w-52 flex-col justify-evenly items-center border-2 cursor-pointer bg-[#FAFAFA] border-brand-500 rounded-tl-3xl rounded-br-3xl p-3"
    >
      <p className="text-center font-cinzel font-medium">{product.name}</p>
      <img className="md:w-44 w-40" src={product.image} alt={product.name} />
      <div className="flex gap-12">
        <span className="font-semibold">{formatCurrency(product.price)}</span>
        <span className="font-medium font-heroDesc">{product.category}</span>
      </div>
    </div>
  );
}

export default CompleteLookProduct;
