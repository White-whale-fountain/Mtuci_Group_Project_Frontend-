import styles from './SingIn.module.css'
import { useEffect, useRef, useState } from 'react'
import FormInput from '../FormInput/FormInput.jsx'
import IsDoneButton from '../IsDoneButton/IsDoneButton.jsx'
import closeImg from '../public/closeButton.jpg'

export default function SingIn({ open, header, onClose }) {
    const dialogSingIn = useRef()
    useEffect(() => {
        if (open) {
            dialogSingIn.current.showModal()
        } else {
            dialogSingIn.current.close()
        }
    }, [open])

    const [form, setForm] = useState(
        {
            name: '',
            password: '',
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

    function formSubmit(){
        return(
            alert(JSON.stringify(form))
        )
    }

    return (
        <dialog ref={dialogSingIn} className={styles.dialog_singin}>
            <button onClick={onClose} className={styles.close_button}>
                <img src={closeImg} alt='Закрыть' />
            </button>
            <div className={styles.main_block}>
                <p className={styles.header_text}>{header}</p>
                <form
                    className={styles.chilren_form}
                    onSubmit={formSubmit}
                >                                                               {/* ФУНКЦИЯ ОТПРАВКИ ФОРМЫ и АВТОРИЗАЦИЯ */}
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
                    </div>
                    <IsDoneButton/>
                </form>
                <div className={styles.footer_text}>
                    <p>Нет аккаунта?<br />
                        <button
                            onClick={onClose}
                            className={styles.sing_up_button}
                        >                                                       {/* СДЕЛАТЬ ПЕРЕХОД НА ФОРМУ С РЕГИСТРАЦИЕЙ */}
                            Зарегистрируйся
                        </button>
                    </p>
                </div>
            </div>
        </dialog>
    )
}