import styled from "styled-components";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import UserContext from "../contexts/UserContext";
import HabitContext from "../contexts/HabitsContext";

export default function BottomMenu() {
  const { userData } = useContext(UserContext);
  const { percentProgress} = useContext(HabitContext);

  return (
    <BottomBar userData={ userData }>
      <Link to="/habitos">
        <button>Hábitos</button>
      </Link>
      <ProgressContent style={{position: "relative"}}>
        <CircularProgressbar
          value={ percentProgress }
          styles={ buildStyles({
            pathColor: "#FFFFFF",
            strokeLinecap: "round"
          })
        }
          strokeWidth={10}
        />
        <Link to="/hoje" style={{position: "absolute", top: "38%", left:"24%"}}>
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
  width: 100vw;
  max-height: 70px;
  padding: 10px 36px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;

  a {
    align-self: center;
  }

  button {
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
  padding: 6px;
  border-radius: 50%;
  background-color: #52B6FF;

  button {
    color: #FFFFFF;
  }
`;