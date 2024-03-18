import styles from "./IsDoneButton.module.css"

export default function IsDoneButton() {
    return (
        <>
            <button type='submit' className={styles.is_done_button}>
                Готово
            </button>
        </>

    )
}