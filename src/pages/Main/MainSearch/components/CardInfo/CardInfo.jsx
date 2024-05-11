import styles from "./CardInfo.module.css";
import close from "../../../public/close.png";
import chel from "../../../public/chel.png";
import { useEffect, useState } from "react";
import { cards } from "../../../../../service/mainCards.js";
import { Link } from "react-router-dom";

export default function CardInfo({ setCardModal, tempLogin }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function takeInfoForCard() {
      const response = await cards.infoCard(tempLogin);
      setData(response);
    }
    takeInfoForCard();
    document.addEventListener("keydown", handleEscapeDown);
    return () => {
      document.removeEventListener("keydown", handleEscapeDown);
    };
  }, []);
  const handleEscapeDown = (event) => {
    if (event.key === "Escape") {
      setCardModal(false);
    }
  };

  return (
    <div className={styles.bg}>
      <div className={styles.profile_card_main}>
        <button
          className={styles.profile_close}
          onClick={() => setCardModal(false)}
        >
          <img src={close} alt="Закрыть" height={"30px"} width={"30px"} />
        </button>
        <Link to={`/${tempLogin}`}>
          <button className={styles.profile_go}>
            <img src={chel} alt="Перейти" height={"30px"} width={"22px"} />
          </button>
        </Link>
        <div className={styles.profile_card_main_header}>
          <img src={data.photo} alt="" />
          <p>{data.name}</p>
          <span>{data.group ? data.group : "*Группа*"}</span>
        </div>
        <div className={styles.profile_card_main_info}>
          <hr />
          <p>
            Пол
            <span>{data.sex === "Male" ? "Мужской" : "Женский"}</span>
          </p>
          <p>
            Возраст
            <span>{data.age}</span>
          </p>
          <p>
            Цель знакомства
            <span>
              {data.dating_purpose ? data.dating_purpose : "Не указано"}
            </span>
          </p>
          <hr />
        </div>
        <div className={styles.profile_card_main_description}>
          <p>{data.about_me ? data.about_me : "Не указано"}</p>
        </div>
      </div>
    </div>
  );
}
