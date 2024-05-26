import styles from "./SingUp.module.css";
import { useContext, useEffect, useState } from "react";
import IsDoneButton from "../IsDoneButton/IsDoneButton.jsx";
import closeImg from "../public/closeButton.jpg";
import { useFormik } from "formik";
import { auth } from "../../../../service/authorization.js";
import { AuthContext } from "../../../../providers/AuthProvider.jsx";
import { Link, useNavigate } from "react-router-dom";
import ModalAlert from "../ModalAlert/ModalAlert.jsx";

export default function SingUp() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);
  const [modal, setModal] = useState(false);
  function formClose() {
    formik.resetForm();
    formik.setErrors({});
    formik.setTouched({});
  }

  const alertModal = () => {
    setModal(true);
    setTimeout(() => {
      setModal(false);
    }, 4000);
  };

  const formik = useFormik({
    initialValues: {
      login: "",
      name: "",
      password: "",
      confirmPassword: "",
      sex: "",
      age: "",
    },
    onSubmit: async (data) => {
      formClose();
      delete data["confirmPassword"];
      const token = await auth.registration(data);
      if (token === 201) {
        setUser(
          data.login,
          localStorage.setItem("user", JSON.stringify(data.login)),
          navigate(`/${data.login}`)
        );
      } else if (token === 403) {
        alertModal();
      } else alert("Ошибка сервера");
    },
    validate: (values) => {
      const errors = {};
      if (!values.login) {
        errors.login = 'Поле "Логин" обязательно';
      }
      if (!values.name) {
        errors.name = 'Поле "Имя" обязательно';
      }
      if (!values.password) {
        errors.password = 'Поле "Пароль" обязательно';
      } else if (values.password.length < 6) {
        errors.password = "Минимум 6 символов в пароле";
      }
      if (!values.confirmPassword) {
        errors.confirmPassword = "Повторите пароль";
      } else if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "Пароли не совпадают";
      }
      if (!values.age) {
        errors.age = 'Поле "Возраст" обязательно';
      }
      if (!values.sex) {
        errors.sex = "Выберите пол";
      }
      return errors;
    },
  });
  return (
    <>
      {modal && <ModalAlert alert={"Пользователь с таким логином уже есть"} />}
      <div className={styles.box}>
        <dialog open className={styles.dialog_singup}>
          <div>
            <button onClick={formClose} className={styles.close_button}>
              <Link to="/">
                <img src={closeImg} alt="Закрыть" />
              </Link>
            </button>
            <div className={styles.main_block}>
              <p className={styles.header_text}>Регистрация</p>
              <form
                className={styles.chilren_form}
                onSubmit={formik.handleSubmit}
              >
                <div className={styles.form_inputs}>
                  <label>
                    <input
                      id="login"
                      placeholder={"Введите логин"}
                      className={styles.form_input}
                      name={"login"}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.login}
                    />
                    {formik.touched.login && formik.errors.login ? (
                      <div className={styles.errors_container}>
                        <p>{formik.errors.login}</p>
                      </div>
                    ) : null}
                  </label>
                  <label>
                    <input
                      id="name"
                      placeholder={"Введите имя"}
                      className={styles.form_input}
                      name={"name"}
                      maxLength={15}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (
                      <div className={styles.errors_container}>
                        <p>{formik.errors.name}</p>
                      </div>
                    ) : null}
                  </label>
                  <label>
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
                    {formik.touched.password && formik.errors.password ? (
                      <div className={styles.errors_container}>
                        <p>{formik.errors.password}</p>
                      </div>
                    ) : null}
                  </label>

                  <label>
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
                    {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword ? (
                      <div className={styles.errors_container}>
                        <p>{formik.errors.confirmPassword}</p>
                      </div>
                    ) : null}
                  </label>
                </div>

                <div>
                  <p>Укажите свой пол</p>
                  <div className={styles.sex_choice}>
                    <label>
                      <input
                        type="radio"
                        name="sex"
                        className={styles.sex_radio_input}
                        id="sexFemale"
                        value={"Female"}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <span>Ж</span>
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="sex"
                        className={styles.sex_radio_input}
                        id="sexMale"
                        value={"Male"}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <span>М</span>
                    </label>
                  </div>
                  {formik.touched.sex && formik.errors.sex ? (
                    <div
                      id={styles.sex_error}
                      className={styles.errors_container}
                    >
                      <p>{formik.errors.sex}</p>
                    </div>
                  ) : null}
                </div>

                <div>
                  <p>Укажите свой возраст</p>
                  <input
                    type="number"
                    className={styles.select_age_input}
                    id="age"
                    name="age"
                    placeholder=""
                    max="30"
                    min="17"
                    value={formik.values.age}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.age && formik.errors.age ? (
                    <div
                      id={styles.age_error}
                      className={styles.errors_container}
                    >
                      <p>{formik.errors.age}</p>
                    </div>
                  ) : null}
                </div>
                <IsDoneButton />
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
}
