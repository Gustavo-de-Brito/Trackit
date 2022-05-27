import styled from "styled-components";
import { useState, useContext } from "react";
import axios from "axios";
import UserContext from "../contexts/UserContext";
import DayButton from "./DayButton";
import { ThreeDots } from "react-loader-spinner";

export default function CreateHabitForm({ showHabitForm }) {
  const [ habitDescription, setHabitDescription ] = useState("");
  const [ selectedDays, setSelectedDays ] = useState([]);
  const [ canBeChanged, setCanBeChanged ] = useState(true);

  const { userData } = useContext(UserContext);

  function setHabit(e) {
    e.preventDefault();

    setCanBeChanged(false);

    const body = {
      name: habitDescription,
      days: selectedDays,
    }
    
    const header = {
      headers: {
        Authorization: `Bearer ${ userData.token }`
      },  
    }

    const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, header);

    promise.catch(err => {
      setCanBeChanged(true);
      console.log(`Ocorreu um erro: ${ err.response.data }`);
    });

    promise.then(response => console.log(response));
  }

  function setWeekday(id) {
    if(selectedDays.includes(id)) {
      setSelectedDays( selectedDays.filter( day => day !== id ));
    } else {
      setSelectedDays([...selectedDays, id]);
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
      <Weekdays>
        <DayButton key={0} numberDay={0} weekday={"D"} canInteract={ canInteract } setWeekday={ setWeekday } canBeChanged={ canBeChanged } />
        <DayButton key={1} numberDay={1} weekday={"S"} canInteract={ canInteract } setWeekday={ setWeekday } canBeChanged={ canBeChanged } />
        <DayButton key={2} numberDay={2} weekday={"T"} canInteract={ canInteract } setWeekday={ setWeekday } canBeChanged={ canBeChanged } />
        <DayButton key={3} numberDay={3} weekday={"Q"} canInteract={ canInteract } setWeekday={ setWeekday } canBeChanged={ canBeChanged } />
        <DayButton key={4} numberDay={4} weekday={"Q"} canInteract={ canInteract } setWeekday={ setWeekday } canBeChanged={ canBeChanged } />
        <DayButton key={5} numberDay={5} weekday={"S"} canInteract={ canInteract } setWeekday={ setWeekday } canBeChanged={ canBeChanged } />
        <DayButton key={6} numberDay={6} weekday={"S"} canInteract={ canInteract } setWeekday={ setWeekday } canBeChanged={ canBeChanged } />
      </Weekdays>
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

const Weekdays = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
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