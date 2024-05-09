import { useState } from "react";
import styles from "./Main.module.css";
import MainHeader from "./MainHeader/MainHeader";
import MainSideBar from "./MainSIdeBar/MainSideBar";
import MainSearch from "./MainSearch/MainSearch";

export default function Main() {
  return (
    <div className={styles.main}>
      <MainSideBar />
      <div className={styles.profile_main}>
        <MainHeader />
        <MainSearch />
      </div>
    </div>
  );
}
