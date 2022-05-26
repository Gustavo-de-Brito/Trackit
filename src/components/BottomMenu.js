import styled from "styled-components";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function BottomMenu() {
  const { userData } = useContext(UserContext);

  return (
    <BottomBar userData={ userData }>
      <h1>BarraFundo</h1>
    </BottomBar>
  );
}

const BottomBar = styled.div`
  display: ${({ userData }) => userData.name !== undefined ? "flex" : "none" };
  align-items: center;
  width: 100vw;
  background-color: blue;
  position: fixed;
  bottom: 0;
  left: 0;
`;