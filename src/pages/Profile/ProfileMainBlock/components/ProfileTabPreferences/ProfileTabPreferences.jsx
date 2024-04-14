import { useState } from "react";
import styles from "./ProfileTabPreferences.module.css";

export default function ProfileTabPreferences() {
  const [edit, setEdit] = useState(false);

  const [preferences, setPreferences] = useState([
    { id: 0, state: "age", header: "Возраст:", value: "18-20 лет" },
    { id: 1, state: "height", header: "Рост:", value: "Неважно" },
    { id: 2, state: "weight", header: "Вес:", value: "Неважно" },
    { id: 3, state: "habits", header: "Вредные привычки:", value: "Неважно" },
    { id: 4, state: "orientation", header: "Ориентация:", value: "ПИДР" },
  ]);

  const [nowPreferences, setNowPreferences] = useState(preferences);

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

  function CancelEdit() {}
  // console.log(nowPreferences);
  function EditInfo(e, id) {
    const updatePreferences = preferences.map((pref) =>
      pref.id === id ? { ...pref, value: e.target.value } : pref
    );
    setPreferences(updatePreferences);
    // setPreferences[id].value(e.target.value);
    // console.log(el.target.value);
  }

  return (
    <>
      <ul className={styles.preferences_list}>
        {preferences.map((el) => (
          <li key={el.state} className={styles.preferences_list_item}>
            <div className={styles.preferences_list_item_header}>
              <p>{el.header}</p>
            </div>
            {!edit ? (
              <p>{el.value}</p>
            ) : (
              <input
                value={el.value}
                className={styles.edit}
                onChange={(e) => EditInfo(e, el.id)}
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
              setEdit(false), setNowPreferences(preferences);
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
