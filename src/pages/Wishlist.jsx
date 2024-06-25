import { useEffect, useLayoutEffect, useState } from "react";
import { getCurrUser } from "../services/AuthAPI";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../features/products/ProductCard";
function Wishlist() {
  const wishlist = useLoaderData();
  const [customer, setCustomer] = useState();
  useEffect(() => {
    document.title = "Dazzle: Whishlist";
    return function () {
      document.title = "Dazzle";
    };
  }, []);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  getCurrUser().then(function (result) {
    setCustomer(result?.user.id);
  });
  const items = [];
  wishlist?.forEach((element) => {
    items.push(element.products);
  });
  return (
    <div className="bm">
      <p className="font-cinzel text-3xl my-6">My wishlist</p>
      {customer === undefined || wishlist === null ? (
        <div className="h-screen">
          <p className="font-giftingDesc text-xl m-auto text-[#a7a1a1] text-center">
            Empty Wishlist
          </p>
        </div>
      ) : (
        <>
          <div className="bm flex flex-wrap justify-center">
            {items.map((item) => (
              <ProductCard product={item} key={item.id} inWishlist={true} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Wishlist;
