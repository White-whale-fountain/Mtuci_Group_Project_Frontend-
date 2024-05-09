import { useEffect, useState } from "react";
import info from "../../../public/info.png";
import styles from "./MainCards.module.css";
import CardInfo from "../CardInfo/CardInfo";

export default function MainCards({ setModal, setIsOpenFilters }) {
  const data = {
    Egor: [
      "https://3.downloader.disk.yandex.ru/preview/48f99801b9438ca7e960e14adcf944a91a64801ae53d728eb39cdff9f6869110/inf/ljrVq5Bv1RbywXlB80eNGjW11Ah-3eml5YyTt9lK-e0rStcuJsXv6xgFXTx0fMqvSAl07ex5aE1-3sfeSdNfWg%3D%3D?uid=357788656&filename=egor.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=357788656&tknv=v2&size=1860x895",
      "Егор",
      "19",
      "М",
      "sdafsd",
    ],
    Penis: [
      "https://1.downloader.disk.yandex.ru/preview/bd0c6c327632eec505831a41f5e6e2c59a497916275ef19885c659a2d4a59824/inf/Z_5kF2mejQHknRglhVoOSMy6b2Vta-TrZa0l2KA63Rd9aVzLEJVa2b-ac5W4VP4TUupjp6YgaM9mVJjPTn4DjA%3D%3D?uid=357788656&filename=Alekseyjpg.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=357788656&tknv=v2&size=1860x895",
      "Пенис",
      "12",
      "М",
      "penis",
    ],
    Vlad: [
      "https://1.downloader.disk.yandex.ru/preview/6c387647ebc1660f735b89cea508e8b30b6e61be9ff7064b592bb15718975db8/inf/TZSYte7UHXdfgkt0aLmwKTW11Ah-3eml5YyTt9lK-e0kmDozcThXD64AWt32F-Jj8tiYub_8_ak-BvszeFRKrg%3D%3D?uid=357788656&filename=vlad.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=357788656&tknv=v2&size=1860x895",
      "Влад",
      "69",
      "Ж",
      "sdafsd",
    ],
    SERg: [
      "https://1.downloader.disk.yandex.ru/preview/eda0b4899850095b6ec3bb8afde8bc2f1b8542a5de4f287efe99502a88ce4e16/inf/WyteUHWszLjcceCRwvvmYwZ7g6ElAMXgs6mADbDC2tpZG7iVQwvwxl_ym_MwshB2M1B0m7SqafWfT0syIHfDoQ%3D%3D?uid=357788656&filename=serega.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=357788656&tknv=v2&size=1860x895",
      "Сергей",
      "0",
      "М",
      "penis",
    ],
    DAV: [
      "https://4.downloader.disk.yandex.ru/preview/493450dbd6a1c90eab6e04863766aaf4c18d7c7dc0e91cbb1cfa521597007dc1/inf/vzsNqOYMBisJ42wt_rAWUw8dW_rByWpchu0v5YApq1NAZW7HJYrEhxouijj0l6X7GlZFo2-591ouvLasc72Jpw%3D%3D?uid=357788656&filename=davud.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=357788656&tknv=v2&size=1860x895",
      "Давуд",
      "102",
      "М",
      "sdafsd",
    ],
  };
  const [onFocus, setOnFocus] = useState(false);
  const [onFocusName, setOnFocusName] = useState("");
  const [cardModal, setCardModal] = useState(false);

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
      {cardModal && (
        <CardInfo cardModal={cardModal} setCardModal={setCardModal} />
      )}
      <div className={styles.back}>
        {Object.entries(data).map(([key, value]) => {
          return (
            <div
              key={key}
              name={key}
              className={styles.card}
              style={{
                backgroundImage: `linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0) 67%,
              rgba(40, 40, 40, 0.9)
            ), url("${value[0]}")`,
              }}
              onMouseEnter={() => handleHover(true, key)}
              onMouseLeave={() => handleHover(false, key)}
            >
              {onFocus & (onFocusName === key) ? (
                <div className={styles.focus_block}>
                  <button className={styles.focus_btn} onClick={setModal}>
                    <img src={info} alt="Инфо" className={styles.focus_img} />
                  </button>
                </div>
              ) : (
                <></>
              )}
              <div className={styles.card_bottom}>
                <p>{value[1]}</p>
                <p>
                  {value[2]}, {value[3]}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
