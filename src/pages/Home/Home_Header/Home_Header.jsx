import styles from '../Home_Header/Home_Header.module.css'
import { Link} from 'react-router-dom'
export default function Home_Header() {
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
