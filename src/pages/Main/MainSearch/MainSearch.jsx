import { useState } from "react";
import styles from "./MainSearch.module.css";
import MainCards from "./components/MainCards/MainCards";
import MainFilters from "./components/MainFilters/MainFilters";

export default function MainSearch() {
  const [isOpenFilters, setIsOpenFilters] = useState(false);
  return (
    <div className={styles.block}>
      <MainCards setIsOpenFilters={setIsOpenFilters} />
      <MainFilters
        isOpenFilters={isOpenFilters}
        setIsOpenFilters={setIsOpenFilters}
      />
    </div>
  );
}
