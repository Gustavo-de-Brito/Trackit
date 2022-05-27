import styled from "styled-components";
import { useState, useContext } from "react";
import axios from "axios";
import UserContext from "../contexts/UserContext";
import DayButton from "./DayButton";

export default function CreateHabitForm({ showHabitForm }) {
  const [ habitDescription, setHabitDescription ] = useState("");
  const [ selectedDays, setSelectedDays ] = useState([]);

  const { userData } = useContext(UserContext);

  function setHabit(e) {
    e.preventDefault();

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

    promise.catch(err => console.log(`Ocorreu um erro: ${ err.response.data }`));
    promise.then(response => console.log(response));
  }

  function setWeekday(id) {
    if(selectedDays.includes(id)) {
      setSelectedDays( selectedDays.filter( day => day !== id ));
    } else {
      setSelectedDays([...selectedDays, id]);
    }
  }

  return (
    <CreateForm onSubmit={ setHabit }>
      <input value={ habitDescription } onChange={ e => setHabitDescription(e.target.value) } placeholder="nome do hábito" required />
      <Weekdays>
        <DayButton key={0} numberDay={0} weekday={"D"} setWeekday={ setWeekday } />
        <DayButton key={1} numberDay={1} weekday={"S"} setWeekday={ setWeekday } />
        <DayButton key={2} numberDay={2} weekday={"T"} setWeekday={ setWeekday } />
        <DayButton key={3} numberDay={3} weekday={"Q"} setWeekday={ setWeekday } />
        <DayButton key={4} numberDay={4} weekday={"Q"} setWeekday={ setWeekday } />
        <DayButton key={5} numberDay={5} weekday={"S"} setWeekday={ setWeekday } />
        <DayButton key={6} numberDay={6} weekday={"S"} setWeekday={ setWeekday } />
      </Weekdays>
      <ActionButtons>
        <button onClick={ showHabitForm }>Cancelar</button>
        <button type="submit">Salvar</button>
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
    border-radius: 4px;
    border: 1px solid #D4D4D4;
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