import styles from "./Profile.module.css";
import LayoutHeader from "../Layout/LayoutHeader/LayoutHeader.jsx";
import LayoutSideBar from "../Layout/LayoutSideBar/LayoutSideBar.jsx";
import ProfileMainBlock from "./ProfileMainBlock/ProfileMainBlock.jsx";
import { useEffect, useState } from "react";
import ProfilePhotoAddModal from "./ProfilePhotoAddModal/ProfilePhotoAddModal.jsx";
import { profile } from "../../service/profile.js";
import nullPhoto from "../public/null_photo.png";
import { useParams } from "react-router-dom";
import ProfileAlien from "./ProfileAlien/ProfileAlien.jsx";

export default function Profile() {
  const { user } = useParams();
  const [photoModal, setPhotoModal] = useState(false);
  const [avatar, setAvatar] = useState(nullPhoto);
  const auth_user = JSON.parse(localStorage.getItem("user"));
  const [profilePhoto, setProfilePhoto] = useState([nullPhoto]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await profile.downAvatar(auth_user);
      if (data) {
        setAvatar(data);
      }
      const photoData = await profile.downPhotos(auth_user);
      if (photoData) {
        setProfilePhoto(photoData);
      }
    };
    fetchData();
  }, [photoModal]);
  function setModal() {
    setPhotoModal(!photoModal);
  }

  return (
    <div className={styles.profile}>
      <ProfilePhotoAddModal open={photoModal} setOpen={setModal} />
      <LayoutSideBar user = {auth_user} active={'profile'} />
      <div className={styles.profile_main}>
        <LayoutHeader avatar={avatar} />
        {user === auth_user ? (
          <ProfileMainBlock setModal={setModal} avatar={avatar} profilePhoto = {profilePhoto} />
        ) : (
          <ProfileAlien user={user} />
        )}
      </div>
    </div>
  );
}
