import "../../styles/LoginPage/LoginApp.scss";

function LoginApp() {
  return (
    <div>
      <img src={process.env.PUBLIC_URL + "/assets/AppleLogo.jpg"} />
      <img src={process.env.PUBLIC_URL + "/assets/GoogleLogo.jpg"} />
      <img src={process.env.PUBLIC_URL + "/assets/KakaoLogo.jpg"} />
      <img src={process.env.PUBLIC_URL + "/assets/NaverLogo.jpg"} />
    </div>
  );
}

export default LoginApp;
