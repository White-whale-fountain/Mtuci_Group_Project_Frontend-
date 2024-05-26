import { useEffect, useState } from "react";
import info from "../../../../public/info.png";
import styles from "./MainCards.module.css";
import CardInfo from "../CardInfo/CardInfo";
import sadSmile from "../../../../public/sadSmile.png";

export default function MainCards({ setIsOpenFilters, data }) {
  const [onFocus, setOnFocus] = useState(false);
  const [onFocusName, setOnFocusName] = useState("");
  const [cardModal, setCardModal] = useState(false);
  const [tempLogin, setTempLogin] = useState("");
  const [currentIdCard, setCurrentIdCard] = useState();
  const [lengthData, setLengthData] = useState(0);

  // console.log(data);
  function setModal() {
    setCardModal(!cardModal);
    handleHover(false);
    setIsOpenFilters(false);
  }
  // console.log(logins);
  function handleHover(show, key) {
    setOnFocus(show);
    setOnFocusName(key);
  }
  useEffect(() => {
    setLengthData(Object.keys(data).length);
  });
  return (
    <>
      <div className={styles.back}>
        {lengthData != 0 ? (
          Object.values(data).map((value) => {
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
                {/* {logins.length < 8 && setLogins(logins.push(value.login))} */}
                {onFocus & (onFocusName === value.login) ? (
                  <div className={styles.focus_block}>
                    <button
                      className={styles.focus_btn}
                      onClick={() => {
                        setModal(),
                          setTempLogin(value.login),
                          setCurrentIdCard(value.id - 1);
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
          })
        ) : (
          <div className={styles.areNoCards}>
            <p>По вашим фильтрам никого не нашлось</p>
            <img src={sadSmile} alt="" />
          </div>
        )}
      </div>
      {cardModal && (
        <CardInfo
          setCardModal={setCardModal}
          tempLogin={tempLogin}
          setTempLogin={setTempLogin}
          currentIdCard={currentIdCard}
          setCurrentIdCard={setCurrentIdCard}
          data={data}
          lengthData={lengthData}
        />
      )}
    </>
  );
}
