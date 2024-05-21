import styles from './ProfileAlienInfo.module.css'
export default function ProfileAlienInfo( {personalInfo} ){


  if(personalInfo)
  return(
    <div className={styles.profile_info_main_container}>
      <ul className={styles.profile_info_main1}>
        <li>
          <span>Обо мне:</span>
          <p>{personalInfo.about_me ? personalInfo.about_me : 'Не указано'}</p>
        </li>
        <li>
          <span>Интересы:</span>
          <p>{personalInfo.interests ? personalInfo.interests : 'Не указано'}</p>
        </li>
        <li>
          <span>Группа:</span>
          <p>{personalInfo.group ? personalInfo.group : 'Не указано'}</p>
        </li>
      </ul>
      <ul className={styles.profile_info_main2}>
        <li>
          <span>Цель знакомства:</span>
          <p>{personalInfo.dating_purpose ? personalInfo.dating_purpose : 'Не указано'}</p>
        </li>
        <li>
          <span>Карьера и образование:</span>
          <p>{personalInfo.education ? personalInfo.education : 'Не указано'}</p>
        </li>
      </ul>
    </div>
  )
}