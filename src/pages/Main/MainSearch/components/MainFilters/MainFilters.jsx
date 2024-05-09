import { useState } from "react";
import styles from "./MainFilters.module.css";
import close from "../../../public/close.png";
import ReactSlider from "react-slider";
import "./MainFilters.css";

export default function MainFilters({
  isOpenFilters,
  setIsOpenFilters,
  form,
  setForm,
  setRefresh,
  refresh,
}) {
  const [tempForm, setTempForm] = useState({
    form,
  });
  function CloseFilters() {
    setIsOpenFilters(false);
  }

  function SaveFilters() {
    setIsOpenFilters(false);
    setForm(tempForm);
  }
  return (
    <div className={styles.btns}>
      <button className={styles.btn_img} onClick={() => setRefresh(!refresh)}>
        <img
          src="/../../src/assets/img/refresh.png"
          alt=""
          className={styles.img}
        />
      </button>
      <nav className={styles.filters_menu}>
        <button
          className={styles.btn_img}
          onClick={
            isOpenFilters
              ? () => CloseFilters()
              : () => (setIsOpenFilters(true), setTempForm(form))
          }
        >
          <img
            src="/../../src/assets/img/filters.png"
            alt=""
            className={styles.img}
          />
        </button>
        {isOpenFilters && (
          <div open className={styles.filters_menu_list}>
            <button
              className={styles.filters_cancel}
              onClick={() => CloseFilters()}
            >
              <img src={close} alt="" width={25} height={25} />
            </button>
            <div className={styles.section}>
              <p>Показывать</p>
              <div className={styles.choise}>
                <label>
                  <button
                    style={
                      tempForm.sex == "Male"
                        ? { backgroundColor: "#26A0F8" }
                        : {}
                    }
                    type="radio"
                    name="sex"
                    className={styles.radio_input}
                    value={["Male"]}
                    onClick={(e) =>
                      setTempForm({ ...tempForm, sex: [e.target.value] })
                    }
                  >
                    Мужчины
                  </button>
                </label>
                <label>
                  <button
                    style={
                      tempForm.sex == "Female"
                        ? { backgroundColor: "#26A0F8" }
                        : {}
                    }
                    type="radio"
                    name="sex"
                    className={styles.radio_input}
                    value={["Female"]}
                    onClick={(e) =>
                      setTempForm({ ...tempForm, sex: [e.target.value] })
                    }
                  >
                    Женщины
                  </button>
                </label>
                <label>
                  <button
                    style={
                      tempForm.sex.includes("Female") &&
                      tempForm.sex.includes("Male")
                        ? { backgroundColor: "#26A0F8", width: "43px" }
                        : { width: "43px" }
                    }
                    type="radio"
                    name="sex"
                    className={styles.radio_input}
                    value={["Female", "Male"]}
                    onClick={(e) =>
                      setTempForm({ ...tempForm, sex: ["Female", "Male"] })
                    }
                  >
                    Все
                  </button>
                </label>
              </div>
            </div>
            <div className={styles.section}>
              <p style={{ paddingTop: "5px" }}>Возраст</p>
              <div className={styles.slider_main}>
                <p>
                  от {tempForm.age[0]} до {tempForm.age[1]}
                </p>
                <label>
                  <ReactSlider
                    name="age"
                    className={styles.slider}
                    thumbClassName={styles.slider_thumb}
                    trackClassName="slider_track"
                    onChange={(value) =>
                      setTempForm({ ...tempForm, age: value })
                    }
                    defaultValue={tempForm.age}
                    min={17}
                    max={30}
                    renderThumb={(props, state) => <div {...props}></div>}
                  />
                </label>
              </div>
            </div>
            <div className={styles.section}>
              <p>Цель знакомства</p>
              <div className={styles.choise} style={{}}>
                <label>
                  <button
                    style={
                      tempForm.dating_purpose == "Дружба"
                        ? { backgroundColor: "#26A0F8", width: "84px" }
                        : { width: "84px" }
                    }
                    type="radio"
                    name="dating_purpose"
                    className={styles.radio_input}
                    value={["Дружба"]}
                    onClick={(e) =>
                      setTempForm({
                        ...tempForm,
                        dating_purpose: [e.target.value],
                      })
                    }
                  >
                    Дружба
                  </button>
                </label>
                <label>
                  <button
                    style={
                      tempForm.dating_purpose == "Отношения"
                        ? { backgroundColor: "#26A0F8", width: "100px" }
                        : { width: "100px" }
                    }
                    type="radio"
                    name="dating_purpose"
                    className={styles.radio_input}
                    value={["Отношения"]}
                    onClick={(e) =>
                      setTempForm({
                        ...tempForm,
                        dating_purpose: [e.target.value],
                      })
                    }
                  >
                    Отношения
                  </button>
                </label>
                <label>
                  <button
                    style={
                      tempForm.dating_purpose.includes("Отношения") &&
                      tempForm.dating_purpose.includes("Дружба")
                        ? { backgroundColor: "#26A0F8", width: "43px" }
                        : { width: "43px" }
                    }
                    type="radio"
                    name="dating_purpose"
                    className={styles.radio_input}
                    value={["Отношения", "Дружба"]}
                    onClick={(e) =>
                      setTempForm({
                        ...tempForm,
                        dating_purpose: ["Отношения", "Дружба"],
                      })
                    }
                  >
                    Нет
                  </button>
                </label>
              </div>
            </div>
            <button className={styles.save} onClick={() => SaveFilters()}>
              Сохранить
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}
