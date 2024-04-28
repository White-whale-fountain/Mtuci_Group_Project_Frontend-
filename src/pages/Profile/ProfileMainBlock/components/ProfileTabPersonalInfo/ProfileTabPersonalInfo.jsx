import { useEffect, useState } from "react";
import styles from "./ProfileTabPersonalInfo.module.css";
import { profile } from "../../../../../service/profile";

export default function ProfileTabPersonalInfo() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [edit, setEdit] = useState(false);
  const [personalInfo, setPersonalInfo] = useState([]);
  const [nowPersonalInfo, setNowPersonalInfo] = useState([]);

  useEffect(() => {
    async function takeInfo() {
      setPersonalInfo(await profile.take("user_info", user));
    }
    takeInfo();
  }, []);

  async function SaveInfo() {
    return (
      setEdit(false),
      setNowPersonalInfo(personalInfo),
      await profile.put("user_info", user, personalInfo)
    );
  }

  function UpdatedPersonalInfo(property, value) {
    const updatePersonalInfo = { ...personalInfo };
    updatePersonalInfo[property] = value;
    return updatePersonalInfo;
  }

  function EditInfo(e) {
    const property = e.target.name;
    const value = e.target.value;
    const updatePersonalInfo = UpdatedPersonalInfo(property, value);
    return setPersonalInfo(updatePersonalInfo);
  }
  function CancelEdit() {
    return setEdit(false), setPersonalInfo(nowPersonalInfo);
  }
  return (
    <section className={styles.main_section}>
      <div className={styles.img_placeholder}>
        <img
          src="/../../src/assets/img/рама.png"
          alt=""
          className={styles.img_placeholder_photo}
        />
        <button className={styles.img_placeholder_button}>Добавить фото</button>
      </div>
      <ul className={styles.profile_info_main}>
        <li className={styles.profile_info_main_li}>
          О себе:
          {!edit ? (
            personalInfo.about_me ? (
              <p>{personalInfo.about_me}</p>
            ) : (
              <p>Не указано</p>
            )
          ) : (
            <>
              <br />
              <input
                value={personalInfo.about_me}
                className={styles.edit}
                name="about_me"
                onChange={(e) => EditInfo(e)}
              />
            </>
          )}
        </li>
        <li className={styles.profile_info_main_li}>
          Рост:
          {!edit ? (
            personalInfo.height ? (
              <p>{personalInfo.height}</p>
            ) : (
              <p>Не указано</p>
            )
          ) : (
            <>
              <br />
              <input
                value={personalInfo.height}
                className={styles.edit}
                name="height"
                onChange={(e) => EditInfo(e)}
              />
            </>
          )}
        </li>
      </ul>

      {!edit ? (
        <button
          className={styles.change_profile_info}
          onClick={() => (setEdit(true), setNowPersonalInfo(personalInfo))}
        >
          Изменить
        </button>
      ) : (
        <div className={styles.save_or_cancel_info}>
          <button
            className={styles.save_info}
            onClick={() => {
              SaveInfo();
            }}
          >
            Сохранить
          </button>
          <button
            className={styles.cancel_info}
            onClick={() => {
              CancelEdit();
            }}
          >
            Отменить
          </button>
        </div>
      )}
    </section>
  );
}
