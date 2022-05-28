import styled from "styled-components";
import ViewContent from "../ViewContent";

export default function HistoryView() {
  return (
    <ViewContent>
      <InfoHistory>
        <h2>Histórico</h2>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
      </InfoHistory>
    </ViewContent>
  );
}

const InfoHistory = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 18px;

  h2 {
    font-size: 24px;
    color: #126BA5;
    margin: 10px 0 18px 0;
  }

  p {
    font-size: 18px;
    color: #666666;
  }
`;