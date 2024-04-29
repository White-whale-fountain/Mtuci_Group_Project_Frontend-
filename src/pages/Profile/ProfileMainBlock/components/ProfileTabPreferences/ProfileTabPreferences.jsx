import { useEffect, useRef, useState } from "react";
import styles from "./ProfileTabPreferences.module.css";
import { profile } from "../../../../../service/profile";
import setInputHeight from "../../../../../assets/components/setInputHeight";

export default function ProfileTabPreferences() {
  const agePrefTextAreaRef = useRef(null);
  const heightPrefTextAreaRef = useRef(null);
  const weightPrefTextAreaRef = useRef(null);
  const typeTextAreaRef = useRef(null);
  const habitsTextAreaRef = useRef(null);
  const religionTextAreaRef = useRef(null);
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

  useEffect(() => {
    if (agePrefTextAreaRef.current) {
      agePrefTextAreaRef.current.style.height = "auto";
      agePrefTextAreaRef.current.style.height =
        agePrefTextAreaRef.current.scrollHeight + "px";
    }
    if (heightPrefTextAreaRef.current) {
      heightPrefTextAreaRef.current.style.height = "auto";
      heightPrefTextAreaRef.current.style.height =
        heightPrefTextAreaRef.current.scrollHeight + "px";
    }
    if (weightPrefTextAreaRef.current) {
      weightPrefTextAreaRef.current.style.height = "auto";
      weightPrefTextAreaRef.current.style.height =
        weightPrefTextAreaRef.current.scrollHeight + "px";
    }
    if (typeTextAreaRef.current) {
      typeTextAreaRef.current.style.height = "auto";
      typeTextAreaRef.current.style.height =
        typeTextAreaRef.current.scrollHeight + "px";
    }
    if (habitsTextAreaRef.current) {
      habitsTextAreaRef.current.style.height = "auto";
      habitsTextAreaRef.current.style.height =
        habitsTextAreaRef.current.scrollHeight + "px";
    }
    if (religionTextAreaRef.current) {
      religionTextAreaRef.current.style.height = "auto";
      religionTextAreaRef.current.style.height =
        religionTextAreaRef.current.scrollHeight + "px";
    }
  }, [edit]);

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
    setInputHeight(e, "28px");
    setPreferences(updatePreferences);
  }

  return (
    <>
      <ul className={styles.preferences_list}>
        <li className={styles.preferences_list_item}>
          <div className={styles.preferences_list_item_header}>
            <p>Возраст:</p>
          </div>
          {!edit ? (
            preferences.age_pref ? (
              <p>{preferences.age_pref}</p>
            ) : (
              <p>Не указано</p>
            )
          ) : (
            <textarea
              maxLength={30}
              rows={1}
              ref={agePrefTextAreaRef}
              value={preferences.age_pref}
              className={styles.edit}
              name="age_pref"
              onChange={(e) => EditInfo(e)}
            />
          )}
        </li>
        <li className={styles.preferences_list_item}>
          <div className={styles.preferences_list_item_header}>
            <p>Рост:</p>
          </div>
          {!edit ? (
            preferences.height_pref ? (
              <p>{preferences.height_pref}</p>
            ) : (
              <p>Не указано</p>
            )
          ) : (
            <textarea
              maxLength={30}
              rows={1}
              ref={heightPrefTextAreaRef}
              value={preferences.height_pref}
              className={styles.edit}
              name="height_pref"
              onChange={(e) => EditInfo(e)}
            />
          )}
        </li>
        <li className={styles.preferences_list_item}>
          <div className={styles.preferences_list_item_header}>
            <p>Вес:</p>
          </div>
          {!edit ? (
            preferences.weight_pref ? (
              <p>{preferences.weight_pref}</p>
            ) : (
              <p>Не указано</p>
            )
          ) : (
            <textarea
              maxLength={30}
              rows={1}
              ref={weightPrefTextAreaRef}
              value={preferences.weight_pref}
              className={styles.edit}
              name="weight_pref"
              onChange={(e) => EditInfo(e)}
            />
          )}
        </li>
        <li className={styles.preferences_list_item}>
          <div className={styles.preferences_list_item_header}>
            <p>Тип внешности:</p>
          </div>
          {!edit ? (
            preferences.type ? (
              <p>{preferences.type}</p>
            ) : (
              <p>Не указано</p>
            )
          ) : (
            <textarea
              maxLength={30}
              rows={1}
              ref={typeTextAreaRef}
              value={preferences.type}
              className={styles.edit}
              name="type"
              onChange={(e) => EditInfo(e)}
            />
          )}
        </li>
        <li className={styles.preferences_list_item}>
          <div className={styles.preferences_list_item_header}>
            <p>Вредные привычки:</p>
          </div>
          {!edit ? (
            preferences.habits ? (
              <p>{preferences.habits}</p>
            ) : (
              <p>Не указано</p>
            )
          ) : (
            <textarea
              maxLength={30}
              rows={1}
              ref={habitsTextAreaRef}
              value={preferences.habits}
              className={styles.edit}
              name="habits"
              onChange={(e) => EditInfo(e)}
            />
          )}
        </li>
        <li className={styles.preferences_list_item}>
          <div className={styles.preferences_list_item_header}>
            <p>Религия:</p>
          </div>
          {!edit ? (
            preferences.religion ? (
              <p>{preferences.religion}</p>
            ) : (
              <p>Не указано</p>
            )
          ) : (
            <textarea
              maxLength={30}
              rows={1}
              ref={religionTextAreaRef}
              value={preferences.religion}
              className={styles.edit}
              name="religion"
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
