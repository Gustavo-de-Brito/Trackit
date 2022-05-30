import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function TopMenu() {
  const locate = useLocation();
  const { userData } = useContext(UserContext);

  const showComponent = locate.pathname !== "/" && locate.pathname !== "/cadastro";

  return (
    <TopBar showComponent={ showComponent } >
      <h1>TrackIt</h1>
      <ProfileContainer>
        <img src={userData.image } alt="foto-perfil" />
      </ProfileContainer>
    </TopBar>
  );
}

const TopBar = styled.div`
  display: ${ ({showComponent }) => showComponent ? "flex" : "none" };
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  min-height: 60px;
  padding: 10px 18px;
  position: fixed;
  background-color: #126BA5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  color: #FFFFFF;
  top: 0;
  left: 0;
  z-index: 1;

  h1 {
    font-size: 40px;
    font-family: 'Playball', cursive;
  }
`;

const ProfileContainer = styled.div`
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 52px;
    height: 52px;
  }
`;