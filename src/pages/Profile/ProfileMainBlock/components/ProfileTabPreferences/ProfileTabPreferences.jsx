import styles from "./ProfileTabPreferences.module.css"
function ProfilePreferencesInfo({ header, info }) {
  return (
    <li className={styles.preferences_list_item}>
      <div className={styles.preferences_list_item_header}>
        <p>
          {header}
        </p>
        <button><img src='/../../src/assets/img/profile_pensil.png' alt='' /></button>
      </div>
      <p>
        {info}
      </p>
    </li>
  )
}

export default function ProfileTabPreferences() {
  return (
    <ul className={styles.preferences_list}>
      <ProfilePreferencesInfo header = {"Возраст"} info = {"18-20 лет"}/>
      <ProfilePreferencesInfo header = {"Рост"} info = {"Неважно"}/>
      <ProfilePreferencesInfo header = {"Вес"} info = {"Неважно"}/>
      <ProfilePreferencesInfo header = {"Вредные привычки"} info = {"Неважно"}/>
      <ProfilePreferencesInfo header = {"Религия"} info = {"Неважно"}/>
      <ProfilePreferencesInfo header = {"Ориентация"} info = {"Гей"}/>
    </ul>
  )
}