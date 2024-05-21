import styles from "./TabSection.module.css"

export default function TabSection({tab, onTab, myProfile} ){
    return(
        <div className={styles.tab_section}>
            <button
                className={tab === "profilePersonalInfo"? styles.tab_section_button_active: styles.tab_section_button}
                onClick={() => onTab("profilePersonalInfo")}
            >
                Информация о себе
            </button>
            <button
                onClick={() =>  onTab("profilePreferences")}
                className={tab === "profilePreferences"? styles.tab_section_button_active: styles.tab_section_button}
            >
                Предпочтения в людях
            </button>
            {myProfile &&
            <button
                onClick={() =>  onTab("profileLikes")}
                className={tab === "profileLikes"? styles.tab_section_button_active: styles.tab_section_button}
            >
                Понравившиеся
            </button>
            }

        </div>

    )
}