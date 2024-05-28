import { Link } from "react-router-dom";
import styles from "./LayoutSideBar.module.css";
import mainDisable from '../../public/home_disable.png'
import mainAble from '../../public/home.png'
import profileAble from '../../public/profile.png'
import profileDisable from '../../public/profile_disable.png'
import logo from '../../public/logo.png'
// import messages from '../../public/messages_disable.png'
import help from '../../public/help.jpg'
export default function LayoutSideBar({ user, active }) {

  return (
    <nav className={styles.sidebar_nav}>
      <div className={styles.nav_logo}>
        <img
          src={logo}
          alt=""
          className={styles.logo_img}
        />
        <p>MTUCI Life</p>
      </div>
      <div className={styles.nav_main}>
        <Link to={"/main"} className={styles.nav_button}>
          <img src={ active === 'main' ? mainAble : mainDisable } alt="home" />
        </Link>
        <Link to={`/${user}`} className={styles.nav_button}>
          <img
            src={active === 'profile' ? profileAble : profileDisable }
            alt="profile"
            width={"92px"}
            height={"28px"}
          />
        </Link>
        {/*<Link to={``} className={styles.nav_button}>*/}
        {/*  <img src={messages} alt="profile" />*/}
        {/*</Link>*/}
        <Link to ={'/help'} className={styles.nav_button} id={styles.nav_help_button}>
          <img src= {help} alt="help" />
        </Link>
      </div>
    </nav>
  );
}
