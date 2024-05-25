import styles from './ProfileTabLikes.module.css'
import happyPeople from '../../../../public/people2.png'
import {NavLink} from "react-router-dom";
export default function ProfileTabLikes(){
    return(
        <div className={styles.preferences_main_block}>
            <p>Пока нет понравившихся анкет</p>
            <img src={happyPeople} alt='' />
            <NavLink to={`/main`}>
              <button>Искать</button>
            </NavLink>
        </div>
    )
}