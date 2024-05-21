import {useEffect, useState} from "react";
import {profile} from "../../../service/profile.js";
import styles from './ProfileAlien.module.css'
import ProfileAlienMainBlock from "./components/ProfileAlienMainBlock/ProfileAlienMainBlock.jsx";
import ProfileAlienHeader from "./components/ProfileAlienHeader/ProfileAlienHeader.jsx";
import ProfileAlienCarousel from "./components/ProfileAlienCarousel/ProfileAlienCaruosel.jsx";

export default function ProfileAlien(props) {
  const [profileAlienData, setProfileAlienData] = useState()
  const [profileAlienPreferences, setProfileAlienPreferences] = useState()
  const [profileAlienPhotos, setProfileAlienPhotos] = useState()

  useEffect(() => {
    async function fetchProfileAlienData() {
      const profileAlienData = await profile.take("user_info", props.user)
      if (profileAlienData) {
        setProfileAlienData(profileAlienData)
      }
      const profileAlienPreferences = await profile.take("user_preferences", props.user)
      if (profileAlienPreferences) {
        setProfileAlienPreferences(profileAlienPreferences)
      }

      const profileAlienPhotos = await profile.downPhotos(props.user)
      if (profileAlienPhotos) {
        setProfileAlienPhotos(profileAlienPhotos)
      }
    }

    fetchProfileAlienData().then(() => {
      console.log('Data success')
    })
  }, [])
  // console.log(profileAlienData)
  // console.log(profileAlienPreferences)
  // console.log(profileAlienPhotos)
  if (profileAlienData) {
    var {name, sex, age} = profileAlienData
  }

  return (
    <div className={styles.profile_alien_container}>
      <ProfileAlienHeader name={name} sex={sex} age={age}/>
      <div className={styles.profile_alien_info_container}>
        <ProfileAlienMainBlock profileData ={profileAlienData} profilePreferences ={profileAlienPreferences}/>
        <div className={styles.profile_alien_caruosel}>
          <ProfileAlienCarousel profilePhotos={profileAlienPhotos}/>
        </div>
      </div>
    </div>
  )
}
