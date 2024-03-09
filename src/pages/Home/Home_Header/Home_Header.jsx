import styles from "../Home_Header/Home_Header.module.css";

export default function Home_Header() {
  return (
    <header className={styles.head}>
      <div className={styles.logo_name}>
        <img src="/src/assets/img/logo.png" alt="" className={styles.img} />
        <h1 className={styles.name}>MTUCI Life</h1>
      </div>
      <button className={styles.login}>Войти</button>
    </header>
  );
}
