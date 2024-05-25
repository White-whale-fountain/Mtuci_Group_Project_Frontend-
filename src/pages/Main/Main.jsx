import {useEffect, useState} from "react";
import styles from "./Main.module.css";
import MainSearch from "./MainSearch/MainSearch";
import LayoutHeader from "../Layout/LayoutHeader/LayoutHeader.jsx";
import LayoutSideBar from "../Layout/LayoutSideBar/LayoutSideBar.jsx";
import {profile} from "../../service/profile.js";

export default function Main() {
  const auth_user = JSON.parse(localStorage.getItem("user"));

  const [avatar, setAvatar] = useState()
  useEffect(() => {
    async function takeAvatar() {
      const response = await profile.downAvatar(auth_user);
      return setAvatar(response);
    }
    takeAvatar();
  }, []);

  return (
    <div className={styles.main}>
      <LayoutSideBar active={'main'} user={auth_user} />
      <div className={styles.profile_main}>
        <LayoutHeader avatar ={ avatar } />
        <MainSearch />
      </div>
    </div>
  );
}
