import { Link } from "react-router-dom";
import styles from "./MainSideBar.module.css";

export default function MainSideBar() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <nav className={styles.sidebar_nav}>
      <div className={styles.nav_logo}>
        <img
          src="/../../src/assets/img/logo.png"
          alt=""
          className={styles.logo_img}
        />
        <p>MTUCI Life</p>
      </div>
      <div className={styles.nav_main}>
        <Link to={"/main"} className={styles.nav_button}>
          <img
            src="/../../src/assets/img/home.png"
            alt="home"
            id={styles.home_button}
            width={"92px"}
            height={"28px"}
          />
        </Link>
        <Link to={`/${user}`} className={styles.nav_button}>
          <img
            src="/../../src/assets/img/profile_disable.png"
            alt="profile"
            width={"92px"}
            height={"28px"}
          />
        </Link>
        <Link to={``} className={styles.nav_button}>
          <img src="/../../src/assets/img/messages_disable.png" alt="profile" />
        </Link>
        <button className={styles.nav_button} id={styles.nav_help_button}>
          <img src="/../../src/assets/img/help.jpg" alt="help" />
        </button>
      </div>
    </nav>
  );
}
