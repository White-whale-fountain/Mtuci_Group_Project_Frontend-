import styles from "./ProfileTabLikes.module.css";
import happyPeople from "../../../../public/people2.png";
import brokenHeart from "../../../../public/broken_heart.png";
import personProfile from "../../../../public/person_profile.png";
import {useEffect, useState} from "react";
import {likes} from "../../../../../service/likes";
import {Link, NavLink} from "react-router-dom";

export default function ProfileTabLikes() {
  const authUser = JSON.parse(localStorage.getItem("user"));
  const [likeUsers, setLikeUsers] = useState({});
  const [update, setUpdate] = useState (true)

  useEffect(() => {
    async function showLikes() {
      const response = await likes.takeLikes(authUser);
      setLikeUsers(response);
      return response;
    }
    showLikes();
  }, [update]);



  async function putLike(tempLogin) {
    const response = await likes.putLike(authUser, tempLogin);
    setUpdate(!update)
  }

  // console.log(likeUsers);
  return (
    <div className={styles.preferences_main_block}>
      {(Object.keys(likeUsers).length !== 0) ? (
        Object.values(likeUsers).map((user) => {
          return (
            <div key={user.login} className={styles.preferences_main_block_list_item}>
              <Link to={`/${user.login}`} style={{textDecoration: 'none', color: '#000000'}}>
                <div className={styles.preferences_main_block_list_item_main_info}>
                  <img src={user.photo} alt=""/>
                  <p>{user.name}, {user.sex === 'Male' ? 'М' : 'Ж'}, {user.age}</p>
                </div>
              </Link>
              <div className={styles.preferences_main_block_list_item_right_buttons}>
                <Link to={`/${user.login}`}>
                  <img src={personProfile} alt="profile" style={{width:'45px',height: '45px'}}/>
                </Link>
                <button onClick={() => putLike(user.login)}><img src={brokenHeart} alt="Dislike" width={'45px'} height={'45px'}/></button>
              </div>
            </div>
          );
        })
      ) : (
        <>
          <p>Пока нет понравившихся анкет</p>
          <NavLink to={`/main`}>
            <button className={styles.preferences_main_block_find_button}>Искать</button>
          </NavLink>
          <img src={happyPeople} alt="" className={styles.preferences_main_block_find_img}/>
        </>
      )}
    </div>
  );
}
