import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "../contexts/UserContext";
import HabitContext from "../contexts/HabitsContext";
import GlobalStyle from "../theme/globalStyle";
import LoginView from "./Login/LoginView";
import RegisterView from "./Register/RegisterView";
import TodayView from "./Today/TodayView";
import TopMenu from "./TopMenu";
import BottomMenu from "./BottomMenu";
import HabitsView from "./Habits/HabitsView";
import HistoryView from "./History/HistoryView";

export default function App() {
  const [ userData, setUserData ] = useState({});
  const [ percentProgress, setPercentProgress ] = useState(0);

  return (
    <UserContext.Provider value={ { userData, setUserData } }>
      <HabitContext.Provider value={ { percentProgress, setPercentProgress } }>
        <GlobalStyle />
        <BrowserRouter>
          <TopMenu />
          <BottomMenu />
          <Routes>
            <Route path="/" element={<LoginView />}  />
            <Route path="/cadastro" element={<RegisterView />}  />
            <Route path="/hoje" element={<TodayView />}  />
            <Route path="/habitos" element={<HabitsView />}  />
            <Route path="/historico" element={<HistoryView />}  />
          </Routes>
        </BrowserRouter>  
      </HabitContext.Provider>
    </UserContext.Provider>
  );
}