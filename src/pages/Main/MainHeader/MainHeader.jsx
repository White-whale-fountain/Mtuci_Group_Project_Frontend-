import styles from "./MainHeader.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function MainHeader() {
  const [isOpen, setIsOpen] = useState();
  function leave() {
    return localStorage.removeItem("user");
  }

  return (
    <div className={styles.main_header}>
      <img
        src="/../../src/assets/img/home_header.png"
        alt="profile"
        className={styles.main_header_profile}
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
              src="/../../src/assets/img/people1.png"
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
