import styles from "./ProfileCard.module.css";
import happyPeople from '../../../public/people1.png'
export default function ProfileCard(props) {
  return (
    <div className={styles.profile_card_main}>
      <div className={styles.profile_card_main_header}>
        <img src={props.children.avatar} alt="" />
        <p>{props.children.name + ", " + props.children.age}</p>
        <span>БПИ-2301</span>
      </div>
      <div className={styles.profile_card_main_info}>
        <hr />
        <p>
          Пол
          <span>{props.children.sex === "Male" ? "Мужской" : "Женский"}</span>
        </p>
        <p>
          Дата рождения
          <span>01.09.2005</span>
        </p>
        <p>
          Цель знакомства
          <span>Дружба</span>
        </p>
        <hr />
      </div>
      <div className={styles.profile_card_main_description}>
        <p>
          Ищу хорошего друга для общения и совместных посиделок. Люблю играть в
          настольные игры, читать книги, смотреть фильмы про супергероев
        </p>
      </div>
    </div>
  );
}
