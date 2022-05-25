import { useState, useEffect } from "react";
import FormContainer from "./FormContainer";

export default function LoginForm() {
  const [ userEmail, setUserEmail ] = useState("");
  const [ userPassword, setUserPassword ] = useState("");

  function sendUserData(e) {
    e.preventDefault();

    const body = {
      email: userEmail,
      password: userPassword,
    }
  }

  return (
    <FormContainer onSubmit={ sendUserData }>
      <input value={ userEmail } onChange={ e => setUserEmail(e.target.value) } type="email" placeholder="email" required />
      <input value={ userPassword } onChange={ e => setUserPassword(e.target.value) } type="password" placeholder="senha" required />
      <button type="submit">Entrar</button>
    </FormContainer>
  );
}