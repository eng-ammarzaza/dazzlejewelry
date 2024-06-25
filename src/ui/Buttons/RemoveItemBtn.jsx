import { IoIosRemoveCircle } from "react-icons/io";
import { useDispatch } from "react-redux";
import { removeItem } from "../../features/cart/cartSlice";

function RemoveItemBtn({ productID }) {
  const dispatch = useDispatch();
  return (
    <div>
      <IoIosRemoveCircle
        onClick={() => dispatch(removeItem(productID))}
        className="cursor-pointer"
      />
    </div>
  );
}

export default RemoveItemBtn;
