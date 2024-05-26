import styles from "./ModalAlert.module.css";
import alertImg from "../public/alert.png";

export default function ModalAlert({ alert }) {
  return (
    <div className={styles.modal_main}>
      {/* <div> */}
      <img src={alertImg} alt="alert" className={styles.alert} />
      {/* </div> */}
      <p>{alert}</p>
    </div>
  );
}
