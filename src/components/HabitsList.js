import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import UserContext from "../contexts/UserContext";
import Habit from "./Habit";

export default function HabitsList() {
  const [ habitsList, setHabitsList ] = useState([]);

  const { userData } = useContext(UserContext);

  function getHabits() {
    const header = {
      headers: {
        Authorization: `Bearer ${ userData.token }`
      }
    }

    const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", header);

    promise.catch(err => console.log(`Ocorreu um erro na promise de hábitos, status: ${ err.response.status }`));
    promise.then(response => setHabitsList(response.data));
  }

  useEffect(() => {
    getHabits();
  }, []);

  return (
    <Habits>
      { 
        habitsList.length !== 0 
        ?
          habitsList.map( habit => <Habit key={habit.id} name= {habit.name } days={ habit.days } /> )
        :
          <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
      }
    </Habits>
  );
}

const Habits = styled.ul`
  margin-top: 20px;
`;