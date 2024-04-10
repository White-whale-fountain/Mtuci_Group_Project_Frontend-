import styles from './ProfileHeader.module.css'
import { useState } from "react"
import { Link } from "react-router-dom"

export default function ProfileHeader() {
    const [isOpen, setIsOpen] = useState()
    function leave() {
        return localStorage.removeItem("user")
    }

    return (
        <div className={styles.profile_header}>
            <img src='/../../src/assets/img/profile.png' alt='profile' className={styles.profile_header_profile}/>
            <img src='/../../src/assets/img/bell.png' alt='Уведомления' className={styles.profile_header_notifications}/>
            <nav className={styles.profile_menu}>
                <button className={styles.profile_header_dropdown} onClick={() => setIsOpen(!isOpen)}>
                    <img src='/../../src/assets/img/people1.png' alt='logo' width={"45px"} height={"45px"} className={styles.profile_user_img}/>
                    <img src='/../../src/assets/img/profile_vector_dropdown.png' alt='' className={styles.dropdown_button_vector}/>
                </button>
                {isOpen &&
                <ul className={styles.profile_menu_list}>
                    <li key={0} className={styles.profile_menu_listitem}>Мои лайки</li>
                    <hr/>
                    <li key={1} className={styles.profile_menu_listitem}>Друзья</li>
                    <hr/>
                    <li key={2} className={styles.profile_menu_listitem}>
                        <Link to={"/"}>
                          <button onClick={leave} className={styles.profile_menu_leave_button}>
                            Выйти из аккаунта
                          </button>
                        </Link>
                    </li>
                </ul>}
            </nav>

        </div>
    )
}