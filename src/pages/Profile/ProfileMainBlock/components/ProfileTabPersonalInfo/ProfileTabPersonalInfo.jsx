import { useRef, useEffect, useState } from "react";
import styles from "./ProfileTabPersonalInfo.module.css";
import { profile } from "../../../../../service/profile";
import setInputHeight from "../../../../../assets/components/setInputHeight";
import Select from "react-select";
import { group } from "../../../../../const/groups";
import { dating_purpose } from "../../../../../const/purposes";

export default function ProfileTabPersonalInfo({
  personalInfo,
  setPersonalInfo,
}) {
  const aboutMeTextAreaRef = useRef(null);
  const educationTextAreaRef = useRef(null);
  const interestsTextAreaRef = useRef(null);
  const user = JSON.parse(localStorage.getItem("user"));
  const [edit, setEdit] = useState(false);
  // const [personalInfo, setPersonalInfo] = useState([]);
  const [nowPersonalInfo, setNowPersonalInfo] = useState([]);
  const [currentGroup, setCurrentGroup] = useState("");
  const [currentPurposes, setCurrentPurposes] = useState("");

  // useEffect(() => {
  //   async function takeInfo() {
  //     setPersonalInfo(await profile.take("user_info", user));
  //   }
  //   takeInfo();
  // }, []);

  useEffect(() => {
    if (aboutMeTextAreaRef.current) {
      aboutMeTextAreaRef.current.style.height = "auto";
      aboutMeTextAreaRef.current.style.height =
        aboutMeTextAreaRef.current.scrollHeight + "px";
    }
    if (educationTextAreaRef.current) {
      educationTextAreaRef.current.style.height = "auto";
      educationTextAreaRef.current.style.height =
        educationTextAreaRef.current.scrollHeight + "px";
    }
    if (interestsTextAreaRef.current) {
      interestsTextAreaRef.current.style.height = "auto";
      interestsTextAreaRef.current.style.height =
        interestsTextAreaRef.current.scrollHeight + "px";
    }
  }, [edit]);

  async function SaveInfo() {
    return (
      setEdit(false),
      setNowPersonalInfo(personalInfo),
      await profile.put("user_info", user, personalInfo)
    );
  }

  function UpdatedPersonalInfo(property, value) {
    const updatePersonalInfo = { ...personalInfo };
    updatePersonalInfo[property] = value;
    return updatePersonalInfo;
  }

  function EditInfo(e) {
    const property = e.target.name;
    const value = e.target.value;
    const updatePersonalInfo = UpdatedPersonalInfo(property, value);
    setInputHeight(e, "28px");
    return setPersonalInfo(updatePersonalInfo);
  }
  function CancelEdit() {
    return setEdit(false), setPersonalInfo(nowPersonalInfo);
  }

  // const getGroup = () => {
  //   return currentGroup ? groups.find((c) => c.value === currentGroup) : "";
  // };

  // const getPurposes = () => {
  //   return currentPurposes
  //     ? purposes.find((c) => c.value === currentPurposes)
  //     : "";
  // };

  function getValue(obj) {
    if (obj == "group") {
      return personalInfo.group
        ? group.find((c) => c.value === personalInfo.group)
        : "";
    } else {
      return personalInfo.group
        ? dating_purpose.find((c) => c.value === personalInfo.dating_purpose)
        : "";
    }
  }

  function onChange(newValue, opt) {
    const value = newValue.value;
    const property = opt.name;
    const updatePersonalInfo = UpdatedPersonalInfo(property, value);
    return setPersonalInfo(updatePersonalInfo);

    // const updatePersonalInfo = UpdatedPersonalInfo(property, value);
    // if (opt.name == "group") setCurrentGroup(value);
    // else setCurrentPurposes(newValue.value);
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
      <ul className={styles.profile_info_main}>
        <li className={styles.profile_info_main_li}>
          <b style={{ paddingLeft: 12 }}>О себе:</b>
          {!edit ? (
            personalInfo.about_me ? (
              <p>{personalInfo.about_me}</p>
            ) : (
              <p>Не указано</p>
            )
          ) : (
            <>
              <br />
              <textarea
                maxLength={120}
                rows={1}
                ref={aboutMeTextAreaRef}
                value={personalInfo.about_me}
                className={styles.edit}
                name="about_me"
                onChange={(e) => EditInfo(e)}
              />
            </>
          )}
        </li>
        <li className={styles.profile_info_main_li} style={{ paddingTop: 15 }}>
          <b style={{ paddingLeft: 12 }}>Интересы:</b>
          {!edit ? (
            personalInfo.interests ? (
              <p>{personalInfo.interests}</p>
            ) : (
              <p>Не указано</p>
            )
          ) : (
            <>
              <br />
              <textarea
                maxLength={50}
                rows={1}
                ref={interestsTextAreaRef}
                value={personalInfo.interests}
                className={styles.edit}
                name="interests"
                onChange={(e) => EditInfo(e)}
              />
            </>
          )}
        </li>
        <li className={styles.profile_info_main_li} style={{ paddingTop: 15 }}>
          <b style={{ paddingLeft: 12 }}>Карьера и образование:</b>
          {!edit ? (
            personalInfo.education ? (
              <p>{personalInfo.education}</p>
            ) : (
              <p>Не указано</p>
            )
          ) : (
            <>
              <br />
              <textarea
                maxLength={50}
                rows={1}
                ref={educationTextAreaRef}
                value={personalInfo.education}
                className={styles.edit}
                name="education"
                onChange={(e) => EditInfo(e)}
              />
            </>
          )}
        </li>
        <li className={styles.profile_info_main_li} style={{ paddingTop: 15 }}>
          <b style={{ paddingLeft: 12 }}>Группа:</b>
          {!edit ? (
            personalInfo.group ? (
              <p>{personalInfo.group}</p>
            ) : (
              <p>Не указано</p>
            )
          ) : (
            <>
              <br />
              <Select
                name="group"
                options={group}
                className={styles.options_btn}
                value={getValue("group")}
                onChange={onChange}
                maxMenuHeight={60}
              />
            </>
          )}
        </li>
        <li className={styles.profile_info_main_li} style={{ paddingTop: 15 }}>
          <b style={{ paddingLeft: 12 }}>Цель знакомства:</b>
          {!edit ? (
            personalInfo.dating_purpose ? (
              <p>{personalInfo.dating_purpose}</p>
            ) : (
              <p>Не указано</p>
            )
          ) : (
            <>
              <br />
              <Select
                name="dating_purpose"
                options={dating_purpose}
                className={styles.options_btn}
                value={getValue("dating_purpose")}
                onChange={onChange}
                maxMenuHeight={60}
              />
            </>
          )}
        </li>
      </ul>

      {!edit ? (
        <button
          className={styles.change_profile_info}
          onClick={() => (setEdit(true), setNowPersonalInfo(personalInfo))}
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
              CancelEdit();
            }}
          >
            Отменить
          </button>
        </div>
      )}
    </section>
  );
}
