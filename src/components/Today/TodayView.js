import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import 'dayjs/locale/pt-br';
import dayjs from "dayjs";
import localeData from 'dayjs/plugin/localeData';
import UserContext from "../../contexts/UserContext";
import ViewContent from "../ViewContent";
import TodoHabits from "./TodoHabits";

export default function TodayView() {
  const [ habitsList, setHabitsList ] = useState([]);
  const [ percentProgress, setPercentProgress ] = useState(0);
  const { userData } = useContext(UserContext);

  // Configurando os dias da semana para serem em português
  dayjs.extend(localeData);
  dayjs.locale('pt-br');
  const weekday = dayjs.localeData().weekdays()[dayjs().day()];
  const dayMonth = dayjs().format("DD/MM");

  const date = `${ weekday[0].toUpperCase() + weekday.slice(1) }, ${dayMonth}`


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
        <h2>{ date }</h2>
        <h3>
          { percentProgress === 0 ? "Nenhum hábito concluído ainda" : <span>{percentProgress}% dos hábitos concluídos</span> }
        </h3>
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
  
  h2  {
    margin-bottom: 8px;
    font-size: 22px;
    color: #126BA5;
  }
  
  h3 {
    font-size: 18px;
    color: #BABABA;
  }

  h3 > span {
    color: #8FC549;
  }
`;