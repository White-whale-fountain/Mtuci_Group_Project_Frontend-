import styles from "./ProfileMainBlock.module.css";
import { profile } from "../../../service/profile.js";
import { useState, useEffect } from "react";
import profileBackground from "../public/profile_background.png"
import ProfileCard from "./components/ProfileCard/ProfileCard.jsx";
import ProfileDescription from "./components/ProfileDescription/ProfileDescription.jsx";

export default function ProfileMainBlock(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  const [personalInfo, setPersonalInfo] = useState([]);

  useEffect(() => {
    async function takeInfo() {
      setPersonalInfo(await profile.take("user_info", user));
    }
    takeInfo();
  }, []);

  return (
    <div className={styles.profile_main_block}>
      <img
        src={profileBackground}
        alt=""
        className={styles.profile_main_background}
      />
      <ProfileCard personalInfo={personalInfo} avatar = {props.avatar} />
      <ProfileDescription
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
        avatar = {props.avatar}
        setModal={props.setModal}
      />
    </div>
  );
}
