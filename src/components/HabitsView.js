import styled from "styled-components";
import { useState } from "react";
import { BiPlusMedical } from "react-icons/bi";
import ViewContent from "./ViewContent";
import CreateHabitForm from "./CreateHabitForm";
import HabitsList from "./HabitsList";

export default function HabitsView() {
  const [ weekdays, setWeekdays ] = useState([
    {
      name: "D",
      isSelected: false,
    },
    {
      name: "S",
      isSelected: false,
    },
    {
      name: "T",
      isSelected: false,
    },
    {
      name: "Q",
      isSelected: false,
    },
    {
      name: "Q",
      isSelected: false,
    },
    {
      name: "S",
      isSelected: false,
    },
    {
      name: "S",
      isSelected: false,
    },
  ]);

  const [ habitDescription, setHabitDescription ] = useState("");
  const [ createHabit, setCreateHabit ] = useState(false);

  function showHabitForm() {
    setCreateHabit(!createHabit);
  }

  return (
    <ViewContent>
      <HabitsMenu>
        <h2>Meus hábitos</h2>
        <button onClick={ showHabitForm }><BiPlusMedical style={{fontSize: "18px", color: "#FFFFFF"}} /></button>
      </HabitsMenu>
      <RegisterHabits>
        {
          createHabit
          ?
          <CreateHabitForm showHabitForm={ showHabitForm } weekdays={ weekdays } setWeekdays={ setWeekdays } habitDescription={ habitDescription } setHabitDescription={ setHabitDescription } />
          :
          <></>
        }
        <HabitsList />
      </RegisterHabits>
    </ViewContent>
  );
}

const HabitsMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding: 0 18px;

  h2 {
    font-size: 22px;
    color: #126BA5;
  }

  button {
    padding: 6px 10px;
    background-color: #52B6FF;
    border-radius: 4px;
    border: none;
  }
`;

const RegisterHabits = styled.div`
  margin-top: 28px;
  padding: 0 20px;

  p {
    font-size: 18px;
    color: #666666;
  }
`;