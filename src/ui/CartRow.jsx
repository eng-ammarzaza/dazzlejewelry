import UpdateItemQnt from "../features/cart/UpdateItemQnt";
import { formatCurrency } from "../utils/helpers";
import RemoveItemBtn from "./Buttons/RemoveItemBtn";

function CartRow({ image, name, price, productID, totalPrice }) {
  return (
    <tr className="text-center border-t">
      <td>
        <img src={image} alt={name} />
      </td>
      <td className="font-cinzel md:font-medium text-xs md:text-lg ">{name}</td>
      <td className="md:font-semibold text-sm md:text-lg">
        {formatCurrency(price)}
      </td>
      <td className="md:self-center">
        <UpdateItemQnt productID={productID} />
      </td>
      <td className="md:font-semibold text-sm md:text-lg">
        {formatCurrency(totalPrice)}
      </td>
      <td className="md:pr-4">
        <RemoveItemBtn productID={productID} />
      </td>
    </tr>
  );
}

export default CartRow;
