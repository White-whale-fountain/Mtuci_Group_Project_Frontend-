import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import SingIn from '../pages/Home/components/SingIn/SingIn.jsx'
import SingUp from '../pages/Home/components/SingUp/SingUp.jsx'
import Profile from "../pages/Profile/Profile.jsx";

export default function () {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path={"/login"} element={<SingIn />}  />
          <Route path={"/registration"} element={<SingUp/>}  />
          <Route path="/:login/" element={<Profile />}  />
          <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}
