import styles from '../Home_Header/Home_Header.module.css'
import SingIn from '../components/SingIn/SingIn.jsx'
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function Home_Header() {
    // const [singIn, setSingIn] = useState(false)
    //
    // function buttonSingInSet() {
    //     setSingIn(prev => (!prev))
    // }

    return (
        <>
            <header className={styles.head}>
                <div className={styles.logo_name}>
                    <img src='./src/assets/img/logo.png' alt='' className={styles.img} />
                    <h1 className={styles.name}>MTUCI Life</h1>
                </div>
                <Link to = "/login" className={styles.login}>Войти</Link>
            </header>

        </>
    )
}
