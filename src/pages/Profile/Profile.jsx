import { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import { Link } from "react-router-dom";
import { profile } from "../../service/profile";

export default function Profile() {
  const login = JSON.parse(localStorage.getItem("user"));
  const [data, setData] = useState([]);

  // async function sendProf(user) {
  //   return await profile(user);
  // }
  // const age = "";
  useEffect(() => {
    const fetchData = async () => {
      const data = await profile(login);
      setData(data);
    };
    fetchData();
  }, []);

  function leave() {
    return localStorage.removeItem("user");
  }

  return (
    <>
      {/* {console.log(data)} */}
      <h1>{data.name}</h1>
      <div className={styles.info}>
        <h2>ВОЗРАСТ- {data.age}</h2>
        <h2>ПОЛ - {data.sex == "Female" ? "Девушка" : "Парень"}</h2>
      </div>
      <div className={styles.leave}>
        <Link to={"/"}>
          <button onClick={leave} className={styles.btn}>
            Выйти из аккаунта
          </button>
        </Link>
        {/* <button onClick={() => sendProf(login)}>Получить данные</button> */}
      </div>
    </>
  );
}
