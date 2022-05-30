import styled from "styled-components";
import { useState, useContext } from "react";
import { BsCheckLg } from "react-icons/bs";
import axios from "axios";
import UserContext from "../../contexts/UserContext";

export default function DoHabit({ habit, requestHabits }) {
  const [ isLoading, setIsLoading ] = useState(false);
  const { userData } = useContext(UserContext);

  function markDone() {
    setIsLoading(true);

    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${ habit.id }`;

    const header = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };

    const habitStatus = habit.done ? "uncheck" : "check";

    const promise = axios.post(`${ URL }/${ habitStatus }`, habit, header);

    promise.catch(err => {
      console.log(`ocorreu um erro ao tentar mudar o estado do habito para ${ habitStatus }, status: ${err.response.status}`);
      setIsLoading(false);
    });

    promise.then(response => {
      requestHabits();
      setIsLoading(false);
    });
  }

  return (
    <Habit>
      <HabitInfo habit={ habit } >
        <h3>{ habit.name }</h3>
        <p>Sequência atual: <span>{ habit.currentSequence } dias</span></p>
        <p>Seu record: <span>{ habit.highestSequence } dias</span></p>
      </HabitInfo>
      <DoneButton onClick={ isLoading ? () => "" : markDone } doneHabit={ habit.done } >
        <BsCheckLg style={ {fontSize: "40px", color: "#FFFFFF"} } />
      </DoneButton>
    </Habit>
  );
}

const Habit = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
  padding: 14px;
  background-color: #FFFFFF;
  border-radius: 6px;
`;

const HabitInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 76%;
  padding-right: 6px;
  color: #666666;

  h3 {
    width: 100%;
    word-wrap: break-word;
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: bold;
  }

  p {
    font-size: 12px;
    margin-bottom: 4px;
  }

  p > span {
    color: ${ ({ habit }) => habit.done ? "#8FC549" : "#666666" };
  }

  p:last-child > span {
    color: ${ ({ habit }) => habit.currentSequence === habit.highestSequence && habit.highestSequence !== 0 ? "#8FC549" : "#666666" };
  }
`;

const DoneButton = styled.button`
  background-color: ${ ({ doneHabit }) => doneHabit ? "#8FC549" : "#EBEBEB" };
  border: 1px solid #E7E7E7;
  border-radius: 6px;
  padding: 20px 14px 14px 16px;
`;