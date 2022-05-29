import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 36px 0 26px 0;
  padding: 0 36px;

  input {
    margin-bottom: 8px;
    padding: 10px;
    font-size: 20px;
    background-color: ${({ canBeChanged }) => canBeChanged ? "#FFFFFF": "#F2F2F2"};
    border: solid 1px #D4D4D4;
    border-radius: 6px;
    color: ${({ canBeChanged }) => canBeChanged ? "#000000": "#AFAFAF"};
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 46px;
    padding: 10px 20px;
    font-size: 22px;
    color: #FFFFFF;
    font-weight: 400;
    border-radius: 6px;
    border: none;
    background-color: #52B6FF;
    opacity: ${({ canBeChanged }) => canBeChanged ? "1" : "0.7"};
  }
`;

export default FormContainer;