import styles from "./Profile.module.css";
import ProfileSideBar from "./ProfileSideBar/ProfileSideBar.jsx";
import ProfileHeader from "./ProfileHeader/ProfileHeader.jsx";
import ProfileMainBlock from "./ProfileMainBlock/ProfileMainBlock.jsx";
import { profile } from "../../service/profile";
import { useState, useEffect } from "react";

export default function Profile() {
  const test = {
    id: ["12", "123", "12"],
    lox: ["lox", "2", "122"],
    pidr: ["pidr", "3", "132"],
  };
  return (
    <>
      <div className={styles.profile}>
        <ProfileSideBar />
        <div className={styles.profile_main}>
          <ProfileHeader />
          <ProfileMainBlock />
        </div>
      </div>
      <button
        onClick={() => {
          profile.about_me(JSON.parse(localStorage.getItem("user")));
        }}
      >
        123
      </button>
      <button
        onClick={() => {
          profile.about_me_save(JSON.parse(localStorage.getItem("user")));
        }}
      >
        save
      </button>
      <button
        onClick={() => {
          profile.about_me_take(JSON.parse(localStorage.getItem("user")));
        }}
      >
        take
      </button>
      {Object.values(test).map((arr) => console.log(arr))}
    </>
  );
}
