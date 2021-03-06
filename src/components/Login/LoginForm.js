import { useState, useContext } from "react";
import { ThreeDots } from  'react-loader-spinner';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import FormContainer from "../FormContainer";

export default function LoginForm() {
  const { setUserData } = useContext(UserContext);

  const [ userEmail, setUserEmail ] = useState("" );
  const [ userPassword, setUserPassword ] = useState("");
  const [ canBeChanged, setCanBeChanged ] = useState(true);

  const navigate = useNavigate();

  function changeLoadLayout() {
    setCanBeChanged(!canBeChanged);
  }

  function sendUserData(e) {
    e.preventDefault();

    changeLoadLayout();

    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";

    const body = {
      email: userEmail,
      password: userPassword,
    };

    const promise = axios.post(URL, body);

    promise.catch(() => {
      alert("Não foi possível realizar o login");
      setCanBeChanged(true);
    });

    promise.then(response => {
      setUserData(response.data);

      navigate("/hoje");
    });
  }

  function verifyCanInteract(action) {
    if(canBeChanged) {
      return action;
    } else {
      return (e) => e.preventDefault();
    }
  }

  return (
    <FormContainer onSubmit={ verifyCanInteract(sendUserData) } canBeChanged={ canBeChanged } >
      <input value={ userEmail } onChange={ verifyCanInteract(e => setUserEmail(e.target.value)) } type="email" placeholder="email" required />
      <input value={ userPassword } onChange={ verifyCanInteract(e => setUserPassword(e.target.value)) } type="password" placeholder="senha" required />
      <button type="submit">{ canBeChanged ? "Entrar" : <ThreeDots color="#FFFFFF" height={14} width={60} /> }</button>
    </FormContainer>
  );
}