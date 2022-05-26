import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import TokenContext from "../contexts/TokenContext";
import LoginView from "./LoginView";
import GlobalStyle from "../theme/globalStyle";
import RegisterView from "./RegisterView";
import TodayView from "./TodayView";

export default function App() {
  const [ userData, setUserData ] = useState({});

  return (
    <TokenContext.Provider value={ { userData, setUserData } }>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginView />}  />
          <Route path="/cadastro" element={<RegisterView />}  />
          <Route path="/hoje" element={<TodayView />}  />
        </Routes>
      </BrowserRouter>  
    </TokenContext.Provider>
  );
}