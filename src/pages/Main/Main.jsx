import styles from "./Main.module.css";
import MainHeader from "./MainHeader/MainHeader";
import MainSideBar from "./MainSIdeBar/MainSideBar";

export default function Main() {
  return (
    <div className={styles.main}>
      <MainSideBar />
      <div className={styles.profile_main}>
        <MainHeader />
        {/* <ProfileMainBlock /> */}
      </div>
    </div>
  );
}
