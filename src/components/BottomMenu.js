import styled from "styled-components";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import { Link } from "react-router-dom";

export default function BottomMenu() {
  const { userData } = useContext(UserContext);

  return (
    <BottomBar userData={ userData }>
      <Link to="/habitos">
        <button>Hábitos</button>
      </Link>
      <ProgressContent>
        <Link to="/hoje">
          <button>Hoje</button>
        </Link>
      </ProgressContent>
      <Link to="/historico">
        <button>Histórico</button>
      </Link>
    </BottomBar>
  );
}

const BottomBar = styled.div`
  display: ${({ userData }) => userData.name !== undefined ? "flex" : "none" };
  justify-content: space-between;
  align-items: flex-end;
  max-height: 70px;
  padding: 10px 36px;
  width: 100vw;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  left: 0;

  button {
    align-self: center;
    font-size: 18px;
    font-weight: bold;
    color: #52B6FF;
    background-color: transparent;
    border: none;
  }
`;

const ProgressContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 92px;
  height: 92px;
  border-radius: 50%;
  background-color: #52B6FF;

  button {
    color: #FFFFFF;
  }
`;