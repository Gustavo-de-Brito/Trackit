import { useState } from "react";
import styled from "styled-components";

export default function DayButton({ numberDay, weekday, canInteract, setWeekday, canBeChanged }) {
  const [ selected, setSelected ] = useState(false);

  function selectWeekday(e) {
    e.preventDefault();

    setSelected(!selected);
    setWeekday(numberDay);
  }

  return (
    <WeekdayButton selected={selected} onClick={ canInteract(selectWeekday) } canBeChanged={canBeChanged}>
      { weekday }
    </WeekdayButton>
  );
};

const WeekdayButton = styled.button`
  margin-right: 6px;
  padding: 4px 6px;
  font-size: 20px;
  font-weight: bold;
  color: ${ ({ selected }) => selected ? "#FFFFFF" : "#D4D4D4" };
  border-radius: 4px;
  border: 1px solid #D4D4D4;
  background-color: ${ ({ selected }) => selected ? "#D4D4D4" : "#FFFFFF" };
  opacity: ${({ canBeChanged }) => canBeChanged ? "1" : "0.7"};
`;