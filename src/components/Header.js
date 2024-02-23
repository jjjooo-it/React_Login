//헤더 컨포넌트

import styled from "styled-components";
import { useNavigate } from "react-router";

const HeaderDiv = styled.div`
  display: flex;
  justify-content: center;
  font-size: 50px;
  font-weight: bold;
  color: firebrick;
`;
const Img = styled.img`
  width: 50%;
  height: 100px;
  display: flex;
  margin: auto;
`;
function Header() {
  const navigate = useNavigate();
  const gotoHome = () => {
    navigate("/");
  };
  return (
    <div>
      <Img
        src={process.env.PUBLIC_URL + "/assets/HeaderImg.png"}
        alt="header-img"
      />
      <HeaderDiv>
        <p onClick={gotoHome}>meraki</p>
      </HeaderDiv>
    </div>
  );
}

export default Header;
