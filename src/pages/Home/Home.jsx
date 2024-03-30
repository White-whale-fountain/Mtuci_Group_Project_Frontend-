import { useEffect } from "react";
import "./Home.module.css";
import Home_Header from "./Home_Header/Home_Header";
import Screen from "./Screen/Screen";
import { useNavigate } from "react-router-dom";
import './Home.module.css'
import { Outlet } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/:login");
    }
  }, []);

  return (
    <>
      <Outlet/>
      <Home_Header />
      <Screen />
    </>
  );
}
