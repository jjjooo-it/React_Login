//메인페이지의 '로그인 성공 시' 프로필 컨포넌트

import { useRecoilValue } from "recoil";
import { Navigate, useNavigate } from "react-router";
import "../../styles/MainPage/MainProfile_AF.scss";

function MainProfile_AF() {
  const navigate = useNavigate();
  return <div className="main-profile-container"></div>;
}

export default MainProfile_AF;
