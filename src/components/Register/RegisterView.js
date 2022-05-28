import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import EntraceContainer from "../EntraceContainer";
import RegisterForm from "./RegisterForm";

export default function RegisterView() {
  return (
    <EntraceContainer>
      <img src={logo} alt="trackit logo"/>
      <RegisterForm />
      <Link style={ {color: "#52B6FF", fontSize: "14px"} } to="/">
        Já tem uma conta? Faça login!
      </Link>
    </EntraceContainer>
  );
}