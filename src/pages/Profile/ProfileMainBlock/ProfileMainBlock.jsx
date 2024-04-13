import styles from "./ProfileMainBlock.module.css";
import { profile } from "../../../service/profile.js";
import { useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard.jsx";
import ProfileDescription from "./components/ProfileDescription/ProfileDescription.jsx";

export default function ProfileMainBlock() {
  const login = JSON.parse(localStorage.getItem("user"));
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await profile(login);
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.profile_main_block}>
      <img
        src="/../../src/assets/img/profile_background.png"
        alt=""
        className={styles.profile_main_background}
      />
      <ProfileCard>
        {{
          name: data.name,
          age: data.age,
          sex: data.sex,
        }}
      </ProfileCard>
      <ProfileDescription />
    </div>
  );
}
