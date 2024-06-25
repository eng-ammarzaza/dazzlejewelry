import { useSelector } from "react-redux";
import { getCart } from "../features/cart/cartSlice";
import CartRow from "./CartRow";

function CartTable() {
  const cart = useSelector(getCart);

  return (
    <table className="border">
      <thead>
        <tr className="bg-brand-500 text-[#fff] font-bondi md:text-lg text-xs uppercase md:tracking-wider h-10">
          <th className="md:w-40"></th>
          <th className="md:p-4 md:w-52">Product</th>
          <th className="md:p-4">Price</th>
          <th className="md:p-4">Quantity</th>
          <th className="md:p-4">Subtotal</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {cart.map((product) => (
          <CartRow
            productID={product.itemID}
            image={product.itemImg}
            name={product.name}
            price={product.unitPrice}
            totalPrice={product.totalPrice}
            key={product.itemID}
          />
        ))}
      </tbody>
    </table>
  );
}

export default CartTable;
