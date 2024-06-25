/* eslint-disable jsx-a11y/img-redundant-alt */
import RemoveItemBtn from "../../ui/Buttons/RemoveItemBtn";
import { formatCurrency } from "../../utils/helpers";
function SideCartItem({ product }) {
  return (
    <div className="flex gap-2 h-24 pb-2 border-b border-[#ced4da]">
      <img
        src={product.itemImg}
        alt={`${product.name}'s image`}
        className="w-20 pt-2"
      />
      <div className="flex justify-between w-full py-2 pr-2">
        <div className="flex flex-col justify-between w-3/4">
          <p className="font-cinzel h-4/5 text-sm font-medium">
            {product.name}
          </p>
          <p>{formatCurrency(product.unitPrice)}</p>
        </div>
        <button className="self-start">
          <RemoveItemBtn productID={product.itemID} />
        </button>
      </div>
    </div>
  );
}

export default SideCartItem;
