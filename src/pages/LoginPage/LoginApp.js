//로그인 컨포넌트

import Header from "../../components/Header";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import "../../styles/LoginPage/LoginApp.scss";
import {
  getAppleLoginUrl,
  getGoogleLoginUrl,
  getKakaoLoginUrl,
  getNaverLoginUrl,
  getGithubLoginUrl,
} from "../../api/OAuthApi";

function LoginApp() {
  const goAppleLogin = () => {
    window.location.href = getAppleLoginUrl();
  };
  const goGoogleLogin = () => {
    window.location.href = getGoogleLoginUrl();
  };
  const goKakaoLogin = () => {
    window.location.href = getKakaoLoginUrl();
  };
  const goNaverLogin = () => {
    window.location.href = getNaverLoginUrl();
  };
  const goGithubLogin = () => {
    window.location.href = getGithubLoginUrl();
  };

  const navigate = useNavigate();
  const goSignPage = () => {
    navigate("/signup");
  };
  return (
    <div>
      <Header />
      <div className="login-account">
        <img
          src={process.env.PUBLIC_URL + "/assets/strawberry.png"}
          alt="strawberry"
        />
        <input placeholder="아이디" />
        <input placeholder="비밀번호" />
        <button>로그인</button>
        <div className="login-bottom">
          <input type="checkbox" /> <label>로그인 상태 유지</label>
          <button onClick={goSignPage}>
            <span style={{ color: "lightgray" }}>|</span>
            &nbsp;&nbsp;&nbsp;&nbsp;회원가입
          </button>
        </div>
      </div>

      <div className="login-social-account">
        <p>
          ⎯⎯⎯⎯&nbsp;&nbsp;&nbsp;
          <span style={{ color: "gray" }}>소셜 계정으로 간편 로그인</span>
          &nbsp;&nbsp;&nbsp; ⎯⎯⎯⎯
        </p>
        <div className="social-account-img">
          <img
            src={process.env.PUBLIC_URL + "/assets/AppleLogo.png"}
            alt="apple-login"
          />
          <img
            src={process.env.PUBLIC_URL + "/assets/GoogleLogo.png"}
            alt="google-login"
          />
          <img
            src={process.env.PUBLIC_URL + "/assets/KakaoLogo.png"}
            alt="kakao-login"
          />
          <img
            src={process.env.PUBLIC_URL + "/assets/NaverLogo.png"}
            alt="naver-login"
          />
          <img
            src={process.env.PUBLIC_URL + "/assets/GithubLogo.png"}
            alt="github-login"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginApp;
