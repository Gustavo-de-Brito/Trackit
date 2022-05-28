import styled from "styled-components";
import DoHabit from "./DoHabit";

export default function TodoHabits({ habitsList }) {
  return (
    <HabitsList>
      {
        habitsList.length === 0
        ?
          <></>
        :
          habitsList.map( habit => <DoHabit key={habit.id} habit={ habit } /> )}
    </HabitsList>
  );
}

const HabitsList = styled.ul`
  margin: 28px 0 0 0;
  padding: 0 18px;
`