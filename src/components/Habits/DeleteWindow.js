import styled from "styled-components";
import axios from "axios";
import { useContext, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import UserContext from "../../contexts/UserContext";

export default function DeleteWindow({ habitId, setShowDeleteWindow, getHabits }) {
  const [ isLoading, setIsLoading ] = useState(false);

  const { userData } = useContext(UserContext);

  function deleteHabit() {
    setIsLoading(true);

    const header = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };

    const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}`, header);

    promise.catch(err => {
      alert("Erro ao tentar apagar o hábito");
      setShowDeleteWindow(false);
    });

    promise.then(response => {
      getHabits();
      setShowDeleteWindow(false);
    });
  }

  function cancelDelete() {
    setShowDeleteWindow(false);
  }

  return (
    <>
      <ShadowBackground />
      <ConfirmDelete>
        <h3>Deseja realmente excluir esse hábito?</h3>
        <Buttons>
          <button onClick={ isLoading ? () => "" : deleteHabit }>
            { isLoading ? <ThreeDots color="#FFFFFF" height={10} width={32} /> : "Sim" }
          </button>
          <button onClick={ cancelDelete }>Não</button>
        </Buttons>
      </ConfirmDelete>
    </>
  );
}

const ShadowBackground = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0 30px;
  background-color: black;
  opacity: 0.9;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`;

const ConfirmDelete = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 30px;
  padding: 30px 20px;
  background-color: #FFFFFF;
  border-radius: 8px;
  position: fixed;
  top: 32%;
  left: 0;
  z-index: 3;

  h3 {
    text-align: center;
    font-size: 30px;
    margin-bottom: 50px;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  button {
    padding: 10px 20px;
    font-size: 20px;
    font-weight: bold;
    color: #FFFFFF;
    background-color: #52B6FF;
    border-radius: 8px;
    border: none;
  }
`;