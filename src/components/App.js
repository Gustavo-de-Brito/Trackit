import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "../contexts/UserContext";
import GlobalStyle from "../theme/globalStyle";
import LoginView from "./Login/LoginView";
import RegisterView from "./Register/RegisterView";
import TodayView from "./TodayView";
import TopMenu from "./TopMenu";
import BottomMenu from "./BottomMenu";
import HabitsView from "./Habits/HabitsView";
import HistoricView from "./HistoricView";

export default function App() {
  const [ userData, setUserData ] = useState({});

  return (
    <UserContext.Provider value={ { userData, setUserData } }>
      <GlobalStyle />
      <BrowserRouter>
        <TopMenu />
        <BottomMenu />
        <Routes>
          <Route path="/" element={<LoginView />}  />
          <Route path="/cadastro" element={<RegisterView />}  />
          <Route path="/hoje" element={<TodayView />}  />
          <Route path="/habitos" element={<HabitsView />}  />
          <Route path="/historico" element={<HistoricView />}  />
        </Routes>
      </BrowserRouter>  
    </UserContext.Provider>
  );
}