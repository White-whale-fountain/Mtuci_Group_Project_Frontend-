import styles from "./ProfileTabLikes.module.css";
import happyPeople from "../../../../public/people2.png";
import { useEffect, useState } from "react";
import { likes } from "../../../../../service/likes";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ProfileTabLikes() {
  const authUser = JSON.parse(localStorage.getItem("user"));
  const [likeUsers, setLikeUsers] = useState({});

  useEffect(() => {
    async function showLikes() {
      const response = await likes.takeLikes(authUser);
      setLikeUsers(response);
      return response;
    }
    showLikes();
  }, []);
  console.log(likeUsers);
  return (
    <div className={styles.preferences_main_block}>
      {likeUsers != {} ? (
        Object.values(likeUsers).map((user) => {
          return (
            <>
              <p>Это - {user.name}</p>
              <Link to={`/${user.login}`}>
                <p>Перейти на Профиль:</p>
              </Link>
            </>
          );
        })
      ) : (
        <>
          <p>Пока нет понравившихся анкет</p>
          <NavLink to={`/main`}>
            <button>Искать</button>
          </NavLink>
          <img src={happyPeople} alt="" />
        </>
      )}
    </div>
  );
}
