import styles from "./IsDoneButton.module.css"

export default function IsDoneButton(onClick) {
    return (
        <>
            <button type='submit' className={styles.is_done_button} onClick={onClick}>
                Готово
            </button>
        </>

    )
}