import styles from "./SingUp.module.css";
import { useEffect, useRef, useState } from "react";
import FormInput from "../FormInput/FormInput.jsx";
import IsDoneButton from "../IsDoneButton/IsDoneButton.jsx";
import closeImg from "../public/closeButton.jpg";
import { useFormik } from "formik";
import { auth } from "../../../../service/authorization.js";

export default function SingUp({ open, onClose }) {
  const dialogSingUp = useRef();
  useEffect(() => {
    if (open) {
      dialogSingUp.current.showModal();
    } else {
      dialogSingUp.current.close();
    }
  }, [open]);

  function formClose() {
    formik.resetForm();
    formik.setErrors({});
    formik.setTouched({});
    onClose();
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      confirmPassword: "",
      gender: "",
      age: "",
    },
    onSubmit: (data) => {
      // alert(JSON.stringify(data, null, 2))                            // Функция, отправляющая форму
      const name = data.name;
      const pass = data.password;
      return auth.registr(name, pass);
      formClose();
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = 'Поле "Имя" обязательно ';
      }
      if (!values.password) {
        errors.password = 'Поле "Пароль" обязательно ';
      } else if (values.password.length < 6) {
        errors.password = "Пароль должен содержать минимум 6 символов";
      }

      if (!values.confirmPassword) {
        errors.confirmPassword = "Повторите пароль";
      } else if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "Пароли не совпадают";
      }

      return errors;
    },
  });

  return (
    <dialog
      ref={dialogSingUp}
      className={styles.dialog_singup}
      onClick={formClose}
    >
      <div onClick={(event) => event.stopPropagation()}>
        {" "}
        {/* Передаем родителю функцию закрытия окна, но на содержимом диалога блокируем её */}
        <button onClick={formClose} className={styles.close_button}>
          <img src={closeImg} alt="Закрыть" />
        </button>
        <div className={styles.main_block}>
          <p className={styles.header_text}>Регистрация</p>
          <form className={styles.chilren_form} onSubmit={formik.handleSubmit}>
            <div className={styles.form_inputs}>
              <label>
                {formik.touched.name && formik.errors.name ? (
                  <div className={styles.errors_container}>
                    <p>{formik.errors.name}</p>
                  </div>
                ) : null}
                <input
                  id="name"
                  placeholder={"Введите имя"}
                  className={styles.form_input}
                  name={"name"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
              </label>
              <label>
                {formik.touched.password && formik.errors.password ? (
                  <div className={styles.errors_container}>
                    <p>{formik.errors.password}</p>
                  </div>
                ) : null}
                <input
                  id="password"
                  placeholder={"Введите пароль"}
                  type={"password"}
                  name={"password"}
                  className={styles.form_input}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
              </label>

              <label>
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <div className={styles.errors_container}>
                    <p>{formik.errors.confirmPassword}</p>
                  </div>
                ) : null}
                <input
                  id="confirmPassword"
                  placeholder={"Повторите пароль"}
                  className={styles.form_input}
                  type={"password"}
                  name={"confirmPassword"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                />
              </label>
            </div>

            <div>
              <p>Укажите свой пол</p>
              <div className={styles.gender_choice}>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    className={styles.gender_radio_input}
                    id="genderFemale"
                    value={"Female"}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <span>Ж</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    className={styles.gender_radio_input}
                    id="genderMale"
                    value={"Male"}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <span>М</span>
                </label>
              </div>
            </div>

            <div>
              <p>Укажите свой возраст</p>
              <input
                type="number"
                className={styles.select_age_input}
                id="age"
                name="age"
                value={formik.values.age}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <IsDoneButton />
          </form>
        </div>
      </div>
    </dialog>
  );
}

// Состояния формы регистрации
// const [form, setForm] = useState(
//     {
//         name: '',
//         password: '',
//         duplicatedPassword: '',
//         gender: 'Женский',
//         age: '',
//     },
// )

// function nameListener(event) {
//     setForm((prev) => ({
//             ...prev,
//             name: event.target.value,
//         }
//     ))
// }
//
// function passwordListener(event) {
//     setForm((prev) => ({
//             ...prev,
//             password: event.target.value,
//         }
//     ))
// }
//
// function passwordDuplicateListener(event) {
//     setForm((prev) => ({
//             ...prev,
//             duplicatedPassword: event.target.value,
//         }
//     ))
// }
//
// function FgenderListener(event) {
//     setForm((prev) => ({
//             ...prev,
//             gender: 'Женский',
//         }
//     ))
// }
//
// function MgenderListener(event) {
//     setForm((prev) => ({
//             ...prev,
//             gender: 'Мужской',
//         }
//     ))
// }
//
// function ageListener(event) {
//     setForm((prev) => ({
//             ...prev,
//             age: event.target.value,
//
//         }
//     ))
// }
