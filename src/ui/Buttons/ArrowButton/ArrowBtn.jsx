import { useNavigate } from "react-router-dom";
import styles from "./ArrowBtn.module.css";
function ArrowBtn({ type }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() =>
        type === "Promise rings"
          ? navigate("/collections/promise")
          : navigate("/collections/bridal")
      }
      className={styles.learn_more}
    >
      <span className={styles.circle} aria_hidden="true">
        <span className={`${styles.icon} ${styles.arrow}`}></span>
      </span>
      <span className={styles.button_text}>Go to shop</span>
    </button>
  );
}

export default ArrowBtn;
