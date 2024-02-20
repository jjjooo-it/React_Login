import { Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

import MainApp from "./pages/MainPage/MainApp";
import SignupApp from "./pages/SignupPage/SignupApp";
import LoginApp from "./pages/LoginPage/LoginApp";

function Router() {
  return (
    <div>
      <RecoilRoot>
        <Routes>
          <Route path="/home" element={<MainApp />} />
          <Route path="/signup" element={<SignupApp />} />
          <Route path="/login" element={<LoginApp />} />
        </Routes>
      </RecoilRoot>
    </div>
  );
}

export default Router;
