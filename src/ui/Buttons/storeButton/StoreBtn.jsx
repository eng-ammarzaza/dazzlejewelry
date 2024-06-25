import { useNavigate } from "react-router-dom";
import styles from "./StoreBtn.module.css";
function StoreBtn({ children }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(`/stores/${children}`)}
      className={styles.Btn_gold}
    >
      {children}
    </button>
  );
}

export default StoreBtn;
