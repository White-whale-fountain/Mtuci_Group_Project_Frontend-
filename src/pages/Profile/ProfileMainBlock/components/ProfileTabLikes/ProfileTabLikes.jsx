import styles from './ProfileTabLikes.module.css'

export default function ProfileTabLikes(){
    return(
        <div className={styles.preferences_main_block}>
            <p>Пока нет понравившихся анкет</p>
            <button>Искать</button>
            <img src='/../../src/assets/img/people2.png' alt='' />
        </div>
    )
}