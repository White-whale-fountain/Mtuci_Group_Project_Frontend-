import styles from "./SingIn.module.css";
import { useEffect, useRef, useState } from "react";
import FormInput from "../FormInput/FormInput.jsx";
import IsDoneButton from "../IsDoneButton/IsDoneButton.jsx";
import closeImg from "../public/closeButton.jpg";
import axios from "axios";

// import { auth } from "../../../../service/authorization.js";

export default function SingIn({ open, onClose }) {
  const instance = axios.create({
    baseURL: "http://127.0.0.1:5000",
  });
  function getData(data) {
    console.log(data);
    instance
      .post("/login", { data })
      // .post("/login", { email: mail, password: pass })
      .then((response) => {
        console.log(response);
      });
  }

  const dialogSingIn = useRef();
  useEffect(() => {
    if (open) {
      dialogSingIn.current.showModal();
    } else {
      dialogSingIn.current.close();
    }
  }, [open]);

  const [form, setForm] = useState({
    name: "",
    password: "",
  });

  function nameListener(event) {
    setForm((prev) => ({
      ...prev,
      name: event.target.value,
    }));
  }

  function passwordListener(event) {
    setForm((prev) => ({
      ...prev,
      password: event.target.value,
    }));
  }

  function formSubmit(event) {
    event.preventDefault();
    return getData(
      JSON.stringify(
        { email: form.name, password: form.password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
    );

    // const data = JSON.stringify(form);
    // const pass = JSON.stringify(form.password);
    // return getData(data);
    // Функция, отправляющая форму
  }

  return (
    <dialog
      ref={dialogSingIn}
      className={styles.dialog_singin}
      onClick={onClose}
    >
      <div onClick={(event) => event.stopPropagation()}>
        {" "}
        {/* Передаем родителю функцию закрытия окна, но на содержимом диалога блокируем её */}
        <button onClick={onClose} className={styles.close_button}>
          <img src={closeImg} alt="Закрыть" />
        </button>
        <div className={styles.main_block}>
          <p className={styles.header_text}>Войти</p>
          <form className={styles.chilren_form} onSubmit={formSubmit}>
            <div className={styles.form_inputs}>
              <FormInput
                val={form.name}
                onChange={nameListener}
                placeHolder={"Введите имя"}
              />
              <FormInput
                val={form.password}
                onChange={passwordListener}
                placeHolder={"Введите пароль"}
                type={"password"}
              />
            </div>
            <IsDoneButton mail={form.name} pass={form.password} />
          </form>
          <div className={styles.footer_text}>
            <p>
              Нет аккаунта?
              <br />
              <button onClick={onClose} className={styles.sing_up_button}>
                {" "}
                {/* СДЕЛАТЬ ПЕРЕХОД НА ФОРМУ С РЕГИСТРАЦИЕЙ */}
                Зарегистрируйся
              </button>
            </p>
          </div>
        </div>
      </div>
    </dialog>
  );
}
