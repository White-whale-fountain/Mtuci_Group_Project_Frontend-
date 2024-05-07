import styles from "./ProfileCard.module.css";

export default function ProfileCard({ personalInfo }) {
  return (
    <div className={styles.profile_card_main}>
      <div className={styles.profile_card_main_header}>
        <img src={personalInfo.avatar} alt="" />
        <p>{personalInfo.name}</p>
        <span>{personalInfo.group ? personalInfo.group : "*Группа*"}</span>
      </div>
      <div className={styles.profile_card_main_info}>
        <hr />
        <p>
          Пол
          <span>{personalInfo.sex === "Male" ? "Мужской" : "Женский"}</span>
        </p>
        <p>
          Возраст
          <span>{personalInfo.age}</span>
        </p>
        <p>
          Цель знакомства
          <span>
            {personalInfo.dating_purpose
              ? personalInfo.dating_purpose
              : "Не указано"}
          </span>
        </p>
        <hr />
      </div>
      <div className={styles.profile_card_main_description}>
        <p>{personalInfo.about_me ? personalInfo.about_me : "Не указано"}</p>
      </div>
    </div>
  );
}
