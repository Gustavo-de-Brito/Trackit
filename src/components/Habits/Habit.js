import styled from "styled-components";
import { BsTrash } from "react-icons/bs";

export default function Habit({ name, days }) {
  const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];

  const formatedWeekdays = weekdays.map( (day, index) => {
    if(days.includes(index)) {
      return { name: day, isSelected: true };
    } else {
      return { name: day, isSelected: false };
    }
  });

  return (
    <HabitItem>
      <h3>{ name }</h3>
      <BsTrash style={{ position: "absolute", top: "10px", right: "12px" }} />
      <Weekdays>
        { formatedWeekdays.map( (day, index) => <WeekdayButton key={ index } isSelected={ day.isSelected }>{day.name}</WeekdayButton>)}
      </Weekdays>
    </HabitItem>
  );
}

const HabitItem = styled.li`
  width: 100%;
  margin-bottom: 10px;
  padding: 16px;
  border-radius: 4px;
  background-color: #FFFFFF;
  position: relative;
  color: #666666;

  h3 {
    font-size: 20px;
  }
`;

const Weekdays = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

const WeekdayButton = styled.button`
  margin-right: 6px;
  padding: 4px 6px;
  font-size: 20px;
  font-weight: bold;
  color: ${ ({ isSelected }) => isSelected ? "#FFFFFF" : "#D4D4D4" };
  border-radius: 4px;
  border: 1px solid #D4D4D4;
  background-color: ${ ({ isSelected }) => isSelected ? "#D4D4D4" : "#FFFFFF" };
`;