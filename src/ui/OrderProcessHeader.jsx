import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
} from "react-icons/tb";

function OrderProcessHeader({ number }) {
  return (
    <div className="flex justify-center my-12 gap-2 md:text-xl font-giftingDesc">
      <div
        className={`flex items-center gap-1 ${
          number === 1 ? "text-brand-500" : ""
        }`}
      >
        <TbCircleNumber1Filled /> Shopping Cart
      </div>
      &gt;
      <div
        className={`flex items-center gap-1 ${
          number === 2 ? "text-brand-500" : ""
        }`}
      >
        {" "}
        <TbCircleNumber2Filled /> Check-out
      </div>
      &gt;
      <div
        className={`flex items-center gap-1 ${
          number === 3 ? "text-brand-500" : ""
        }`}
      >
        {" "}
        <TbCircleNumber3Filled />
        Order Complete
      </div>
    </div>
  );
}

export default OrderProcessHeader;
