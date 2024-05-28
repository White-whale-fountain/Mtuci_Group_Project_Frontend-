import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import SingIn from "../pages/Home/components/SingIn/SingIn.jsx";
import SingUp from "../pages/Home/components/SingUp/SingUp.jsx";
import Profile from "../pages/Profile/Profile.jsx";
import Main from "../pages/Main/Main.jsx";
import ProfileTabLikes from "../pages/Profile/ProfileMainBlock/components/ProfileTabLikes/ProfileTabLikes.jsx";
import HelpMe from "../pages/HelpMe/HelpMe.jsx";

export default function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={"/login"} element={<SingIn />} />
        <Route path={"/registration"} element={<SingUp />} />
        <Route path={"/main"} element={<Main />} />
        <Route path="/:user" element={<Profile />} />
        <Route path="/help" element={<HelpMe />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}
