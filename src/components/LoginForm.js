import { useState } from "react";
import FormContainer from "./FormContainer";
import { ThreeDots } from  'react-loader-spinner'

export default function LoginForm() {
  const [ userEmail, setUserEmail ] = useState("");
  const [ userPassword, setUserPassword ] = useState("");
  const [ canBeChanged, setCanBeChanged ] = useState(true);

  function changeLoadLayout() {
    setCanBeChanged(!canBeChanged);
  }

  function sendUserData(e) {
    e.preventDefault();

    changeLoadLayout();

    const body = {
      email: userEmail,
      password: userPassword,
    }
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