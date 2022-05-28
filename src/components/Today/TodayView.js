import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "../../contexts/UserContext";
import ViewContent from "../ViewContent";
import TodoHabits from "./TodoHabits";

export default function TodayView() {
  const [ habitsList, setHabitsList ] = useState([]);
  const [ percentProgress, setPercentProgress ] = useState(0);
  const { userData } = useContext(UserContext);

  function calculetePercent(habits) {
    const doneHabits = habits.filter( habit => habit.done );

    const percentDone = (doneHabits.length) * 100 / (habits.length);
    setPercentProgress(Math.round(percentDone));
  }

  useEffect(() => {
    const header = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };

    const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", header);

    promise.catch(err => console.log(`Erro ao listar hábitos a fazer, status: ${ err.response.status }`));
    promise.then(response => {
      setHabitsList(response.data);
      calculetePercent(response.data);
    });
  }, []);

  return (
    <ViewContent>
      <TodayInfo>
        <h2>Dia da semana, dia/mês</h2>
        <h3>{ percentProgress === 0 ? "Nenhum hábito concluído ainda" : `${percentProgress}% dos hábitos concluídos` }</h3>
      </TodayInfo>
      <TodoHabits habitsList={ habitsList } />
    </ViewContent>
  );
}

const TodayInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 0 18px;
  font-weight: bold;

  h2  {
    margin-bottom: 8px;
    font-size: 22px;
    color: #126BA5;
  }

  h3 {
    font-size: 18px;
    color: #BABABA;
  }
`;