import styled from "styled-components";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import ViewContent from "./ViewContent";

export default function TodayView() {
  const { userData } = useContext(UserContext);

  return (
    <ViewContent>
      <h1>View de hoje</h1>
    </ViewContent>
  );
}