import { useContext } from "react";
import styles from "./Profile.module.css";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  function leave() {
    return localStorage.removeItem("user"), navigate("/");
  }

  return (
    <>
      <h1>{JSON.parse(localStorage.getItem("user"))}</h1>
      <div className={styles.leave}>
        <button onClick={leave} className={styles.btn}>
          Выйти из аккаунта
        </button>
      </div>
    </>
  );
}
