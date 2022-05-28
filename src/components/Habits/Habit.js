import styled from "styled-components";
import { useState } from "react";
import { BsTrash } from "react-icons/bs";
import DeleteWindow from "./DeleteWindow";

export default function Habit({ id, name, days, getHabits }) {
  const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];
  const [ showDeleteWindow, setShowDeleteWindow ] = useState(false);

  const formatedWeekdays = weekdays.map( (day, index) => {
    if(days.includes(index)) {
      return { name: day, isSelected: true };
    } else {
      return { name: day, isSelected: false };
    }
  });

  function deleteHabit() {
    setShowDeleteWindow(true);
  }

  return (
    <HabitItem>
      <h3>{ name }</h3>
      <BsTrash onClick={ deleteHabit } style={{ position: "absolute", top: "10px", right: "12px" }} />
      <Weekdays>
        { formatedWeekdays.map( (day, index) => <WeekdayButton key={ index } isSelected={ day.isSelected }>{day.name}</WeekdayButton>)}
      </Weekdays>
      { showDeleteWindow ? <DeleteWindow habitId={ id } setShowDeleteWindow={ setShowDeleteWindow } getHabits={ getHabits }/> : <></> }
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