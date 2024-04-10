import styles from './Profile.module.css'
import ProfileSideBar from './ProfileSideBar/ProfileSideBar.jsx'
import ProfileHeader from './ProfileHeader/ProfileHeader.jsx'
import ProfileMainBlock from './ProfileMainBlock/ProfileMainBlock.jsx'
import { profile } from "../../service/profile";
import {useState, useEffect} from "react"

export default function Profile() {
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
    <>
        <div className={styles.profile}>
            <ProfileSideBar />
            <div className={styles.profile_main}>
                <ProfileHeader/>
                <ProfileMainBlock/>
            </div>
        </div>
        </>
    )
}
