import styles from "./ProfileDescription.module.css";
import { useState } from "react";
import ProfileTabPersonalInfo from "../ProfileTabPersonalInfo/ProfileTabPersonalInfo.jsx";
import ProfileTabPreferences from "../ProfileTabPreferences/ProfileTabPreferences.jsx";
import ProfileTabLikes from "../ProfileTabLikes/ProfileTabLikes.jsx";
import TabSection from "../TabSection/TabSection.jsx";
export default function ProfileDescription({ personalInfo, setPersonalInfo }) {
  const [tab, setTab] = useState("profilePersonalInfo");
  return (
    <div className={styles.profile_description_main}>
      <TabSection tab={tab} onTab={(current) => setTab(current)} />
      <hr />
      <div>
        {tab === "profilePersonalInfo" ? (
          <ProfileTabPersonalInfo
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}
            avatar={avatar}
            onChange={onChange}
          />
        ) : null}
        {tab === "profilePreferences" ? <ProfileTabPreferences /> : null}
        {tab === "profileLikes" ? <ProfileTabLikes /> : null}
      </div>
    </div>
  );
}