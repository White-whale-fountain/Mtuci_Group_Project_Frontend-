import styles from "./ProfileMainBlock.module.css";
import {profile} from "../../../service/profile.js";
import {useEffect, useState} from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard.jsx";
import ProfileDescription from "./components/ProfileDescription/ProfileDescription.jsx";
import profileBackground from "../public/profile_background.png"
export default function ProfileMainBlock( props ) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await profile.card(props.login);
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.profile_main_block}>
      <img
        src={profileBackground}
        alt=""
        className={styles.profile_main_background}
      />
      <ProfileCard>
        {{
          name: data.name,
          age: data.age,
          sex: data.sex,
          avatar: props.avatar
        }}
      </ProfileCard>
      <ProfileDescription avatar = {props.avatar} onChange={props.onChange}/>
    </div>
  );
}
