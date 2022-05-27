import styled from "styled-components";
import { useState } from "react";

export default function CreateHabitForm({ showHabitForm }) {
  const [ habitDescription, setHabitDescription ] = useState("");

  function setHabit(e) {
    e.preventDefault();
  }

  return (
    <CreateForm onChange={ setHabit }>
      <input value={ habitDescription } onChange={ e => setHabitDescription(e.target.value) } placeholder="nome do hábito" required />
      <Weekdays>
        <button>D</button>
        <button>S</button>
        <button>T</button>
        <button>Q</button>
        <button>Q</button>
        <button>S</button>
        <button>S</button>
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
  
  button {
    margin-right: 6px;
    padding: 4px 6px;
    font-size: 20px;
    color: #D4D4D4;
    border-radius: 4px;
    border: 1px solid #D4D4D4;
    background-color: transparent;
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