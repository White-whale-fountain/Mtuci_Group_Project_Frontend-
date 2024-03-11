import styles from '../Screen/Screen.module.css'
import { useState } from 'react'
import SingUp from '../../../components/SingUp/SingUp.jsx'

export default function Screen() {
    const [singUp, setSingUp] = useState(false)

    function buttonSingUpSet() {
        setSingUp(prev => (!prev))
    }

    return (
        <>
            <div>
                <h2 className={styles.info}>
                    Знакомиться - это
                    <br /> просто
                </h2>
            </div>
            <div className={styles.reg}>
                <button className={styles.reg_btn} onClick={buttonSingUpSet}>Создать аккаунт</button>
            </div>
            <SingUp
                open={singUp}
                header={'Регистрация'}
                onClose={buttonSingUpSet}
            />
        </>
    )
}
