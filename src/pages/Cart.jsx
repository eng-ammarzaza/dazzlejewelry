import { useEffect } from "react";
import CartTable from "../ui/CartTable";
import CartTotalTable from "../ui/CartTotalTable";
import { useSelector } from "react-redux";
import { getNumItems } from "../features/cart/cartSlice";
import OrderProcessHeader from "../ui/OrderProcessHeader";

function Cart() {
  const numItems = useSelector(getNumItems);
  useEffect(() => {
    document.title = "Dazzle: Shopping cart";
    return function () {
      document.title = "Dazzle";
    };
  }, []);

  if (numItems === 0)
    return (
      <div className="h-dvh text-center">
        <p className="text-2xl mt-10">Empty Cart</p>
      </div>
    );
  return (
    <div className="bm">
      <p className="font-cinzel md:text-3xl text-xl mt-2 border-b border-brand-500 pb-2">
        Shopping Cart
      </p>
      <OrderProcessHeader number={1} />
      <div className="flex flex-col md:flex-row gap-8 md:justify-evenly">
        <CartTable />
        <CartTotalTable />
      </div>
    </div>
  );
}

export default Cart;
