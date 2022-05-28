import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { BiPlusMedical } from "react-icons/bi";
import axios from "axios";
import UserContext from "../../contexts/UserContext";
import ViewContent from "../ViewContent";
import CreateHabitForm from "./CreateHabitForm";
import HabitsList from "./HabitsList";

export default function HabitsView() {
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
          <CreateHabitForm
            getHabits={ getHabits }
            showHabitForm={ showHabitForm }
            weekdays={ weekdays }
            setWeekdays={ setWeekdays }
            habitDescription={ habitDescription }
            setHabitDescription={ setHabitDescription }
          />
          :
          <></>
        }
        <HabitsList getHabits={ getHabits } habitsList={ habitsList }/>
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