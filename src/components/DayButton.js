import { useState } from "react";
import styled from "styled-components";

export default function DayButton({ numberDay, weekday, isSelected, setWeekday, canInteract, canBeChanged }) {
  function selectWeekday(e) {
    e.preventDefault();

    setWeekday(numberDay);
  }

  return (
    <WeekdayButton isSelected={isSelected} onClick={ canInteract(selectWeekday) } canBeChanged={canBeChanged}>
      { weekday }
    </WeekdayButton>
  );
};

const WeekdayButton = styled.button`
  margin-right: 6px;
  padding: 4px 6px;
  font-size: 20px;
  font-weight: bold;
  color: ${ ({ isSelected }) => isSelected ? "#FFFFFF" : "#D4D4D4" };
  border-radius: 4px;
  border: 1px solid #D4D4D4;
  background-color: ${ ({ isSelected }) => isSelected ? "#D4D4D4" : "#FFFFFF" };
  opacity: ${({ canBeChanged }) => canBeChanged ? "1" : "0.7"};
`;