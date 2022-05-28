import styled from "styled-components";
import Habit from "./Habit";

export default function HabitsList({ habitsList }) {
  return (
    <Habits>
      { 
        habitsList.length !== 0 
        ?
          habitsList.map( habit => <Habit key={habit.id} name= {habit.name } days={ habit.days } /> )
        :
          <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
      }
    </Habits>
  );
}

const Habits = styled.ul`
  margin-top: 20px;
`;