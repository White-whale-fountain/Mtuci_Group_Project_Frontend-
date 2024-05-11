import { useEffect, useState } from "react";
import info from "../../../public/info.png";
import styles from "./MainCards.module.css";
import CardInfo from "../CardInfo/CardInfo";

export default function MainCards({ setModal, setIsOpenFilters, data }) {
  const [onFocus, setOnFocus] = useState(false);
  const [onFocusName, setOnFocusName] = useState("");
  const [cardModal, setCardModal] = useState(false);
  const [tempLogin, setTempLogin] = useState("");

  function setModal() {
    setCardModal(!cardModal);
    handleHover(false);
    setIsOpenFilters(false);
  }

  function handleHover(show, key) {
    setOnFocus(show);
    setOnFocusName(key);
  }
  return (
    <>
      <div className={styles.back}>
        {Object.values(data).map((value) => {
          return (
            <div
              key={value.login}
              name={value.login}
              className={styles.card}
              style={{
                backgroundImage: `linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0) 67%,
              rgba(40, 40, 40, 0.9)
            ), url(${value.photo[0]})`,
              }}
              onMouseEnter={() => handleHover(true, value.login)}
              onMouseLeave={() => handleHover(false, value.login)}
            >
              {/* {console.log(value)} */}
              {onFocus & (onFocusName === value.login) ? (
                <div className={styles.focus_block}>
                  <button
                    className={styles.focus_btn}
                    onClick={() => {
                      setModal(), setTempLogin(value.login);
                    }}
                  >
                    <img
                      src={info}
                      alt="Инфо"
                      className={styles.focus_img}
                      width={"70px"}
                      height={"70px"}
                    />
                  </button>
                </div>
              ) : (
                <></>
              )}
              <div className={styles.card_bottom}>
                <p>{value.name}</p>
                <p>
                  {value.age}, {value.sex === "Female" ? "Ж" : "М"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {cardModal && (
        <CardInfo setCardModal={setCardModal} tempLogin={tempLogin} />
      )}
    </>
  );
}
