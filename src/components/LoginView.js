import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import LoginForm from "./LoginForm";
import EntraceContainer from "./EntraceContainer";

export default function LoginView() {
  return (
    <EntraceContainer>
      <img src={logo} alt="trackit logo"/>
      <LoginForm />
      <Link style={ {color: "#52B6FF", fontSize: "14px"} } to="/cadastro">
        Não tem uma conta? Cadastre-se!
      </Link>
    </EntraceContainer>
  )
}