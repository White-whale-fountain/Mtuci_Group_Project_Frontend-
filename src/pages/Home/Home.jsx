import "./Home.module.css";
import Home_Header from "./Home_Header/Home_Header";
import Screen from "./Screen/Screen";
import axios from "axios";

export default function Home() {
  const instance = axios.create({
    baseURL: "http://127.0.0.1:5000",
  });

  function getData() {
    instance
      .post("/login", { email: "WINNER@gmail.com", password: "525252" })
      .then((response) => {
        console.log(response.data.access_token);
      });
  }
  return (
    <>
      <button onClick={getData}>123</button>
      <Home_Header />
      <Screen />
    </>
  );
}
