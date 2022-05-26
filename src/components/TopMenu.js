import styled from "styled-components";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function TopMenu() {
  const { userData } = useContext(UserContext);

  return (
    <TopBar userData={ userData } >
      <h1>TrackIt</h1>
      <ProfileContainer>
        <img src={ userData.image } alt="foto-perfil" />
      </ProfileContainer>
    </TopBar>
  );
}

const TopBar = styled.div`
  display: ${ ({ userData }) => userData.image !== undefined ? "flex" : "none" };
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  min-height: 60px;
  padding: 10px 18px;
  position: fixed;
  background-color: #126BA5;
  color: #FFFFFF;
  top: 0;
  left: 0;

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
`