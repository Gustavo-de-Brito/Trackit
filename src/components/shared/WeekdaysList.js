import styled from "styled-components";
import DayButton from "./DayButton";

export default function WeekdaysList({ weekdays, setWeekday, canInteract, canBeChanged }) {
  return (
    <Weekdays>
      { weekdays.map( (weekday, index) => {
        return (
          <DayButton
            key={ index }
            numberDay={ index }
            weekday={ weekday }
            setWeekday={ setWeekday }
            canInteract={ canInteract }
            canBeChanged={ canBeChanged }
          />);
        })
      }
    </Weekdays>
  );
}

const Weekdays = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;