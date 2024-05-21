import styles from './ProfileAlinePreferences.module.css'
export default function ProfileAlinePreferences({userPreferences}) {
  console.log(userPreferences)
  if (userPreferences)
    return (
      <div className={styles.profile_info_main_container}>
        <ul className={styles.profile_info_main1}>
          <li>
            <span>Возраст:</span>
            <p>{userPreferences.age_pref ? userPreferences.age_pref : 'Не указано'}</p>
          </li>
          <li>
            <span>Рост:</span>
            <p>{userPreferences.weight_pref ? userPreferences.weight_pref : 'Не указано'}</p>
          </li>
          <li>
            <span>Вес:</span>
            <p>{userPreferences.height_pref ? userPreferences.height_pref : 'Не указано'}</p>
          </li>
        </ul>
        <ul className={styles.profile_info_main2}>
          <li>
            <span>Тип внешности:</span>
            <p>{userPreferences.type ? userPreferences.type : 'Не указано'}</p>
          </li>
          <li>
            <span>Вредные привычки:</span>
            <p>{userPreferences.habits ? userPreferences.habits : 'Не указано'}</p>
          </li>
          <li>
            <span>Религия:</span>
            <p>{userPreferences.religion ? userPreferences.religion : 'Не указано'}</p>
          </li>
        </ul>
      </div>
    )
}