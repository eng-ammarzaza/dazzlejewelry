import { useSelector } from "react-redux";
import { getTotalPrice } from "../features/cart/cartSlice";
import { formatCurrency } from "../utils/helpers";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CartTotalTable() {
  const [coupon, setCoupon] = useState(false);
  const [validCoupon, setValidCoupon] = useState(true);

  const bill = useSelector(getTotalPrice);
  const navigate = useNavigate();
  function handleCoupon(e) {
    e.preventDefault();
    setValidCoupon(false);
  }
  return (
    <div className="text-center">
      <div className="bg-brand-500 border border-[#000] text-[#fff] font-bondi text-lg">
        <p className="md:w-80 md:p-4 p-2 md:text-xl uppercase tracking-wider font-bondi">
          cart total
        </p>
      </div>
      <div className="flex  flex-col md:h-72 h-60 justify-evenly items-center border-x border-b border-[#000]">
        <div className="border-b-2 border-b-brand-500 w-3/4 pb-4 font-medium">
          <p className="uppercase tracking-wide">Total + 200$ deleviry fees:</p>
          <p>{formatCurrency(bill)}</p>
        </div>
        <div>
          <p
            className="hover:underline cursor-pointer"
            onClick={() => {
              setCoupon(!coupon);
              setValidCoupon(true);
            }}
          >
            Do you have a coupon?
          </p>
          <form onSubmit={handleCoupon} className="flex flex-col">
            {coupon && (
              <>
                <input
                  type="text"
                  placeholder=" Enter your coupon"
                  className="border rounded-lg"
                />
                {!validCoupon && (
                  <p className="text-[#d44d4d]">Invalid coupon</p>
                )}
              </>
            )}
          </form>
        </div>

        <button
          onClick={() => navigate("/checkout")}
          className="border-2 capitalize text-center py-4 px-8 text-lg font-giftingDesc font-medium m-2 hover:bg-brand-500 cursor-pointer hover:border-brand-500 hover:text-[#fff]"
        >
          proceed to check-out
        </button>
      </div>
    </div>
  );
}

export default CartTotalTable;
