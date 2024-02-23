//메인페이지의 '로그인 전' 프로필 컨포넌트

import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router";
import "../../styles/MainPage/MainProfile_BF.scss";

function MainProfile_BF() {
  const navigate = useNavigate();
  const gotoLogin = () => {
    navigate("/login");
  };
  const gotoSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="main-profile-container">
      <div className="main-profile-before">
        <p>메라키를 이용해 간단한 명함을 만들어보세요</p>
        <button className="main-profile-before-login-btn" onClick={gotoLogin}>
          MERAKI 로그인
        </button>
        <p>
          아직 회원이 아니라면?
          <button
            className="main-profile-before-signup-btn"
            onClick={gotoSignup}
          >
            회원가입
          </button>
        </p>
      </div>
    </div>
  );
}

export default MainProfile_BF;
