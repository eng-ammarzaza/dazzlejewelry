import { useNavigate } from "react-router-dom";
import SideCartBtn from "../../ui/Buttons/SideCartBtn";
import { useSelector } from "react-redux";
import { getCart, getNumItems } from "./cartSlice";
import SideCartItem from "./SideCartItem";
function SideCart() {
  const cartItems = useSelector(getNumItems);
  const cart = useSelector(getCart);
  const navigate = useNavigate();
  return (
    <div className="m-2 flex flex-col justify-between h-screen pt-10 ">
      {cartItems === 0 ? (
        <p className="font-giftingDesc text-xl self-center text-[#a7a1a1]">
          Empty Cart
        </p>
      ) : (
        <div className="flex flex-col justify-between  h-screen ">
          <div className="overflow-y-auto">
            {cart.map((product) => (
              <SideCartItem product={product} key={product.itemID} />
            ))}
          </div>

          <div>
            <SideCartBtn onClick={() => navigate("/cart")}>
              View Cart
            </SideCartBtn>
            <SideCartBtn onClick={() => navigate("/checkout")}>
              Check-Out
            </SideCartBtn>
          </div>
        </div>
      )}
    </div>
  );
}

export default SideCart;
