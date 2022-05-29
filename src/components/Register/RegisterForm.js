import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FormContainer from "../FormContainer";
import { ThreeDots } from  'react-loader-spinner'

export default function RegisterForm() {
  const [ userEmail, setUserEmail ] = useState("");
  const [ userPassword, setUserPassword ] = useState("");
  const [ userName, setUserName ] = useState("");
  const [ userPhoto, setUserPhoto ] = useState("");
  const [ canBeChanged, setCanBeChanged ] = useState(true);

  const navigate = useNavigate();

  function changeLoadLayout() {
    setCanBeChanged(!canBeChanged);
  }

  function sendUserData() {
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";

    const body = {
      email: userEmail,
      password: userPassword,
      name: userName,
      image: userPhoto,
    };

    const promise = axios.post(URL, body);

    promise.catch(err => {
      alert("Ocorreu um erro ao tentar registrar as informações");
      setCanBeChanged(true);
    });

    promise.then(response => navigate("/"));
  }

  function verifyImage(e) {
    e.preventDefault();

    changeLoadLayout();

    const image = new Image();
    image.src = userPhoto;
    image.onerror = () => {
      alert("A URL da imagem é inválida");
      setCanBeChanged(true);
    }

    image.onload = () => sendUserData();
  }

  function verifyCanInteract(action) {
    if(canBeChanged) {
      return action;
    } else {
      return (e) => e.preventDefault();
    }
  }

  return (
    <FormContainer onSubmit={ verifyCanInteract(verifyImage) } canBeChanged={ canBeChanged } >
      <input value={ userEmail } onChange={  verifyCanInteract(e => setUserEmail(e.target.value)) } type="email" placeholder="email" required />
      <input value={ userPassword } onChange={  verifyCanInteract(e => setUserPassword(e.target.value)) } type="password" placeholder="senha" required />
      <input value={ userName } onChange={  verifyCanInteract(e => setUserName(e.target.value)) } placeholder="nome" required />
      <input value={ userPhoto } onChange={  verifyCanInteract(e => setUserPhoto(e.target.value)) } placeholder="foto" required />
      <button type="submit">{ canBeChanged ? "Cadastar" : <ThreeDots color="#FFFFFF" height={14} width={60} /> }</button>
    </FormContainer>
  );
}