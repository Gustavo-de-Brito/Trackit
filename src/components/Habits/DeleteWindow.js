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

    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}`;

    const header = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };

    const promise = axios.delete(URL, header);

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
      <TransparentBackground>
          <ConfirmDelete>
            <h3>Deseja realmente excluir esse hábito?</h3>
            <Buttons>
                <button onClick={ isLoading ? () => "" : deleteHabit }>
                  { isLoading ? <ThreeDots color="#FFFFFF" height={10} width={32} /> : "Sim" }
                </button>
                <button onClick={ isLoading ? () => "" : cancelDelete }>Não</button>
            </Buttons>
          </ConfirmDelete>
      </TransparentBackground>
    </>
  );
}

const ShadowBackground = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0 30px;
  background-color: #126BA5;
  opacity: 0.9;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`;

const TransparentBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
`;

const ConfirmDelete = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 30px;
  padding: 30px 20px;
  background-color: #FFFFFF;
  border-radius: 8px;

  h3 {
    text-align: center;
    font-size: 30px;
    margin-bottom: 50px;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
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