import { useLoaderData } from "react-router-dom";
import StoreHeader from "../ui/StoreHeader";
import AddressCheck from "../ui/Buttons/AddressCheck/AddressCheck";
import { useEffect } from "react";
import { capitalizeFLetter } from "../utils/helpers";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

function Store() {
  const store = useLoaderData();
  const myStore = store[0];
  useEffect(() => {
    document.title = `Dazzle ${capitalizeFLetter(myStore.name)} store`;
    return function () {
      document.title = "Dazzle";
    };
  }, [myStore]);
  return (
    <>
      <StoreHeader store={store[0]} />
      <div className="bm my-6 flex flex-col md:flex-row justify-between">
        <div className="flex flex-col gap-8">
          <div className="flex gap-2 items-center">
            <AddressCheck />
            <p className="md:text-4xl text-2xl border-b-2 border-brand-500 pb-3">
              Address:
            </p>
          </div>
          <div className="md:text-3xl text-xl flex flex-col gap-8">
            <p className="flex gap-4 items-center">
              <FaPhoneAlt /> {myStore.phone}
            </p>
            <p className="flex gap-4 items-center">
              <MdEmail /> {myStore.email}
            </p>
            <p className="flex gap-4">
              <MdLocationOn /> {myStore.address}
            </p>
          </div>

          <img
            src="/dazzlelogo.png"
            alt="Dazzle Logo"
            className="md:w-96 md:h-70 w-72 self-center"
          />
        </div>
        <div className="w-2/4 h-96 self-center">
          <iframe
            src={`https://maps.google.com/maps?q=${myStore.location.lat},${myStore.location.lng}&z=15&output=embed`}
            width="600"
            height="300"
            // frameBorder="0"
            style={{ border: "0", width: "100%", height: "100%" }}
            title="dwo"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Store;
