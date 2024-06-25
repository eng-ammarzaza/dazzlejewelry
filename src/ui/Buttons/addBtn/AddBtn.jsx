import { useDispatch } from "react-redux";
import styles from "./AddBtn.module.css";
import { addItem } from "../../../features/cart/cartSlice";

function AddBtn({ product }) {
  const dispatch = useDispatch();
  const { id, image, name, price } = product;
  function handleAddToCart() {
    const newItem = {
      itemID: id,
      name,
      itemImg: image,
      quantity: 1,
      unitPrice: price,
      totalPrice: price * 1,
    };
    dispatch(addItem(newItem));
  }
  return <button className={styles.Btn} onClick={handleAddToCart}></button>;
}

export default AddBtn;
