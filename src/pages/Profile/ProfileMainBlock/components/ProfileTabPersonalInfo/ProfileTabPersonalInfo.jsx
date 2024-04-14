import { useState } from "react";
import styles from "./ProfileTabPersonalInfo.module.css";

// function ProfilePersonalInfoItems({ header, info }) {
//   return (
//     <li className={styles.profile_info_main_li}>
//       {header}
//       <p>{info}</p>
//     </li>
//   );
// }

export default function ProfileTabPersonalInfo() {
  const [edit, setEdit] = useState(false);

  const [personalInfo, setPersonalInfo] = useState([
    {
      id: 0,
      state: "about me",
      header: "О себе:",
      value:
        "Я веселый человек, который всегда поможет побороть грустное настроение. Могу поддержать в сложной ситуации, выслушать. Ко всем вопросам подхожу с ответственностью, стараюсь всегда быть объективным",
    },
    {
      id: 1,
      state: "interests",
      header: "Интересы:",
      value: "Кино, путешествия, книги",
    },
    { id: 2, state: "zodiac sign", header: "Знак зодиака:", value: "Овен" },
    { id: 3, state: "height", header: "Вредные Рост:", value: "180 см" },
    { id: 4, state: "chlen", header: "Член:", value: "17" },
    {
      id: 5,
      state: "career and education",
      header: "Карьера и образование:",
      value: "Фронтендер",
    },
  ]);

  const [nowPersonalInfo, setNowPersonalInfo] = useState(personalInfo);

  function EditInfo(e, id) {
    const updatePersonalInfo = personalInfo.map((pref) =>
      pref.id === id ? { ...pref, value: e.target.value } : pref
    );
    setPersonalInfo(updatePersonalInfo);
  }

  return (
    <section className={styles.main_section}>
      <div className={styles.img_placeholder}>
        <img
          src="/../../src/assets/img/рама.png"
          alt=""
          className={styles.img_placeholder_photo}
        />
        <button className={styles.img_placeholder_button}>Добавить фото</button>
      </div>
      <div>
        <ul className={styles.profile_info_main}>
          {personalInfo.map((el) => {
            return (
              <li key={el.state} className={styles.profile_info_main_li}>
                {el.header}
                {!edit ? (
                  <p>{el.value}</p>
                ) : (
                  <>
                    <br />
                    <input
                      value={el.value}
                      className={styles.edit}
                      onChange={(e) => EditInfo(e, el.id)}
                    />
                  </>
                )}
              </li>
            );
          })}
          {/* <ProfilePersonalInfoItems
            header={"Обо мне:"}
            info={
              "Я веселый человек, который всегда поможет побороть грустное настроение. Могу поддержать в сложной ситуации, выслушать. Ко всем вопросам подхожу с ответственностью, стараюсь всегда быть объективным"
            }
          />
          <ProfilePersonalInfoItems
            header={"Интересы:"}
            info={"Кино, путешествия, книги"}
          />
          <ProfilePersonalInfoItems header={"Знак зодиака:"} info={"Овен"} />
          <ProfilePersonalInfoItems header={"Рост:"} info={"180 см"} />
          <ProfilePersonalInfoItems header={"Член:"} info={"17 см"} />
          <ProfilePersonalInfoItems
            header={"Карьера и образование:"}
            info={"Frontend development"}
          /> */}
        </ul>
      </div>
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
              setEdit(false), setNowPersonalInfo(personalInfo);
            }}
          >
            Сохранить
          </button>
          <button
            className={styles.cancel_info}
            onClick={() => {
              setEdit(false), setPersonalInfo(nowPersonalInfo);
            }}
          >
            Отменить
          </button>
        </div>
      )}
    </section>
  );
}
