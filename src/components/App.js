import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "../contexts/UserContext";
import LoginView from "./LoginView";
import GlobalStyle from "../theme/globalStyle";
import RegisterView from "./RegisterView";
import TodayView from "./TodayView";
import TopMenu from "./TopMenu";
import BottomMenu from "./BottomMenu";

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
        </Routes>
      </BrowserRouter>  
    </UserContext.Provider>
  );
}