import { useDispatch, useSelector } from "react-redux";
import { decItemQnt, getCurrQntById, incItemQnt } from "./cartSlice";
import { LuBadgeMinus, LuBadgePlus } from "react-icons/lu";

function UpdateItemQnt({ productID }) {
  const dispatch = useDispatch();
  const currQnt = useSelector(getCurrQntById(productID));

  return (
    <div className="flex items-center gap-2 md:gap-3 px-8">
      <LuBadgeMinus
        className="size-6 cursor-pointer"
        onClick={() => dispatch(decItemQnt(productID))}
      />
      <span className="text-sm md:text-lg font-medium">{currQnt}</span>
      <LuBadgePlus
        className="size-6 cursor-pointer"
        onClick={() => dispatch(incItemQnt(productID))}
      />
    </div>
  );
}

export default UpdateItemQnt;
