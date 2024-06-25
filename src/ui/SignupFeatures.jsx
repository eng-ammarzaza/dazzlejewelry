import { FaBirthdayCake, FaShippingFast } from "react-icons/fa";
import { SiOpenaccess } from "react-icons/si";
import SignupFeature from "./SignupFeature";
import { useEffect } from "react";
import AOS from "aos";

function SignupFeatures() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div
      data-aos="fade-right"
      className="bg-[#f3d8c7] md:h-[35rem] p-4 flex flex-col rounded-tr-3xl text-[#9a8f97]  items-center justify-evenly"
    >
      <p className="font-fairytale md:text-3xl text-[#000] self-center border-b pb-3">
        Welcome to Dazzle's Family!
      </p>
      <div className="flex flex-col gap-10">
        <p className="font-heroDesc font-semibold md:text-lg">
          - Enjoy membership features:
        </p>
        <SignupFeature icon={<FaBirthdayCake className="md:size-10" />}>
          Birthday treat
        </SignupFeature>
        <SignupFeature icon={<SiOpenaccess className="md:size-10" />}>
          priority sale access
        </SignupFeature>
        <SignupFeature icon={<FaShippingFast className="md:size-10" />}>
          free fast Shipping
        </SignupFeature>
      </div>
    </div>
  );
}

export default SignupFeatures;
