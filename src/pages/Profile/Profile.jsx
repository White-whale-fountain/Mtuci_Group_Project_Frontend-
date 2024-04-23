import styles from "./Profile.module.css";
import ProfileSideBar from "./ProfileSideBar/ProfileSideBar.jsx";
import ProfileHeader from "./ProfileHeader/ProfileHeader.jsx";
import ProfileMainBlock from "./ProfileMainBlock/ProfileMainBlock.jsx";

export default function Profile() {
  return (
    <>
      <div className={styles.profile}>
        <ProfileSideBar />
        <div className={styles.profile_main}>
          <ProfileHeader />
          <ProfileMainBlock />
        </div>
      </div>
    </>
  );
}
