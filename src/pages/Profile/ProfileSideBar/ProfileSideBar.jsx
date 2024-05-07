import styles from "./ProfileSideBar.module.css"
import logo from "../public/logo.png"
import profile from "../public/profile.png"
import home from "../public/home.png"
import messages from "../public/messages.png"
import help from "../public/help.jpg"

export default function ProfileSideBar() {
  return (
    <nav className={styles.sidebar_nav}>
      <div className={styles.nav_logo}>
        <img src={logo} alt='' className={styles.logo_img}/>
        <p>MTUCI Life</p>
      </div>
      <div className={styles.nav_main}>
        <button className={styles.nav_button}><img src={home} alt='home'/></button>
        <button className={styles.nav_button}><img src={profile} alt='profile' width={"92px"} height={"28px"}/></button>
        <button className={styles.nav_button}><img src={messages} alt='messages'/></button>
        <button className={styles.nav_button} id={styles.nav_help_button}><img src={help} alt='help'/></button>
      </div>
        </nav>
    )
}