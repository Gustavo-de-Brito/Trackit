import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FormContainer from "./FormContainer";

export default function RegisterForm() {
  const [ userEmail, setUserEmail ] = useState("");
  const [ userPassword, setUserPassword ] = useState("");
  const [ userName, setUserName ] = useState("");
  const [ userPhoto, setUserPhoto ] = useState("");

  const navigate = useNavigate();

  function verifyImage(e) {
    e.preventDefault();

    const image = new Image();
    image.src = userPhoto;
    image.onerror = () => alert("A URL da imagem é inválida");
    image.onload = () => sendUserData();
  }

  function sendUserData() {
    const body = {
      email: userEmail,
      password: userPassword,
      name: userName,
      image: userPhoto,
    };

    const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body);

    promise.catch(err => alert("Ocorreu um erro ao tentar registrar as informações"));
    promise.then(response => navigate("/"));
  }

  return (
    <FormContainer onSubmit={ verifyImage }>
      <input value={ userEmail } onChange={ e => setUserEmail(e.target.value) } type="email" placeholder="email" required />
      <input value={ userPassword } onChange={ e => setUserPassword(e.target.value) } type="password" placeholder="senha" required />
      <input value={ userName } onChange={ e => setUserName(e.target.value) } placeholder="nome" required />
      <input value={ userPhoto } onChange={ e => setUserPhoto(e.target.value) } placeholder="foto" required />
      <button type="submit">Cadastrar</button>
    </FormContainer>
  );
}