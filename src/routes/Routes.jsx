import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";

export default function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}
