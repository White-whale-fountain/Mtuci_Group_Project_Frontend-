import { Link } from "react-router-dom";
import styles from "./ProfileSideBar.module.css";
import photo from "../public/photo.png"

export default function MainSideBar() {
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
          <img src="/../../src/assets/img/home_disable.png" alt="home" />
        </Link>
        <Link to={``} className={styles.nav_button}>
          <img
            src="/../../src/assets/img/profile.png"
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
