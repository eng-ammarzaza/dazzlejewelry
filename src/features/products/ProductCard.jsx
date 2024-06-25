import { IoIosHeartEmpty } from "react-icons/io";
import AddBtn from "../../ui/Buttons/addBtn/AddBtn";
import { formatCurrency } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";
import BestSellerMark from "../../ui/BestSellerMark";
import OutStockMark from "../../ui/OutStockMark";
import { getCurrUser } from "../../services/AuthAPI";
import { useState } from "react";
import Modal from "../../ui/Modal";
import Signup from "../authentication/Signup";
import WishlistIcon from "../wishlist/WishlistIcon";

function ProductCard({ product, inWishlist }) {
  const navigate = useNavigate();
  const [customer, setCustomer] = useState();

  getCurrUser().then(function (result) {
    setCustomer(result?.user.id);
  });

  const customerID = customer !== undefined ? customer : null;

  return (
    <div className="flex flex-col gap-4 p-4 items-center w-80 h-2/4 rounded-tl-3xl rounded-br-3xl bg-[#FAFAFA] m-5 hover:shadow-[0_0_25px_1px] hover:shadow-[#dfa921]">
      <div className="h-11 content-center">
        <p className="font-cinzel font-semibold text-center">{product.name}</p>
      </div>
      <div className="flex justify-between w-full">
        {product.bestSeller ? <BestSellerMark /> : <div></div>}
        {customer === undefined ? (
          <Modal>
            <Modal.Open opens="signup-form">
              <IoIosHeartEmpty
                className="self-end size-5 cursor-pointer"
                title="Add to wishlist"
              />
            </Modal.Open>
            <Modal.Window name="signup-form">
              <Signup />
            </Modal.Window>
          </Modal>
        ) : (
          <WishlistIcon
            productID={product.id}
            customerID={customerID}
            inWishlist={inWishlist}
          />
        )}
      </div>
      <img
        src={product.image}
        alt={product.name}
        className="hover:cursor-pointer w-[450px] h-[300px]"
        onClick={() => navigate(`/products/${product.id}`)}
      />
      {product.discount === null ? (
        <p className="font-semibold text-xl">{formatCurrency(product.price)}</p>
      ) : (
        <div className="flex gap-8">
          <p className="font-semibold text-xl">
            {formatCurrency(product.price)}
          </p>
          <p className="text-xl">- {product.discount}%</p>
        </div>
      )}
      {product.collection === "oneandonly" ? (
        <p className=" font-giftingDesc italic md:text-sm text-xs text-center">
          Products from this collection are unavailable for online purchasing.
        </p>
      ) : product.inStock === false ? (
        <OutStockMark />
      ) : (
        <AddBtn product={product} />
        // id={id} image={image} name={name} price={price}
      )}
    </div>
  );
}

export default ProductCard;
