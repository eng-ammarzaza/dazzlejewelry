import { IoCartOutline } from "react-icons/io5";
import SideModal from "./SideModal";
import SideCart from "../features/cart/SideCart";
import { useSelector } from "react-redux";
import { getNumItems } from "../features/cart/cartSlice";

function CartIcon() {
  const numItems = useSelector(getNumItems);

  return (
    <>
      <SideModal>
        <SideModal.Open opens="cart-form">
          <div className="relative w-6">
            {numItems > 0 && (
              <div className="bg-brand-500 rounded-full text-center absolute size-4 bottom-3 end-0">
                <p className="text-xs font-medium ">{numItems}</p>
              </div>
            )}
            <IoCartOutline className="cursor-pointer" title="cart" />
          </div>
        </SideModal.Open>
        <SideModal.Window name="cart-form">
          <SideCart />
        </SideModal.Window>
      </SideModal>
    </>
  );
}

export default CartIcon;
