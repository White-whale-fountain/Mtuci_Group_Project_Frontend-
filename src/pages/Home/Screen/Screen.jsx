import styles from "../Screen/Screen.module.css";

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
        <button className={styles.reg_btn}>Создать аккаунт</button>
      </div>
    </>
  );
}
