import styles from "./MainHeader.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { profile } from "../../../service/profile";
import nullPhoto from "../public/null_photo.png";

export default function MainHeader() {
  const [isOpen, setIsOpen] = useState();
  const [avatar, setAvatar] = useState(nullPhoto);
  const auth_user = JSON.parse(localStorage.getItem("user"));
  function leave() {
    return localStorage.removeItem("user");
  }

  useEffect(() => {
    async function takeAvatar() {
      const response = await profile.downAvatar(auth_user);
      return setAvatar(response);
    }
    takeAvatar();
  }, []);

  return (
    <div className={styles.main_header}>
      <img
        src="/../../src/assets/img/home_header.png"
        alt="profile"
        className={styles.main_header_profile}
        width={"108px"}
        height={"26.53px"}
      />
      <div className={styles.main_right}>
        <img
          src="/../../src/assets/img/bell.png"
          alt="Уведомления"
          className={styles.main_header_notifications}
        />
        <nav className={styles.main_menu}>
          <button
            className={styles.main_header_dropdown}
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              src={avatar}
              alt="logo"
              width={"45px"}
              height={"45px"}
              className={styles.main_user_img}
            />
            <img
              src="/../../src/assets/img/profile_vector_dropdown.png"
              alt=""
              className={styles.dropdown_button_vector}
            />
          </button>
          {isOpen && (
            <ul className={styles.main_menu_list}>
              <li key={0} className={styles.main_menu_listitem}>
                Мои лайки
              </li>
              <hr />
              <li key={1} className={styles.main_menu_listitem}>
                Друзья
              </li>
              <hr />
              <li key={2} className={styles.main_menu_listitem}>
                <Link to={"/"}>
                  <button
                    onClick={leave}
                    className={styles.main_menu_leave_button}
                  >
                    Выйти из аккаунта
                  </button>
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </div>
  );
}
