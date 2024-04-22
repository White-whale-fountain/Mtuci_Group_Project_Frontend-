import { useEffect, useState } from "react";
import styles from "./ProfileTabPersonalInfo.module.css";
import { profile } from "../../../../../service/profile";

// function ProfilePersonalInfoItems({ header, info }) {
//   return (
//     <li className={styles.profile_info_main_li}>
//       {header}
//       <p>{info}</p>
//     </li>
//   );
// }

export default function ProfileTabPersonalInfo() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [edit, setEdit] = useState(false);

  const [personalInfo, setPersonalInfo] = useState([]);

  useEffect(() => {
    async function takeInfo() {
      setPersonalInfo(await profile.take("user_info", user));
    }
    takeInfo();
  }, []);
  const [nowPersonalInfo, setNowPersonalInfo] = useState(personalInfo);

  async function SaveInfo() {
    return (
      setEdit(false),
      setNowPersonalInfo(personalInfo),
      await profile.put("user_info", user, personalInfo)
    );
  }

  function EditInfo(e, name) {
    const updatePersonalInfo = Object.entries(personalInfo).map(
      ([key, value]) =>
        key === name ? [key, [value[0], e.target.value]] : [key, value]
    );
    setPersonalInfo(Object.fromEntries(updatePersonalInfo));
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
        {/* {Object.values(info).map((e) => console.log(e[0]))} */}
      </div>
      <div>
        <ul className={styles.profile_info_main}>
          {Object.entries(personalInfo).map(([key, value]) => {
            return (
              <li key={key} className={styles.profile_info_main_li}>
                {value[0]}
                {!edit ? (
                  <p>{value[1]}</p>
                ) : (
                  <>
                    <br />
                    <input
                      value={value[1]}
                      className={styles.edit}
                      onChange={(e) => EditInfo(e, key)}
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
              SaveInfo();
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
