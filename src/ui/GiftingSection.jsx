import { IoIosGift } from "react-icons/io";
import { TbTruckReturn } from "react-icons/tb";
import { IoDiamondSharp } from "react-icons/io5";
import GiftFeature from "./GiftFeature";

function GiftingSection() {
  return (
    <div className="bm my-20 flex flex-col md:gap-10 text-center text-brand-500">
      <p className="uppercase tracking-widest text-2xl font-bold mb-10">
        Gifting become easier
      </p>
      <div className="flex flex-col md:flex-row md:justify-between gap-20 ">
        <span>
          <IoIosGift className="md:size-2/5 size-28 m-auto" />
          <GiftFeature
            title={"unique gift for a unique one"}
            description={
              "Single & scintillating custom jewelry design on order."
            }
          />
        </span>

        <span>
          <IoDiamondSharp className="md:size-2/5 size-28 m-auto" />
          <GiftFeature
            title={"We will always be your 1st choice"}
            description={"Speed shipping up to 12 hours & lifetime warranty."}
          />
        </span>

        <span>
          <TbTruckReturn className="md:size-2/5 size-28 m-auto" />
          <GiftFeature
            title={"Free returns"}
            description={"Free and easy returns by mail for online purchasing."}
          />
        </span>
      </div>
    </div>
  );
}

export default GiftingSection;
