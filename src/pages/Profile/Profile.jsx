import styles from "./Profile.module.css";
import ProfileSideBar from "./ProfileSideBar/ProfileSideBar.jsx";
import ProfileHeader from "./ProfileHeader/ProfileHeader.jsx";
import ProfileMainBlock from "./ProfileMainBlock/ProfileMainBlock.jsx";
import { useEffect, useState } from "react";
import ProfilePhotoAddModal from "./ProfilePhotoAddModal/ProfilePhotoAddModal.jsx";
import { profile } from "../../service/profile.js";
import nullPhoto from "./public/null_photo.png";

export default function Profile() {
  const [photoModal, setPhotoModal] = useState(false);
  const [avatar, setAvatar] = useState(nullPhoto);
  const [profilePhoto, setProfilePhoto] = useState([nullPhoto]);
  const login = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    const fetchAvatarData = async () => {
      const data = await profile.downAvatar(login);
      if (data) {
        setAvatar(data);
      }
      const photoData = await profile.downPhotos(login);
      if (photoData) {
        setProfilePhoto(photoData);
      }
    };
    fetchAvatarData();
  }, [photoModal]);

  console.log(profilePhoto[5])

  function setModal() {
    setPhotoModal(!photoModal);
  }

  return (
    <div className={styles.profile}>
      <ProfilePhotoAddModal open={photoModal} setOpen={setModal} />
      <ProfileSideBar />
      <div className={styles.profile_main}>
        <ProfileHeader login={login} avatar={avatar} />
        <ProfileMainBlock setModal={setModal} avatar={avatar} profilePhoto = {profilePhoto} />
      </div>
    </div>
  );
}
