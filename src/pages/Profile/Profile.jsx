import { useContext } from "react";
import styles from "./Profile.module.css";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

export default function Profile() {
  const { user, setUser } = useContext(AuthContext);
  // const navigate = useNavigate();

  function leave() {
    return localStorage.removeItem("user");
  }

  return (
    <>
      <h1>{JSON.parse(localStorage.getItem("user"))}</h1>
      <div className={styles.leave}>
        <Link to={"/"}>
          <button onClick={leave} className={styles.btn}>
            Выйти из аккаунта
          </button>
        </Link>
      </div>
    </>
  );
}
