import styles from "./LayoutHeader.module.css";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import profile from "../../public/profile.png"
import bell from "../../public/bell.png"
import vectorDropdown from "../../public/profile_vector_dropdown.png"

export default function LayoutHeader(props) {
  const [isOpen, setIsOpen] = useState();
  function leave() {
    return localStorage.removeItem("user");
  }

  return (
    <div className={styles.profile_header}>
      <img
        src={profile}
        alt="profile"
        className={styles.profile_header_profile}
      />
      <div className={styles.profile_right}>
        {/*<img*/}
        {/*  src={bell}*/}
        {/*  alt="Уведомления"*/}
        {/*  className={styles.profile_header_notifications}*/}
        {/*/>*/}
        <nav>
          <button
            className={styles.profile_header_dropdown}
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              src={props.avatar}
              alt="logo"
              width={"45px"}
              height={"45px"}
              className={styles.profile_user_img}
            />
            <img
              src={vectorDropdown}
              alt=""
              className={styles.dropdown_button_vector}
            />
          </button>
          {isOpen && (
            <ul className={styles.profile_menu_list}>
              <li key={0} className={styles.profile_menu_listitem}>
                Помощь
              </li>
              {/*<li key={0} className={styles.profile_menu_listitem}>*/}
              {/*  Мои лайки*/}
              {/*</li>*/}
              {/*<hr />*/}
              {/*<li key={1} className={styles.profile_menu_listitem}>*/}
              {/*  Друзья*/}
              {/*</li>*/}
              <hr />
              <li key={2} className={styles.profile_menu_listitem}>
                <Link to={"/"}>
                  <button
                    onClick={leave}
                    className={styles.profile_menu_leave_button}
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
