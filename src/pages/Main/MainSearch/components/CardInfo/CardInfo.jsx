import styles from "./CardInfo.module.css";
import likeEnabled from "../../../../public/likeEnabled.png";
import likeDisabled from "../../../../public/likeDisabled.png";
import close from "../../../../public/close.png";
import chel from "../../../../public/chel.png";
import like from "../../../../public/like.png";
import swipe from "../../../../public/swipe.png";
import { useEffect, useState } from "react";
import { cards } from "../../../../../service/mainCards.js";
import { Link, json } from "react-router-dom";
import { likes } from "../../../../../service/likes.js";

export default function CardInfo({
  setCardModal,
  tempLogin,
  setTempLogin,
  currentIdCard,
  setCurrentIdCard,
  data,
  lengthData,
}) {
  const authUser = JSON.parse(localStorage.getItem("user"));
  const [logins, setLogins] = useState([]);
  const [cardData, setCardData] = useState([]);
  const [lightLike, setLightLike] = useState(false);
  logins.length != lengthData &&
    Object.values(data).map((array) => {
      setLogins((prev) => [...prev, array.login]);
    });
  useEffect(() => {
    setTempLogin(logins[currentIdCard % lengthData]);

    async function takeInfoForCard() {
      const response = await cards.infoCard(logins[currentIdCard % lengthData]);
      setCardData(response);
    }
    takeInfoForCard();

    document.addEventListener("keydown", handleEscapeDown);
    return () => {
      document.removeEventListener("keydown", handleEscapeDown);
    };
  }, [currentIdCard]);
  useEffect(() => {
    async function checkLike() {
      const response = await likes.checkLike(authUser, tempLogin);
      setLightLike(response);
    }
    checkLike();
  }, [tempLogin]);

  useEffect(() => {}, [lightLike]);

  const handleEscapeDown = (event) => {
    if (event.key === "Escape") {
      setCardModal(false);
    }
  };

  async function putLike() {
    const response = await likes.putLike(authUser, tempLogin);
    if (response === 204) {
      setLightLike(!lightLike);
    }
  }

  return (
    <div className={styles.bg}>
      <div className={styles.profile_card_main}>
        <button
          className={styles.profile_close}
          onClick={() => setCardModal(false)}
        >
          <img src={close} alt="Закрыть" height={"40px"} width={"40px"} />
        </button>
        {/* <Link to={`/${tempLogin}`}>
          <button className={styles.profile_go}>
            <img src={chel} alt="Перейти" height={"30px"} width={"22px"} />
          </button>
        </Link> */}
        <div className={styles.profile_card_main_header}>
          <img src={cardData.photo} alt="" />
          <p>{cardData.name}</p>
          <span>{cardData.group ? cardData.group : "*Группа*"}</span>
        </div>
        <div className={styles.profile_card_main_info}>
          <hr />
          <p>
            Пол
            <span>{cardData.sex === "Male" ? "Мужской" : "Женский"}</span>
          </p>
          <p>
            Возраст
            <span>{cardData.age}</span>
          </p>
          <p>
            Цель знакомства
            <span>
              {cardData.dating_purpose ? cardData.dating_purpose : "Не указано"}
            </span>
          </p>
          <hr />
        </div>
        <div className={styles.profile_card_main_description}>
          <p>{cardData.about_me ? cardData.about_me : "Не указано"}</p>
          <hr />
        </div>
        <div className={styles.profile_card_main_btns}>
          <Link to={`/${tempLogin}`} target={"_blank"}>
            <button className={styles.profile_card_main_btn}>
              <img
                src={chel}
                alt=""
                className={styles.profile_card_main_btn_img}
              />
            </button>
          </Link>
          <button className={styles.profile_card_main_btn} onClick={putLike}>
            <img
              src={lightLike ? likeEnabled : likeDisabled} // НЕТ ФАЙЛОВ LIKE ENABLE и DISABLE
              alt=""
              className={styles.profile_card_main_btn_img}
            />
          </button>
          <button
            className={styles.profile_card_main_btn}
            onClick={() => {
              setCurrentIdCard(currentIdCard + 1);
            }}
          >
            <img
              src={swipe}
              alt=""
              className={styles.profile_card_main_btn_img}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
