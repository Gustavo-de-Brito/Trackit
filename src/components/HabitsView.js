import styled from "styled-components";
import ViewContent from "./ViewContent";
import { BiPlusMedical } from "react-icons/bi";

export default function HabitsView() {
  return (
    <ViewContent>
      <HabitsMenu>
        <h2>Meus hábitos</h2>
        <button><BiPlusMedical style={{fontSize: "18px", color: "#FFFFFF"}} /></button>
      </HabitsMenu>
      <RegisterHabits>
        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
      </RegisterHabits>
    </ViewContent>
  );
}

const HabitsMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding: 0 18px;

  h2 {
    font-size: 22px;
    color: #126BA5;
  }

  button {
    padding: 6px 10px;
    background-color: #52B6FF;
    border-radius: 4px;
    border: none;
  }
`;

const RegisterHabits = styled.div`
  margin-top: 28px;
  padding: 0 20px;

  p {
    font-size: 18px;
    color: #666666;
  }
`;