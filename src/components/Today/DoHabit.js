import styled from "styled-components";
import { BsCheckLg } from "react-icons/bs";

export default function DoHabit({ habit }) {
  return (
    <Habit>
      <HabitInfo>
        <h3>{ habit.name }</h3>
        <p>Sequência atual: <span>{ habit.currentSequence }</span> dias</p>
        <p>Seu record: { habit.highestSequence } dias</p>
      </HabitInfo>
      <DoneButton>
        <BsCheckLg style={ {fontSize: "40px", color: "#FFFFFF"} } />
      </DoneButton>
    </Habit>
  );
}

const Habit = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 14px;
  background-color: #FFFFFF;
  border-radius: 6px;
`;

const HabitInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: #666666;

  h3 {
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: bold;
  }

  p {
    font-size: 12px;
    margin-bottom: 4px;
  }

  p > span {
    color: #8FC549;
  }
`;

const DoneButton = styled.button`
  background-color: #EBEBEB;
  border: 1px solid #E7E7E7;
  border-radius: 6px;
  padding: 20px 14px 14px 16px;
`;