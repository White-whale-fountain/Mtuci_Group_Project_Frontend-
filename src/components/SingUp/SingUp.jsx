import styles from './SingUp.module.css'
import { useEffect, useRef, useState } from 'react'
import FormInput from '../FormInput/FormInput.jsx'
import IsDoneButton from '../IsDoneButton/IsDoneButton.jsx'
import closeImg from '../public/closeButton.jpg'

export default function SingUp({ open, header, onClose }) {
    const dialogSingUp = useRef()
    useEffect(() => {
        if (open) {
            dialogSingUp.current.showModal()
        } else {
            dialogSingUp.current.close()
        }
    }, [open])

    const [form, setForm] = useState(
        {
            name: '',
            password: '',
            duplicatedPassword: '',
            gender: false, // женский
            age: ''
        },
    )

    function nameListener(event) {
        setForm((prev) => ({
                ...prev,
                name: event.target.value,
            }
        ))
    }

    function passwordListener(event) {
        setForm((prev) => ({
                ...prev,
                password: event.target.value,
            }
        ))
    }

    function passwordDuplicateListener(event) {
        setForm((prev) => ({
                ...prev,
                duplicatedPassword: event.target.value,
            }
        ))
    }
    function FgenderListener(event) {
        setForm((prev) => ({
                ...prev,
                gender: "Женский",
            }
        ))
    }
    function MgenderListener(event) {
        setForm((prev) => ({
                ...prev,
                gender: "Мужской",
            }
        ))
    }
    function ageListener(event) {
        setForm((prev) => ({
                ...prev,
                age: event.target.value,

            }
        ))
    }
    function formSubmit(){
        return(
            alert(JSON.stringify(form))
        )
    }

    return (
        <dialog ref={dialogSingUp} className={styles.dialog_singup}>
            <button onClick={onClose} className={styles.close_button}>
                <img src={closeImg} alt='Закрыть' />
            </button>
            <div className={styles.main_block}>
                <p className={styles.header_text}>{header}</p>
                <form
                    className={styles.chilren_form}
                    onSubmit={formSubmit}
                >                                                               {/* ФУНКЦИЯ ОТПРАВКИ ФОРМЫ и Регистрация */}
                    <div className={styles.form_inputs}>
                        <FormInput
                            val={form.name}
                            onChange={nameListener}
                            placeHolder={'Введите имя'} />                      {/* СДЕЛАТЬ ВАЛИДАЦИЮ НА СТРОКУ ИМЕНИ (пустая строчка не проходит) */}
                        <FormInput
                            val={form.password}
                            onChange={passwordListener}
                            placeHolder={'Введите пароль'}
                            type={'password'} />
                        <FormInput
                            val={form.duplicatedPassword}
                            onChange={passwordDuplicateListener}
                            placeHolder={'Повторите пароль'}
                            type={'password'} />                                {/* СДЕЛАТЬ ВАЛИДАЦИЮ НА СТРОКИ пароля (пароли совпадают) */}
                    </div>

                    <div>
                        <p>Укажите свой пол</p>
                        <div className={styles.gender_choice}>
                            <label >
                                <input type='radio' name='radio' className={styles.gender_radio_input} onClick={FgenderListener}/>
                                <span>Ж</span>
                            </label>
                            <label>
                                <input type='radio' name='radio' className={styles.gender_radio_input} onClick={MgenderListener}/>
                                <span>М</span>
                            </label>
                        </div>
                    </div>

                    <div className={styles.select_your_age}>
                        <p>Укажите свой возраст</p>
                        <input type='number' className={styles.select_age_input} onChange={ageListener}/>
                    </div>
                    <IsDoneButton/>
                </form>

            </div>
        </dialog>
)
}