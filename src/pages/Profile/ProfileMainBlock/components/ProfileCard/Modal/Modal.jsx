import { useContext, useEffect, useState } from "react";
import { EditContext } from "../../../../../../providers/EditProvider";
import styles from "./Modal.module.css";
import { profile } from "../../../../../../service/profile";

export default function Modal(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  const { setModalActive } = useContext(EditContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await profile.card(user);
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.fullscreen}>
      <div className={styles.profile_card_main}>
        <div className={styles.profile_card_main_header}>
          <img src="/../../src/assets/img/people1.png" alt="" />
          <p>{data.name + ", " + data.age}</p>
          <span>БПИ-2301</span>
        </div>
        <div className={styles.profile_card_main_info}>
          <hr />
          <p>
            Пол
            <span>{data.a === "Male" ? "Мужской" : "Женский"}</span>
          </p>
          <p>
            Дата рождения
            <span>01.09.2005</span>
          </p>
          <p>
            Цель знакомства
            <span>Дружба</span>
          </p>
          <hr />
        </div>
        <div className={styles.profile_card_main_description}>
          <p>
            Ищу хорошего друга для общения и совместных посиделок. Люблю играть
            в настольные игры, читать книги, смотреть фильмы про супергероев
          </p>
        </div>
      </div>
      <button onClick={() => setModalActive(false)}>Назад</button>
    </div>
  );
}
