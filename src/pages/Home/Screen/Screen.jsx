import styles from '../Screen/Screen.module.css'
import { Link } from 'react-router-dom'

export default function Screen() {
    return (
        <>
            <div>
                <h2 className={styles.info}>
                    Знакомиться - это
                    <br /> просто
                </h2>
            </div>
            <div className={styles.reg}>
                <Link to = {'/registration'} className={styles.reg_btn}>Создать аккаунт</Link>
            </div>
        </>
    )
}
