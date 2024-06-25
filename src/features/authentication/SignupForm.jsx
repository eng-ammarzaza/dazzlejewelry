import { useEffect, useState } from "react";
// import AccountInput from "../../ui/AccountInput";
import LoginForm from "./LoginForm";
import AOS from "aos";
import { Form, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signup } from "../../services/AuthAPI";

function SignupForm() {
  const navigate = useNavigate();
  const [signin, setSignin] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  function onSubmit({ fullName, email, password, birthday }) {
    console.log(fullName);
    signup({ fullName, email, password, birthday });
    reset();
    navigate("/home");
  }
  if (signin) return <LoginForm />;

  return (
    <div className="relative sm:max-w-xl sm:mx-auto " data-aos="fade-left">
      <div className="relative bg-white md:mx-0 sm:pl-5 ">
        <div className="max-w-md mx-auto py-2 pl-4 md:border-y-2 md:border-l-2 border-[#fff] rounded-bl-3xl">
          <Form onSubmit={handleSubmit(onSubmit)} className="pr-2">
            <div className="flex gap-2">
              <label className="font-semibold text-sm text-gray-600 pb-1 block font-giftingDesc">
                Full Name
              </label>
              <p className="font-bold text-[#8a2929]">
                {errors?.fullName?.message}
              </p>
            </div>

            <input
              className="border mt-1 mb-5 rounded-lg px-3 py-2  text-sm w-full"
              type="text"
              {...register("fullName", {
                required: "This field is required",
              })}
            />
            <div className="flex gap-2">
              <label className="font-semibold text-sm text-gray-600 pb-1 block font-giftingDesc">
                E-mail Address
              </label>
              <p className="font-bold text-[#8a2929]">
                {errors?.email?.message}
              </p>
            </div>
            <input
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              type="email"
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "INVALID email format",
                },
              })}
            />

            <div className="flex gap-2">
              <label className="font-semibold text-sm text-gray-600 pb-1 block font-giftingDesc">
                Password
              </label>
              <p className="font-bold text-[#8a2929]">
                {errors?.password?.message}
              </p>
            </div>
            <input
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              type="password"
              {...register("password", {
                required: "This field is required",
                minLength: {
                  value: 8,
                  message: "Password must be 8 characters minimum",
                },
              })}
            />

            <div className="flex gap-2">
              <label className="font-semibold text-sm text-gray-600 pb-1 block font-giftingDesc">
                Birthday Date
              </label>
              <p className="font-bold text-[#8a2929]">
                {errors?.birthday?.message}
              </p>
            </div>
            <input
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              type="date"
              {...register("birthday", {
                required: "Birthday Date is reuired",
                valueAsDate: true,
              })}
            />

            <div className="mb-5">
              <button
                className=" bg-[#fff] py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-[#f3d8c7] focus:ring-offset-[#f3d8c7] text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                type="submit"
              >
                Sign up
              </button>
              <p className="font-semibold text-xs text-gray-600 pb-1 block font-giftingDesc">
                You have to verify your email address before your first login
              </p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
              <button
                onClick={() => setSignin(true)}
                className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
              >
                Already have an account? sign in
              </button>
              <span className="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
