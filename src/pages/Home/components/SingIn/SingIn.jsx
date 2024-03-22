import styles from './SingIn.module.css'
import { useEffect, useRef, useState } from 'react'
import FormInput from '../FormInput/FormInput.jsx'
import IsDoneButton from '../IsDoneButton/IsDoneButton.jsx'
import closeImg from '../public/closeButton.jpg'

export default function SingIn({ open, onClose }) {
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
            login: '',
            password: '',
        },
    )

    function loginListener(event) {
        setForm((prev) => ({
                ...prev,
                login: event.target.value,
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

    function formSubmit() {
        return (
            alert(JSON.stringify(form, null, 2))                                // Функция, отправляющая форму
        )
    }

    return (
        <dialog ref={dialogSingIn} className={styles.dialog_singin} onClick={onClose}>
            <div onClick={(event) => event.stopPropagation()}>                  {/* Передаем родителю функцию закрытия окна, но на содержимом диалога блокируем её */}
                <button onClick={onClose} className={styles.close_button}>
                    <img src={closeImg} alt='Закрыть' />
                </button>
                <div className={styles.main_block}>
                    <p className={styles.header_text}>Войти</p>
                    <form
                        className={styles.chilren_form}
                        onSubmit={formSubmit}
                    >
                        <div className={styles.form_inputs}>
                            <FormInput
                                val={form.login}
                                onChange={loginListener}
                                placeHolder={'Введите логин'} />
                            <FormInput
                                val={form.password}
                                onChange={passwordListener}
                                placeHolder={'Введите пароль'}
                                type={'password'} />
                        </div>
                        <IsDoneButton />
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
            </div>
        </dialog>
    )
}