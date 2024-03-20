import { auth } from "../../../../service/authorization";
import styles from "./IsDoneButton.module.css";

export default function IsDoneButton({ mail, pass }) {
  return (
    <>
      <button
        type="submit"
        className={styles.is_done_button}
        // onClick={console.log(mail)}
      >
        Готово
      </button>
    </>
  );
}
