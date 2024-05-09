import styles from "./CardInfo.module.css";
import close from "../../../public/close.png";
import chel from "../../../public/chel.png";
import { useKeyPress } from "../../../../../hooks/useKeyPress.js";
import { useEffect } from "react";

export default function CardInfo({ cardModal, setCardModal }) {
  const personalInfo = {
    img: "https://1.downloader.disk.yandex.ru/preview/bd0c6c327632eec505831a41f5e6e2c59a497916275ef19885c659a2d4a59824/inf/Z_5kF2mejQHknRglhVoOSMy6b2Vta-TrZa0l2KA63Rd9aVzLEJVa2b-ac5W4VP4TUupjp6YgaM9mVJjPTn4DjA%3D%3D?uid=357788656&filename=Alekseyjpg.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=357788656&tknv=v2&size=1860x895",
    name: "Penis",
    group: "Бпи-2301",
    sex: "М",
    age: "12",
    dating_purpose: "Дружба",
  };

  useEffect(() => {
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
        <button className={styles.profile_go}>
          <img src={chel} alt="Перейти" height={"30px"} width={"22px"} />
        </button>
        <div className={styles.profile_card_main_header}>
          <img src={personalInfo.img} alt="" />
          <p>{personalInfo.name}</p>
          <span>{personalInfo.group ? personalInfo.group : "*Группа*"}</span>
        </div>
        <div className={styles.profile_card_main_info}>
          <hr />
          <p>
            Пол
            <span>{personalInfo.sex === "Male" ? "Мужской" : "Женский"}</span>
          </p>
          <p>
            Возраст
            <span>{personalInfo.age}</span>
          </p>
          <p>
            Цель знакомства
            <span>
              {personalInfo.dating_purpose
                ? personalInfo.dating_purpose
                : "Не указано"}
            </span>
          </p>
          <hr />
        </div>
        <div className={styles.profile_card_main_description}>
          <p>{personalInfo.about_me ? personalInfo.about_me : "Не указано"}</p>
        </div>
      </div>
    </div>
  );
}
