import styles from './ProfileTabLikes.module.css'
import happyPeople from '../../../public/people2.png'
export default function ProfileTabLikes(){
    return(
        <div className={styles.preferences_main_block}>
            <p>Пока нет понравившихся анкет</p>
            <button>Искать</button>
            <img src={happyPeople} alt='' />
        </div>
    )
}