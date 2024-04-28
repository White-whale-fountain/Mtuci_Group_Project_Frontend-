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

  async function SaveInfo() {
    return (
      setEdit(false),
      setNowPreferences(preferences),
      await profile.put("user_preferences", user, preferences)
    );
  }

  function UpdatedPreferences(property, value) {
    const updatePreferences = { ...preferences };
    updatePreferences[property] = value;
    return updatePreferences;
  }

  function EditInfo(e) {
    const property = e.target.name;
    const value = e.target.value;
    const updatePreferences = UpdatedPreferences(property, value);
    setPreferences(updatePreferences);
  }

  return (
    <>
      <ul className={styles.preferences_list}>
        <li className={styles.preferences_list_item}>
          <div className={styles.preferences_list_item_header}>
            <p>Возраст</p>
          </div>
          {!edit ? (
            preferences.age_pref ? (
              <p>{preferences.age_pref}</p>
            ) : (
              <p>Не указано</p>
            )
          ) : (
            <input
              value={preferences.age_pref}
              className={styles.edit}
              name="age_pref"
              onChange={(e) => EditInfo(e)}
            />
          )}
        </li>
        <li className={styles.preferences_list_item}>
          <div className={styles.preferences_list_item_header}>
            <p>Возраст</p>
          </div>
          {!edit ? (
            preferences.height_pref ? (
              <p>{preferences.height_pref}</p>
            ) : (
              <p>Не указано</p>
            )
          ) : (
            <input
              value={preferences.height_pref}
              className={styles.edit}
              name="height_pref"
              onChange={(e) => EditInfo(e)}
            />
          )}
        </li>
      </ul>

      {!edit ? (
        <button
          className={styles.change_profile_info}
          onClick={() => (setEdit(true), setNowPreferences(preferences))}
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
