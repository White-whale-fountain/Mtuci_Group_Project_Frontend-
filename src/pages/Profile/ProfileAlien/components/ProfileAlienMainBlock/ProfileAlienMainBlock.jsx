import styles from './ProfileAlienMainBlock.module.css'
import TabSection from "../../../ProfileMainBlock/components/TabSection/TabSection.jsx";
import {useState} from "react";
import ProfileAlienInfo from "../ProfileAlienInfo/ProfileAlienInfo.jsx";
import ProfileAlinePreferences from "../ProfileAlinePreferences/ProfileAlinePreferences.jsx";

export default function ProfileAlienMainBlock( {profileData, profilePreferences} ){
  const [tab, setTab] = useState('profilePersonalInfo')  // or profilePreferences
  return (
    <div className={styles.main_block_container}>
      <TabSection tab={tab} onTab={setTab} myProfile={false}/>
      <hr/>
      <div className={styles.main_block_info}>
        {tab === 'profilePersonalInfo' ?
          <ProfileAlienInfo personalInfo = {profileData} />
          :
          <ProfileAlinePreferences userPreferences={profilePreferences}/>}
      </div>
    </div>
  )
}