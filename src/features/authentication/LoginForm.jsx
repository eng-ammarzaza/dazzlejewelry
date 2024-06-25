import { useEffect, useState } from "react";
import SignupForm from "./SignupForm";
import AOS from "aos";
import { Form, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login } from "../../services/AuthAPI";
import MiniSpinner from "../../ui/MiniSpinner";
//celiwe4480@lucvu.com
//12345678
function LoginForm() {
  const [signin, setSignin] = useState(false);
  const [isLogging, setIsLogging] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const navigate = useNavigate();

  const { register, formState, reset, handleSubmit } = useForm();
  const { errors } = formState;

  async function onSubmit({ email, password }) {
    setIsLogging(true);
    const res = await login({ email, password });
    if (res === false) {
      setIsInvalid(true);
      setIsLogging(false);
    }
    reset();
    navigate("/");
  }
  if (signin) return <SignupForm />;
  return (
    <div className="relative sm:max-w-xl sm:mx-auto " data-aos="fade-left">
      <div className="relative bg-white md:mx-0 sm:pl-5 ">
        <div className="max-w-md mx-auto md:py-24 py-4 pl-8 md:border-y-2 md:border-l-2 border-[#fff] rounded-bl-3xl">
          <Form onSubmit={handleSubmit(onSubmit)} className="pr-2">
            {isInvalid && (
              <p className="font-bold text-[#8a2929]">
                Invalid Login Credentials
              </p>
            )}
            <div className="flex gap-2">
              <label className="font-semibold text-sm text-gray-600 pb-1 block font-giftingDesc">
                E-mail Address
              </label>
              <p className="font-bold text-[#8a2929]">
                {errors?.email?.message}
              </p>
            </div>
            <input
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-72"
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
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-72"
              type="password"
              {...register("password", {
                required: "This field is required",
                minLength: {
                  value: 8,
                  message: "Password must be 8 characters minimum",
                },
              })}
            />
            <div className="text-right mb-4">
              <button className="text-xs font-display font-semibold border-b text-gray-500 hover:text-gray-600 cursor-pointer">
                Forgot Password?
              </button>
            </div>
            <div className="mb-5">
              {isLogging ? (
                <div className=" bg-[#fff] pt-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
                  <MiniSpinner />
                </div>
              ) : (
                <button
                  className=" bg-[#fff] py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                  type="submit"
                >
                  Sign in
                </button>
              )}
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
              <button
                onClick={() => setSignin(true)}
                className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
              >
                Dont't have an account? Sign up
              </button>
              <span className="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
