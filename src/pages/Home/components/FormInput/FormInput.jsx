import styles from './FormInput.module.css'


export default function FormInput({ val, onChange, placeHolder, type, props }) {
    return (
        <input
            type= {type}
            value={val}
            className={styles.form_input}
            onChange={onChange}
            placeholder={placeHolder}
            {...props}
        />
    )
}
