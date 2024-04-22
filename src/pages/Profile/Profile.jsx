import styles from "./Profile.module.css";
import ProfileSideBar from "./ProfileSideBar/ProfileSideBar.jsx";
import ProfileHeader from "./ProfileHeader/ProfileHeader.jsx";
import ProfileMainBlock from "./ProfileMainBlock/ProfileMainBlock.jsx";
import { useState, useEffect, useContext } from "react";
import Modal from "./ProfileMainBlock/components/ProfileCard/Modal/Modal.jsx";
import { EditContext } from "../../providers/EditProvider.jsx";

export default function Profile() {
  const { modalActive } = useContext(EditContext);

  return (
    <>
      <div className={styles.profile}>
        <ProfileSideBar />
        <div className={styles.profile_main}>
          <ProfileHeader />
          {modalActive ? <Modal /> : <ProfileMainBlock />}
        </div>
      </div>
    </>
  );
}
