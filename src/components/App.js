import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginView from "./LoginView";
import GlobalStyle from "../theme/globalStyle";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginView />}  />
        </Routes>
      </BrowserRouter>  
    </>
  );
}