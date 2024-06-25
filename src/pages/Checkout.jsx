import CheckoutForm from "../ui/CheckoutForm";
import OrderProcessHeader from "../ui/OrderProcessHeader";
import { useEffect, useLayoutEffect } from "react";

function Checkout() {
  useEffect(() => {
    document.title = "Dazzle: Check-out";
    return function () {
      document.title = "Dazzle";
    };
  }, []);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bm">
      <p className="font-cinzel md:text-3xl text-xl mt-2 border-b border-brand-500 pb-2">
        Check-out
      </p>
      <OrderProcessHeader number={2} />
      <CheckoutForm />
    </div>
  );
}

export default Checkout;
