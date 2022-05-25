import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginView from "./LoginView";
import GlobalStyle from "../theme/globalStyle";
import RegisterView from "./RegisterView";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginView />}  />
          <Route path="/cadastro" element={<RegisterView />}  />
        </Routes>
      </BrowserRouter>  
    </>
  );
}