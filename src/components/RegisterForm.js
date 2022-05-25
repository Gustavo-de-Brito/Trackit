import { useState, useEffect } from "react";
import FormContainer from "./FormContainer";

export default function RegisterForm() {
  const [ userEmail, setUserEmail ] = useState("");
  const [ userPassword, setUserPassword ] = useState("");
  const [ userName, setUserName ] = useState("");
  const [ userPhoto, setUserPhoto ] = useState("");

  function sendUserData() {
    const body = {
      email: userEmail,
      password: userPassword,
      name: userName,
      photo: userPhoto,
    }
  }

  return (
    <FormContainer onSubmit={ sendUserData }>
      <input value={ userEmail } onChange={ e => setUserEmail(e.target.value) } type="email" placeholder="email" required />
      <input value={ userPassword } onChange={ e => setUserPassword(e.target.value) } type="password" placeholder="senha" required />
      <input value={ userName } onChange={ e => setUserName(e.target.value) } placeholder="nome" required />
      <input value={ userPhoto } onChange={ e => setUserPhoto(e.target.value) } placeholder="foto" required />
      <button type="submit">Cadastrar</button>
    </FormContainer>
  );
}