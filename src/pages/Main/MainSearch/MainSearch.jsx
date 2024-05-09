import { useEffect, useState } from "react";
import styles from "./MainSearch.module.css";
import MainCards from "./components/MainCards/MainCards";
import MainFilters from "./components/MainFilters/MainFilters";
import { mainCards } from "../../../service/mainCards";

export default function MainSearch() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [isOpenFilters, setIsOpenFilters] = useState(false);
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [form, setForm] = useState({
    age: [17, 30],
    sex: ["Female", "Male"],
    dating_purpose: ["Отношения", "Дружба"],
  });

  useEffect(() => {
    async function takeCards() {
      const response = await mainCards(user, form);
      setData(response);
    }
    takeCards();
  }, [form, refresh]);
  return (
    <div className={styles.block}>
      <MainCards setIsOpenFilters={setIsOpenFilters} data={data} />
      <MainFilters
        isOpenFilters={isOpenFilters}
        setIsOpenFilters={setIsOpenFilters}
        form={form}
        setForm={setForm}
        refresh={refresh}
        setRefresh={setRefresh}
      />
    </div>
  );
}
