import { useEffect, useState } from "react";
import styles from "./ProfileTabPreferences.module.css";
import { profile } from "../../../../../service/profile";

export default function ProfileTabPreferences() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [edit, setEdit] = useState(false);

  const [preferences, setPreferences] = useState([]);
  const [nowPreferences, setNowPreferences] = useState(preferences);

  useEffect(() => {
    async function takeInfo() {
      setPreferences(await profile.take("user_preferences", user));
    }
    takeInfo();
  }, []);

  // function EditInfo() {}

  // function ProfilePreferencesInfo({ state, header, info }) {
  //   return (
  //     <li className={styles.preferences_list_item}>
  //       <div className={styles.preferences_list_item_header}>
  //         <p>{header}</p>
  //         {/* <button>
  //           <img src="/../../src/assets/img/profile_pensil.png" alt="" />
  //         </button> */}
  //       </div>
  //       {!edit ? (
  //         <p>{info}</p>
  //       ) : (
  //         <input value={value.state} className={styles.edit} />
  //       )}
  //     </li>
  //   );
  // }
  async function SaveInfo() {
    return (
      setEdit(false),
      setNowPreferences(preferences),
      await profile.put("user_preferences", user, preferences)
    );
  }

  function EditInfo(e, name) {
    const updatePreferences = Object.entries(preferences).map(([key, value]) =>
      key === name ? [key, [value[0], e.target.value]] : [key, value]
    );
    setPreferences(Object.fromEntries(updatePreferences));
    // setPreferences[id].value(e.target.value);
    // console.log(el.target.value);
  }

  return (
    <>
      <ul className={styles.preferences_list}>
        {Object.entries(preferences).map(([key, value]) => (
          <li key={key} className={styles.preferences_list_item}>
            <div className={styles.preferences_list_item_header}>
              <p>{value[0]}</p>
            </div>
            {!edit ? (
              <p>{value[1]}</p>
            ) : (
              <input
                value={value[1]}
                className={styles.edit}
                onChange={(e) => EditInfo(e, key)}
              />
            )}
          </li>
        ))}
      </ul>
      {/* <ul className={styles.preferences_list}>
        <ProfilePreferencesInfo
          state={"age"}
          header={"Возраст"}
          info={"18-20 лет"}
        />
        <ProfilePreferencesInfo
          state={"height"}
          header={"Рост"}
          info={"Неважно"}
        />
        <ProfilePreferencesInfo
          state={"weight"}
          header={"Вес"}
          info={"Неважно"}
        />
        <ProfilePreferencesInfo
          state={"habits"}
          header={"Вредные привычки"}
          info={"Неважно"}
        /> */}
      {/* <ProfilePreferencesInfo header={"Религия"} info={"Неважно"} />
      <ProfilePreferencesInfo header={"Ориентация"} info={"Гей"} /> */}
      {/* </ul> */}
      {!edit ? (
        <button
          className={styles.change_profile_info}
          onClick={() => setEdit(true)}
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
              setEdit(false), setPreferences(nowPreferences);
            }}
          >
            Отменить
          </button>
        </div>
      )}
    </>
  );
}
