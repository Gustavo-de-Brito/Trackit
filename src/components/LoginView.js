import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";

export default function LoginView() {
  return (
    <LoginContent>
      <img src={logo} alt="trackit logo"/>
      <LoginForm />
      <Link style={ {color: "#52B6FF", fontSize: "14px"} } to="/">
        Não tem uma conta? Cadastre-se!
      </Link>
    </LoginContent>
  )
}

const token = "maritaca de avental";

const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 68px;

  img {
    width: 180px;
    height: auto;
  }
`;

const body = {
  nome: "Cleiton",
  mensagem: "React nem ajuda tanto assim",
  headers: {
    Authorization: `Bearer ${token}`
  }
}