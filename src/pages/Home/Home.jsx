import "./Home.module.css";
import Home_Header from "./Home_Header/Home_Header";
import Screen from "./Screen/Screen";
import { auth } from "../../service/authorization";

export default function Home() {
  return (
    <>
      <Home_Header />
      <Screen />
    </>
  );
}
