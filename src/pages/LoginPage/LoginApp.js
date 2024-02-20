//로그인 컨포넌트

import Header from "../../components/Header";
import { useRecoilValue } from "recoil";
import "../../styles/LoginPage/LoginApp.scss";

function LoginApp() {
  return (
    <div>
      <Header />
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
  );
}

export default LoginApp;
