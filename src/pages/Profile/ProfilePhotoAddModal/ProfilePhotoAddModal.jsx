import styles from "./ProfilePhotoAddModal.module.css";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { profile } from "../../../service/profile.js";
import photo from "../public/cloud-computing.png";

export default function ProfilePhotoAddModal(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  const dialogRef = useRef();
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    if (props.open) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [props.open]);

  function closeButton() {
    props.setOpen();
    setAvatar("");
  }

  async function submitPhoto(file) {
    return await profile.upPhoto(user, file);
  }

  function addNewPhoto(file) {
    const fileReader = new FileReader();
    fileReader.onload = () => setAvatar(fileReader.result);
    fileReader.readAsDataURL(file);
    return submitPhoto(file);
  }

  return createPortal(
    <dialog ref={dialogRef} className={styles.modal_dialog}>
      <button onClick={closeButton} className={styles.close_button}>
        X
      </button>
      {avatar ? (
        <form className={styles.modal_avatar_block}>
          <img src={avatar} alt="" className={styles.modal_chosen_avatar} />
          <button onClick={submitPhoto} className={styles.modal_avatar_button}>
            Подтвердить
          </button>
        </form>
      ) : (
        <div className={styles.modal_content}>
          <label htmlFor="file" className={styles.modal_content_label}>
            <span>
              <img
                className={styles.modal_content_label_picture}
                src={photo}
                alt="Upload"
              />
            </span>
            <p>
              Выберете файл формата <br /> jpeg или png
            </p>
          </label>
          <form>
            <input
              name="file"
              id="file"
              type="file"
              onChange={(e) => addNewPhoto(e.target.files[0])}
              className={styles.modal_content_input}
              accept=".jpg, .png, .jpeg"
            />
          </form>
        </div>
      )}
    </dialog>,
    document.getElementById("modal")
  );
}
