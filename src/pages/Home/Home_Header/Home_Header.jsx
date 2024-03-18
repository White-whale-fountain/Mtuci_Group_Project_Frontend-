import styles from '../Home_Header/Home_Header.module.css'
import SingIn from '../components/SingIn/SingIn.jsx'
import { useState } from 'react'
import IsDoneButton from '../components/IsDoneButton/IsDoneButton.jsx'
import FormInput from '../components/FormInput/FormInput.jsx'


export default function Home_Header() {
    const [singIn, setSingIn] = useState(false)

    function buttonSingInSet() {
        setSingIn(prev => (!prev))
    }

    return (
        <header className={styles.head}>
            <div className={styles.logo_name}>
                <img src='./src/assets/img/logo.png' alt='' className={styles.img} />
                <h1 className={styles.name}>MTUCI Life</h1>
            </div>
            <button className={styles.login} onClick={buttonSingInSet}>Войти</button>
            <SingIn
                open={singIn}
                onClose={buttonSingInSet}
            >

            </SingIn>

        </header>
    )
}
