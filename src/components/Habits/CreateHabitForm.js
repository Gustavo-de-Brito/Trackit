import styled from "styled-components";
import { useState, useContext } from "react";
import axios from "axios";
import UserContext from "../../contexts/UserContext";
import { ThreeDots } from "react-loader-spinner";
import WeekdaysList from "../shared/WeekdaysList";

export default function CreateHabitForm({ getHabits, showHabitForm, weekdays, setWeekdays, habitDescription, setHabitDescription }) {
  const [ canBeChanged, setCanBeChanged ] = useState(true);

  const { userData } = useContext(UserContext);

  function setHabit(e) {
    e.preventDefault();

    setCanBeChanged(false);

    const indexDays = weekdays.map( (weekday, index) => {
      if(weekday.isSelected === true) {
        return index;
      } else {
        return undefined;
      }
    });

    const selectedIndexes = indexDays.filter( dayNumber => dayNumber !== undefined );

    if(selectedIndexes.length === 0) {
      setCanBeChanged(true);
      alert("Selecione pelo menos um dia da semana para o hábito");
      return;
    }

    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

    const body = {
      name: habitDescription,
      days: selectedIndexes,
    };

    const header = {
      headers: {
        Authorization: `Bearer ${ userData.token }`,
      },
    };

    const promise = axios.post(URL, body, header);

    promise.catch(err => {
      alert("Não foi possível criar o novo hábito");
    });

    promise.then(response => {
      setCanBeChanged(true);
      setHabitDescription("");
      showHabitForm();
      getHabits();
      setWeekdays(weekdays.map( weekday => { return {...weekday, isSelected: false} }));
    });
  }

  function setWeekday(dayNumber) {
    const selectedDay = weekdays.filter( (day, index) => index === dayNumber);

    if( selectedDay[0].isSelected) {
      setWeekdays( weekdays.map( (day, index) => {
        if(index === dayNumber) {
          return { ...day, isSelected: false };
        } else {
          return day;
        }
      }));

    } else {
      setWeekdays( weekdays.map( (day, index) => {
        if(index === dayNumber) {
          return { ...day, isSelected: true };
        } else {
          return day;
        }
      })
      );
    }
  }

  function canInteract( action ) {
    if(canBeChanged) {
      return action;
    } else {
      return e => e.preventDefault();
    }
  }

  return (
    <CreateForm onSubmit={ canInteract(setHabit) } canBeChanged= { canBeChanged }>
      <input value={ habitDescription } onChange={ canInteract(e => setHabitDescription(e.target.value)) } placeholder="nome do hábito" required />
      <WeekdaysList weekdays={ weekdays } setWeekday={ setWeekday } canInteract={ canInteract } canBeChanged={ canBeChanged } />
      <ActionButtons canBeChanged={ canBeChanged }>
        <button onClick={ canInteract(showHabitForm) }>Cancelar</button>
        <button type="submit">{ canBeChanged ? "Salvar" : <ThreeDots color="#FFFFFF" height={10} width={42} /> }</button>
      </ActionButtons>
    </CreateForm>
  );
}

const CreateForm = styled.form`
  padding: 18px;
  background-color: #FFFFFF;
  border-radius: 4px;

  input {
    width: 100%;
    padding: 10px;
    font-size: 20px;
    color: ${ ({ canBeChanged }) => canBeChanged ? "#000000" : "#B3B3B3" };
    border-radius: 4px;
    border: 1px solid #D4D4D4;
    background-color: ${ ({ canBeChanged }) => canBeChanged ? "#FFFFFF" : "#F2F2F2" };
  }

  input::-webkit-input-placeholder {
    color: #D4D4D4;
  }

  input:-ms-input-placeholder {
    color: #D4D4D4;
  }

  input::placeholder {
    color: #D4D4D4;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
  width: 100%;

  button {
    font-size: 16px;
    padding: 8px 18px;
    font-weight: bold;
    opacity: ${({ canBeChanged }) => canBeChanged ? "1" : "0.7"};
  }

  button:first-child {
    color: #52B6FF;
    background-color: transparent;
    border: none;
  }

  button:last-child {
    color: #FFFFFF;
    background-color: #52B6FF;
    border-radius: 4px;
    border: none;
  }
`;