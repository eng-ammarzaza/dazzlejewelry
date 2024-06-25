import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { useEffect, useState } from "react";
import {
  addToWishlist,
  checkWishlist,
  removeFromWishlist,
} from "../../services/WishlistAPI";

function Whishlist({ productID, customerID, inWishlist }) {
  const [isWishlist, setIsWishlist] = useState(inWishlist);
  useEffect(
    function () {
      checkWishlist(productID, customerID).then(function (result) {
        if (result[0]?.productID !== undefined) setIsWishlist(true);
      });
    },
    [productID, customerID]
  );
  return (
    <div>
      {isWishlist ? (
        <IoIosHeart
          title="Remove from wishlist"
          className="self-end size-5 cursor-pointer"
          style={{ color: "#dc2626" }}
          onClick={() => {
            removeFromWishlist(productID, customerID);
            setIsWishlist(false);
          }}
        />
      ) : (
        <IoIosHeartEmpty
          className="self-end size-5 cursor-pointer"
          title="Add to wishlist"
          onClick={() => {
            addToWishlist(customerID, productID);
            setIsWishlist(true);
          }}
        />
      )}
    </div>
  );
}
// !inWhishlist || removed) && (

export default Whishlist;
