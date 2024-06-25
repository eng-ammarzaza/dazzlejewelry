import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalPrice } from "../features/cart/cartSlice";
import { useForm } from "react-hook-form";
import InputError from "./InputError";
import { formatCurrency } from "../utils/helpers";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../services/OrderAPI";
import { useState } from "react";
import { getSession } from "../services/AuthAPI.js";
import PaymentGateway from "./PaymentGateway.jsx";

function CheckoutForm() {
  const cart = useSelector(getCart);
  const bill = useSelector(getTotalPrice);
  const [fast, setFast] = useState(false);
  const [epay, setepay] = useState(false);
  const [session, setSettion] = useState();

  getSession().then(function (result) {
    setSettion(result?.session.access_token);
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;
  function onSubmit({
    firstName,
    lastName,
    email,
    phone,
    company,
    street_house,
    housetype,
    city,
    region,
    country,
    more_info,
    payment,
    fastShipping,
  }) {
    const orderInfo = {
      firstName,
      lastName,
      email,
      phone,
      company,
      street_house,
      housetype,
      city,
      region,
      country,
      more_info,
      payment,
    };
    var payMethod = document.querySelector('input[name="payment"]:checked').id;
    if (payMethod === "cash") {
      console.log(orderInfo);
      createOrder(cart, orderInfo, payMethod, bill, fastShipping);
      navigate("/order-complete");
    }

    dispatch(clearCart());

    reset();
  }
  return (
    <div className="flex gap-0 flex-col md:flex-row">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex flex-col gap-2">
          <p className="font-cinzel md:text-xl font-medium tracking-wide">
            Customer Information:
          </p>

          <div className="flex gap-2">
            <div className="w-full">
              <input
                placeholder="First Name"
                type="text"
                className="checkinput"
                {...register("firstName", {
                  required: "First Name is required",
                })}
              />
              <InputError>{errors?.firstName?.message}</InputError>
            </div>
            <div className="w-full">
              <input
                placeholder="Last Name"
                type="text"
                className="checkinput"
                {...register("lastName", {
                  required: "Last Name is required",
                })}
              />
              <InputError>{errors?.lastName?.message}</InputError>
            </div>
          </div>

          <input
            placeholder="Company Name (optional)"
            type="text"
            className="checkinput"
            {...register("company")}
          />

          <input
            placeholder="Email Address"
            type="email"
            className="checkinput"
            {...register("email", {
              required: "Email field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "INVALID email format",
              },
            })}
          />
          <InputError>{errors?.email?.message}</InputError>

          <input
            placeholder="Phone Number"
            type="text"
            className="checkinput"
            {...register("phone", {
              required: "Phone Number is required",
              pattern: {
                value:
                  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
                message: "INVALID phone number",
              },
            })}
          />
          <InputError>{errors?.phone?.message}</InputError>

          <input
            placeholder="Street name and House number"
            type="text"
            className="checkinput"
            {...register("street_house", {
              required: "Street name and House number are required",
            })}
          />
          <InputError>{errors?.street_house?.message}</InputError>

          <input
            placeholder="House, Apartement, Unit, etc... (optional)"
            type="text"
            className="checkinput"
            {...register("housetype")}
          />

          <div className="flex gap-2">
            <div className="w-full">
              <input
                placeholder="City / Town"
                type="text"
                className="checkinput"
                {...register("city", {
                  required: "City / Town is requiered",
                })}
              />
              <InputError>{errors?.city?.message}</InputError>
            </div>
            <div className="w-full">
              <input
                placeholder="Region"
                type="text"
                className="checkinput"
                {...register("region", {
                  required: "Region is requiered",
                })}
              />
              <InputError>{errors?.region?.message}</InputError>
            </div>
            <div className="w-full">
              <select
                className="checkinput"
                {...register("country", {
                  required: "Country is requiered",
                })}
              >
                <option value="" disabled selected>
                  Country
                </option>

                <option value="australia">Australia</option>
                <option value="singapore">Singapore</option>
                <option value="korea">South Korea</option>
                <option value="nz">New Zealand</option>
              </select>
              <InputError>{errors?.country?.message}</InputError>
            </div>
          </div>
          <div className="my-4">
            <p className="font-cinzel md:text-xl font-medium tracking-wide">
              Special Instructions:
            </p>
            <input
              placeholder="If there is any additional information, please inform us..."
              type="text"
              {...register("more_info")}
              className="checkinput"
            />
          </div>
          <div className="my-4">
            <p className="font-cinzel md:text-xl font-medium mb-2 tracking-wide">
              Payment Method:
            </p>
            <span className="mr-6 block mb-4 md:inline md:mb-0">
              <label className="m-2 font-giftingDesc text-xs md:text-base">
                <input
                  type="radio"
                  id="epay"
                  className="mx-1"
                  name="payment"
                  onClick={() => setepay(true)}
                  {...register("payment", {
                    required: true,
                  })}
                />
                E-Payment: Make your payment directly into our bank account.
              </label>
            </span>

            <label className="m-2 font-giftingDesc text-xs md:text-base">
              <input
                className="mx-1"
                type="radio"
                id="cash"
                name="payment"
                onClick={() => setepay(false)}
                {...register("payment", {
                  required: "You have to choose payment method",
                })}
              />
              Cash on deleviry: Pay with cash upon delivery.
            </label>
            <InputError>{errors?.payment?.message}</InputError>
          </div>
          <label className="m-2 font-giftingDesc text-xs mt-4 md:text-base">
            <input
              type="checkbox"
              name="fast"
              onClick={() => setFast(!fast)}
              {...register("fastShipping")}
            />
            {"  "}
            FAST SHIPPING +200$
          </label>
        </div>
        <button
          className="border-2 w-2/3 text-center py-4 text-lg font-giftingDesc font-medium mt-4 hover:bg-[#000] cursor-pointer hover:border-[#000] hover:text-[#fff]"
          type="submit"
        >
          Place order{" "}
          {session === undefined && fast
            ? formatCurrency(bill + 200)
            : formatCurrency(bill)}
        </button>
      </form>
      {epay && (
        <div className="md:w-1/3 p-4 mt-8 md:mt-0">
          <PaymentGateway />
        </div>
      )}
    </div>
  );
}

export default CheckoutForm;
