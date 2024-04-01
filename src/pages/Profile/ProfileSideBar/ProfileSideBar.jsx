import styles from "./ProfileSideBar.module.css"

export default function ProfileSideBar(){
    return(
        <nav>
            <img src='/../../src/assets/img/logo.png' alt='MTUCI LIFE' className={styles.logo_img}/>
        </nav>
    )
}