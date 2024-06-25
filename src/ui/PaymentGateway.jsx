import { useState } from "react";
import { FaCreditCard } from "react-icons/fa";

function PaymentGateway() {
  const [invalid, setInvalid] = useState(false);
  return (
    <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700 ">
      <div className="w-full pt-1 pb-5">
        <div className="bg-brand-500 border-4 border-[#fff] text-[#fff] text-3xl overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
          <FaCreditCard />
        </div>
      </div>
      <div className="mb-10">
        <h1 className="text-center font-bold text-xl uppercase tracking-wide">
          Secure payment info
        </h1>
        {invalid && (
          <p className="text-center font-semibold text-[#b74949] uppercase">
            Invalid credentials
          </p>
        )}
      </div>
      <div className="mb-3 flex -mx-2">
        <div className="px-2">
          <img
            src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
            className="h-8 ml-3"
            alt=""
          />
        </div>
      </div>
      <div className="mb-3">
        <label className="font-bold text-sm mb-2 ml-1">Name on card</label>
        <div>
          <input
            className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
            placeholder="Carolina Smith"
            type="text"
          />
        </div>
      </div>
      <div className="mb-3">
        <label className="font-bold text-sm mb-2 ml-1">Card number</label>
        <div>
          <input
            className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
            type="tel"
            inputmode="numeric"
            pattern="[0-9\\s]{13,19}"
            placeholder="xxxx xxxx xxxx xxxx"
            // type="text"
          />
        </div>
      </div>
      <div className="mb-3 -mx-2 flex items-end">
        <div className="px-2 w-1/2">
          <label className="font-bold text-sm mb-2 ml-1">
            Expiration date
            <input
              type="month"
              className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </label>
        </div>
      </div>
      <div className="mb-10">
        <label className="font-bold text-sm mb-2 ml-1">CVV</label>
        <div>
          <input
            className="w-32 px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
            placeholder="000"
            type="password"
          />
        </div>
      </div>
      <div>
        <button
          onClick={() => setInvalid(true)}
          className="block w-full max-w-xs mx-auto bg-brand-500 text-[#fff] rounded-lg px-3 py-3 font-semibold"
        >
          PAY NOW
        </button>
      </div>
    </div>
  );
}

export default PaymentGateway;
