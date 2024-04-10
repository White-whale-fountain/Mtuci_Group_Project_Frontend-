import styles from "./ProfileSideBar.module.css"

export default function ProfileSideBar(){
    return(
        <nav className={styles.sidebar_nav}>
            <div className={styles.nav_logo}>
                <img src='/../../src/assets/img/logo.png' alt='' className={styles.logo_img} />
                <p>MTUCI Life</p>
            </div>
            <div className={styles.nav_main}>
                <button className={styles.nav_button}><img src='/../../src/assets/img/home.png'  alt='home'/></button>
                <button className={styles.nav_button}><img src='/../../src/assets/img/profile.png' alt='profile' width={"92px"} height={"28px"}/></button>
                <button className={styles.nav_button}><img src='/../../src/assets/img/messages.png' alt='messages'/></button>
                <button className={styles.nav_button} id={styles.nav_help_button}><img src='/../../src/assets/img/help.jpg' alt='help'/></button>
            </div>
        </nav>
    )
}