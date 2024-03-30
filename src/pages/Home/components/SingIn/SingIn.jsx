import styles from './SingIn.module.css'
import FormInput from '../FormInput/FormInput.jsx'
import IsDoneButton from '../IsDoneButton/IsDoneButton.jsx'
import closeImg from '../public/closeButton.jpg'
import { auth } from '../../../../service/authorization.js'
import { Link } from 'react-router-dom'
import { useContext, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProvider.jsx";
import { useNavigate } from "react-router-dom";

export default function SingIn() {
    const [form, setForm] = useState({
        login: '',
        password: '',
    })
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

    function loginListener(event) {
        setForm((prev) => ({
            ...prev,
            login: event.target.value,
        }))
    }

    function passwordListener(event) {
        setForm((prev) => ({
            ...prev,
            password: event.target.value,
        }))
    }

  async function formSubmit(event) {
    event.preventDefault();
    const token = await auth.login(form);
    return token
      ? (setUser(form.login),
        localStorage.setItem("user", JSON.stringify(form.login)),
        navigate(`/:${form.login}`))
      : console.log("gg");
  }

    return (
        <dialog
            open = {true}
            className={styles.dialog_singin}
        >
            <div onClick={(event) => event.stopPropagation()}>
                <Link to={"/"} className={styles.close_button}>
                    <img src={closeImg} alt='Закрыть' />
                </Link>
                <div className={styles.main_block}>
                    <p className={styles.header_text}>Войти</p>
                    <form className={styles.chilren_form} onSubmit={formSubmit}>
                        <div className={styles.form_inputs}>
                            <FormInput
                                val={form.login}
                                onChange={loginListener}
                                placeHolder={'Введите логин'}
                            />
                            <FormInput
                                val={form.password}
                                onChange={passwordListener}
                                placeHolder={'Введите пароль'}
                                type={'password'}
                            />
                        </div>
                        <IsDoneButton />
                    </form>
                    <div className={styles.footer_text}>
                        <p>
                            Нет аккаунта?
                            <br />
                            <Link to={"/registration"} className={styles.sing_up_button}>
                                Зарегистрируйся
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </dialog>
    )
}
