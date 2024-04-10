import styles from './ProfileTabPersonalInfo.module.css'

function ProfilePersonalInfoItems({header,info}) {
  return (
    <li className={styles.profile_info_main_li}>
      {header}
      <p>{info}</p>
    </li>
  )
}

export default function ProfileTabPersonalInfo() {
  return (
    <section className={styles.main_section}>
      <div className={styles.img_placeholder}>
        <img src='/../../src/assets/img/рама.png' alt='' className={styles.img_placeholder_photo} />
        <button className={styles.img_placeholder_button}>Добавить фото</button>
      </div>
      <div>
        <ul className={styles.profile_info_main}>
          <ProfilePersonalInfoItems header={"Обо мне:"} info={"Я веселый человек, который всегда поможет побороть грустное настроение. Могу поддержать в сложной ситуации, выслушать. Ко всем вопросам подхожу с ответственностью, стараюсь всегда быть объективным"}/>
          <ProfilePersonalInfoItems header={"Интересы:"} info={"Кино, путешествия, книги"}/>
          <ProfilePersonalInfoItems header={"Знак зодиака:"} info={"Овен"}/>
          <ProfilePersonalInfoItems header={"Рост:"} info={"180 см"}/>
          <ProfilePersonalInfoItems header={"Член:"} info={"17 см"}/>
          <ProfilePersonalInfoItems header={"Карьера и образование:"} info={"Frontend development"}/>
        </ul>
      </div>
      <button className={styles.change_profile_info}>
        Изменить
      </button>
    </section>
  )
}